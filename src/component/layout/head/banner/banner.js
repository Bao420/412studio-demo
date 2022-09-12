import React from "react";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

import dataBanner from "./dataBanner"

import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs"
import { GiLipstick } from "react-icons/gi"
import { FaCameraRetro } from "react-icons/fa"
import { RiUserStarFill } from "react-icons/ri"

function Banner() {

    const [current, setCurrent] = useState(0);

    const nextImg = () => {
        setCurrent(current === dataBanner.length - 1 ? 0 : current + 1);
    };

    const prevImg = () => {
        setCurrent(current === dataBanner.length - 1 ? 0 : current + 1);
    };


    return (
        <div className="banner__container">
            <div className="banner__carousel">
                <div className="header__box-logo">
                    <h3>412 studio</h3>
                </div>
                <button className="carousel__btn-right" onClick={nextImg}>
                    <BsArrowBarRight />
                </button>
                <button className="carousel__btn-left" onClick={prevImg}>
                    <BsArrowBarLeft />
                </button>

                {dataBanner.map((slide, index) => {
                    return (
                        <div className="carousel__image"
                            // className={index === current ? 'banner active' : 'banner'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.urls} alt="" />
                            )}
                        </div>

                    )
                })};

            </div>

            <div className="Banner__social">
                <ul>
                    <Tippy content="Modern Camera">
                        <li><FaCameraRetro /></li>
                    </Tippy>

                    <Tippy content="Make-up Professionally">
                        <li><GiLipstick /></li>
                    </Tippy>

                    <Tippy content="E-kip Professionally">
                        <li><RiUserStarFill /></li>
                    </Tippy>
                </ul>
            </div>
        </div>

    );
}

export default Banner;