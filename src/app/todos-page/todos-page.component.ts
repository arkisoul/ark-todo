import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

  public todos!: Todo[];

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.data)
    this.todos = this.route.snapshot.data.todos;
  }

}
