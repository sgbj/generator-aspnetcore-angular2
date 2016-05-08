import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode } from 'angular2/core';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { AppComponent } from './app.component';

//enableProdMode();

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);