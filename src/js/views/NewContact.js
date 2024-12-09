import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "./Form";

export const NewContact = () => {

  const [contactData, setContactData] = useState({ name: "", phone: "", email: "", address: "" });
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    actions.handleChange(e, contactData, setContactData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.createContact(contactData);
    navigate("/");
  };

  return (
    <div className="containerForm text-center mt-5 pt-3">
      <h1>Add new contact</h1>
      <Form contactData={contactData} handleChange={handleChange} onSubmit={handleSubmit} buttonLabel="Crear Usuario" />
    </div>
  );
};