# Stardust Restaurant 🌌

A dynamic, space-themed restaurant webpage built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

This project demonstrates the core concepts of **Single Page Applications (SPA)** and modular JavaScript, utilizing **Webpack** as the primary static module bundler. Instead of traditional HTML navigation, the application relies on a JavaScript-driven architecture to dynamically mount, render, and destroy DOM elements on the fly, providing a seamless, refresh-free user experience.

## Features

* **Dynamic View Rendering:** Smooth transitions between "Home", "Menu", and "About" sections managed entirely via DOM manipulation.
* **Modular Architecture:** Strict separation of concerns using ES6 Modules. Each section acts as an independent component with its own scoped logic and styles.
* **Asset Bundling:** Seamless integration of images and CSS directly into the JavaScript dependency graph, compiled and optimized by Webpack.
* **Responsive UI:** Fluid layouts built with CSS Grid and Flexbox, utilizing mathematical CSS functions like `clamp()` for dynamic typography and container resizing.

## Architecture & Webpack Logic

The core logic of this application is divided into two main pillars: Event-driven DOM manipulation and Webpack's build process.

### 1. The Dependency Graph & Loaders
Webpack treats every file (HTML, CSS, JS, Images) as a module. Starting from the entry point (`index.js`), Webpack recursively builds a **Dependency Graph** that maps out every module the application needs to function.
* **CSS Compilation (`css-loader` & `style-loader`):** Because browsers cannot natively execute `import "./styles.css"` inside a JS file, Webpack uses loaders to interpret the CSS and inject it into the DOM via `<style>` tags at runtime.
* **Asset Management (`asset/resource`):** Image files (like `logo.png` or `cometFrites.png`) are processed and emitted to the output directory (`dist`), returning the correct public URL to be assigned to the `img.src` properties programmatically.

### 2. Event Delegation & Dynamic Routing
1.  **Central Controller (`index.js`):** Attaches a single event listener to the `<nav>` element. Utilizing **event bubbling**, it captures all clicks on the navigation buttons, minimizing memory footprint by avoiding multiple listeners.
2.  **State Clearing:** Upon a valid navigation click, the controller clears the `innerHTML` of the main `#content` node, effectively unmounting the current view.
3.  **Loaders:** Based on the triggered button's `id`, the controller invokes a specific loader function (`homeLoader`, `menuLoader`, or `aboutLoader`). These functions programmatically construct their respective DOM trees and append the final node structure back to the container.

## Technologies Used

* **JavaScript (ES6):** Core application logic, DOM generation, and module syntax.
* **Webpack:** Module bundling, dependency resolution, and asset processing.
* **CSS3:** Advanced styling, localized scoped design (imported per module).
* **HTML5:** Semantic skeleton (`index.html`).

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites
* [Node.js](https://nodejs.org/) installed on your local machine.
* A package manager like `npm`.

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Bether12/restaurant-page.git
2. Navigate to the project directory:
    ```bash
    cd restaurant-page
    ```
3. Install NPM packages(This will install Webpack, Webpack CLI, and the necessary loaders):
    ```bash
    npm install
    ```
4. Build the project for production:
    ```bash
    npm run build
    ```
5. Open the `dist/index.html` file in your browser to view the application.