import {Component} from 'angular2/core';

import {TodoService} from '../services/todo';
import {TodoModel} from '../models/todo';

@Component({
    selector: 'todo-list',
    providers: [],
    directives: [],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./todo-list.html')
})
export class TodoList {
    todo: TodoModel;

    // TypeScript public modifiers
    constructor(public todoService: TodoService) {
        this.todo = new TodoModel();
    }
}
