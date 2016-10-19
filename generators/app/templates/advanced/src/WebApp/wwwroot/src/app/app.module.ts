import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { CharacterListComponent, CharacterService } from './characters';

import '../styles.scss';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CharacterListComponent
    ],
    imports: [
        UniversalModule,
        Ng2BootstrapModule,
        AppRoutingModule
    ],
    providers: [
        CharacterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
