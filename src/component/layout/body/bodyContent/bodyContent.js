import React from "react";
import BodyWedding from "../bodyContent/bodyWedding/bodyWedding"
import BodyDress from "../bodyContent/bodyDress/bodyDress"
import BodyContact from "../bodyContact/bodyContact";
import BodyService from "../bodyContent/bodyService/bodyService"
import { Routes, Link, Route } from "react-router-dom"

function BodyContent() {
    return (
        <div className="bodyContent-container">
            <div className="bodyContent__btn-router">
                <Link to="/" className="btn__wedding-link"><p >Wedding Book</p></Link>
                <span className="body__content-span"></span>
                <Link to="/dress" className="btn__dress-link"><p >Nice Dress</p></Link>
            </div>
            <Routes>
                <Route path="/" element={<BodyWedding />} />
                <Route path="/dress" element={<BodyDress />} />
            </Routes>
            <BodyService />
            <BodyContact />
        </div>
    );
}

export default BodyContent;