import React from "react";

import { FcApproval, FcLike } from "react-icons/fc"

import svimg1 from "../../../../asset/images/body/bodyService/images/service-1.jpg"
import svvideo1 from "../../../../asset/images/body/bodyService/video/sv-prewd-1.mp4"

function BodyService() {
    return (
        <div className="body__service-container">
            <p className="body__service-title">Service</p>
            <div className="body__service-content">
                <div className="service__content-info">
                    <h3>Sản phẩm nhận được</h3>
                    <p> -Trang phục: váy + vest + trang phục tự do. </p>
                    <p> -Make-up và làm tóc theo trang phục. </p>
                    <p> -Miễn phí áo dài, hỷ phục hoặc Việt Phục ngày chụp. </p>
                    <p> -Hoa cầm tay và phụ kiện đi kèm. </p>
                    <p> -Album hình cưới chất liệu photobook cao cấp. </p>
                    <p> -Hình lớn 60x90 ép gỗ cao cấp. </p>
                    <p> -10 hình trang trí bàn tiệc 13x18 ép lụa. </p>
                    <p> -Slide trình chiếu nhà hàng. </p>
                    <p> -Xe hơi di chuyển ngày chụp. </p>
                    <p> -Phí địa điểm chụp (vé vào cổng phim trường) </p>
                    <div className="service__content-promotion">
                        <p>{<FcApproval />} Tặng voucher giảm 10% khi thuê đồ.</p>
                        <p>{<FcApproval />} Tặng voucher giảm giá 2.000.000đ.</p>
                        <p>{<FcApproval />} Tặng vouchẻ giảm giá 2.500.000đ nhẫn cưới.</p>
                        <p>*Hỗ trợ tư vấn miễn phí!</p>
                    </div>
                </div>

                <span className="body__service-span"></span>

                <div className="service__box-shuttle">
                    <img src={svimg1}></img>
                </div>
            </div>

            <div className="body__service-box">
                <h3>Clip Pre-Wedding</h3>
                <div className="service__box-prewedding">
                    <video controls autostart={true} autoPlay={true} width="660" height="460" type="video/mp4" src={svvideo1}></video>
                    <div className="service__box-prewedding-btn-booknow">
                        <p> <FcLike /> Được tặng clip Pre-Wedding và fly cam trong lễ cưới</p>
                        <button>Book Now</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default BodyService;