import displayCustomers from '../display/customers.js';

function fetchCustomers() {
    $.ajax({
        url: 'http://localhost:3000/customers',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Fetched customers:', data);
            displayCustomers(data);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching customers:', error);
        }
    });
}

export default fetchCustomers;