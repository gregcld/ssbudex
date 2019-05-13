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


    parameter1: any;
    parameter2: any;

    characters: Character[]

    //characters: any;

    height: number;

    constructor(private characterService: CharacterService) {
        /*
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
        */
        this.parameter1 = [0, 0, 0, 0, 0, 0, 0, 0];
        this.parameter2 = [0, 0, 0, 0, 0, 0, 0, 0];

        this.drawRadarChart(this.parameter1, this.parameter2);







        this.heighMax = 230;
        this.weigthMax = 135;
        this.runSpeedMax = 3.85;
        this.walkSpeedMax = 1.575;
        this.airSpeedMax = 1.344;
        this.fallSpeedMax = 2.1;
        this.initialDashMax = 2.42;
        this.airAcceleration = 0.13;



        //console.log(this.characters["name"]);
        console.log("allo");
        console.log("allo1");
        console.log("allo2");
    }

    ngOnInit() {
        this.characterService.getCharacters().subscribe(characters => this.characters = characters);
        /*
        this.selectedCharacter1.id = 0;
        this.selectedCharacter1.name = "test";
        this.selectedCharacter1.height = 0;
        this.selectedCharacter1.weight = 0;
        this.selectedCharacter1.runSpeed = 0;
        */
    }

    onChange1(aCharacter) {
        console.log(aCharacter.value);
        console.log(aCharacter.value.id);
        this.parameter1 = [this.transformationData(this.heighMax, aCharacter.value.height), this.transformationData(this.weigthMax, aCharacter.value.weight), this.transformationData(this.runSpeedMax, aCharacter.value.runSpeed), this.transformationData(this.walkSpeedMax, aCharacter.value.walkSpeed), this.transformationData(this.airSpeedMax, aCharacter.value.airSpeed), this.transformationData(this.fallSpeedMax, aCharacter.value.fallSpeed), this.transformationData(this.initialDashMax, aCharacter.value.initialDash), this.transformationData(this.airAcceleration, aCharacter.value.airAcceleration)];
        this.drawRadarChart(this.parameter1, this.parameter2);
    }

    onChange2(aCharacter) {
        console.log(aCharacter.value);
        console.log(aCharacter.value.id);
        this.parameter2 = [this.transformationData(this.heighMax, aCharacter.value.height), this.transformationData(this.weigthMax, aCharacter.value.weight), this.transformationData(this.runSpeedMax, aCharacter.value.runSpeed), this.transformationData(this.walkSpeedMax, aCharacter.value.walkSpeed), this.transformationData(this.airSpeedMax, aCharacter.value.airSpeed), this.transformationData(this.fallSpeedMax, aCharacter.value.fallSpeed), this.transformationData(this.initialDashMax, aCharacter.value.initialDash), this.transformationData(this.airAcceleration, aCharacter.value.airAcceleration)];
        this.drawRadarChart(this.parameter1, this.parameter2);
    }

    drawRadarChart(parameter1, parameter2) {
        this.data = {
            labels: ['height', 'weight', 'runSpeed', 'walkSpeed', 'airSpeed', 'fallSpeed', 'initialDash', 'airAcceleration'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: parameter1
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: parameter2
                }
            ]
        };
    }

    transformationData(max, x) {
        return 1 - (max - x) / max;
    }
}