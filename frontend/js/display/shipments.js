function displayShipments(shipments) {
    let body = $('body');

    body.empty();

    let container = $('<div>').addClass('entity-container');
    let header = $('<div>').addClass('entity-header').append(
        $('<h2>').text('ALL SHIPMENTS:')
    );

    container.append(header);

    shipments.forEach(shipment => {
        let card = $('<div>').addClass('entity-card');

        card.append(
            $('<h3>').text(`Shipment ID: ${shipment.shipment_id}`)
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Shipment Date:'),
                $('<span>').text(shipment.shipment_date)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Status:'),
                $('<span>').text(shipment.status)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Estimated Arrival Date:'),
                $('<span>').text(shipment.est_arrival_date)
            )
        );

        card.append(
            $('<div>').addClass('detail').append(
                $('<label>').text('Actual Arrival Date:'),
                $('<span>').text(shipment.actual_arrival_date)
            )
        );

        container.append(card);
    });

    body.append(container);
}

export default displayShipments;
