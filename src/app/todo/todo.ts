import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

import {AppState} from '../app.service';
import {TodoService} from './services/todo';

import {AddTodo} from './components/add-todo';

@Component({
    selector: 'todo',
    providers: [ TodoService ],
    directives: [ AddTodo ],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [ ],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [ ],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./todo.html')
})
export class Todo {
    // Set our default values
    localState = { value: '' };

    // TypeScript public modifiers
    constructor(public appState: AppState, public todoService: TodoService) {
    }

    ngOnInit() {
        console.log('hello `Todo` component');
    }

    submitState(value) {
        console.log('submitState', value);
        this.appState.set('value', value);
    }

}
