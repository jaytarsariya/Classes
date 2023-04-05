const express = require("express");
const app = express();
const port = 3700;
const User = require("../model/model");
app.use(express.json());

// GET API endpoint
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});

app.get("/view", async (req, res) => {
  try {
    const view = await User.find();
    res.send(view);
    console.log(error);
  } catch (error) {
    console.log(error);
  }
});

app.post("/adduser", async (req, res) => {
  try {
    const user = await User(req.body).save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/detele/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await User.findByIdAndDelete(_id);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/addUser", async (req, res) => {
  try {
    const add = await User(req.body).save();
    res.send(add);
  } catch (error) {
    console.log(error);
  }
});

app.put("/Upadate/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const up = await User.findByIdAndUpdate(_id, req.body);
    res.send(up);
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
