const mongoose = require("mongoose");
const { DataModel } = require("../models");

//Dealing with data base operations
class DemoRepository {
  async CreateNewTask(detail) {
    try {
      const data = new DataModel(detail);
      const result = await data.save();
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async FindQueryOnDataModel(ojb) {
    try {
      const result = await DataModel.find(ojb);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async UpdateTaskUsingID(id, detail) {
    try {
      const result = await DataModel.updateOne({ ID: id }, { $set: detail });
      const updateddata = await DataModel.findOne({ ID: id });
      return updateddata;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async DeleteTaskUsingID(id) {
    try {
      const result = await DataModel.deleteOne({
        _id: new mongoose.Types.ObjectId(id),
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

module.exports = DemoRepository;
