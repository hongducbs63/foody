import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
function GioHang(props) {
    const { sanpham } = props;
    const [soluong, setSoluong] = useState(1);
    // console.log(sanpham);
    // const { id } = useParams();
    const [dathang, setDathang] = useState([]);
    const [gia, setGia] = useState(0);

    useEffect(() => {
        // setDathang([JSON.parse(localStorage.getItem('id1'))])
        async function effect() {
            let json = await axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/giohang")
            setDathang(json.data);
            console.log(json.data);
        }
        effect()
    }, [dathang])
    // console.log({ sanpham.Gia });
    const handleClickSoLuongTang = () => {
        setSoluong(soluong + 1);
        setGia(gia + parseInt(dathang.Gia));
    }
    const handleClickSoLuongGiam = () => {
        if (soluong > 1) {
            setGia(gia + parseInt(dathang.Gia));
            setSoluong(soluong - 1);
        }
    }
    console.log(dathang);
    return (
        <div>
            {
                dathang.map((dathangy) => {
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
                                                    <img src={dathangy.avatar} alt="" />
                                                </div>
                                                <div className="box-sanpham">
                                                    <p className="tensanpham">{dathangy.name}</p>
                                                    <p className="motangan">
                                                        {dathangy.mota}
                                                    </p>
                                                </div>
                                                <div className="box-thongtin">
                                                    <p className="gia">{(parseInt(dathangy.Gia) * soluong).toLocaleString('vi-VN')}đ</p>
                                                    <button className="them" onClick={() => handleClickSoLuongTang()}>+</button>
                                                    <button className="them" onClick={() => handleClickSoLuongGiam()}>-</button>

                                                    <p className="soluong">số lượng : {soluong}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="phanphai">
                                        <div className="box-thanhtoan">
                                            <h4 className="tieude">Thông tin đơn hàng</h4>
                                            <p className="tongtien">
                                                Tổng tiền : <span className="tien">{parseInt(dathangy.Gia).toLocaleString('vi-VN')}đ</span>
                                            </p>
                                            <div className="thongtin-item">
                                                <p className="tieude-thongtin">Họ tên</p>
                                                <input type="text" />
                                            </div>
                                            <div className="thongtin-item">
                                                <p className="tieude-thongtin">Email</p>
                                                <input type="text" />
                                            </div>
                                            <div className="thongtin-item">
                                                <p className="tieude-thongtin">Password</p>
                                                <input type="text" />
                                            </div>
                                            <button className="dathang nut">Đặt Hàng</button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </main>
                    )
                })
            }


        </div>
    )
}

export default GioHang