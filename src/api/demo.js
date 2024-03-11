const DemoService = require("../services/demo-service");

module.exports = (app) => {
  const service = new DemoService();

  app.post("/demo/v1/create/new/task", async (req, res, next) => {
    try {
      const detail = req.body;
      const data = await service.CreateNewTask(detail);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  app.get("/demo/v1/get/new/task", async (req, res, next) => {
    try {
      const query = req.query;
      const data = await service.GetTaskUsingID(query);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  app.put("/demo/v1/update/new/task/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const detail = req.body;
      console.log(id);
      console.log(detail);

      const data = await service.UpdateTaskUsingID(id, detail);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

  app.delete("/demo/v1/delete/new/task/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const data = await service.DeleteTaskUsingID(id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
};
