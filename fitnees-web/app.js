const express = require("express");
const path = require("path");
// const cors = require("cors")

const authRouter = require("../routes/auth.route");
const trainerRouter = require("../routes/trainer.route");
const bookingRouter = require("../routes/booking.route");
const userRouter = require("./routes/user.route");
const authRole = require("./middlewares/authRole");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Base API");
});

app.use("/auth");
app.use("/trainer", authRole(["trainer", "admin"]), trainerRouter);
app.use("/booking", bookingRouter);
app.use("/user", authRole(["user", "admin"]), userRouter);

app.listen(8000, () => {
  console.log("server runnign" + $8000);
});
