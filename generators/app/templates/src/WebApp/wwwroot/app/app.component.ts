import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}