import React from "react";

function BodyContact() {
    return (
        <div className="body__contact-container">
            <h5>Contact Us</h5>
            <div className="body__contact-box">
                <div className="body__contact-head">
                    <div className="body__contact-name">
                        <p>Name</p>
                        <input type="text"></input>
                    </div>
                    <div className="body__contact-number">
                        <p>Phone Number</p>
                        <input type="text"></input>
                    </div>
                </div>

                <div className="body__contact-body">
                    <div className="body__contact-gmail">
                        <p>Gmail</p>
                        <input type="text"></input>
                    </div>
                    <div className="body__contact-mess">
                        <p>Message</p>
                        <input type="text"></input>
                    </div>
                </div>

                <div className="body__contact-footer">
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
};

export default BodyContact;