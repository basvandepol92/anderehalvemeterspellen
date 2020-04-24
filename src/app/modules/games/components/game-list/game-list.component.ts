import { GamesService } from './../../services/games.service';
import { Game, AgeEnum, AgeMapping, Age, TimeEnum, TimeMapping, Time} from './../../interfaces/games.interface';
import { AddGameComponent } from './../add-game/add-game.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  allGames: Observable<Game[]> = this.gamesService.allGames;
  constructor(private dialog: MatDialog, 
    private gamesService: GamesService) { }

  openNewGameDialog() {
    this.dialog.open(AddGameComponent, {
      width: '500px'
    });
  }
}
