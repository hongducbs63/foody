import React from 'react'
import { Link } from 'react-router-dom'

function GoiY(props) {
    const { sanpham, nuong, com, banhmi, douong } = props
    return (
        <>
            {
                sanpham?.map((item) => {
                    return (

                        <div className="sanpham-item">
                            <Link to={`/chitietsanpham/${item.id}`} >
                                <div className="sanpham">
                                    <div className="yeuthich">Yêu thích</div>
                                    <div className="giamgia">{item.giamgia}%</div>
                                    <img src={item.avatar} alt="" className="anhdaidien" />
                                    <div className="noidung">
                                        <p className="ten">{item.name}</p>
                                        <div className="duoiten">
                                            <div className="phan">
                                                <p className="gia">{item.Gia.toLocaleString('vi-VN')}</p>
                                            </div>
                                            <div className="phan">
                                                <p className="daban">đã bán {item.daban}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nut-tuongtu">Mua ngay</div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            {
                nuong?.map((item) => {
                    return (

                        <div className="sanpham-item">
                            <Link to={`/chitietsanpham/${item.id}`} >
                                <div className="sanpham">
                                    <div className="yeuthich">Yêu thích</div>
                                    <div className="giamgia">{item.giamgia}%</div>
                                    <img src={item.avatar} alt="" className="anhdaidien" />
                                    <div className="noidung">
                                        <p className="ten">{item.name}</p>
                                        <div className="duoiten">
                                            <div className="phan">
                                                <p className="gia">{item.Gia.toLocaleString('vi-VN')}</p>
                                            </div>
                                            <div className="phan">
                                                <p className="daban">đã bán {item.daban}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nut-tuongtu">Mua ngay</div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            {
                com?.map((item) => {
                    return (

                        <div className="sanpham-item">
                            <Link to={`/chitietsanpham/${item.id}`} >
                                <div className="sanpham">
                                    <div className="yeuthich">Yêu thích</div>
                                    <div className="giamgia">{item.giamgia}%</div>
                                    <img src={item.avatar} alt="" className="anhdaidien" />
                                    <div className="noidung">
                                        <p className="ten">{item.name}</p>
                                        <div className="duoiten">
                                            <div className="phan">
                                                <p className="gia">{item.Gia.toLocaleString('vi-VN')}</p>
                                            </div>
                                            <div className="phan">
                                                <p className="daban">đã bán {item.daban}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nut-tuongtu">Mua ngay</div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            {
                banhmi?.map((item) => {
                    return (

                        <div className="sanpham-item">
                            <Link to={`/chitietsanpham/${item.id}`} >
                                <div className="sanpham">
                                    <div className="yeuthich">Yêu thích</div>
                                    <div className="giamgia">{item.giamgia}%</div>
                                    <img src={item.avatar} alt="" className="anhdaidien" />
                                    <div className="noidung">
                                        <p className="ten">{item.name}</p>
                                        <div className="duoiten">
                                            <div className="phan">
                                                <p className="gia">{item.Gia.toLocaleString('vi-VN')}</p>
                                            </div>
                                            <div className="phan">
                                                <p className="daban">đã bán {item.daban}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nut-tuongtu">Mua ngay</div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            {
                douong?.map((item) => {
                    return (

                        <div className="sanpham-item">
                            <Link to={`/chitietsanpham/${item.id}`} >
                                <div className="sanpham">
                                    <div className="yeuthich">Yêu thích</div>
                                    <div className="giamgia">{item.giamgia}%</div>
                                    <img src={item.avatar} alt="" className="anhdaidien" />
                                    <div className="noidung">
                                        <p className="ten">{item.name}</p>
                                        <div className="duoiten">
                                            <div className="phan">
                                                <p className="gia">{item.Gia.toLocaleString('vi-VN')}</p>
                                            </div>
                                            <div className="phan">
                                                <p className="daban">đã bán {item.daban}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nut-tuongtu">Mua ngay</div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default GoiY