import db from "../database/db.js";

function fetchRecentOrders(req, res) {
    const query = 'SELECT * FROM orders ORDER BY order_date DESC LIMIT 5';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching recent orders: ', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
    });
}

function fetchRecentShipments(req, res) {
    const query = 'SELECT * FROM shipments ORDER BY shipment_date DESC LIMIT 5';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching recent shipments: ', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
    });
}

export {
    fetchRecentOrders,
    fetchRecentShipments,
};