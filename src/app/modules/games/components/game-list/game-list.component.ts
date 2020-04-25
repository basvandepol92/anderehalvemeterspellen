import { GamesService } from './../../services/games.service';
import { Game } from './../../interfaces/games.interface';
import { AddGameComponent } from './../add-game/add-game.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  allGames: Observable<Game[]>;
  constructor(private dialog: MatDialog, private gamesService: GamesService) {
    gamesService.newGameAdded$.subscribe(() => this.filterGames({}));
    gamesService.updateGameList();
  }

  openNewGameDialog() {
    this.dialog.open(AddGameComponent, {
      width: '500px',
    });
  }

  onFilter(filter: Partial<Game>) {
    this.filterGames(filter);
  }

  private filterGames(filter) {
    this.allGames = this.gamesService.filterGame(filter);
  }
}
