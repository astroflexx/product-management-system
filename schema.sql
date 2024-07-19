-- CREATE DATABASE product_management_system;
USE product_management_system;

-- Create customers table
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    alt_phone_number VARCHAR(20),
    address VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Create suppliers table
CREATE TABLE suppliers (
    supplier_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Create shipments table
CREATE TABLE shipments (
    shipment_id INT AUTO_INCREMENT PRIMARY KEY,
    shipment_date DATE NOT NULL,
    status ENUM('Shipped', 'Delivered') NOT NULL,
    actual_arrival_date DATE,
    est_arrival_date DATE NOT NULL
);

-- Create orders table
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE NOT NULL,
    order_time TIME NOT NULL,
    delivery_date DATE NOT NULL,
    quantity_ordered INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    shipment_id INT,
    supplier_id INT,
    customer_id INT,
    FOREIGN KEY (shipment_id) REFERENCES shipments(shipment_id) ON DELETE CASCADE,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);

-- Create products table
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    quantity_available INT NOT NULL,
    supplier_id INT,
    order_id INT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id) ON DELETE CASCADE,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE
);