const { app, assert } = require("egg-mock/bootstrap");

describe("test/app/controller/todo.test.js", () => {
  it("should add todo", () => {
    return app
      .httpRequest()
      .post("/api/todo")
      .send({ title: "Add one" })
      .expect("Content-Type", /json/)
      .expect("X-Response-Time", /\d+ms/)
      .expect(201)
      .expect((res) => {
        assert(res.body.id);
        assert(res.body.title === "Add one");
        assert(res.body.completed === false);
      });
  });
});
