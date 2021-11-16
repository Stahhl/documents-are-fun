import express from "express";
import { Person } from "./models/Person";
import { Product } from "./models/Product";
import { OrderData } from "./templates/order/order-data";

const app = express();
const PORT = 8000;

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.set("views", "./templates");

app.get("/template/:id", (req, res) =>
  res.render(`${req.params.id}/${req.params.id}-wizard`, {
    order: {
      orderId: "#123",
      customer: {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        email: "john.doe@email.com",
        phone: "12345678",
        address: "123 Main St",
        city: "Anytown",
        zip: "12345",
        country: "USA"
      } as Person,
      products: [
        {
          name: "Product 1",
          cost: 100,
          description: `Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Rem praesentium aliquam vero, tenetur delectus nihil
                        explicabo. Quo distinctio ab deserunt modi fuga minus veniam? Nam omnis
                        beatae vel voluptatem fuga.`
        } as Product,
        {
          name: "Product 2",
          cost: 10,
          description: `Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem praesentium aliquam vero, tenetur delectus nihil
          explicabo. Quo distinctio ab deserunt modi fuga minus veniam? Nam omnis
          beatae vel voluptatem fuga. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Incidunt magni ut nisi! Nulla dolorum placeat alias ex
          sed fuga quae sapiente quasi hic, tempora quaerat vitae soluta labore
          vel aspernatur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat voluptas perferendis delectus quo. Eos ullam voluptatibus rerum
          voluptas beatae debitis assumenda, explicabo quos earum vero est esse,
          iusto corporis at!`
        } as Product,
        {
          name: "Product 3",
          cost: 1000,
          description: `Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem praesentium aliquam vero, tenetur delectus nihil
          explicabo. Quo distinctio ab deserunt modi fuga minus veniam? Nam omnis
          beatae vel voluptatem fuga. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Incidunt magni ut nisi! Nulla dolorum placeat alias ex
          sed fuga quae sapiente quasi hic, tempora quaerat vitae soluta labore
          vel aspernatur?`
        } as Product,
      ] as Product[],
    } as OrderData,
  })
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
