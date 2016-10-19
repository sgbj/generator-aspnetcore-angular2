import 'angular2-universal-polyfills/browser';
import { platformUniversalDynamic } from 'angular2-universal';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

const platform = platformUniversalDynamic();

if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { platform.destroy(); });
} else {
    enableProdMode();
}

const bootApplication = () => { platform.bootstrapModule(AppModule); };
if (document.readyState === 'complete') {
    bootApplication();
} else {
    document.addEventListener('DOMContentLoaded', bootApplication);
}
