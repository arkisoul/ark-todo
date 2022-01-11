import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../models/todo';
import { TodoDataService } from '../services/todo-data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() public todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService,
    private auth: AuthService,
    private router: Router
  ) {
  }

  public ngOnInit() {
  }

  onAddTodo(todo: Todo) {
    if (!todo.title) {
      return;
    }
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

  public doSignOut() {
    this.auth.doSignOut();
    this.router.navigate(['/sign-in']);
  }

}
