"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const utils_1 = require("./utils");
const services_1 = require("./services");
process.on('uncaughtException', e => {
    console.log(e);
    process.exit(1);
});
process.on('unhandledRejection', e => {
    console.log(e);
    process.exit(1);
});
dotenv_1.config();
const app = express_1.default();
utils_1.applyMiddleware(middleware_1.middleware, app);
utils_1.applyRoutes(services_1.routes, app);
const { PORT = '3000' } = process.env;
app.listen(Number(PORT), () => {
    console.log(`Server is running http://localhost:${PORT}...`);
});
//# sourceMappingURL=server.js.map