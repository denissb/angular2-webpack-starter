/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Todo} from './todo';
import {AppState} from './app.service';

/*
* Angular-material components
*/

import {MdToolbar} from '@angular2-material/toolbar';
import {MdCard} from '@angular2-material/card';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [MdToolbar, MdCard],
  styles: [],
  template: `
    <md-toolbar color="primary">
      <span>{{name}}</span>
    </md-toolbar>

    <main>
      <md-card>
        <router-outlet></router-outlet>
      </md-card>
    </main>
  `
})
@RouteConfig([
  { path: '/', name: 'Todo', component: Todo, useAsDefault: true }
])
export class App {
  name = 'Todo application';

  constructor(public appState: AppState) {}

  get state() {
    return this.appState.get();
  }

  ngOnInit() {
    console.log('Initial App State', this.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
