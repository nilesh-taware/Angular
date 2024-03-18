import { Product } from "./product";
export class ProductService{
  public getProducts()
  {
    let products:Product[];
    products=[
      new Product(1,'Mack Book',150000),
      new Product(2,'HP',67050),
      new Product(3,'Dell',50000)
  ]
  return products;

  }
}
