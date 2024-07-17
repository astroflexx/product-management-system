import displaySuppliers from '../display/suppliers.js';

function fetchSuppliers() {
    $.ajax({
        url: 'http://localhost:3000/suppliers',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Fetched suppliers:', data);
            displaySuppliers(data);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching suppliers:', error);
        }
    });
}

export default fetchSuppliers;