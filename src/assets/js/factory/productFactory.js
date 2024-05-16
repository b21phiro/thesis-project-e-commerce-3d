import {title} from "../title";
import {price} from "../price";
import Product from "../product";

class ProductFactory {

    createProduct() {

        let productTitle,
            productCost;

        productTitle = title();
        productCost = price();

        return new Product(productTitle, productCost);

    }

}

const productFactory = new ProductFactory();

export default productFactory;