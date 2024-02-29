// middleware.js

const myMiddleware = (req, res, next) => {
    console.log(`Received a ${req.method} request at ${req.url}`);
    next();
};

module.exports = myMiddleware;
