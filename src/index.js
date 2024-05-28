import './style.css';
import * as loadTimeMeasurement from "./assets/js/loadTimeMeasurement";
import productFactory from "./assets/js/factory/productFactory";
import Coffee from "./assets/js/mesh/coffee";

// The amount of products that we want to display.
const amountOfProducts = 27;

// Starts measuring the load time.
// loadTimeMeasurement.init(1000, amountOfProducts); <-- (1/2) Comment out this to measure loadtimes.

window.onload = () => {

    // The HTML-list that holds the items.
    const itemsList = document.getElementById('items');

    // Clear the product list.
    while (itemsList.firstChild) {
        itemsList.removeChild(itemsList.lastChild);
    }

    // Insert each item into the list.
    for (let i = 0; i < amountOfProducts; i++) {

        // Init the product model.
        const product = productFactory.createProduct();

        // Create the HTML for the product.
        const productHTML = `
            <li>
                <article class="product">
                    <a class="product--link" href="#" title="#Product"></a>
                    <figure class="product--figure">
                        <canvas class="product--figure--canvas"></canvas>
                    </figure>
                    <section class="product--section">
                        <h2 class="product--section--title">${product.title}</h2>
                        <p class="product--section--price">
                            <span class="product--section--price--value">${product.price}</span>
                            <span class="product--section--price--currency">kr</span>
                        </p>
                        <button class="product--section--button-add">Add +</button>
                    </section>
                </article>
            </li>
        `;

        // Inserts the product into the grid.
        itemsList.insertAdjacentHTML('afterbegin', productHTML);

    }

    // Render the 3D-model for each canvas.
    itemsList.querySelectorAll('.product--figure--canvas').forEach(canvas => {

        // Init the coffee object.
        const coffee = new Coffee(canvas);

        // Render the coffee-mug.
        coffee.render();

    });

    // Calculates the duration of the
    // load-time from start.
    loadTimeMeasurement.end(); // (2/2) <-- Comment out this to measure load times.

};