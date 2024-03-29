import { EntityRepository, Repository } from "typeorm";
import { Cart } from "../entity/Cart";


@EntityRepository(Cart)
class CartRepository extends Repository<Cart> {

}

export { CartRepository }