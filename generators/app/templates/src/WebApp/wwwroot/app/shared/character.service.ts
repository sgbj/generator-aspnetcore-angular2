import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CONFIG } from './config';

@Injectable()
export class CharacterService {
    
    constructor(private http: Http) { }

    getCharacters() {
        return this.http.get(CONFIG.charactersUrl)
            .map(response => <string[]>response.json());
    }
}