import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../interfaces/games.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  get allGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.url}/api/games`);
  }

  addNewGame(game: Game): Observable<any> {
    return this.http.post<Game[]>(`${environment.url}/api/games`, game);
  }
}
