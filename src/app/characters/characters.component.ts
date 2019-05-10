import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../character.service';


@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

    private characters: Character[]

    constructor(private characterService: CharacterService) { }

    ngOnInit() {
        this.characterService.getCharacters().subscribe(characters => this.characters = characters);
    }

}
