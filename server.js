const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
    "mongodb+srv://pawlinedevin:0e5#97Dp@cluster0.eg1vo.mongodb.net/workoutdb?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false
    }
  );

const db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
