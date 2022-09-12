import React from "react";


import image_1 from "../../../asset/images/bodyHead/bodyHead-1.jpg"
import image_2 from "../../../asset/images/bodyHead/bodyHead-2.jpg"
import image_3 from "../../../asset/images/bodyHead/bodyHead-3.jpg"


function BodyHead() {
    return (
        <div className="bodyHead__box-image-container">
            <div className="bodyHead__box-image">
                <img src={image_1}></img>
            </div>
            <div className="bodyHead__box-image">
                <img src={image_2}></img>
            </div>
            <div className="bodyHead__box-image">
                <img src={image_3}></img>
            </div>
        </div>


    )
}

export default BodyHead;