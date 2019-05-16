import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';
import { CharacterService } from '../character.service';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-character-header',
    templateUrl: './character-header.component.html',
    styleUrls: ['./character-header.component.css']
})
export class CharacterHeaderComponent implements OnInit {

    @Input()
    public character: Character;

    constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params && params['id']) {
                this.characterService.get(params['id']).subscribe(character => this.character = character);
            }
        });
    }

}
