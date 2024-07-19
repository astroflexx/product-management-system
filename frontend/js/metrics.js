$(document).ready(function() {
    // Fetch data for each metric
    $.ajax({
        url: 'http://localhost:3000/customers',
        method: 'GET',
        success: function(data) {
            $('#total-customers').text(data.length);
        }
    });

    $.ajax({
        url: 'http://localhost:3000/suppliers',
        method: 'GET',
        success: function(data) {
            $('#total-suppliers').text(data.length);
        }
    });

    $.ajax({
        url: 'http://localhost:3000/shipments',
        method: 'GET',
        success: function(data) {
            $('#total-shipments').text(data.length);
        }
    });

    $.ajax({
        url: 'http://localhost:3000/products',
        method: 'GET',
        success: function(data) {
            $('#total-products').text(data.length);
        }
    });

    $.ajax({
        url: 'http://localhost:3000/orders',
        method: 'GET',
        success: function(data) {
            $('#total-orders').text(data.length);
        }
    });
});
