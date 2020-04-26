import { GamesService } from './../../services/games.service';
import { AgeEnum, TimeEnum, Game } from './../../interfaces/games.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimeMapping, AgeMapping } from '../../interfaces/games.interface';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-games',
  templateUrl: './filter-games.component.html',
  styleUrls: ['./filter-games.component.scss'],
})
export class FilterGamesComponent implements OnInit {
  allTimes = TimeMapping;
  allAges = AgeMapping;
  none = 'none';
  filterForm: FormGroup = new FormGroup({
    age: new FormControl(this.none),
    duration: new FormControl(this.none),
    preparationTime: new FormControl(this.none),
  });

  @Output() filter: EventEmitter<Partial<Game>> = new EventEmitter()
  constructor(gamesService: GamesService) {
    gamesService.newGameAdded$.subscribe(() => this.resetFilters());
  }

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(() => {
      const filter = {
        ...this.getValueFor('age'),
        ...this.getValueFor('duration'),
        ...this.getValueFor('preparationTime'),
      }

      this.filter.emit(filter);
    });
  }

  private getValueFor(formControl: string): object {
    return this.hasValue(formControl) && { [formControl]: this.filterForm.get(formControl).value};
  }

  private hasValue(formControl: string): boolean {
    return this.filterForm.get(formControl).value >= 0;
  }

  private resetFilters() {
    const filterReset =  {
      age: this.none,
      duration: this.none,
      preparationTime: this.none
    }

    this.filterForm.setValue(filterReset);
  }
}
