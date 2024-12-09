import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Home = () => {
  const { store, actions } = useContext(Context);
  const contactList = Array.isArray(store.contacts) ? store.contacts : [];

  useEffect(() => {
    actions.loadContacts();
  }, []);

  function handleDelete(id) {
    actions.deleteContact(id);
  }

  
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  }

  return (
    <div className="mainContainer mt-5 ">
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1>Contacts <i className="fa-regular fa-address-book"></i></h1>
              <Link to="/new-contact">
                <i className="fa-solid fa-plus fa-3x"></i>
              </Link>
            </div>
            {contactList.map((contact, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="me-3">
                    {}
                    <div 
                      className="contact-initial"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: getRandomColor(),  
                        color: "#fff",  
                        fontSize: "30px",  
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                      {getInitial(contact.name)} {}
                    </div>
                  </div>
                  <div className="card flex-grow-1">
                    <h5 className="card-title">{contact.name}</h5>
                    <p className="card-text mb-1"><i className="fas fa-home"></i> <strong>Dirección:</strong> {contact.address}</p>
                    <p className="card-text mb-1"><i className="fas fa-phone"></i> <strong>Teléfono:</strong> {contact.phone}</p>
                    <p className="card-text"><i className="fas fa-envelope"></i> <strong>Correo:</strong> {contact.email}</p>
                  </div>
                  <div>
                    <Link className="edit" to={`/edit-contact/${contact.id}`}>
                      
                    <i class="fa-solid fa-user-pen"></i>
                      
                    </Link>
                    <Link
                      onClick={() => handleDelete(contact.id)}>
                      <i className="fas fa-trash"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
