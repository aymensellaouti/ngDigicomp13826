import { inject, Injectable, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/app.api";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos = signal<Todo[]>([]);
  private loggerService = inject(LoggerService);
  private httpClient = inject(HttpClient);
  /**
   * elle retourne la liste des todos
   *
   * @returns Signal<Todo[]>
   */
  getTodos(): Signal<Todo[]> {
    return this.todos.asReadonly();
  }

  getTodosFromApi() {
    return this.httpClient.get(APP_API.todo);
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.todos.update(todos => [
      // Permet de créer une copie d'un tableau ou d'un objet
      ...todos,
      todo
    ]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   */
  deleteTodo(todo: Todo): void {
    this.todos.update(todos => todos.filter(todoCourrant => todoCourrant != todo));
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.log(this.todos());
  }
}
