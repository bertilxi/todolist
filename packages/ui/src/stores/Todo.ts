import { action, observable } from "mobx";
import { ChangeEventHandler } from "react";
import { Todo, TodoState } from "../types";

const emptyTodo = {
  description: "",
  image: ""
};

class TodoStore {
  @observable
  public todoList: Todo[] = [];

  @observable
  public currentTodo: Partial<Todo> = { ...emptyTodo };

  @observable
  public showCreateTodo = false;

  @action
  public setTodoDescription: ChangeEventHandler<
    HTMLTextAreaElement
  > = event => {
    this.currentTodo.description = event.target.value;
  };

  @action
  public setTodoImage: ChangeEventHandler<HTMLInputElement> = event => {
    this.currentTodo.image = event.target.value;
  };

  @action
  public createTodo = () => {
    this.currentTodo = { ...emptyTodo };
    this.showCreateTodo = true;
  };

  public editTodo = (id: number) =>
    action(() => {
      const todo = this.todoList.find(todo => todo.id === id);

      if (!todo) {
        return;
      }

      this.currentTodo = { ...todo };
      this.showCreateTodo = true;
    });

  public deleteTodo = (id: number) => async () => {
    await fetch(`http://localhost:3001/todo/${id}`, {
      method: "DELETE"
    });

    await this.fetchTodos();
  };

  public setTodoState = (id: number, state: TodoState) => async () => {
    const todo = this.todoList.find(todo => todo.id === id);

    if (!todo) {
      return;
    }

    await fetch(`http://localhost:3001/todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ state })
    });

    await this.fetchTodos();
  };

  @action
  public closeCreateTodo = () => {
    this.showCreateTodo = false;
  };

  @action
  public handleEditTodo = async () => {
    if (!this.currentTodo.description) {
      return;
    }

    const isNew = typeof this.currentTodo.id !== "number";

    try {
      if (isNew) {
        await fetch("http://localhost:3001/todo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.currentTodo)
        });
      } else {
        await fetch(`http://localhost:3001/todo/${this.currentTodo.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.currentTodo)
        });
      }

      await this.fetchTodos();
    } catch (error) {
      console.error(error);
    }

    this.showCreateTodo = false;
  };

  @action
  private setTodos = (todos: Todo[]) => {
    this.todoList = todos;
  };

  public async fetchTodos() {
    return fetch("http://localhost:3001/todo")
      .then(res => res.json())
      .then(this.setTodos);
  }
}

export default new TodoStore();
