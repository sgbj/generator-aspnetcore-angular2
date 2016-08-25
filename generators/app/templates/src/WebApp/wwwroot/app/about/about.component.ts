import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <div class="card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">About</h2>
            </div>
            <div class="mdl-card__supporting-text">
                You're ready to start working on WebApp! <3
            </div>
        </div>
    `
})
export class AboutComponent { }