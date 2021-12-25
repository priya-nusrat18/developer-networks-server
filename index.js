const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

//  connect databsase
connectDB();

 //init middleware
 app.use(cors())
app.use(express.json({extended: false}))

app.get("/", (req, res) => {
  res.send("Hello from Dev-networks");
});


//define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
