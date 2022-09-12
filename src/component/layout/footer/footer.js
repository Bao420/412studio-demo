import React from "react"

import footerimg from "../../asset/images/footer/footer-img-2.jpg"

import { GoLocation } from "react-icons/go"
import { MdPhone } from "react-icons/md"
import { FiMail, FiInstagram } from "react-icons/fi"
import { FaFacebook } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"


function Footer() {
    return (
        <div className="footer__container">

            <span></span>

            <div className="footer__image">
                <img src={footerimg} alt=""></img>
            </div>

            <div className="footer__content">
                <div className="footer__content-address">
                    <h3>412 Studio</h3>
                    <ul>
                        <li>
                            <a><GoLocation /> 108/45 Võ Duy Ninh, phường 22, Quận Bình Thạnh</a>
                        </li>

                        <li>
                            <a><GoLocation /> 1/6 Lữ Gia, phường 9,TP Đà Lạt </a>
                        </li>

                        <li>
                            <a><MdPhone /> Hotline: 0326 46 1204</a>
                        </li>

                        <li>
                            <a><FiMail />Mail: ndbao420@gmail.com</a>
                        </li>


                    </ul>
                </div>

                <div className="footer__content-service">
                    <h3>Sản Phẩm Dịch Vụ</h3>
                    <ul>
                        <li>
                            <a>Dịch vụ ngày cưới</a>
                        </li>

                        <li>
                            <a>Chụp Album ảnh cưới</a>
                        </li>

                        <li>
                            <a>Mua/bán/cho thuê đầm cưới</a>
                        </li>

                        <li>
                            <a>Chụp hình em bé</a>
                        </li>

                        <li>
                            <a>Chụp ảnh kỷ yếu</a>
                        </li>

                        <li>
                            <a>Chụp ảnh gia đình</a>
                        </li>
                    </ul>
                </div>

                <div className="footer__content-rules">
                    <h3>Điều khoản chính sách</h3>
                    <ul>
                        <li>
                            <a>Điều khoản sử dụng</a>
                        </li>

                        <li>
                            <a>Chính sách bảo mật</a>
                        </li>

                    </ul>
                </div>

            </div>
            <div className="footer__content-icon">
                <a><BsTwitter /></a>
                <a><FiInstagram /></a>
                <a><FaFacebook /></a>
            </div>
        </div>
    )
}

export default Footer;