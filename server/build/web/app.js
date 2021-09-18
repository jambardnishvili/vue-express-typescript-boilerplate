"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes_1 = require("./routes");
class App {
    constructor() {
        // run the express instance and store in app
        this.app = express();
        this.config();
    }
    config() {
        dotenv.config();
        // Serve static contents from public directory
        this.app.use(express.static(path.join(__dirname, '..', 'public')));
        // enable cors by adding cors middleware
        this.app.use(cors());
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // add routes
        this.app.use('/api/v1', routes_1.default);
        // Serve index.html from public directory if no other routs matched.
        // This is required to support single page application
        this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map