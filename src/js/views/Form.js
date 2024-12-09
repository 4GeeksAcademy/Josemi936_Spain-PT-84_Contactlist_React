import React from "react";
import { Link } from "react-router-dom";

export const Form = ({ contactData, handleChange, onSubmit, }) => {
    return (
        <div className="containerForm ">
        <form onSubmit={onSubmit}>
        <div className="d-flex justify-content-between align-items-center mb-4 pt-5">
        <Link to="/">
                <i class="fa-solid fa-arrow-left ms-5 fa-3x"></i>
                </Link>
                <button type="submit" className="btn btn-primary me-5">save</button>
                
            </div>
            <div className="mb-3 col-11 ">
                <label htmlFor="name" className="form-label text-start d-block">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Full name" value={contactData.name || ""} onChange={handleChange} />
            </div>
            <div className="mb-3 col-11">
                <label htmlFor="phone" className="form-label text-start d-block">Tlf</label>
                <input type="text" id="phone" className="form-control" placeholder="Phone number" value={contactData.phone || ""} onChange={handleChange} />
            </div>
            <div className="mb-3 col-11">
                <label htmlFor="email" className="form-label text-start d-block">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Email@4Geeks.com" value={contactData.email || ""} onChange={handleChange} />
            </div>
            <div className="mb-3 col-11 pb-5">
                <label htmlFor="address" className="form-label text-start d-block">Address</label>
                <input type="text" id="address" className="form-control" placeholder="Address" value={contactData.address || ""} onChange={handleChange} />
            </div>
            
        </form>
        </div>
    );
};