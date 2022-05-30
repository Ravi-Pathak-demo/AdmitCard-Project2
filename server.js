const express = require("express");
const app = express();
const core = require("cors");
const mongoose = require("mongoose");
const router = express.Router();

app.use(core());
app.use(express.json());

//connect to mongodb
mongoose.connect(
  "mongodb+srv://ravipathak89:project22admitcard@userdatabase.k1ypm.mongodb.net/test",
  { useNewUrlParser: true }
);

//require routes
app.use("/", require("./routes/userRoute"));
app.use("/", require("./routes/getData"));

//listen to app at port 5000
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
