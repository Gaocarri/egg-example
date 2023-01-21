const { Controller } = require("egg");

class TodoController extends Controller {
  async index(...args) {
    this.create(...args);
  }

  async create() {
    const { ctx, service } = this;

    ctx.status = 201;

    ctx.body = await service.todo.create(ctx.request.bodyu);
  }
}

module.exports = TodoController;
