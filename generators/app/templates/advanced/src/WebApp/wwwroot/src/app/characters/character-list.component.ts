import { Component, OnInit } from '@angular/core';

import { CharacterService } from './shared/character.service';

@Component({
    templateUrl: 'character-list.component.html'
})
export class CharacterListComponent implements OnInit {
    characters: string[];

    constructor(private characterService: CharacterService) { }

    ngOnInit() {
        this.characterService.getCharacters()
            .subscribe(characters => this.characters = characters);
    }
}
