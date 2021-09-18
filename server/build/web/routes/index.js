"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hello_1 = require("./hello");
const router = (0, express_1.Router)();
router.use('/', hello_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map