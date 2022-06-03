import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './HienThiThanhToan.css'
function HienThiThanhToan(props) {
    const [tongtien, setTongtien] = useState(0)
    const [name, setName] = useState('')
    const [diachi, setDiachi] = useState('')
    const [sdt, setSdt] = useState('')
    let navigate = useNavigate();
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
        toast.success("Đặt hàng thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        props.getTen(name);
        props.getDiaChi(diachi);
        props.getNumber(sdt);
        async function deleteapi() {
            let json = await axios.get("https://6294306e089f87a57aca2e8e.mockapi.io/thanhtoan")
            json.data.forEach((item, index) => {

                fetch(`https://6294306e089f87a57aca2e8e.mockapi.io/thanhtoan/${index + 1}`, {
                    method: "DELETE"
                })
            })
        }
        deleteapi()
        return navigate('/hoadon')
        // async function postData(url, data) {
        //     // Default options are marked with *
        //     const response = await fetch(url, {
        //         method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        //         mode: 'cors', // no-cors, *cors, same-origin
        //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //         credentials: 'same-origin', // include, *same-origin, omit
        //         headers: {
        //             'Content-Type': 'application/json'
        //             // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         redirect: 'follow', // manual, *follow, error
        //         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //         body: JSON.stringify(data) // body data type must match "Content-Type" header
        //     });
        //     return response.json(); // parses JSON response into native JavaScript objects
        // }

        // postData('https://6294306e089f87a57aca2e8e.mockapi.io/thanhtoan', [])
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
                <button to='/hoadon' className="pay-btn-thanhtoan" onClick={() => HandleHoaDOn()}>Checkout</button>

            </div>

        </div >
    )
}

export default HienThiThanhToan