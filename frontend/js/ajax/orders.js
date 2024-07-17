import displayOrders from '../display/orders.js';

function fetchOrders() {
    $.ajax({
        url: 'http://localhost:3000/orders',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Fetched orders:', data);
            displayOrders(data);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching orders:', error);
        }
    });
}

export default fetchOrders;