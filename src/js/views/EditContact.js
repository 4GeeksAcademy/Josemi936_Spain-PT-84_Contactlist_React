import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "./Form";

export const EditContact = () => {
  const { id } = useParams();
  const { actions } = useContext(Context);
  const [contactData, setContactData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.id]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    actions.editContact(id, contactData);
    navigate("/");
  };

  return (
    <div className="container text-center mt-4">
      <h2>Editing Contact</h2>
      <Form contactData={contactData} handleChange={handleChange} onSubmit={handleSave} buttonLabel="Guardar Cambios" />
    </div>
  );
};