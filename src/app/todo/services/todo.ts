import {Injectable} from 'angular2/core';
import {TodoModel} from '../models/todo';

@Injectable()
export class TodoService {
    
    private _todos: TodoModel[];

    constructor() {
      //TODO: Temporary...

      this._todos = [
        {
          title: 'Check out the source code',
          completed: false,
          createdAt: new Date()
        }
      ];
    }

    add(todo:TodoModel) {
      todo.createdAt = new Date();
      this._todos.push(todo);
    }

    cloneTodos() {
        return this._todos.slice();
    }
}