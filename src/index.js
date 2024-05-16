import * as THREE from 'three';
import './style.css';

import * as loadTimeMeasurement from "./assets/js/loadTimeMeasurement";
import * as framerateMeasurement from "./assets/js/framerateMeasurement";

// The amount of products that we want to display.
const amountOfProducts = 15;

// Starts measuring the load time.
// loadTimeMeasurement.init(2, amountOfProducts);

window.onload = () => {

    // The HTML-list that holds the items.
    const itemsList = document.getElementById('items');

    // Insert each item into the list.
    for (let i = 0; i < amountOfProducts; i++) {

    }

    // Calculates the duration of the
    // load-time from start.
    // loadTimeMeasurement.end();

    // Measures the framerate.
    // framerateMeasurement.init(5, 5);

};