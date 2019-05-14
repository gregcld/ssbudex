import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterLicence'
})
export class FilterLicencePipe implements PipeTransform {

    transform(characters: any, term: any): any {
        if (term === undefined)
            return characters;
        return characters.filter(function (character) {
            return character.licence.toLowerCase().includes(term.toLowerCase());
        })
    }

}
