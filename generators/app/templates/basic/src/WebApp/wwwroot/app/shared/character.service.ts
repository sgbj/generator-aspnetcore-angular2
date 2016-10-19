import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CharacterService {
    
    constructor(private http: Http) { }

    getCharacters() {
        return this.http.get('api/characters')
            .map(response => <string[]>response.json());
    }
}