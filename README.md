# React Image Carousel

A React component that displays input images in a carousel

## Running Locally

### Prerequisites
- [Node.js and npm](https://nodejs.org/en/)

### Installing

```sh
git clone https://github.com/jakepeyser/react-image-carousel.git
cd react-image-carousel
npm install
```

This will copy the project to your local machine and install all runtime dependencies, as well as Webpack build and Mocha/Chai/Enzyme testing tools.

### Running the app

```sh
npm run build-dev
npm start
```

The first command will run Webpack, building the front end static files in development mode. The second command will run the http server. This setup simulates a production environment without the performance enhacements.

### Alternate development commands

- `npm run build-watch` - Build the front end app in "watch" mode, such that the build is re-run every time source files are updated and saved.
- `npm run hmr` - Serve the front end app from a dev-server running on `localhost:3000` so that static files can be hot-swapped without reloading the app. API calls are proxied to `8080`, so you still need the Node server running.

## Running in Prod

Running the application in Prod is similar to running it locally:

```sh
npm install
npm run build
npm start
```

## Testing

To run the unit test suite, execute the command `npm test`. To continuously run the tests while actively developing, run `npm run test-watch`.

Executing `npm run e2e` will run the Nightwatch end-to-end browser tests in Google Chrome.