const connectdb = require("./database/mongodb");
const { json } = require("express");
const express = require("express");
const app = express();
// const notFound = require("../Nodejs Projects/middleware/notFound")

//middleware
app.use(json());

//Ignore below commented stuff
// app.use(notFound);

//importing all the functions
const {
  getAllTasks,
  createTasks,
  updateTasks,
  getTask,
  deleteTasks,
} = require("./controllers/tasks");

//creating all the methods
app.get("/", getAllTasks);
app.post("/", createTasks);
app.get("/:id", getTask);
app.post("/:id", updateTasks);
app.delete("/:id", deleteTasks);

//connecting to mongodb then starting the server
const start = async () => {
  try {
    await connectdb();
    app.listen("5001", () => {
      console.log("connected to port 5001");
    });
  } catch (err) {
    console.log(err);
  }
};

//calling the function
start();
