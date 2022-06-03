import React from 'react'
import GoiY from './GoiY'
// import { Routes, Route, Link } from 'react-router-dom'
// import SanPham from './SanPham'
// import GioHang from './GioHang'
// import ChiTietSanPham from './ChiTietSanPham'
function Trangchu(props) {
    const { sanpham, nuong, com, banhmi, douong } = props
    return (
        <div>
            <main className="trang-chu noidung-trang">
                <div className="baoquanh">
                    <div className="danhmuc">
                        <h4 className="tieude">DANH MỤC</h4>
                        <div className="danhmuc-list">
                            <div className="danhmuc-item">
                                <img src="https://images.foody.vn/res/g75/747170/prof/s640x400/foody-upload-api-foody-mobile-1-jpg-180606103333.jpg" alt="" className="anh" />
                                <h4 className="ten">Lẩu</h4>
                            </div>
                            <div className="danhmuc-item">
                                <img src="https://images.foody.vn/res/g66/654437/prof/s640x400/foody-upload-api-foody-mobile-suon-10-jpg-181121104208.jpg" alt="" className="anh" />
                                <h4 className="ten">Nướng</h4>
                            </div>
                            <div className="danhmuc-item">
                                <img src="https://images.foody.vn/res/g101/1003571/prof/s640x400/file_restaurant_photo_v08c_16104-b4a2f411-210112111415.jpeg" alt="" className="anh" />
                                <h4 className="ten">Cơm</h4>
                            </div>
                            <div className="danhmuc-item">
                                <img src="https://images.foody.vn/res/g16/152318/prof/s640x400/foody-upload-api-foody-mobile-bm-jpg-181018172336.jpg" alt="" className="anh" />
                                <h4 className="ten">Bánh mì</h4>
                            </div>
                            <div className="danhmuc-item">
                                <img src="https://bizweb.dktcdn.net/thumb/large/100/038/419/products/2518068breakfastfruitstrawberr-0191326f-27a1-4dd5-aadb-bfb69ec39df3.jpg?v=1456478319627" alt="" className="anh" />
                                <h4 className="ten">Đồ Uống</h4>
                            </div>

                        </div>
                    </div>
                    <div className="hop-tieude">
                        <h4 className="tieude">GỢI Ý HÔM NAY</h4>
                    </div>
                    <div className="sanpham-list">
                        <GoiY sanpham={sanpham} nuong={nuong} com={com} banhmi={banhmi} douong={douong}></GoiY>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Trangchu