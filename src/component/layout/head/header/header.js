import React from "react";
import { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';

import { BsPhone } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { BiMap } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"



function Header() {

    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show)
    }


    return (
        <div className="header__container">
            <div className="header__nav">
                <div className="header__nav-info">
                    <a> <BsPhone /> 0326.46.1204 </a>
                    <a> <FiMail /> ndbao420@gmail.com </a>
                    <a> <BiMap /> Hệ thồng cửa hàng </a>
                </div>

                <div className="header__nav-search">
                    <input type='tex' placeholder="Search"></input>
                    <span></span>
                    <button> <AiOutlineSearch /> </button>
                </div>
            </div>

            <div className="header__box">
                {/* <div className="header__box-logo">
                    <h3>412 Studio</h3>
                </div> */}

                <div className="header__box-menu">
                    <ul className="header__menu">
                        <li>
                            <a>Chụp ảnh cưới</a>
                        </li>

                        <li>
                            <a>Áo cưới đẹp</a>
                        </li>

                        <li>
                            <OutsideClickHandler onOutsideClick={() => {
                                setShow(false);
                            }}>

                                <a onClick={handleClick} >Dịch vụ ngày cưới <MdOutlineKeyboardArrowDown />
                                    {show &&
                                        <div className="header__menu-nav" >
                                            <ul >
                                                <li>
                                                    <a>Pre-Wedding</a>
                                                </li>

                                                <li>
                                                    <a>Đưa đón</a>
                                                </li>

                                                <li>
                                                    <a>Fly-Cam</a>
                                                </li>

                                            </ul>

                                        </div>
                                    }
                                </a>
                            </OutsideClickHandler>

                        </li>

                        <div className="header__menu-icon">
                            <button><BsCart2 /></button>
                            <button><BiUser /></button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;