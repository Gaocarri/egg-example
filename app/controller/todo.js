const { Controller } = require("egg");

class TodoController extends Controller {
  async index() {}

  // `PUT /api/todo`
  async update() {}

  // `DELETE /api/todo`
  async destroy() {}

  async create() {
    const { ctx, service } = this;

    ctx.status = 201;

    ctx.body = await service.todo.create(ctx.request.bodyu);
  }
}

module.exports = TodoController;
