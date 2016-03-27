import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

import {TodoService} from '../services/todo';
import {TodoModel} from '../models/todo';

@Component({
    selector: 'add-todo',
    providers: [],
    directives: [],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./add-todo.html')
})
export class AddTodo {
    active = true;
    todo: TodoModel;

    // TypeScript public modifiers
    constructor(public todoService: TodoService) {
        this.todo = new TodoModel();
    }

    onSubmit() {
        this.todoService.add(this.todo);
        this.todo = new TodoModel();
        this.active = false;
        setTimeout(() => {
            this.active = true
        }, 0);
    }
}
