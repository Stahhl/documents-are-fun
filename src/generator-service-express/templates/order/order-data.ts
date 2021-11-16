import { Product } from "../../models/Product";
import { Person } from "../../models/Person";

export interface OrderData{
    orderId: string;
    customer: Person;
    products: Product[];
}