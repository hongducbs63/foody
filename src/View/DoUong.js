import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DoUongItem from './DoUongItem'
import SanPhamItem from './SanPhamItem'

function DoUong(props) {
    const { douong } = props
    const { sanpham } = props
    const [timkiem, setTimKiem] = useState('')
    const HandleOnchange = (e) => {
        console.log(e.target.value)
        setTimKiem(e.target.value);

    }
    const HandleOnclick = () => {
        props.checkTextSearchDoUong(timkiem)
        setTimKiem('')
    }
    return (
        <div>
            <main className="danhsach-sanpham noidung-trang">
                <div className="baoquanh">
                    <div className="chiacot">
                        <div className="phantrai">
                            <div className="box-danhmuc">
                                <h4 className="tieude">
                                    Danh mục món ăn
                                </h4>
                                <div className="danhmuc-item">
                                    <Link to='/lau' className="link hoatdong" href>Lẩu</Link>
                                </div>
                                <div className="danhmuc-item">
                                    <Link to='/nuong' className="link" href>Nướng</Link>
                                </div>
                                <div className="danhmuc-item">
                                    <Link to='/com' className="link" href>Cơm</Link>
                                </div>
                                <div className="danhmuc-item">
                                    <Link to='/banhmi' className="link" href>Bánh mì</Link>
                                </div>
                                <div className="danhmuc-item">
                                    <Link to='/douong' className="link" href>Đồ uống</Link>
                                </div>
                            </div>
                            <div className="box-sanpham-noibat">
                            </div>
                        </div>
                        <div className="phanphai">
                            <div className="hop-tieude">
                                <h4 className="tieude">Tất cả sản phẩm</h4>
                            </div>
                            <div className="boloc">
                                <div className="sapxep">
                                    <select className="form-control" name id>
                                        <option>Giá cao đến thấp</option>
                                        <option>Giá thấp đến cao</option>
                                        <option>Ký tự a-z</option>
                                        <option>Ký tự z-a</option>
                                    </select>
                                </div>
                                <div className="timtheoten">
                                    <input type="text" placeholder='Tìm kiếm sản phẩm' value={timkiem} onChange={(e) => HandleOnchange(e)} />
                                </div>
                                <button className="nut-tim" onClick={() => HandleOnclick()}>Tìm kiếm</button>
                            </div>
                            <DoUongItem douong={douong}></DoUongItem>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DoUong