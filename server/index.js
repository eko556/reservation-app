const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/");
const FakeDb = require("./fake-db");

const productRoutes = require("./routes/products");
const path = require("path");

mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.initDb();
  });

const app = express();
app.use("/api/v1/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  const appPath = path.join(
    __dirname,
    "..",
    "dist",
    "reservation-app",
    "browser"
  );
  app.use(express.static(appPath));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
  });
}

app.get("/products", function (req, res) {
  res.json({ success: true });
});

const PORT = process.env.PORT || "3001";

app.listen("3001", function () {
  console.log("I am running!");
});
