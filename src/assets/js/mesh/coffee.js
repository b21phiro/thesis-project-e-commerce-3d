import GreekCoffee from './../../models/coffee/scene.gltf';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class Coffee {

    /** @type HTMLCanvasElement */
    canvas = null;

    /** @type { THREE.Scene } */
    _scene = null;

    /** @type { THREE.PerspectiveCamera } */
    _camera = null;

    /** @type { THREE.WebGLRenderer } */
    _renderer = null;

    /** @type {number} */
    _requestAnimationFrameID = 0;

    /**
     * @param canvas { HTMLCanvasElement }
     */
    constructor(canvas) {

        // Init the canvas in which the coffee
        // will be rendered in.
        this.canvas = canvas;
        this._setCanvasSizeToParent();

        // Init the scene.
        this._scene = new THREE.Scene();

        // Init the renderer.
        this._renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true
        });

        // Update the canvas size on resize.
        window.onresize = (ev) => {
            this._setCanvasSizeToParent();
        }

    }

    render() {

        this._loadMesh()
            .then((glb) => {

                // Adds the mesh into the scene.
                this._scene.add( glb.scene );

                // Set the camera to the cup.
                this._camera = glb.cameras.find(camera => camera.name === 'Camera001');

                // Draws the scene.
                this._draw();

            })
            .catch((err) => {
                console.error(err);
            });
    }

    _loadMesh() {

        // Init the loader.
        const loader = new GLTFLoader();

        return new Promise((res, rej) => {

            loader.load(
                GreekCoffee, // Resource URL
                (glb) => {
                    res(glb);
                },
                null,
                (err) => {
                    rej(err);
                }
            );

        });

    }

    _draw(timestamp = null) {
        this._requestAnimationFrameID = window.requestAnimationFrame( (timestamp) => this._draw(timestamp) );
        this._renderer.render(this._scene, this._camera);
    }

    _setCanvasSizeToParent() {
        // Set the width and height of the canvas
        // to match the container element.
        this.canvas.width = this.canvas.parentElement.offsetWidth;
        this.canvas.height = this.canvas.parentElement.offsetHeight;
    }

}

export default Coffee;