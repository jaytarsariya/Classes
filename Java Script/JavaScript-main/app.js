const express = require("express");
const data = require("./data");

// Initialize App
const app = express();

// Assign route
app.use("/", (req, res, next) => {
  const myage = req.query.age;
  const ageobj = new Object(myage);
  console.log(ageobj);
  const result = data.filter((e) => e.age == myage);
  //   console.log(result);
  res.send(result);
});

// Start server on PORT 5000
app.listen(5000, () => {
  console.log("Server started!");
});
