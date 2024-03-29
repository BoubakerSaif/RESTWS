const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const TodoRoutes = require("./Routes/todosRoutes");
mongoose.set("strictQuery", false);
const app = express();
app.use(express.json());
dotenv.config();
app.use("/api", TodoRoutes);

mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
