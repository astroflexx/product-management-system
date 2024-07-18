function displayCustomers(customers) {
    const body = $('body');
    body.empty();

    const container = $('<div>').addClass('container');
    const title = $('<h1>').text('ALL CUSTOMERS');
    container.append(title);

    customers.forEach(function(customer) {
        const customerCard = $('<div>').addClass('customer-card');
        
        const name = $('<h2>').text(`${customer.first_name} ${customer.last_name}`);
        const phone = $('<p>').text(`Phone Number: ${customer.phone_number}`);
        const altPhone = $('<p>').text(`Alternate Phone Number: ${customer.alt_phone_number}`);
        const address = $('<p>').text(`Address: ${customer.address}`);
        const email = $('<p>').text(`Email: ${customer.email}`);
        
        customerCard.append(name, phone, altPhone, address, email);
        container.append(customerCard);
    });

    body.append(container);
}

export default displayCustomers;
