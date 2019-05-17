import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../models/character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
    selector: 'app-character-attributes',
    templateUrl: './character-attributes.component.html',
    styleUrls: ['./character-attributes.component.css']
})
export class CharacterAttributesComponent implements OnInit {

    @Input()
    character: Character;

    data: any;
    options: any;

    heighMax: number;
    weigthMax: number;
    runSpeedMax: number;
    walkSpeedMax: number;
    airSpeedMax: number;
    fallSpeedMax: number;
    initialDashMax: number;
    airAcceleration: number;

    parameters: any;

    constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService) {
        this.weigthMax = 135;
        this.runSpeedMax = 3.85;
        this.walkSpeedMax = 1.575;
        this.airSpeedMax = 1.344;
        this.fallSpeedMax = 2.1;
        this.initialDashMax = 2.42;
        this.airAcceleration = 0.13;
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params && params['id']) {
                this.characterService.get(params['id']).subscribe(character => {
                    this.character = character[0];
                    this.parameters = [this.transformationData(this.weigthMax, this.character.weight), this.transformationData(this.runSpeedMax, this.character.runSpeed), this.transformationData(this.walkSpeedMax, this.character.walkSpeed), this.transformationData(this.airSpeedMax, this.character.airSpeed), this.transformationData(this.fallSpeedMax, this.character.fallSpeed), this.transformationData(this.initialDashMax, this.character.initialDash), this.transformationData(this.airAcceleration, this.character.airAcceleration)];
                    this.drawBarChart(this.character, this.parameters);
                });
            }
        });

    }

    drawBarChart(character, parameters) {
        this.data = {
            labels: ['weight', 'runSpeed', 'walkSpeed', 'airSpeed', 'fallSpeed', 'initialDash', 'airAcceleration'],
            datasets: [
                {
                    label: character.name + ' attributes',
                    backgroundColor: 'rgba(13,173,245,0.7)',
                    borderColor: 'rgba(13,173,245,1)',
                    hoverBackgroundColor: 'rgba(13,173,245,1)',
                    hoverBorderColor: 'rgba(13,173,245,1)',
                    data: parameters
                }
            ]
        };
        this.options = {
            legend: { display: false },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true
                    },
                    ticks: {
                        fontSize: 18
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: true
                    },
                    display: true
                }]
            }
        };
    };

    transformationData(max, x) {
        return Math.round((1 - (max - x) / max) * 1000) / 10;
    }

}
