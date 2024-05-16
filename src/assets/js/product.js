import ProductImage from './../images/coffee.jpg';

class Product {

    id = null;

    title = undefined;

    price = 0;

    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }

}

export default Product;