"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Hello!'
    });
});
exports.default = router;
//# sourceMappingURL=hello.js.map