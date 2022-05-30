import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function DangNhap(props) {
    const [ten, setTen] = useState('')
    const HandleOnChangeName = (e) => {
        setTen(e.target.value)
        console.log(e.target.value);
    }
    const HandleOnClick = () => {
        props.getNameSignUp(ten)
    }
    return (
        <div className="box-sing-in">
            <div className="container-sing-in" id="container">
                <div className="form-container-sing-in sign-in-container">
                    <form action="#">
                        <h1>Sign In</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span>or use your account</span>
                        <input className='input-sing-in' value={ten} type="text" placeholder="Name" onChange={(e) => HandleOnChangeName(e)} />
                        <input className='input-sing-in' type="email" placeholder="Email" />
                        <input className='input-sing-in' type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <Link to='/trangchu'>
                            <button className='button-sing-in' onClick={() => HandleOnClick()}>
                                Sign In
                            </button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default DangNhap