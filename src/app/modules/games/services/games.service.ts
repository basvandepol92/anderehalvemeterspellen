import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Game } from '../interfaces/games.interface';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private newGameAdded = new Subject<any>();
  newGameAdded$ = this.newGameAdded.asObservable();
  constructor(private http: HttpClient) {}

  addNewGame(game: Game): Observable<any> {
    return this.http.post<Game[]>(
      `${environment.url}/.netlify/functions/createGame`,
      game
    );
  }

  filterGame(filter: Partial<Game>): Observable<Game[]> {
    return this.http
      .post<Game[]>(`${environment.url}/.netlify/functions/filterGames`, filter)
      .pipe(share());
  }

  updateGameList() {
    this.newGameAdded.next();
  }
}
