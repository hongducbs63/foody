import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import './Giohang.css'
function GioHang(props) {
    const { sanpham } = props;
    // const [soluong, setSoluong] = useState(1);
    // console.log(sanpham);
    // const { id } = useParams();
    const [dathang, setDathang] = useState([]);
    const [gia, setGia] = useState(0);
    let navigate = useNavigate();
    const [soluong, setSoluong] = useState(0)

    useEffect(() => {
        effect()
        // setDathang([JSON.parse(localStorage.getItem('id1'))])
    }, [soluong])
    async function effect() {
        // let json = await axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/giohang")
        setDathang([...JSON.parse(localStorage.getItem('giohang'))]);
        // console.log(json.data, 'ándasmda');
    }

    // console.log({ sanpham.Gia });
    const handleClickSoLuongTang = (dathangy) => {
        // console.log(giohang[dathangy.id - 1]);
        console.log(dathangy);
        console.log(parseInt(dathangy.id) - 1);
        let giohangx = JSON.parse(localStorage.getItem('giohang'));
        // console.log(giohang[parseInt(dathangy.id) - 1].soluong + 1);
        console.log(typeof giohangx);
        giohangx.forEach(((item, index) => {
            if (item.id == dathangy.id && item.name === dathangy.name) {
                giohangx[index].soluong = parseInt(giohangx[index].soluong) + 1
                localStorage.setItem("giohang", JSON.stringify(giohangx));
            }
        }))
        // console.log(giohangx[parseInt(dathangy.id) - 1].soluong);
        setSoluong(soluong + 1);
    }
    const handleClickSoLuongGiam = (dathangy) => {
        let giohangx = JSON.parse(localStorage.getItem('giohang'));
        // console.log(giohang[dathangy.id - 1].soluong + 1);
        if (parseInt(dathangy.soluong) > 1) {

            giohangx.forEach(((item, index) => {
                if (item.id == dathangy.id && item.name === dathangy.name) {
                    giohangx[index].soluong = parseInt(giohangx[index].soluong) - 1
                    localStorage.setItem("giohang", JSON.stringify(giohangx));
                }
            }))
        }
        setSoluong(soluong - 1)
    }
    const HienThiThanhToan = (dl) => {
        async function postData(url, data) {
            // Default options are marked with *
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }

        postData('https://6294306e089f87a57aca2e8e.mockapi.io/thanhtoan', dl)
            .then(response => {
                return navigate('/thanhtoan')

            })

        console.log('san[hasnhdsbfchsd');
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
                                                    <p className="gia">{parseInt(dathangy.Gia).toLocaleString('vi-VN')}đ</p>
                                                    <button className="them" onClick={() => handleClickSoLuongTang(dathangy)}>+</button>
                                                    <button className="them" onClick={() => handleClickSoLuongGiam(dathangy)}>-</button>

                                                    <p className="soluong">số lượng : {dathangy.soluong}</p>
                                                    <button className="dathang" onClick={() => HienThiThanhToan(dathangy)}>Đặt hàng</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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