function displayProducts(products) {
    let body = $('body');

    body.empty();

    let container = $('<div>').addClass('entity-container');
    let header = $('<div>').addClass('entity-header').append(
        $('<h2>').text('ALL PRODUCTS:')
    );

    container.append(header);

    products.forEach(product => {
        let card = $('<div>').addClass('entity-card');

        card.append(
            $('<h3>').text(`Product ID: ${product.product_id}`)
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Name:'),
                $('<span>').text(product.name)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Description:'),
                $('<span>').text(product.description)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Quantity Available:'),
                $('<span>').text(product.quantity_available)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Supplier ID:'),
                $('<span>').text(product.supplier_id)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Order ID:'),
                $('<span>').text(product.order_id)
            )
        );

        container.append(card);
    });

    body.append(container);
}

export default displayProducts;
