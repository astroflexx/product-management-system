import displayShipments from '../display/shipments.js';

function fetchShipments() {
    $.ajax({
        url: 'http://localhost:3000/shipments',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Fetched shipments:', data);
            displayShipments(data);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching shipments:', error);
        }
    });
}

export default fetchShipments;