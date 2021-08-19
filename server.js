const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

var MONGOD_URI = process.env.MONGOD_URI || "mongod://localhost/workoutdb";
mongoose.connect(MONGOD_URI, {
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology: true,
    useCreateIndex: true
})

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log(`App listening on Port ${PORT}`);
}); 