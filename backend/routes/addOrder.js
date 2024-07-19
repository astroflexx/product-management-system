function addOrder(req, res) {
    const { order_date, order_time, delivery_date, quantity_ordered, total_amount, shipment_id, supplier_id, customer_id } = req.body;

    const query = `
        INSERT INTO orders (order_date, order_time, delivery_date, quantity_ordered, total_amount, shipment_id, supplier_id, customer_id)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [order_date, order_time, delivery_date, quantity_ordered, total_amount, shipment_id, supplier_id, customer_id], (err, results) => {
        if (err) {
            console.error('Error adding order: ', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Order added successfully!' }));
    });
}

export default addOrder;