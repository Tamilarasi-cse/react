import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';

const initialOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    items: [
      { id: 1, name: 'Pizza' },
      { id: 2, name: 'Burger' },
    ],
    total: 18,
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    items: [
      { id: 3, name: 'Pasta' },
    ],
    total: 12,
  },
];

const OrderPage = () => {
  const { kitchenId } = useParams();
  const [orders, setOrders] = useState(initialOrders);

  return (
    <Container className="mt-5">
      <h2>Kitchen {kitchenId} - Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.items.map((item) => item.name).join(', ')}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderPage;
