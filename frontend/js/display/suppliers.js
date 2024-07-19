function displaySuppliers(suppliers) {
    let body = $('body');

    body.empty();

    let container = $('<div>').addClass('entity-container');
    let header = $('<div>').addClass('entity-header').append(
        $('<h2>').text('ALL SUPPLIERS:')
    );

    container.append(header);

    suppliers.forEach(supplier => {
        let card = $('<div>').addClass('entity-card');

        card.append(
            $('<h3>').text(`Supplier ID: ${supplier.supplier_id}`)
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Name:'),
                $('<span>').text(supplier.name)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Phone Number:'),
                $('<span>').text(supplier.phone_number)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Address:'),
                $('<span>').text(supplier.address)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Email:'),
                $('<span>').text(supplier.email)
            )
        );

        container.append(card);
    });

    body.append(container);
}

export default displaySuppliers;
