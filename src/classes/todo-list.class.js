export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id); //devuelve un arrar que cumpla la concicion
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados() {

    }
}