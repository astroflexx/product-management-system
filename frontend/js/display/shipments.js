function displayShipments(shipments) {
    let body = $('body');

    body.empty();

    let mainDiv = $('<div>').text('ALL SHIPMENTS: ');

    shipments.forEach(function (shipment) {
        let div = $('<div>').html(`
            <p>Shipment ID: ${shipment.shipment_id}</p>
            <p>Shipment Date: ${shipment.shipment_date}</p>
            <p>Status: ${shipment.status}</p>
            <p>Actual Arrival Date: ${shipment.actual_arrival_date}</p>
            <p>Estimated Arrival Date: ${shipment.est_arrival_date}</p>
        `);
        mainDiv.append(div);
    });

    body.append(mainDiv);
}

export default displayShipments;