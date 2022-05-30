import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ThanhToan.css'
function ThanhToan() {
    const [thanhtoan, setThanhToan] = useState([])
    useEffect(() => {
        effect()
        // setDathang([JSON.parse(localStorage.getItem('id1'))])
    }, [])
    async function effect() {
        let json = await axios.get("https://6294306e089f87a57aca2e8e.mockapi.io/thanhtoan")
        setThanhToan(json.data);
        console.log(json.data);
    }
    return (
        <div>
            {thanhtoan.map((item) => {
                return (

                    <main className="trang-gio-hang noidung-trang">
                        <div className="baoquanh">
                            {/* <div className="tieude-trang">
                                    Giỏ hàng
                                </div> */}
                            <div className="chiacot">
                                <div className="phantrai">
                                    <div className="giohang-list">

                                        <div className="giohang-item">
                                            <div className="avatar">
                                                <img src={item.avatar} alt="" />
                                            </div>
                                            <div className="box-sanpham">
                                                <p className="tensanpham">{item.name}</p>
                                            </div>
                                            <div className="box-thongtin">
                                                <p className="gia">{(parseInt(item.Gia)).toLocaleString('vi-VN')}đ</p>

                                                <p className="soluong">số lượng : {item.soluong}</p>
                                                {/* <button className="dathang" onClick={() => HienThiThanhToan(dathangy)}>Đặt hàng</button> */}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="thanhtien">

                                    <p className="tonggia">{(parseInt(item.Gia) * parseInt(item.soluong)).toLocaleString('vi-VN')}đ</p>

                                </div>
                            </div>
                        </div>
                    </main>

                )
            })}
        </div>

    )
}

export default ThanhToan