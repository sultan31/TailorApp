// MyModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {db} from './firebase';
import { collection, addDoc, Timestamp } from "firebase/firestore"; 


const AddModal = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // You can perform any action with the form data here
    console.log('Form submitted:', formData);
    try {
      const result = await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        contactNo: formData.contactNo,
        address: formData.address,
        created: Timestamp.now(),
        is_active:1
      })
      if(result.id)
      {
        console.log('Inserted Successfully!');
      }
      
    } catch (err) {
      alert(err)
    }
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Input Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formContactNo">
            <Form.Label>Contact No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your contact number"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
