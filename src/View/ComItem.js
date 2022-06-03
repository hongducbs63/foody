import React from 'react'
import { Link } from 'react-router-dom';

function ComItem(props) {
    const { com } = props;
    // console.log(douong);
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
                    com.map((sanphamItem) => {
                        return (<div className="sanpham-item">
                            <Link to={`/chitietsanpham/com/${sanphamItem.id}`} >
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

export default ComItem