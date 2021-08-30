import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entity/Product";


@EntityRepository(Product)
class ProductRepository extends Repository<Product> {

}

export { ProductRepository }