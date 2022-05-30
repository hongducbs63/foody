import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './HoaDon.css'
function HoaDon(props) {
    const { ten } = props
    const { diachikh } = props
    const { sodienthoai } = props
    const [tongtien, setTongtien] = useState(0)

    useEffect(() => {
        effect()
        // setDathang([JSON.parse(localStorage.getItem('id1'))])
    }, [])
    async function effect() {
        let tong = 0;
        let json = await axios.get("https://6294306e089f87a57aca2e8e.mockapi.io/thanhtoan")
        json.data.forEach((item) => {
            tong += parseInt(item.Gia) * parseInt(item.soluong)
        })
        setTongtien(tong);
    }
    return (
        <div className="box-hoadon-baoquanh">
            <div className="box-hoadon">
                <div className="hoadon">
                    <h1>Hóa đơn</h1>
                    <p className="hoadonkh"> <span className="hoadonchitiet">Tên:</span> {ten}</p>
                    <p className="hoadonkh"> <span className="hoadonchitiet">Địa chỉ:</span> {diachikh}</p>
                    <p className="hoadonkh"> <span className="hoadonchitiet">Số điện thoại:</span>{sodienthoai}</p>
                    <p className="hoadonkh"> <span className="hoadonchitiet">Đã thanh toán:</span>{tongtien.toLocaleString('vi-VN')}đ</p>
                    <p className="hoadonkh">Chúc mừng {ten} đã đặt hàng thành công</p>
                </div>

            </div>
        </div>
    )
}

export default HoaDon