import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { CharacterService } from '../character.service';
import { Character } from '../models/character';
import { forEach } from '@angular/router/src/utils/collection';

interface City {
    name: string;
    code: string;
}


@Component({
    selector: 'app-comparison',
    templateUrl: './comparison.component.html',
    styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
    cities1: SelectItem[];

    cities2: SelectItem[];

    selectedCity1: City;

    selectedCity2: City;

    selectedCharacter1: Character;

    selectedCharacter2: Character;

    data: any;
    // characters: Character[]

    characters: any;


    constructor(private characterService: CharacterService) {
        //SelectItem API with label-value pairs
        this.cities1 = [
            { label: 'Select City', value: null },
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
        ];

        //An array of cities
        this.cities2 = [
            { label: 'Select City', value: null },
            { label: 'New York', value: { id: 6, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 7, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 8, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 9, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 10, name: 'Paris', code: 'PRS' } }
        ];

        this.data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };

        this.characterService.getCharacters().subscribe(characters => this.characters = characters);

        //console.log(this.characters["name"]);
        console.log("allo");
        console.log("allo1");
        console.log("allo2");
    }
    ngOnInit() {

    }
}