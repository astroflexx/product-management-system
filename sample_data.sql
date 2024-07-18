USE product_management_system;

-- Insert rows into customers table
INSERT INTO customers (first_name, last_name, phone_number, alt_phone_number, address, email)
VALUES
('John', 'Doe', '1234567890', '0987654321', '123 Elm Street', 'john.doe@example.com'),
('Jane', 'Smith', '1234567891', '0987654322', '456 Oak Avenue', 'jane.smith@example.com'),
('Alice', 'Johnson', '1234567892', '0987654323', '789 Pine Road', 'alice.johnson@example.com'),
('Bob', 'Brown', '1234567893', '0987654324', '101 Maple Drive', 'bob.brown@example.com'),
('Charlie', 'Davis', '1234567894', '0987654325', '202 Birch Lane', 'charlie.davis@example.com');

-- Insert rows into suppliers table
INSERT INTO suppliers (name, phone_number, address, email)
VALUES
('Supplier A', '1234567890', '111 Industrial Way', 'contact@supplierA.com'),
('Supplier B', '1234567891', '222 Business Blvd', 'contact@supplierB.com'),
('Supplier C', '1234567892', '333 Commerce Street', 'contact@supplierC.com'),
('Supplier D', '1234567893', '444 Trade Avenue', 'contact@supplierD.com'),
('Supplier E', '1234567894', '555 Market Road', 'contact@supplierE.com');

-- Insert rows into shipments table
INSERT INTO shipments (shipment_date, status, actual_arrival_date, est_arrival_date)
VALUES
('2024-07-20', 'Shipped', '2024-07-22', '2024-07-25'),
('2024-07-21', 'Delivered', '2024-07-23', '2024-07-26'),
('2024-07-22', 'Shipped', '2024-07-24', '2024-07-27'),
('2024-07-23', 'Delivered', '2024-07-25', '2024-07-28'),
('2024-07-24', 'Shipped', '2024-07-26', '2024-07-29');

-- Insert rows into orders table
INSERT INTO orders (order_date, order_time, delivery_date, quantity_ordered, total_amount, shipment_id, supplier_id, customer_id)
VALUES
('2024-07-01', '10:00:00', '2024-07-05', 10, 100.00, 1, 1, 1),
('2024-07-02', '11:00:00', '2024-07-06', 20, 200.00, 2, 2, 2),
('2024-07-03', '12:00:00', '2024-07-07', 30, 300.00, 3, 3, 3),
('2024-07-04', '13:00:00', '2024-07-08', 40, 400.00, 4, 4, 4),
('2024-07-05', '14:00:00', '2024-07-09', 50, 500.00, 5, 5, 5);

-- Insert rows into products table
INSERT INTO products (name, description, quantity_available, supplier_id, order_id)
VALUES
('Product A', 'Description for Product A', 100, 1, 1),
('Product B', 'Description for Product B', 200, 2, 2),
('Product C', 'Description for Product C', 300, 3, 3),
('Product D', 'Description for Product D', 400, 4, 4),
('Product E', 'Description for Product E', 500, 5, 5);
