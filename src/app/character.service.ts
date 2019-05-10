import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Character } from './models/character';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http : HttpClient) { }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>("http://localhost:3000/characters");
  }

  public get(id: number): Observable<Character> {
    return this.http.get<Character>(`http://localhost:3000/characters/${id}`);
  }
  
}
