import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../shared/character.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    characters: string[];

    constructor(private characterService: CharacterService) { }

    ngOnInit() {
        this.characterService.getCharacters()
            .subscribe(characters => this.characters = characters);
    }
}