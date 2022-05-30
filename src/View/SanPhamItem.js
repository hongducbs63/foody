import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChiTietSanPham from './ChiTietSanPham';

function SanPhamItem(props) {
    // console.log(props.sanpham);
    const { sanpham } = props;
    // console.log(sanpham);
    // console.log(sanpham.name);
    // const [chitietsanpham, setChitietsanpham] = useState({})
    // const HandleCLick = (sanphamItem) => {
    //     setChitietsanpham(sanphamItem);
    //     console.log(sanphamItem);
    // }
    return (
        <div>
            <div className="sanpham-list">
                {
                    sanpham.map((sanphamItem) => {
                        return (<div className="sanpham-item">
                            <Link to={`/chitietsanpham/${sanphamItem.id}`} >
                                <div className="sanpham" >
                                    <div className="yeuthich">Yêu thích</div>
                                    <div className="giamgia">{sanphamItem.giamgia}%</div>
                                    <img src={sanphamItem.avatar} alt="" className="anhdaidien" />
                                    <div className="noidung">
                                        <p className="ten">{sanphamItem.name}</p>
                                        <div className="duoiten">
                                            <div className="phan">
                                                <p className="gia">{parseInt(sanphamItem.Gia).toLocaleString('vi-VN')}đ</p>
                                            </div>
                                            <div className="phan">
                                                <p className="daban">đã bán {sanphamItem.daban}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nut-tuongtu">Mua ngay</div>
                                </div>
                            </Link>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default SanPhamItem