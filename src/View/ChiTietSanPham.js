import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
// import './_chitietsanpham.scss'
function ChiTietSanPham(props) {
    const { sanpham } = props;
    console.log(sanpham);
    const { id } = useParams();
    // console.log(id);
    const [chitiet, setChitiet] = useState({});

    const [check, setCheck] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        const chitieta = sanpham.filter(x => x.id == id)[0];
        // console.log(chitieta);
        // if(chitieta.)
        console.log(chitieta);
        // if(chitieta.soluong)
        console.log(chitieta?.soluong);
        setChitiet({ ...chitieta });
    }, [])
    useEffect(() => {
        // effect()
        // setDathang([JSON.parse(localStorage.getItem('id1'))])

    }, [])
    // async function effect() {
    //     let json = await axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/giohang")
    //     setCheck(json.data);
    //     console.log(json.data);
    // }
    const HienThi = (chitiet) => {
        // if (check.find(c => c.id == id)) {
        //     const requestOptions = {
        //         method: 'PUT',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             soluong: parseInt(chitiet.soluong) + 1
        //             // Gia: parseInt(dathangy.Gia).
        //         })
        //     };
        //     fetch(`https://6284ff583060bbd34742d2f3.mockapi.io/giohang/${id}`, requestOptions)
        //         .then(response => {
        //             console.log('sdjfdsbfsd', parseInt(chitiet.soluong) + 1);
        //             return navigate('/giohang')
        //         })
        // }
        // else {
        //     async function postData(url, data) {
        //         // Default options are marked with *
        //         const response = await fetch(url, {
        //             method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //             mode: 'cors', // no-cors, *cors, same-origin
        //             cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //             credentials: 'same-origin', // include, *same-origin, omit
        //             headers: {
        //                 'Content-Type': 'application/json'
        //                 // 'Content-Type': 'application/x-www-form-urlencoded',
        //             },
        //             redirect: 'follow', // manual, *follow, error
        //             referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //             body: JSON.stringify(data) // body data type must match "Content-Type" header
        //         });
        //         return response.json(); // parses JSON response into native JavaScript objects
        //     }

        //     postData('https://6284ff583060bbd34742d2f3.mockapi.io/giohang', chitiet)

        //     console.log('san[hasnhdsbfchsd');
        // }
        var giohang = JSON.parse(localStorage.getItem('giohang'));
        if (giohang) {
            let ok = 0;
            giohang.forEach((product) => {
                if (product.name === chitiet.name) {
                    ok = 1;
                    product.soluong = parseInt(product.soluong) + 1
                }
            })
            if (ok == 0) {
                giohang.push(chitiet);

            }
        } else {
            giohang = [chitiet];
        }
        localStorage.setItem("giohang", JSON.stringify(giohang));
        console.log(JSON.parse(localStorage.getItem('giohang')));
        return navigate('/giohang')
    }

    return (
        <div>

            <main className="chi-tiet-sanpham noidung-trang">
                <div className="tongquat baoquanh">
                    <div className="phan-trai">
                        <div className="box-anh">
                            <div className="anh-to">
                                <img src={chitiet.avatar} alt="" />
                            </div>
                            <div className="anh-duoi">
                                <div className="anh-list">
                                    <div className="anh-item">
                                        <img src={chitiet.avatar} alt="" />
                                    </div>
                                    <div className="anh-item">
                                        <img src={chitiet.avatar} alt="" />
                                    </div>
                                    <div className="anh-item">
                                        <img src={chitiet.avatar} alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="benduoi" />
                    </div>
                    <div className="phan-phai">
                        <h4 className="ten-sanpham">{chitiet.name}</h4>
                        <div className="box-danhgia">
                            <div className="danhgia">
                                <span className="ngoisao hoatdong">
                                    <i className="fa-solid fa-star" />
                                </span>
                                <span className="ngoisao hoatdong">
                                    <i className="fa-solid fa-star" />
                                </span>
                                <span className="ngoisao hoatdong">
                                    <i className="fa-solid fa-star" />
                                </span>
                                <span className="ngoisao hoatdong">
                                    <i className="fa-solid fa-star" />
                                </span>
                                <span className="ngoisao">
                                    <i className="fa-solid fa-star" />
                                </span>
                            </div>
                        </div>
                        <div className="box-gia">
                            <div className="gia">{parseInt(chitiet.Gia).toLocaleString('vi-VN')}đ</div>
                        </div>
                        <div className="soluong">
                            <span className="chonsoluong">Chọn số lượng : </span>
                            <form className="soluong-form">
                                <div className="soluong-nut" id="giam">-</div>
                                <input type="number" id="soluong" defaultValue={0} />
                                <div className="soluong-nut" id="tang">+</div>
                            </form>
                        </div>
                        <div className="box-nut">
                            {/* <button className="nut-them nut">Thêm vào giỏ hàng</button> */}
                            <button className="nut-muangay nut" onClick={() => HienThi(chitiet)}  >Thêm vào giỏ hàng</button >
                        </div>
                        <hr />
                        <p>Leo Food chúc quý khách ngon miếng</p>
                    </div>
                </div>
                <div className="chitiet baoquanh">
                    <h4 className="tieude">MÔ TẢ SẢN PHẨM</h4>
                    <p className="noidung">
                        {chitiet.mota}
                    </p>
                </div>
            </main>
        </div>
    )
}

export default ChiTietSanPham
