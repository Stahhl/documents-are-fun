import express from "express";
import { Person } from "./models/Person";
import { Product } from "./models/Product";
import { OrderData } from "./templates/order/order-data";

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./templates");

app.get("/template/:id", (req, res) =>
  res.render(`${req.params.id}/${req.params.id}-wizard`, {
    order: {
      orderId: "#123",
      customer: {
        firstName: "John",
        lastName: "Doe",
      } as Person,
      products: [
        {
          name: "Product 1",
          cost: 100,
        } as Product,
        {
          name: "Product 2",
          cost: 10,
        } as Product,
        {
          name: "Product 3",
          cost: 1000,
        } as Product,
      ] as Product[],
    } as OrderData,
  })
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
