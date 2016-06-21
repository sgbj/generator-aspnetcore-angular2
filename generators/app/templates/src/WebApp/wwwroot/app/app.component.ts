import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES, NavigationEnd, Event } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events
            .subscribe(() => setTimeout(() => componentHandler.upgradeAllRegistered(), 250));
    }
}