import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';


const UserPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching menu items from backend
    const items = JSON.parse(localStorage.getItem('menuItems')) || [];
    setMenuItems(items);
  }, []);

  const handleOrderItem = (item) => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(item);
    localStorage.setItem('orders', JSON.stringify(orders));
    navigate('/order');
  };

  return (
    <Container>
      <Row>
        {menuItems.filter(item => item.available).map((item, index) => (
          <Col key={index} md={4}>
            <div className="menu-item">
              <img src={item.image} alt={item.name} style={{ width: '100%' }} />
              <h3>{item.name}</h3>
              <Button onClick={() => handleOrderItem(item)}>Order</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserPage;
