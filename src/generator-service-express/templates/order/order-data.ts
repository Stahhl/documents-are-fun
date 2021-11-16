import { Product } from "../../models/Product";
import { Person } from "../../models/Person";

export interface OrderData{
    customer: Person;
    products: Product[];
}