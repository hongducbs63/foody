import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Trangchu from './Trangchu'

function Header(props) {
    const { name } = props
    console.log(name);
    console.log(typeof name);
    const [timkiem, setTimKiem] = useState('')
    const [taikhoan, setTaiKhoan] = useState('')
    // document.querySelector('.link-dang-ki').innerHTML = name

    const HandleOnchange = (e) => {
        console.log(e.target.value)
        setTimKiem(e.target.value);
        props.checkTextSearch(timkiem)
    }
    const HandleClick = () => {
        setTimKiem('')
        console.log(timkiem);
    }
    useEffect(() => {
        if (name.length > 0) {
            document.querySelector('.link-dang-ki').innerHTML = name
        }
        // setTaiKhoan(name)
    })
    // console.log(taikhoan);
    // console.log(document.querySelector('.link.link-dang-ki').textContent);
    return (
        <div>
            <header>
                <div className="baoquanh">
                    <div className="header-tren">
                        <div className="phan">
                            <Link to='/trangchu' className="link"> Trang chủ </Link>
                            <Link to='/sanpham' className="link"> Sản phẩm </Link>
                        </div>

                        <div className="phan">
                            <a href className="link"> Thông báo </a>
                            <Link to='/dangki' className="link "> Đăng kí </Link>
                            <Link to='/dangnhap' className="link link-dang-ki"> Đăng nhập </Link>
                        </div>
                    </div>
                    <div className="header-duoi">
                        <div className="phan1">
                            <img src="//bizweb.dktcdn.net/100/038/419/themes/49902/assets/shop_images_footer.png?1594717586397" alt="" className="logo" />
                        </div>
                        <div className="phan2">
                            <div className="form-timmkiem">
                                <input type="text" placeholder="Tìm kiếm sản phẩm" onChange={(e) => HandleOnchange(e)} value={timkiem} />
                                <button className="nutdongy" type="submit" onClick={() => HandleClick()}>
                                    <i className="fa-solid fa-search" />
                                </button>
                            </div>
                            <div className="duoi-timkiem">
                                <Link to='/lau' className="link">Lẩu</Link>
                                <Link to='/nuong' className="link">Nướng</Link>
                                <Link to='/com' className="link">Cơm</Link>
                                <Link to='/banhmi' className="link">Bánh mì</Link>
                                <Link to='/douong' className="link">Đồ uống</Link>
                            </div>
                        </div>
                        <div className="phan3">
                            <a href className="giohang">
                                <Link to='/giohang' className="fa-solid fa-cart-shopping" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {/* <Trangchu></Trangchu> */}
        </div>
    )
}

export default Header