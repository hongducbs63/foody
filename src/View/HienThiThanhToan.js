import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HienThiThanhToan.css'
function HienThiThanhToan(props) {
    const [tongtien, setTongtien] = useState(0)
    const [name, setName] = useState('')
    const [diachi, setDiachi] = useState('')
    const [sdt, setSdt] = useState('')
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
    const HandleName = (e) => {
        setName(e.target.value)
    }
    const HandleAddress = (e) => {
        setDiachi(e.target.value)
    }
    const HandleSdt = (e) => {
        setSdt(e.target.value)
    }
    const HandleHoaDOn = () => {
        props.getTen(name);
        props.getDiaChi(diachi);
        props.getNumber(sdt);
    }
    return (
        <div className="container-thanhtoan">
            <div className="box-thanhtoan">

                <p className="Tieude-thanhtoan">Thanh Toán</p>
                Name
                <input className="input-field-thanhtoan" placeholder='Họ và tên' onChange={(e) => HandleName(e)} />
                Address
                <input className="input-field-thanhtoan" placeholder='Địa chỉ' onChange={(e) => HandleAddress(e)} />
                Phone Number
                <input className="input-field-thanhtoan" placeholder='Số điện thoại' onChange={(e) => HandleSdt(e)} />
                <p className="thanhtoantien">Tổng tiền: {tongtien.toLocaleString('vi-VN')}đ</p>
                <Link to='/hoadon' className="pay-btn-thanhtoan" onClick={() => HandleHoaDOn()}>Checkout</Link>

            </div>

        </div >
    )
}

export default HienThiThanhToan