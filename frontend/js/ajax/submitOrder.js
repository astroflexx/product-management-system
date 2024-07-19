function submitOrder(event) {
    event.preventDefault();

    const formData = {
        order_date: $('#order-date').val(),
        order_time: $('#order-time').val(),
        delivery_date: $('#delivery-date').val(),
        quantity_ordered: $('#quantity-ordered').val(),
        total_amount: $('#total-amount').val(),
        shipment_id: $('#shipment-id').val(),
        supplier_id: $('#supplier-id').val(),
        customer_id: $('#customer-id').val()
    };

    $.ajax({
        url: 'http://localhost:3000/orders',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
            alert('Order added successfully!');
            $('#order-form')[0].reset();
        },
        error: function(xhr, status, error) {
            console.error('Error adding order:', error);
            alert('Failed to add order.');
        }
    });
}

export default submitOrder;
