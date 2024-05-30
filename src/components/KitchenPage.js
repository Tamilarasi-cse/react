import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import './KitchenPage.css';

const KitchenPage = ({ items, updateItemAvailability, addItem }) => {
  const { kitchenId } = useParams();
  const [newItem, setNewItem] = useState({ name: '', image: '', isAvailable: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleAddItem = () => {
    addItem(newItem);
    setNewItem({ name: '', image: '', isAvailable: false });
  };

  const handleAvailabilityToggle = (itemId) => {
    const item = items.find((item) => item.id === itemId);
    updateItemAvailability(itemId, !item.isAvailable);
  };

  return (
    <Container>
      <h2>Kitchen {kitchenId}</h2>
      <div className="item-container">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h4>{item.name}</h4>
              <Button
                variant={item.isAvailable ? 'danger' : 'success'}
                onClick={() => handleAvailabilityToggle(item.id)}
              >
                {item.isAvailable ? 'Mark as Unavailable' : 'Mark as Available'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-item-form">
        <h3>Add New Item</h3>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={newItem.image}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button onClick={handleAddItem}>Add Item</Button>
        </Form>
      </div>
    </Container>
  );
};

export default KitchenPage;
