import {
    inject,
    TestBed
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            HomeComponent
        ]
    }));

    it('should have a message', inject([HomeComponent], (home: HomeComponent) => {
        expect(home.message).toEqual('Have fun working on <%= appName %>!');
    }));
});
