import http from "http";
import url from "url";
import fetchCustomers from "./routes/customers.js";
import fetchOrders from "./routes/orders.js";
import fetchProducts from "./routes/products.js";
import fetchShipments from "./routes/shipments.js";
import fetchSuppliers from "./routes/suppliers.js";
import { fetchRecentOrders, fetchRecentShipments } from "./routes/recentData.js";

import addOrder from "./routes/addOrder.js";

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    console.log(`${req.method} request for ${pathname}`);

    if (pathname === "/customers" && req.method === "GET") {
        fetchCustomers(req, res);
    } else if (pathname === "/orders" && req.method === "GET") {
        fetchOrders(req, res);
    } else if (pathname === "/products" && req.method === "GET") {
        fetchProducts(req, res);
    } else if (pathname === "/shipments" && req.method === "GET") {
        fetchShipments(req, res);
    } else if (pathname === "/suppliers" && req.method === "GET") {
        fetchSuppliers(req, res);
    } else if (pathname === "/orders/recent" && req.method === "GET") {
        fetchRecentOrders(req, res);
    } else if (pathname === "/shipments/recent" && req.method === "GET") {
        fetchRecentShipments(req, res);
    } else if (pathname === "/orders" && req.method === "POST") {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            req.body = JSON.parse(body);
            addOrder(req, res);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(
            `<h1>404 Not Found</h1><p>The requested URL ${pathname} was not found on this server.</p>`
        );
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});