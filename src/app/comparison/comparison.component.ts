import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItem } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { CharacterService } from '../character.service';
import { Character } from '../models/character';
import { PanelModule } from 'primeng/panel';

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

    selectedCharacter1: Character;
    selectedCharacter2: Character;

    data: any;

    heighMax: number;
    weigthMax: number;
    runSpeedMax: number;
    walkSpeedMax: number;
    airSpeedMax: number;
    fallSpeedMax: number;
    initialDashMax: number;
    airAcceleration: number;

    name1: string;
    name2: string;
    parameter1: any;
    parameter2: any;

    characters: Character[]

    constructor(private characterService: CharacterService) {
        this.name1 = "Character 1";
        this.name2 = "Character 2";
        this.parameter1 = [0, 0, 0, 0, 0, 0, 0, 0];
        this.parameter2 = [0, 0, 0, 0, 0, 0, 0, 0];
        this.drawRadarChart(this.name1, this.name2, this.parameter1, this.parameter2);

        this.heighMax = 230;
        this.weigthMax = 135;
        this.runSpeedMax = 3.85;
        this.walkSpeedMax = 1.575;
        this.airSpeedMax = 1.344;
        this.fallSpeedMax = 2.1;
        this.initialDashMax = 2.42;
        this.airAcceleration = 0.13;
    }

    ngOnInit() {
        this.characterService.getCharacters().subscribe(characters => this.characters = characters);
    }

    onChange1(aCharacter) {
        this.name1 = aCharacter.value.name;
        this.parameter1 = [this.transformationData(this.heighMax, aCharacter.value.height), this.transformationData(this.weigthMax, aCharacter.value.weight), this.transformationData(this.runSpeedMax, aCharacter.value.runSpeed), this.transformationData(this.walkSpeedMax, aCharacter.value.walkSpeed), this.transformationData(this.airSpeedMax, aCharacter.value.airSpeed), this.transformationData(this.fallSpeedMax, aCharacter.value.fallSpeed), this.transformationData(this.initialDashMax, aCharacter.value.initialDash), this.transformationData(this.airAcceleration, aCharacter.value.airAcceleration)];
        this.drawRadarChart(this.name1, this.name2, this.parameter1, this.parameter2);
    }

    onChange2(aCharacter) {
        this.name2 = aCharacter.value.name;
        this.parameter2 = [this.transformationData(this.heighMax, aCharacter.value.height), this.transformationData(this.weigthMax, aCharacter.value.weight), this.transformationData(this.runSpeedMax, aCharacter.value.runSpeed), this.transformationData(this.walkSpeedMax, aCharacter.value.walkSpeed), this.transformationData(this.airSpeedMax, aCharacter.value.airSpeed), this.transformationData(this.fallSpeedMax, aCharacter.value.fallSpeed), this.transformationData(this.initialDashMax, aCharacter.value.initialDash), this.transformationData(this.airAcceleration, aCharacter.value.airAcceleration)];
        this.drawRadarChart(this.name1, this.name2, this.parameter1, this.parameter2);
    }

    drawRadarChart(name1, name2, parameter1, parameter2) {
        this.data = {
            labels: ['height', 'weight', 'runSpeed', 'walkSpeed', 'airSpeed', 'fallSpeed', 'initialDash', 'airAcceleration'],
            datasets: [
                {
                    label: name1,
                    backgroundColor: 'rgba(13,173,245,0.2)',
                    borderColor: 'rgba(13,173,245,1)',
                    pointBackgroundColor: 'rgba(13,173,245,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(13,173,245,1)',
                    data: parameter1
                },
                {
                    label: name2,
                    backgroundColor: 'rgba(255,193,7,0.2)',
                    borderColor: 'rgba(255,193,7,1)',
                    pointBackgroundColor: 'rgba(255,193,7,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,193,7,1)',
                    data: parameter2
                }
            ]
        };
    }

    transformationData(max, x) {
        return (1 - (max - x) / max) * 100;
    }
}