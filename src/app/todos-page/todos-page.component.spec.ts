import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TodosPageComponent } from './todos-page.component';

describe('TodosPageComponent', () => {
  let component: TodosPageComponent;
  let fixture: ComponentFixture<TodosPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
