class Product {

    title = undefined;

    price = 0;

    /** @type { Coffee } */
    featured = null;

    /**
     * @param title { string }
     * @param price { int }
     * @param featured { Coffee }
     */
    constructor(title, price, featured= null) {
        this.title = title;
        this.price = price;
        this.featured = featured;
    }

}

export default Product;