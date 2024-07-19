function displayOrders(orders) {
    let body = $('body');

    body.empty();

    let container = $('<div>').addClass('entity-container');
    let header = $('<div>').addClass('entity-header').append(
        $('<h2>').text('ALL ORDERS:')
    );

    container.append(header);

    orders.forEach(order => {
        let card = $('<div>').addClass('entity-card');

        card.append(
            $('<h3>').text(`Order ID: ${order.order_id}`)
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Order Date:'),
                $('<span>').text(order.order_date)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Quantity Ordered:'),
                $('<span>').text(order.quantity_ordered)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Total Amount:'),
                $('<span>').text(`$${order.total_amount}`)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Shipment ID:'),
                $('<span>').text(order.shipment_id)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Supplier ID:'),
                $('<span>').text(order.supplier_id)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Customer ID:'),
                $('<span>').text(order.customer_id)
            )
        );

        container.append(card);
    });

    body.append(container);
}

export default displayOrders;
