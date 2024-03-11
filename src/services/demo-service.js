const { Mongoose } = require("mongoose");
const { DemoRepository } = require("../database");

// All Business logic will be here
class DemoService {
  constructor() {
    this.repository = new DemoRepository();
  }

  async CreateNewTask(detail) {
    try {
      const savedata = await this.repository.CreateNewTask(detail);
      return savedata;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async GetTaskUsingID(query) {
    try {
      const savedata = await this.repository.FindQueryOnDataModel(query);
      return savedata;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async UpdateTaskUsingID(id, detail) {
    try {
      const updatedata = await this.repository.UpdateTaskUsingID(id, detail);
      return updatedata;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async DeleteTaskUsingID(id) {
    try {
      const deletedata = await this.repository.DeleteTaskUsingID(id);
      return deletedata;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = DemoService;
