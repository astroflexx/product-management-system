function displayCustomers(customers) {
    let body = $('body');

    body.empty();

    let container = $('<div>').addClass('entity-container');
    let header = $('<div>').addClass('entity-header').append(
        $('<h2>').text('ALL CUSTOMERS:')
    );
    
    container.append(header);

    customers.forEach(customer => {
        let card = $('<div>').addClass('entity-card');

        card.append(
            $('<h3>').text(`${customer.first_name} ${customer.last_name}`)
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Phone Number:'),
                $('<span>').text(customer.phone_number)
            )
        );
        
        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Alternate Phone Number:'),
                $('<span>').text(customer.alt_phone_number)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Address:'),
                $('<span>').text(customer.address)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Email:'),
                $('<span>').text(customer.email)
            )
        );

        container.append(card);
    });

    body.append(container);
}

export default displayCustomers;
