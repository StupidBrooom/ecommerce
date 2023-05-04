const express = require("express")
const app = express()
const port = process.env.port || 4000;
require("dotenv").config();
//================ Enabling express to use body of the request ================================
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//================ CORS ================================
const cors = require("cors");
app.use(cors());
// =============== DATABASE CONNECTION =====================
const mongoose = require("mongoose");


async function connecting() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to the database!");
  } catch (error) {
    console.log(
      "!!! ERROR: Seems like the database is not running, please start it up !!!"
    );
  }
}
connecting();

// =============== ROUTES ==============================
app.use("/users", require("./routes/users.routes"));


const path = require('path');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});
// =============== START SERVER =====================
app.listen(port, () => console.log(`server listening on port ${port}`));
