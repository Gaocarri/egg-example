const { Service } = require("egg");

class TodoService extends Service {
  async create(todo) {
    if (!todo.title) this.ctx.throw(422, "需要title");

    todo.id = Date.now().toString();
    todo.completed = false;

    this.store.push(todo);

    return todo;
  }
}

module.exports = TodoService;
