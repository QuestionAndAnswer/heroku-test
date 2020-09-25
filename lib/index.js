const http = require("http");
const { readFileSync } = require("fs");

const html = readFileSync("lib/index.html").toString();

const server = new http.Server((req, res) => {
    
    try {
        if (req.method === "GET" && req.url === "" || req.url === "/" || req.url === "/index.html") {
            res.setHeader("content-type", "text/html; charset=utf-8");
            res.statusCode = 200;
            res.write(html);
            res.end();
        }
        console.log(`${req.method} ${req.url} ${res.statusCode}`);
    } catch (err) {
        console.error(`${req.method} ${req.url} ${res.statusCode}`);
    }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Started on ${PORT}`);
});