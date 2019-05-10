import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(characters: any, filter: any): any {
        if (filter === undefined)
            return characters;
        return characters.filter(function (character) {
            return character.name.toLowerCase().includes(filter.toLowerCase());
        })
    }
}
