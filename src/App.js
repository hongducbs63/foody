
import './App.css';
import ChiTietSanPham from './View/ChiTietSanPham'
import Trangchu from './View/Trangchu';
import Header from './View/Header';
import Footer from './View/Footer';
import { Routes, Route } from 'react-router-dom'
import SanPham from './View/SanPham';
import GioHang from './View/GioHang';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HienThiGioHang from './View/HienThiGioHang';
import Bun from './View/Bun';
import Lau from './View/Lau';
import Nuong from './View/Nuong';
import Com from './View/Com';
import Banhmi from './View/Banhmi';
import DoUong from './View/DoUong';
import DangKi from './View/DangKi';
import DangNhap from './View/DangNhap';
import ThanhToan from './View/ThanhToan';
import HienThiThanhToan from './View/HienThiThanhToan';
import TongTien from './View/TongTien';
import HoaDon from './View/HoaDon';

function App() {
  const [hienthi, setHienThi] = useState('');
  const [hienthidouong, setHienThiDoUong] = useState('');
  const [data, setDaTa] = useState([])
  const [datadouong, setDaTaDoUong] = useState([])
  const [sanPham, setSanPham] = useState([]);
  const [douong, setDouong] = useState([]);
  const [name, setName] = useState('')
  const [diachi, setDiachi] = useState('')
  const [sdt, setSdt] = useState('')
  const [gia, setGia] = useState('')
  console.log(sanPham);
  // console.log(typeof sanPham[12].Gia);
  // const dulieu = [];
  useEffect(() => {
    async function effect() {
      let json = await axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/product")
      // dulieu = json.data
      setSanPham(json.data);
      setDaTa(json.data);
    }
    effect()
  }, [])

  useEffect(() => {
    async function effect() {
      let json = await axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/douong")
      // dulieu = json.data
      setDouong(json.data);
      setDaTaDoUong(json.data)
      // setDaTa(json.data);
    }
    effect()
  }, [])
  const getTextSearch = (dl) => {
    console.log('day la du liẹu' + dl);
    setHienThi(dl)
  }
  const getTextSearchDoUong = (dl) => {
    setHienThiDoUong(dl)
    console.log('du lieu' + dl);
  }
  const SortGia = (dl) => {
    setGia(dl)
    console.log(dl);
  }
  const getName = (dl) => {
    setName(dl)
    console.log(dl);
  }
  const getAddress = (dl) => {
    setDiachi(dl)
    console.log(dl);
  }
  const getSdt = (dl) => {
    setSdt(dl)
    console.log(dl);
  }
  useEffect(() => {
    console.log(gia);
    if (gia.includes('thap')) {
      console.log(typeof sanPham[1].Gia);
      let sortgia = sanPham.sort((a, b) => {
        console.log('cao đến thấp');
        return parseInt(a.Gia) - parseInt(b.Gia);
      })
      console.log(sortgia);
      setSanPham([...sortgia]);
    }
    else if (gia === 'cao') {
      let sortgia = sanPham.sort((a, b) => {
        console.log('gia thap den cao');
        return parseInt(b.Gia) - parseInt(a.Gia);
      })
      setSanPham([...sortgia]);
    }
    else if (gia === 'chutang') {
      const sortTen = sanPham.sort((a, b) => (a.name > b.name) ? 1 : -1)
      setSanPham([...sortTen])
    }
    else if (gia === 'chugiam') {
      const sortTen = sanPham.sort((a, b) => (b.name > a.name) ? 1 : -1);
      setSanPham([...sortTen])
    }
  }, [gia])
  useEffect(() => {
    // console.log(sanPham);

    const kq = data.filter((item) => {
      return item.name.toLowerCase().includes(hienthi.toLowerCase())

    })
    // console.log(sanPham);

    // console.log(kq);
    setSanPham(kq)
  }, [hienthi]);
  useEffect(() => {

    const kq = datadouong.filter((item) => {
      return item.name.toLowerCase().includes(hienthidouong.toLowerCase())

    })
    setDouong(kq)
  }, [hienthidouong]);
  return (
    <>
      {/* checkTextSearch={(dl) => getTextSearch(dl)  */}
      <Header checkTextSearch={(dl) => getTextSearch(dl)} name={name} />
      {/* <Trangchu></Trangchu> */}
      <Routes>
        <Route path="/dangki" element={<DangKi></DangKi>}></Route>
        <Route path="/dangnhap" element={<DangNhap getNameSignUp={(dl) => getName(dl)}></DangNhap>}></Route>
        <Route path="/trangchu" element={<Trangchu></Trangchu>}></Route>
        <Route path="/" element={<Trangchu></Trangchu>}></Route>
        <Route path="/sanpham" element={<SanPham sanpham={sanPham} CheckGia={(dl) => SortGia(dl)}></SanPham>}></Route>
        <Route path="/chitietsanpham/:id" element={<ChiTietSanPham sanpham={sanPham}></ChiTietSanPham>}></Route>
        <Route path="/chitietsanpham/douong/:id" element={<ChiTietSanPham sanpham={douong}></ChiTietSanPham>}></Route>
        <Route path="/giohang" element={
          <div>
            <HienThiGioHang></HienThiGioHang>
            <GioHang sanpham={sanPham}></GioHang>
          </div>
        }></Route>
        <Route path="/thanhtoan" element={
          <>
            <TongTien></TongTien>
            <ThanhToan></ThanhToan>
            <HienThiThanhToan getTen={(dl) => getName(dl)} getDiaChi={(dl) => getAddress(dl)} getNumber={(dl) => getSdt(dl)}></HienThiThanhToan>
          </>}
        ></Route>
        <Route path="/hoadon" element={<HoaDon ten={name} diachikh={diachi} sodienthoai={sdt}></HoaDon>}></Route>

        <Route path="/lau" element={<Lau sanpham={sanPham}></Lau>}></Route>
        <Route path="/nuong" element={<Nuong sanpham={sanPham}></Nuong>}></Route>
        <Route path="/com" element={<Com sanpham={sanPham}></Com>}></Route>
        <Route path="/banhmi" element={<Banhmi sanpham={sanPham}></Banhmi>}></Route>
        <Route path="/douong" element={<DoUong douong={douong} checkTextSearchDoUong={(dl) => getTextSearchDoUong(dl)}></DoUong>}></Route>
      </Routes>
      <Footer />
      {/* <Welcome abc={initialState} /> */}
    </>
  );
}

export default App;
