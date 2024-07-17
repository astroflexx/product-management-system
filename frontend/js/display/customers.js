function displayCustomers(customers) {
    let body = $('body');

    body.empty();

    let mainDiv = $('<div>').text('ALL CUSTOMERS: ');

    customers.forEach(function (customer) {
        let div = $('<div>').html(`
            <p>First Name: ${customer.first_name}</p>
            <p>Last Name: ${customer.last_name}</p>
            <p>Phone Number: ${customer.phone_number}</p>
            <p>Alternate Phone Number: ${customer.alt_phone_number}</p>
            <p>Address: ${customer.address}</p>
            <p>Email: ${customer.email}</p>
        `);
        mainDiv.append(div);
    });

    body.append(mainDiv);
}

export default displayCustomers;