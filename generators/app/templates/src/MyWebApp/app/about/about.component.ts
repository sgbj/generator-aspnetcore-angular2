import { Component } from 'angular2/core';

@Component({
    moduleId: __moduleName,
    template: `
        <div class="card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">About</h2>
            </div>
            <div class="mdl-card__supporting-text">
                Have fun working on <%= appName %>! &lt;3
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a href="/swagger/ui" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    API docs
                </a>
            </div>
        </div>
    `
})
export class AboutComponent { }