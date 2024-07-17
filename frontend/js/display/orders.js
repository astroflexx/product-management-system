function displayOrders(orders) {
    let body = $('body');

    body.empty();

    let mainDiv = $('<div>').text('ALL ORDERS: ');

    orders.forEach(function (order) {
        let div = $('<div>').html(`
            <p>Order ID: ${order.order_id}</p>
            <p>Order Date: ${order.order_date}</p>
            <p>Order Time: ${order.order_time}</p>
            <p>Delivery Date: ${order.delivery_date}</p>
            <p>Quantity Ordered: ${order.quantity_ordered}</p>
            <p>Total Amount: ${order.total_amount}</p>
            <p>Shipment ID: ${order.shipment_id}</p>
            <p>Supplier ID: ${order.supplier_id}</p>
            <p>Customer ID: ${order.customer_id}</p>
        `);
        mainDiv.append(div);
    });

    body.append(mainDiv);
}

export default displayOrders;