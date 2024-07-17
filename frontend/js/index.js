import fetchCustomers from './ajax/customers.js';
import fetchOrders from './ajax/orders.js';
import fetchProducts from './ajax/products.js';
import fetchShipments from './ajax/shipments.js';
import fetchSuppliers from './ajax/suppliers.js';

$(document).ready(function() {
    $('.fetchCustomers').on('click', fetchCustomers);
    $('.fetchOrders').on('click', fetchOrders);
    $('.fetchProducts').on('click', fetchProducts);
    $('.fetchShipments').on('click', fetchShipments);
    $('.fetchSuppliers').on('click', fetchSuppliers);
});