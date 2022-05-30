import React from 'react'
import { Link } from 'react-router-dom';
import './FormDangNhap.css';
function DangKi() {
    return (
        <div className="box-sing-in">
            <div className="container-sing-in" id="container">
                <div className="form-container-sing-in sign-in-container">
                    <form action="#">
                        <h1>Sign Up</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span>or use your account</span>
                        <input className='input-sing-in' type="email" placeholder="Email" />
                        <input className='input-sing-in' type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <Link to='/dangnhap'>
                            <button className='button-sing-in'>
                                Sign Up
                            </button>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default DangKi