function displayProducts(products) {
    let body = $('body');

    body.empty();

    let mainDiv = $('<div>').text('ALL PRODUCTS: ');

    products.forEach(function (product) {
        let div = $('<div>').html(`
            <p>Product ID: ${product.product_id}</p>
            <p>Name: ${product.name}</p>
            <p>Description: ${product.description}</p>
            <p>Quantity Available: ${product.quantity_available}</p>
            <p>Supplier ID: ${product.supplier_id}</p>
            <p>Order ID: ${product.order_id}</p>
        `);
        mainDiv.append(div);
    });

    body.append(mainDiv);
}

export default displayProducts;