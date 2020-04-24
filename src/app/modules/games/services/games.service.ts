import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../interfaces/games.interface';
import { HttpClient } from '@angular/common/http';

const SERVICE_URL = 'https://www.anderhalvemeterspellen.nl/';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  get allGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${SERVICE_URL}/.netlify/functions/getAllGames`);
  }

  addNewGame(game: Game): Observable<any> {
    return this.http.post<Game[]>(`${SERVICE_URL}/api/games`, game);
  }
}
