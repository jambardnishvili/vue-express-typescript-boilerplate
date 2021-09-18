"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./web/app");
let port = process.env.PORT;
if (process.env.NODE_ENV === 'production') {
    port = '3002';
}
app_1.default.listen(port, () => {
    console.log(`web server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map