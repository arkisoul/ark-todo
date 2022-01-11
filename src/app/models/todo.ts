type TTodo = {
  id: number;
  title: string;
  complete: boolean;
};

export class Todo {
  id: number;
  title = "";
  complete = false;

  constructor(todo: TTodo = {id: 0, title: '', complete: false}) {
    this.id = todo.id;
    this.title = todo.title;
    this.complete = todo.complete;
  }
}
