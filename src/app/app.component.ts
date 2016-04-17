/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <header>
       <md-toolbar>
        <div class="md-toolbar-tools">
          <h2>
            <span>{{ name }}</span>
          </h2>
          <span flex></span>
          <button md-raised-button aria-label="About" router-active [routerLink]=" ['About'] ">
            About
          </button>
        </div>
      </md-toolbar>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre>this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      WebPack Angular 2 Starter with ng2-material <a [href]="url">@Github</a>
    </footer>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  name = 'Angular 2 Webpack Starter';
  url = 'https://github.com/spawnius/angular2-webpack-starter/tree/ng-material';

  constructor(public appState: AppState) {}

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
