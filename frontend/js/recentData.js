$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3000/orders/recent',
        method: 'GET',
        success: function (orders) {
            const recentOrdersList = $('#recent-orders-list');
            orders.forEach(order => {
                const listItem = $('<li>').text(`Order ID: ${order.order_id}, Date: ${order.order_date}`);
                recentOrdersList.append(listItem);
            });
        },
        error: function (err) {
            console.error('Error fetching recent orders: ', err);
        }
    });

    // Fetch recent shipments
    $.ajax({
        url: 'http://localhost:3000/shipments/recent',
        method: 'GET',
        success: function (shipments) {
            const recentShipmentsList = $('#recent-shipments-list');
            shipments.forEach(shipment => {
                const listItem = $('<li>').text(`Shipment ID: ${shipment.shipment_id}, Date: ${shipment.shipment_date}, Status: ${shipment.status}`);
                recentShipmentsList.append(listItem);
            });
        },
        error: function (err) {
            console.error('Error fetching recent shipments: ', err);
        }
    });
});
