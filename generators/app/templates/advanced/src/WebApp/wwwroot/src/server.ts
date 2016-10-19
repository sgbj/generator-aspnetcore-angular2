import 'angular2-universal-polyfills';
import { enableProdMode } from '@angular/core';
import { platformNodeDynamic } from 'angular2-universal';

import { AppModule } from './app/app.module';

enableProdMode();

const platform = platformNodeDynamic();

declare var Zone: any;

export default function (params: any): Promise<{ html: string, globals?: any }> {
    return new Promise((resolve, reject) => {
        const requestZone = Zone.current.fork({
            name: 'angular-universal request',
            properties: {
                baseUrl: '/',
                requestUrl: params.url,
                originUrl: params.origin,
                preboot: false,
                document: '<!DOCTYPE html><html><head></head><body><app-root></app-root></body></html>'
            },
            onHandleError: (parentZone, currentZone, targetZone, error) => {
                reject(error);
                return true;
            }
        });
        return requestZone.run(() => platform.serializeModule(AppModule)).then(html => {
            resolve({ html: html });
        }, reject);
    });
}
