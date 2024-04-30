"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const errors_1 = require("../errors");
const auth_routes_1 = require("./auth.routes");
const page_routes_1 = require("./page.routes");
const routes = (app) => {
    app.use('/api/auth', auth_routes_1.authRouter);
    app.use('/api/pages', page_routes_1.pageRouter);
    app.get("/api", (_, res) => {
        res.json({ message: "Let's get started!..." });
    });
    app.all('*', () => {
        throw new errors_1.NotFoundError();
    });
};
exports.routes = routes;
