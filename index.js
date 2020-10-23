const express = require("express");
const tasksRouter = require("./api/taskRouter");

const app = express();

app.use(express.json());
app.use(tasksRouter);



app.listen(3001, () => {
    console.log(`Server is listening on port: 3001`);
});