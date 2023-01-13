const express = require("express");
const app = express();

app.use(express.json({ limit: "4mb" }));

app.use("/user", require("./routes/UserRoute"));
app.use("/clubs", require("./routes/ClubRoute"));
app.use("/posts", require("./routes/PostRoute"));
app.use("/admin", require("./routes/AdminRoute"));

module.exports = app;