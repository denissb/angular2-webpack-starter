export class TodoModel {
    constructor(
        public title: string = '',
        public completed: boolean = false,
        public createdAt?: Date
    ) { }
}