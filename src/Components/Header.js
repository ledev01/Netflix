import { useState ,useEffect} from "react";
import Search from "../Events/Search";
import { useLocation } from 'react-router-dom';



function Header(props) {
    const { handleSeach, show } = props;
    const [open,setOpen] = useState(false)
    const [active, setActive] = useState('home');
    const location = useLocation(); // Lấy thông tin URL hiện tại
    const [theLoai,setTheLoai] = useState(false)
    const [quocGia,setQuocGia] = useState(false)

    const handleTheLoai = () =>{
        setTheLoai(!theLoai)
        setQuocGia(false)
    }

    const handleQuocGia = () =>{
        setQuocGia(!quocGia)
        setTheLoai(false)
    }


    const handleToggle = (item) => {
        setActive(item)
     }

     useEffect(() => {
        // Cập nhật trạng thái active dựa trên URL
        if (location.pathname === '/') {
          setActive('home');
        } else if (location.pathname === '/phimle') {
          setActive('phimle');
        } else if (location.pathname === '/phimbo') {
          setActive('phimbo');
        } else if (location.pathname === '/tvshow') {
          setActive('tvshow');
        } else if (location.pathname === '/hoathinh') {
          setActive('hoathinh');
        }
      }, [location.pathname]); // Chạy lại khi URL thay đổi

    const handleOpen = () =>{
        setOpen(!open)
    }

    const [toggle,setToggle] = useState(false)

    const handleMouseOver =() =>{
        setToggle(true)
    }

    const handleMouseOut =() =>{
        setToggle(false)
    }

    const [toggle2,setToggle2] = useState(false)

    const handleMouseOver2 =() =>{
        setToggle2(true)
    }

    const handleMouseOut2 =() =>{
        setToggle2(false)
    }


    return (
        <div className="w-full sm:w-[1400px]">

            <div className="fixed z-20 w-full h-16 flex justify-center bg-gradient-to-r to-black from-gray-900">
                <div className="w-full max-w-[1400px] h-full flex items-center relative">
                    <div className="ml-2 flex flex-row gap-x-5 items-center flex-grow">
                        <a href="/" ><img className="h-24 w-[104px]" src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png" /></a>

                        <div className="md:flex flex-row gap-x-5 items-center hidden">
                        <a href="/" className="text-white font-bold h-8 flex items-center cursor-pointer hover:text-yellow-300">Trang chủ</a>
                        <a href="/phimle" className="text-white font-bold h-8 flex items-center cursor-pointer hover:text-yellow-300">Phim lẻ</a>
                        <a href="/phimbo" className="text-white font-bold h-8 flex items-center cursor-pointer hover:text-yellow-300">Phim bộ</a>
                        <a href="/tvshow" className="text-white font-bold h-8 flex items-center cursor-pointer hover:text-yellow-300">TV Shows</a>
                        <a href="/hoathinh" className="text-white font-bold h-8 flex items-center cursor-pointer hover:text-yellow-300">Hoạt hình</a>

                        {/* Dropdown for Thể loại */}
                        <div onMouseMove={handleMouseOver} 
                             onMouseOut={handleMouseOut} 
                              className="group relative flex flex-row gap-x-2 items-center h-8 cursor-pointer hover:text-yellow-300">
           
                            <div 
                             onMouseMove={handleMouseOver} 
                             onMouseOut={handleMouseOut} 
                            className="flex flex-row h-12 items-center gap-x-1">
                                    <div className="text-white font-bold  hover:text-yellow-300">Thể loại</div>
                                    <img className="w-4 h-4 text-white" 
                                    src={`${toggle ?'https://cdn-icons-png.flaticon.com/128/15281/15281960.png':'https://cdn-icons-png.flaticon.com/128/15281/15281955.png'}`} />
                            </div>
                           

                            {/* Dropdown menu */}
                            <div className="rounded-md grid grid-cols-3 w-[400px] p-5 absolute top-10 left-0 bg-gray-900 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500">
                                <ul className="p-2 flex flex-col gap-y-3">
                                    <li><a href="/hanhdong" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold">Hành động</a></li>
                                    <li><a href="/cotrang" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Cổ trang</a></li>
                                    <li><a href="/chientranh" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Chiến tranh</a></li>
                                    <li><a href="/vientuong" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Viễn tưởng</a></li>
                                    <li><a href="/kinhdi" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Kinh dị</a></li>
                                    <li><a href="/tailieu" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Tài liệu</a></li>
                                    <li><a href="/bian" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Bí ẩn</a></li>
                                    {/* <li><a href="/phim18" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Phim 18+</a></li> */}
                                </ul>
                                <ul className="p-2 flex flex-col gap-y-3">
                                    <li><a href="/tinhcam" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Tình cảm</a></li>
                                    <li><a href="/tamly" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Tâm lý</a></li>
                                    <li><a href="/thethao" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Thể thao</a></li>
                                    <li><a href="/phieuluu" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Phiêu lưu</a></li>
                                    <li><a href="/amnhac" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Âm nhạc</a></li>
                                    <li><a href="/giadinh" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Gia đình</a></li>
                                    <li><a href="/hocduong" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Học đường</a></li>
                                </ul>
                                <ul className="p-2 flex flex-col gap-y-3">
                                    <li><a href="/haihuoc" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Hài hước</a></li>
                                    <li><a href="/hinhsu" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Hình sự</a></li>
                                    <li><a href="/vothuat" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Võ thuật</a></li>
                                    <li><a href="/khoahoc" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Khoa học</a></li>
                                    <li><a href="/thanthoai" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Thần thoại</a></li>
                                    <li><a href="/chinhkich" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Chính kịch</a></li>
                                    <li><a href="/kinhdien" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Kinh điển</a></li>
                                </ul>
                            </div>
                        </div>

                        <div
                          onMouseMove={handleMouseOver2} 
                          onMouseOut={handleMouseOut2} 
                         className="group relative flex flex-row gap-x-2 items-center h-8 cursor-pointer hover:text-yellow-300">

                        {/* <div className="flex flex-row gap-x-2 items-center h-8 cursor-pointer hover:text-yellow-300"> */}
                            <div 
                             onMouseMove={handleMouseOver2} 
                             onMouseOut={handleMouseOut2} 
                            className="flex flex-row h-12 items-center gap-x-1">
                                    <div className="text-white font-bold  hover:text-yellow-300">Quốc gia</div>
                                    <img className="w-4 h-4 text-white" 
                                    src={`${toggle2 ?'https://cdn-icons-png.flaticon.com/128/15281/15281960.png':'https://cdn-icons-png.flaticon.com/128/15281/15281955.png'}`} />
                            </div>
                           

                            {/* Dropdown menu */}
                            <div className="rounded-md grid grid-cols-4 w-[533px] p-5 absolute top-10 left-0 bg-gray-950 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500">
                                <ul className="p-2 flex flex-col gap-y-3">
                                    <li><a href="/TrungQuoc" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Trung Quốc</a></li>
                                    <li><a href="/ThaiLan" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Thái Lan</a></li>
                                    <li><a href="/HongKong" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Hồng kong</a></li>
                                    <li><a href="/Phap" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Pháp</a></li>
                                    <li><a href="/Duc" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Đức</a></li>
                                    <li><a href="/HaLan" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Hà Lan</a></li>
                                    <li><a href="/Mexico" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Mexico</a></li>
                                    <li><a href="/ThuyDien" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Thụy Điển</a></li>
                                    <li><a href="/Philippines" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Philippines</a></li>
                                    <li><a href="/DanMach" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Đan Mạch</a></li>
                                    <li><a href="/ThuySi" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Thụy sĩ</a></li>
                                    <li><a href="/Ukraina" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Ukraina</a></li>
                                </ul>
                                <ul className="p-2 flex flex-col gap-y-3">
                                    <li><a href="/Ireland" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Ireland</a></li>
                                    <li><a href="/VietNam" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Việt Nam</a></li>
                                    <li><a href="/Nigeria" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Nigeria</a></li>
                                    <li><a href="/HanQuoc" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Hàn Quốc</a></li>
                                    <li><a href="/AuMy" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Âu Mỹ</a></li>
                                    <li><a href="/AnDo" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Ấn Độ</a></li>
                                    <li><a href="/Canada" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Canada</a></li>
                                    <li><a href="/TayBanNha" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Tây Ban Nha</a></li>
                                    <li><a href="/Indonesia" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Indonesia</a></li>
                                    <li><a href="/BaLan" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Ba Lan</a></li>
                                    <li><a href="/Malaysia" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Malaysia</a></li>
                                </ul>
                                <ul className="p-2 flex flex-col gap-y-3">
                                    <li><a href="/BoDaoNha" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Bồ Đào Nha</a></li>
                                    <li><a href="/UAE" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">UAE</a></li>
                                    <li><a href="/ChauPhi" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Châu Phi</a></li>
                                    <li><a href="/Arap" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Ả Rập Xê Út</a></li>
                                    <li><a href="/Colombia" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Colombia</a></li>
                                    <li><a href="/Chile" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Chile</a></li>
                                    <li><a href="/Argentina" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Argentina</a></li>
                                    <li><a href="/NhatBan" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Nhật Bản</a></li>
                                    <li><a href="/DaiLoan" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Đài Loan</a></li>
                                    <li><a href="/Anh" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Anh</a></li>
                                    <li><a href="/QuocGiaKhac" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Quốc Gia Khác</a></li>
                                </ul>
                                <ul className="p-2 flex flex-col gap-y-3">
                                    <li><a href="/ThoNhiKy" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Thổ Nhĩ Kì</a></li>
                                    <li><a href="/Nga" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Nga</a></li>
                                    <li><a href="/Uc" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Úc</a></li>
                                    <li><a href="/Brazil" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Brazil</a></li>
                                    <li><a href="/Y" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Ý</a></li>
                                    <li><a href="/NaUy" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Na Uy</a></li>
                                    <li><a href="/NamPhi" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Nam Phi</a></li>
                                    <li><a href="/Bi" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Bỉ</a></li>
                                    <li><a href="/PhanLan" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Phần Lan</a></li>
                                    <li><a href="/HyLap" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Hi Lạp</a></li>
                                    <li><a href="/Singapore" className="mega-sub-item text-white hover:text-yellow-300 text-md py-4 font-semibold ">Singapore</a></li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <Search />
                    <button onClick={handleOpen}><img className="sm:hidden mr-2 h-6 w-6" src="https://cdn-icons-png.flaticon.com/128/8727/8727897.png" /></button>

{/* <div className={`absolute top-0 left-0 w-[288px] h-[1000px] bg-gray-800 rounded-br-md shadow-2xl transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}> */}
{/* <div className={`absolute top-0 left-0 w-[288px] h-[1000px] bg-gray-800 rounded-br-md shadow-2xl transition-all duration-700 ${open ? 'left-0' : '-left-[288px]'}`}> */}
<div className={`absolute top-0 left-0 w-[288px] h-[1000px] bg-gray-800 rounded-br-md shadow-2xl transition-transform duration-700 ${open ? 'translate-x-0' : 'translate-x-[-388px]'}`}>




   <div className="flex flex-col gap-y-4 pt-6 pl-5">
      <button 
      onClick={()=>setOpen(false)}
      className="pl-[228px]" >
        <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" className=" w-4 h-4 "/>
      </button>
      <a
       onClick={()=>handleToggle('home')}
       href="/" className={`rounded-md hover:ml-2 duration-1000 w-[240px] flex justify-start items-center flex-row gap-x-3 py-2 px-4 ${active === 'home' ?'bg-lime-600':'hover:bg-gray-500'}`}>
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/10307/10307931.png"/>
          <div className="text-white" >Trang chủ</div>
      </a>
      <a 
      onClick={()=>handleToggle('phimle')}
      href="/phimle" className={`rounded-md hover:ml-2 duration-500 w-[240px] flex justify-start items-center flex-row gap-x-3 py-2 px-4 ${active === 'phimle' ?'bg-lime-600':'hover:bg-gray-500'}`}>
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/8371/8371296.png"/>
          <div className="text-white" >Phim lẻ</div>
      </a>
      <a 
      onClick={()=>handleToggle('phimbo')}
      href="/phimbo" className={`rounded-md hover:ml-2 duration-500 w-[240px] flex justify-start items-center flex-row gap-x-3 py-2 px-4 ${active === 'phimbo' ?'bg-lime-600':'hover:bg-gray-500'}`}>
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/8371/8371296.png"/>
          <div className="text-white" >Phim Bộ</div>
      </a>
      <a 
      onClick={()=>handleToggle('tvshow')}
      href="/tvshow" className={`rounded-md hover:ml-2 duration-500 w-[240px] flex justify-start items-center flex-row gap-x-3 py-2 px-4 ${active === 'tvshow' ?'bg-lime-600':'hover:bg-gray-500'}`}>
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/8371/8371296.png"/>
          <div className="text-white" >Tv Shows</div>
      </a>
      <a 
      onClick={()=>handleToggle('hoathinh')}
      href="/hoathinh" className={`rounded-md hover:ml-2 duration-500 w-[240px] flex justify-start items-center flex-row gap-x-3 py-2 px-4 ${active === 'hoathinh' ?'bg-lime-600':'hover:bg-gray-500'}`}>
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/1773/1773626.png"/>
          <div className="text-white" >Hoạt Hình</div>
      </a>
      <button 
      onClick={handleTheLoai}
      className="hover:bg-gray-500 rounded-md hover:ml-2 duration-500 w-[240px] flex justify-start items-center flex-row gap-x-3 py-2 px-4">
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/15194/15194069.png"/>
          <div className="text-white" >Thể Loại</div>
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/14025/14025517.png"/>
      </button>
      <div className={`grid grid-cols-2 gap-y-1 overflow-y-auto w-64 h-32 ${theLoai ?'':'hidden'}`}>
      <a href="/hanhdong" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400">Hành động</a>
    <a href="/cotrang" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Cổ trang</a>
    <a href="/chientranh" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Chiến tranh</a>
    <a href="/vientuong" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Viễn tưởng</a>
    <a href="/kinhdi" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Kinh dị</a>
    <a href="/tailieu" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Tài liệu</a>
    <a href="/bian" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Bí ẩn</a>
    <a href="/tinhcam" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Tình cảm</a>
    <a href="/tamly" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Tâm lý</a>
    <a href="/thethao" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Thể thao</a>
    <a href="/phieuluu" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Phiêu lưu</a>
    <a href="/amnhac" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Âm nhạc</a>
    <a href="/giadinh" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Gia đình</a>
    <a href="/hocduong" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Học đường</a>
    <a href="/haihuoc" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Hài hước</a>
    <a href="/hinhsu" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Hình sự</a>
    <a href="/vothuat" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Võ thuật</a>
    <a href="/khoahoc" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Khoa học</a>
    <a href="/thanthoai" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Thần thoại</a>
    <a href="/chinhkich" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Chính kịch</a>
    <a href="/kinhdien" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Kinh điển</a>
      </div>


      <button 
      onClick={handleQuocGia}
      className="hover:bg-gray-500 rounded-md hover:ml-2 duration-500 w-[240px] flex justify-start items-center flex-row gap-x-3 py-2 px-4">
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/486/486505.png"/>
          <div className="text-white" >Quốc Gia</div>
          <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/14025/14025517.png"/>
      </button>
      <div className={`grid grid-cols-2 gap-y-1 overflow-y-auto w-64 h-32 ${quocGia ?'':'hidden'}`}>
      
      <a href="/TrungQuoc" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Trung Quốc</a>
    <a href="/ThaiLan" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Thái Lan</a>
    <a href="/HongKong" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Hồng kong</a>
    <a href="/Phap" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Pháp</a>
    <a href="/Duc" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Đức</a>
    <a href="/HaLan" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Hà Lan</a>
    <a href="/Mexico" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Mexico</a>
    <a href="/ThuyDien" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Thụy Điển</a>
    <a href="/Philippines" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Philippines</a>
    <a href="/DanMach" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Đan Mạch</a>
    <a href="/ThuySi" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Thụy sĩ</a>
    <a href="/Ukraina" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Ukraina</a>
    <a href="/Ireland" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Ireland</a>
    <a href="/VietNam" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Việt Nam</a>
    <a href="/Nigeria" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Nigeria</a>
    <a href="/HanQuoc" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Hàn Quốc</a>
    <a href="/AuMy" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Âu Mỹ</a>
    <a href="/AnDo" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Ấn Độ</a>
    <a href="/Canada" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Canada</a>
    <a href="/TayBanNha" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Tây Ban Nha</a>
    <a href="/Indonesia" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Indonesia</a>
    <a href="/BaLan" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Ba Lan</a>
    <a href="/Malaysia" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Malaysia</a>
    <a href="/BoDaoNha" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Bồ Đào Nha</a>
    <a href="/UAE" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">UAE</a>
    <a href="/ChauPhi" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Châu Phi</a>
    <a href="/Arap" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Ả Rập Xê Út</a>
    <a href="/Colombia" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Colombia</a>
    <a href="/Chile" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Chile</a>
    <a href="/Argentina" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Argentina</a>
    <a href="/NhatBan" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Nhật Bản</a>
    <a href="/DaiLoan" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Đài Loan</a>
    <a href="/Anh" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Anh</a>
    <a href="/QuocGiaKhac" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Quốc Gia Khác</a>
    <a href="/ThoNhiKy" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Thổ Nhĩ Kì</a>
    <a href="/Nga" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Nga</a>
    <a href="/Uc" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Úc</a>
    <a href="/Brazil" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Brazil</a>
    <a href="/Y" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Ý</a>
    <a href="/NaUy" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Na Uy</a>
    <a href="/NamPhi" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Nam Phi</a>
    <a href="/Bi" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Bỉ</a>
    <a href="/PhanLan" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Phần Lan</a>
    <a href="/HyLap" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Hi Lạp</a>
    <a href="/Singapore" className="w-28 rounded-lg h-10 items-center px-1 justify-center flex text-white bg-slate-400 ">Singapore</a>
      </div>

               

   </div>

</div> 



                </div>
            </div>
        </div>
    );
}

export default Header;

