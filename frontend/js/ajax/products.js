import displayProducts from '../display/products.js';

function fetchProducts() {
    $.ajax({
        url: 'http://localhost:3000/products',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log('Fetched products:', data);
            displayProducts(data);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching products:', error);
        }
    });
}

export default fetchProducts;