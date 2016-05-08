import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/Rx';

import { CONFIG } from './config';

@Injectable()
export class CharacterService {
    
    constructor(private http: Http) { }

    getCharacters() {
        return this.http.get(CONFIG.charactersUrl)
            .map(response => <string[]>response.json());
    }
}
