import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Header from "./Components/Header";
import Body from "./Components/Body";

import Home from './Components/body/Home';
import Phimle from "./Components/body/Phimle"
import Phimbo from "./Components/body/Phimbo"
import Tvshow from "./Components/body/Tvshow"
import Hoathinh from "./Components/body/Hoathinh"
import Theloai from "./Components/body/Theloai"
import Quocgia from "./Components/body/Quocgia"
import Phimsapra from './Components/Forein.js/Phimsapra';
import Trangchitietphim from './Components/Forein.js/Trangchitietphim';
import TimKiem from './Components/body/TimKiem';


function App() {
  return (
    <Router>

    <div>

      <div className="App">
        <Header/>
        {/* <Body /> */}
      </div>


      {/* <Router> */}
        <div>
          <Routes>
            <Route path= '/' element={< Home/>} />
            <Route path= '/phimle' element={< Phimle/>} />
            <Route path= '/phimbo' element={< Phimbo/>} />
            <Route path= '/tvshow' element={< Tvshow/>} />
            <Route path= '/hoathinh' element={< Hoathinh/>} />
            <Route path= '/quocgia' element={< Quocgia/>} />
            <Route path= '/phimsapra' element={< Phimsapra/>} />
            <Route path= '/timkiem' element={< TimKiem/>} />
            <Route path= '/trangchitietphim/:slug' element={< Trangchitietphim/>} />


            {/* phim theo the loai */}
            <Route path= '/hanhdong' element={< Theloai/>} />
            <Route path= '/cotrang' element={< Theloai/>} />
            <Route path= '/chientranh' element={< Theloai/>} />
            <Route path= '/vientuong' element={< Theloai/>} />
            <Route path= '/kinhdi' element={< Theloai/>} />
            <Route path= '/tailieu' element={< Theloai/>} />
            <Route path= '/bian' element={< Theloai/>} />
            <Route path= '/phim18' element={< Theloai/>} />
            <Route path= '/tinhcam' element={< Theloai/>} />
            <Route path= '/tamly' element={< Theloai/>} />
            <Route path= '/thethao' element={< Theloai/>} />
            <Route path= '/phieuluu' element={< Theloai/>} />
            <Route path= '/amnhac' element={< Theloai/>} />
            <Route path= '/giadinh' element={< Theloai/>} />
            <Route path= '/hocduong' element={< Theloai/>} />
            <Route path= '/haihuoc' element={< Theloai/>} />
            <Route path= '/hinhsu' element={< Theloai/>} />
            <Route path= '/vothuat' element={< Theloai/>} />
            <Route path= '/khoahoc' element={< Theloai/>} />
            <Route path= '/thanthoai' element={< Theloai/>} />
            <Route path= '/chinhkich' element={< Theloai/>} />
            <Route path= '/kinhdien' element={< Theloai/>} />
            

            {/* phim theo quoc gia */}
            <Route path= '/TrungQuoc' element={< Quocgia/>} />
            <Route path= '/ThaiLan' element={< Quocgia/>} />
            <Route path= '/HongKong' element={< Quocgia/>} />
            <Route path= '/Phap' element={< Quocgia/>} />
            <Route path= '/Duc' element={< Quocgia/>} />
            <Route path= '/HaLan' element={< Quocgia/>} />
            <Route path= '/Mexico' element={< Quocgia/>} />
            <Route path= '/ThuyDien' element={< Quocgia/>} />
            <Route path= '/Philippines' element={< Quocgia/>} />
            <Route path= '/DanMach' element={< Quocgia/>} />
            <Route path= '/ThuySi' element={< Quocgia/>} />
            <Route path= '/Ukraina' element={< Quocgia/>} />
            <Route path= '/Ireland' element={< Quocgia/>} />
            <Route path= '/VietNam' element={< Quocgia/>} />
            <Route path= '/Nigeria' element={< Quocgia/>} />
            <Route path= '/HanQuoc' element={< Quocgia/>} />
            <Route path= '/AuMy' element={< Quocgia/>} />
            <Route path= '/AnDo' element={< Quocgia/>} />
            <Route path= '/Canada' element={< Quocgia/>} />
            <Route path= '/TayBanNha' element={< Quocgia/>} />
            <Route path= '/Indonesia' element={< Quocgia/>} />
            <Route path= '/BaLan' element={< Quocgia/>} />
            <Route path= '/Malaysia' element={< Quocgia/>} />
            <Route path= '/BoDaoNha' element={< Quocgia/>} />
            <Route path= '/UAE' element={< Quocgia/>} />
            <Route path= '/ChauPhi' element={< Quocgia/>} />
            <Route path= '/Arap' element={< Quocgia/>} />
            <Route path= '/Colombia' element={< Quocgia/>} />
            <Route path= '/Chile' element={< Quocgia/>} />
            <Route path= '/Argentina' element={< Quocgia/>} />
            <Route path= '/NhatBan' element={< Quocgia/>} />
            <Route path= '/DaiLoan' element={< Quocgia/>} />
            <Route path= '/Anh' element={< Quocgia/>} />
            <Route path= '/QuocGiaKhac' element={< Quocgia/>} />
            <Route path= '/ThoNhiKy' element={< Quocgia/>} />
            <Route path= '/Nga' element={< Quocgia/>} />
            <Route path= '/Uc' element={< Quocgia/>} />
            <Route path= '/Brazil' element={< Quocgia/>} />
            <Route path= '/Y' element={< Quocgia/>} />
            <Route path= '/NaUy' element={< Quocgia/>} />
            <Route path= '/NamPhi' element={< Quocgia/>} />
            <Route path= '/Bi' element={< Quocgia/>} />
            <Route path= '/PhanLan' element={< Quocgia/>} />
            <Route path= '/HyLap' element={< Quocgia/>} />
            <Route path= '/Singapore' element={< Quocgia/>} />


          </Routes>
        </div>
      {/* </Router> */}
      

    </div>
    </Router>

  );
}

export default App;
