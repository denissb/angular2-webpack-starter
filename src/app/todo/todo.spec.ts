import {
    it,
    inject,
    injectAsync,
    describe,
    beforeEachProviders,
    TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {WebpackState} from 'angular2-hmr';

// Load the implementations that should be tested
import {Todo} from './todo';
import {TodoService} from './services/todo';
import {AppState} from '../app.service';

describe('Home', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        WebpackState,
        AppState,
        TodoService,
        Todo
    ]);

    it('should have default data', inject([Todo], (todo) => {
        expect(todo.localState).toEqual({ value: '' });
        expect(todo.todoService).toBeDefined();
    }));

    it('should have a title', inject([Todo], (todo) => {
        expect(!!todo.title).toEqual(true);
    }));

    it('should log ngOnInit', inject([Todo], (todo) => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        todo.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    }));

});
