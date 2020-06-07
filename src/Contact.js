import React from "react";
import { Form, Button } from "react-bootstrap";

import "./Contact.css"

const Contact = () => {
  return (
      <>
      <center><h1 className="about-title">Contact Me</h1></center> 
       <br/>
   <div className="about-container">
       <div className="row">
    <div className="col-7 offset-3">
      <div className="form-container">
        <div className="form-inside">
          <Form action="mailto:satya.devabhaktineni999.com"method="POST">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="contact-title">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="contact-title">Email address</Form.Label>
              <Form.Control
                type="email"
                name="_replyto"
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="contact-title">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="message"
                required
                placeholder="Your Message"
              />
            </Form.Group>
            <button className="btn-1" type="submit">
              Submit
            </button>
          </Form>
        </div>
        </div>
      </div>
      
      </div>
    </div>
    </>
  );
};
export default Contact;