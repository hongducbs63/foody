
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

const datasanpham = []
function App() {
  const [hienthi, setHienThi] = useState('');
  const [hienthidouong, setHienThiDoUong] = useState('');
  const [data, setDaTa] = useState([])
  const [datadouong, setDaTaDoUong] = useState([])
  const [sanPham, setSanPham] = useState([]);
  const [douong, setDouong] = useState([]);
  const [nuong, setNuong] = useState([]);
  const [com, setCom] = useState([]);
  const [banhmi, setBanhMi] = useState([]);
  const [name, setName] = useState('')
  const [diachi, setDiachi] = useState('')
  const [sdt, setSdt] = useState('')
  const [gia, setGia] = useState('')
  const [giacom, setGiaCom] = useState('')
  const [gianuong, setGiaNuong] = useState('')
  const [giabanhmi, setGiaBanhMi] = useState('')
  const [giadouong, setGiaDoUong] = useState('')
  const [sanphamgoiy, setSanPhamGoiY] = useState([])
  // console.log(sanPham);
  // console.log(typeof sanPham[12].Gia);
  // const dulieu = [];
  useEffect(() => {
    console.log(1);
    async function effect() {
      let json = await axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/product")
      // dulieu = json.data
      setSanPham(json.data);
      setDaTa(json.data);
      // datasanpham = datasanpham.concat(json.data);
      // console.log(datasanpham);
      // setSanPhamGoiY([json.data, ...sanphamgoiy]);
    }
    effect()
  }, [])
  useEffect(() => {
    console.log(2);

    async function effect() {
      let json = await axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/nuong")
      // dulieu = json.data
      setNuong(json.data);
      // setDaTa(json.data);
      // setSanPhamGoiY([...json.data, ...sanPham]);
      datasanpham = datasanpham.concat(json.data);
      console.log(datasanpham);
    }
    effect()
  }, [])
  useEffect(() => {
    async function effect() {
      let json = await axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/com")
      // dulieu = json.data
      setCom(json.data);
      // setDaTa(json.data);
      // setSanPhamGoiY([...json.data, ...sanphamgoiy]);

    }
    effect()
  }, [])
  useEffect(() => {
    async function effect() {
      let json = await axios.get("https://6294306e089f87a57aca2e8e.mockapi.io/banhmi")
      // dulieu = json.data
      setBanhMi(json.data);
      // setDaTa(json.data);
      // setSanPhamGoiY([...json.data, ...sanphamgoiy]);

    }
    effect()
  }, [])
  useEffect(() => {
    async function effect() {
      let url = "https://6284ff583060bbd34742d2f3.mockapi.io/douong"
      let json = await axios.get(url)
      setDouong(json.data);
      // setDaTa(json.data);
      // setSanPhamGoiY([...json.data, ...sanphamgoiy]);

    }
    effect()
  }, [])
  // useEffect(() => {
  //   let dataU = ['nuong', 'product', 'com', 'douong'];
  //   let dataY = []
  //   dataU.forEach((item) => {
  //     console.log(item);
  //     let url = `https://6284ff583060bbd34742d2f3.mockapi.io/${item}`
  //     console.log(url);
  //     fetch(url)
  //       .then((response) => {
  //         response.json()
  //       })
  //       .then(data => {
  //         console.log(data);
  //         dataY = dataY.concat(data);

  //       })
  //     console.log(dataY);
  //   })
  //   setSanPhamGoiY(dataY)

  //   // axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/douong")
  //   //   .then(function (response) {
  //   //     console.log(response, "lan 1");
  //   //     // setDouong(response.data)

  //   //     dataU = dataU.concat(response.data);
  //   //     console.log(dataU);
  //   //     axios.get("https://6284ff583060bbd34742d2f3.mockapi.io/banhmi")
  //   //       .then(function (response) {
  //   //         dataU = dataU.concat(response.data);
  //   //         console.log(dataU, "đâs");
  //   //         console.log(response, "lan 2");

  //   //         setSanPhamGoiY(dataU);
  //   //       })
  //   //   })
  //   // dulieu = json.data
  //   // setDouong(json.data);
  //   // setDaTaDoUong(json.data)
  //   // setSanPhamGoiY([...json.data, ...sanphamgoiy]);

  //   // setDaTa(json.data);
  // }, [])
  // useEffect(() => {
  //   // const data = []
  //   setSanPhamGoiY([...sanPham, ...nuong, ...banhmi, ...douong, ...com]);
  // }, [])
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
  const SortGiaNuong = (dl) => {
    setGiaNuong(dl)
    console.log(dl);
  }
  const SortGiaCom = (dl) => {
    setGiaCom(dl)
    console.log(dl);
  }
  const SortGiaBanhMi = (dl) => {
    setGiaBanhMi(dl)
    console.log(dl);
  }
  const SortGiaDoUong = (dl) => {
    setGiaDoUong(dl)
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
    console.log(gia);
    if (gianuong.includes('thap')) {
      console.log(typeof sanPham[1].Gia);
      let sortgia = nuong.sort((a, b) => {
        console.log('cao đến thấp');
        return parseInt(a.Gia) - parseInt(b.Gia);
      })
      console.log(sortgia);
      setNuong([...sortgia]);
    }
    else if (gianuong === 'cao') {
      let sortgia = nuong.sort((a, b) => {
        console.log('gia thap den cao');
        return parseInt(b.Gia) - parseInt(a.Gia);
      })
      setNuong([...sortgia]);

    }
    else if (gianuong === 'chutang') {
      const sortTen = nuong.sort((a, b) => (a.name > b.name) ? 1 : -1)
      setNuong([...sortTen]);
    }
    else if (gianuong === 'chugiam') {
      const sortTen = nuong.sort((a, b) => (b.name > a.name) ? 1 : -1);
      setNuong([...sortTen]);

    }
  }, [gianuong])
  useEffect(() => {
    console.log(gia);
    if (giacom.includes('thap')) {
      // console.log(typeof sanPham[1].Gia);
      let sortgia = com.sort((a, b) => {
        console.log('cao đến thấp');
        return parseInt(a.Gia) - parseInt(b.Gia);
      })
      console.log(sortgia);
      setCom([...sortgia]);
    }
    else if (giacom === 'cao') {
      let sortgia = com.sort((a, b) => {
        console.log('gia thap den cao');
        return parseInt(b.Gia) - parseInt(a.Gia);
      })
      setCom([...sortgia]);

    }
    else if (giacom === 'chutang') {
      const sortTen = com.sort((a, b) => (a.name > b.name) ? 1 : -1)
      setCom([...sortTen])
    }
    else if (giacom === 'chugiam') {
      const sortTen = com.sort((a, b) => (b.name > a.name) ? 1 : -1);
      setCom([...sortTen])
    }
  }, [giacom])
  useEffect(() => {
    console.log(gia);
    if (giabanhmi.includes('thap')) {
      // console.log(typeof sanPham[1].Gia);
      let sortgia = banhmi.sort((a, b) => {
        console.log('cao đến thấp');
        return parseInt(a.Gia) - parseInt(b.Gia);
      })
      console.log(sortgia);
      setBanhMi([...sortgia]);
    }
    else if (giabanhmi === 'cao') {
      let sortgia = banhmi.sort((a, b) => {
        console.log('gia thap den cao');
        return parseInt(b.Gia) - parseInt(a.Gia);
      })
      setBanhMi([...sortgia]);

    }
    else if (giabanhmi === 'chutang') {
      const sortTen = banhmi.sort((a, b) => (a.name > b.name) ? 1 : -1)
      setBanhMi([...sortTen])
    }
    else if (giabanhmi === 'chugiam') {
      const sortTen = banhmi.sort((a, b) => (b.name > a.name) ? 1 : -1);
      setBanhMi([...sortTen])
    }
  }, [giabanhmi])

  useEffect(() => {
    if (giadouong.includes('thap')) {
      let sortgia = douong.sort((a, b) => {
        console.log('cao đến thấp');
        return parseInt(a.Gia) - parseInt(b.Gia);
      })
      console.log(sortgia);
      setDouong([...sortgia]);
    }
    else if (giadouong === 'cao') {
      let sortgia = douong.sort((a, b) => {
        console.log('gia thap den cao');
        return parseInt(b.Gia) - parseInt(a.Gia);
      })
      setDouong([...sortgia]);

    }
    else if (giadouong === 'chutang') {
      const sortTen = douong.sort((a, b) => (a.name > b.name) ? 1 : -1)
      setDouong([...sortTen])
    }
    else if (giadouong === 'chugiam') {
      const sortTen = douong.sort((a, b) => (b.name > a.name) ? 1 : -1);
      setDouong([...sortTen])
    }
  }, [giadouong])
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
        <Route path="/trangchu" element={<Trangchu sanpham={sanPham} nuong={nuong} com={com} banhmi={banhmi} douong={douong}></Trangchu>}></Route>
        <Route path="/" element={<Trangchu></Trangchu>}></Route>
        <Route path="/sanpham" element={<SanPham sanpham={sanPham} CheckGia={(dl) => SortGia(dl)}></SanPham>}></Route>
        <Route path="/chitietsanpham/:id" element={<ChiTietSanPham sanpham={sanPham}></ChiTietSanPham>}></Route>
        <Route path="/chitietsanpham/douong/:id" element={<ChiTietSanPham sanpham={douong}></ChiTietSanPham>}></Route>
        <Route path="/chitietsanpham/nuong/:id" element={<ChiTietSanPham sanpham={nuong}></ChiTietSanPham>}></Route>
        <Route path="/chitietsanpham/com/:id" element={<ChiTietSanPham sanpham={com}></ChiTietSanPham>}></Route>
        <Route path="/chitietsanpham/banhmi/:id" element={<ChiTietSanPham sanpham={banhmi}></ChiTietSanPham>}></Route>
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

        <Route path="/lau" element={<Lau sanpham={sanPham} CheckGia={(dl) => SortGia(dl)}></Lau>}></Route>
        <Route path="/nuong" element={<Nuong nuong={nuong} CheckGia={(dl) => SortGiaNuong(dl)}></Nuong>}></Route>
        <Route path="/com" element={<Com com={com} CheckGia={(dl) => SortGiaCom(dl)}></Com>}></Route>
        <Route path="/banhmi" element={<Banhmi sanpham={banhmi} CheckGia={(dl) => SortGiaBanhMi(dl)}></Banhmi>}></Route>
        <Route path="/douong" element={<DoUong douong={douong} CheckGia={(dl) => SortGiaDoUong(dl)} checkTextSearchDoUong={(dl) => getTextSearchDoUong(dl)}></DoUong>}></Route>
      </Routes>
      <Footer />
      {/* <Welcome abc={initialState} /> */}
    </>
  );
}

export default App;
