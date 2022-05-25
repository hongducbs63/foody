import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer className='end'>
            <div className="footer-container">
                <section id="footercenter" className="footer-center">
                    <div className="container">
                        <div className="footer-center-wrap">
                            <div className="row">
                                <div className="item">
                                    <div className="block_aboutshop block">
                                        <div className="block_content">
                                            <div className="box logo-ft">
                                                <img src="//bizweb.dktcdn.net/100/038/419/themes/49902/assets/shop_images_footer.png?1594717586397" alt="" className="img-responsive" />
                                            </div>
                                            <div className="about">
                                                Nhà hàng Leo Food thiết kế theo phong cách vừa truyền thống vừa mang nét hiện
                                                đại. Kiến trúc sang trọng kết hợp với khung cảnh thiên nhiên tạo cảm giác đặc
                                                biệt hơn cho du khách khi thưởng thức ẩm thực tại đây.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="footer-block block footer_contact">
                                        <h4 className="title_block"><span>Liên hệ</span></h4>
                                        <div className="block_content" style={{}}>
                                            <ul style={{}}>
                                                <li className="icon"><i className="fa fa-phone" /><a href="tel:0989999999" title="Liên hệ : 0989999999">Di động: 0325616898</a></li>
                                                <li className="icon"><i className="fa fa-envelope" />Email: <a href="mailto:apollotheme@gmail.com">nguyenhongduc@gmail.com</a>
                                                </li>
                                            </ul>
                                            <div className="icon"><i className="fa fa-map-marker" /><span>181 Trần Phú, Hà Đông, Hà
                                                Nội,
                                                Vietnam</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="footer-block block" id="block_links_footer_2">
                                        <h4 className="title_block"><span>Thông tin</span></h4>
                                        <div className="block_content" style={{}}>
                                            <ul style={{}} className="toggle-footer list-group bullet">
                                                <li className="item">
                                                    <a href="/huong-dan-mua-hang" title="Hướng dẫn mua hàng">Hướng dẫn mua
                                                        hàng</a>
                                                </li>
                                                <li className="item">
                                                    <a href="/dieu-khoan" title="Quy định sử dụng">Quy định sử dụng</a>
                                                </li>
                                                <li className="item">
                                                    <a href="/dieu-khoan" title="Chính sách vận chuyển">Chính sách vận
                                                        chuyển</a>
                                                </li>
                                                <li className="item">
                                                    <a href="/dieu-khoan" title="Điều khoản dịch vụ">Điều khoản dịch vụ</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="footer-block block" id="block_links_footer_3">
                                        <h4 className="title_block"><span>Leo Food</span></h4>
                                        <div className="block_content" style={{}}>
                                            <ul style={{}} className="toggle-footer list-group bullet">
                                                <li className="item">
                                                    <a href="/" title="Trang chủ">Trang chủ</a>
                                                </li>
                                                <li className="item">
                                                    <a href="/search" title="Tìm kiếm sản phẩm">Tìm kiếm sản phẩm</a>
                                                </li>
                                                <li className="item">
                                                    <a href="/gioi-thieu" title="Giới thiệu cửa hàng">Giới thiệu cửa hàng</a>
                                                </li>
                                                <li className="item">
                                                    <a href="/lien-he" title="Thông tin liên hệ">Thông tin liên hệ</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="footernav" className="footer-nav">
                    <div className="container">
                        <div className="footer-bottom-wrap">
                            <div id="powered" className="powered ">
                                <div className="copyright">
                                    <p className="text-center float-left">© Bản quyền thuộc về Hồng Đức</p>

                                </div>
                                <div className="paypal">
                                    <img src="//bizweb.dktcdn.net/100/038/419/themes/49902/assets/payment.png?1594717586397" alt="Logo Payment" className="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer