import express from "express";

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./templates");

app.get("/:id", (req, res) => res.render(`${req.params.id}/${req.params.id}-wizard`, {person:{name: "John", age: "25"}}));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
