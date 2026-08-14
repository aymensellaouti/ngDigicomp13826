import { Component, inject, signal } from "@angular/core";
import { TodoService } from "../service/todo.service";
import { Todo } from "../model/todo";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule],
})
export class TodoComponent {
  todoService = inject(TodoService);
  // State
  /**
   * @var la liste des todos à afficher
   */
  todos = this.todoService.getTodos();

  /**
   * @var le todo à ajouter
   */
  todo = signal(new Todo());
  constructor() {
    this.todoService.getTodosFromApi()
    // Je m'inscris au flux
    .subscribe({
      next: (data) => {
        // Ce que je fais en cas de succès
        console.log(data);
      },
      error: (e) => {

      }
    })
  }
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo)
  }
}
