import { Component, OnInit } from 'angular2/core';

import { CharacterService } from '../shared/character.service';

@Component({
    moduleId: __moduleName,
    templateUrl: 'characters.component.html',
    providers: [CharacterService]
})
export class CharactersComponent implements OnInit {
    characters: string[];

    constructor(private characterService: CharacterService) { }

    ngOnInit() {
        this.characterService.getCharacters()
            .subscribe(characters => this.characters = characters);
    }
}