function displaySuppliers(suppliers) {
    let body = $('body');

    body.empty();

    let mainDiv = $('<div>').text('ALL SUPPLIERS: ');

    suppliers.forEach(function (supplier) {
        let div = $('<div>').html(`
            <p>Supplier ID: ${supplier.supplier_id}</p>
            <p>Name: ${supplier.name}</p>
            <p>Phone Number: ${supplier.phone_number}</p>
            <p>Address: ${supplier.address}</p>
            <p>Email: ${supplier.email}</p>
        `);
        mainDiv.append(div);
    });

    body.append(mainDiv);
}

export default displaySuppliers;