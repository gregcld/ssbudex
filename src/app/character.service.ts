import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from './models/character';
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { map } from "rxjs/operators";
import { getCheckNoChangesMode } from '@angular/core/src/render3/state';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    constructor(private http: HttpClient) { }

    public getCharacters(): Observable<Character[]> {
        return this.http.get<Character[]>('./assets/db.json');
    }

    public get(id: number): Observable<Character[]> {
        return this.http.get<Character[]>('./assets/db.json').pipe(map(data => data.filter(charact => charact.id == id)));
    }

}
