import db from '../database/db.js';

function fetchOrders(req, res) {
    const query = 'SELECT * FROM orders';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error getting orders:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
    });
}

export default fetchOrders;