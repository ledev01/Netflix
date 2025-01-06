import {
  fetchFilmHanhDong,
  fetchFilmCoTrang,
  fetchFilmChienTranh,
  fetchFilmVienTuong,
  fetchFilmKinhDi,
  fetchFilmTaiLieu,
  fetchFilmBiAn,
  fetchFilmPhim18,
  fetchFilmTinhCam,
  fetchFilmTamLy,
  fetchFilmTheThao,
  fetchFilmPhieuLuu,
  fetchFilmAmNhac,
  fetchFilmGiaDinh,
  fetchFilmHocDuong,
  fetchFilmHaiHuoc,
  fetchFilmHinhSu,
  fetchFilmVoThuat,
  fetchFilmKhoaHoc,
  fetchFilmThanThoai,
  fetchFilmChinhKich,
  fetchFilmKinhDien
}from "../../Services/theloaiService";
import { useEffect, useState, useCallback, useMemo ,useRef} from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ExtraTheLoai({showPagination =true}) {
  const location = useLocation(); 
  const [filmsTv, setFilmTv] = useState([]); // State to store the filtered list of films
  const [activePage, setActivePage] = useState(1); // Current active page
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  // const [chiTietPhim, setChiTietPhim] = useState({});

  
  useEffect(() => {
    // Dựa vào path hiện tại, gọi các hàm fetch tương ứng
    const fetchFilms = () => {
      switch (location.pathname) {
        case '/hanhdong':
          getFilm(fetchFilmHanhDong);
          break;
        case '/cotrang':
          getFilm(fetchFilmCoTrang);
          break;
        case '/chientranh':
          getFilm(fetchFilmChienTranh);
          break;
        case '/vientuong':
          getFilm(fetchFilmVienTuong);
          break;
        case '/kinhdi':
          getFilm(fetchFilmKinhDi);
          break;
        case '/tailieu':
          getFilm(fetchFilmTaiLieu);
          break;
        case '/bian':
          getFilm(fetchFilmBiAn);
          break;
        case '/phim18':
          getFilm(fetchFilmPhim18);
          break;
        case '/tinhcam':
          getFilm(fetchFilmTinhCam);
          break;
        case '/tamly':
          getFilm(fetchFilmTamLy);
          break;
        case '/thethao':
          getFilm(fetchFilmTheThao);
          break;
        case '/phieuluu':
          getFilm(fetchFilmPhieuLuu);
          break;
        case '/amnhac':
          getFilm(fetchFilmAmNhac);
          break;
        case '/giadinh':
          getFilm(fetchFilmGiaDinh);
          break;
        case '/hocduong':
          getFilm(fetchFilmHocDuong);
          break;
        case '/haihuoc':
          getFilm(fetchFilmHaiHuoc);
          break;
        case '/hinhsu':
          getFilm(fetchFilmHinhSu);
          break;
        case '/vothuat':
          getFilm(fetchFilmVoThuat);
          break;
        case '/khoahoc':
          getFilm(fetchFilmKhoaHoc);
          break;
        case '/thanthoai':
          getFilm(fetchFilmThanThoai);
          break;
        case '/chinhkich':
          getFilm(fetchFilmChinhKich);
          break;
        case '/kinhdien':
          getFilm(fetchFilmKinhDien);
          break;
      
        default:
          // console.log("Không có phim nào cho đường dẫn này");
      }
    };

    fetchFilms(); // Gọi hàm fetch khi component mount hoặc khi đường dẫn thay đổi

  }, [location]); // Chạy lại khi đường dẫn thay đổi

  const res = useRef(null);

 

  // Fetch films when the component mounts or when the active page changes
  useEffect(() => {
    getFilm(activePage); // Fetch films for the current page
  }, [activePage]);

 

  // const getFilm = async (fetchFunction) => {
  //   try {
  //     let res = await fetchFunction(activePage); // Sử dụng hàm fetch tương ứng với activePage
  //     console.log("API Response:", res); // Log the response for debugging

  //     if (res && res.data && res.data.data && Array.isArray(res.data.data.items)) {
  //       setFilmTv(res.data.data.items);
  //       setTotalPages(res.data.data.totalPages || 1); // Set the total pages from the API response
  //     } else {
  //       console.error("Unexpected response structure", res);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching films:", error);
  //   }
  // };


  const getFilm = async (fetchFunction) => {
    try {
      let response = await fetchFunction(activePage); // Sử dụng hàm fetch tương ứng với activePage
      // console.log("API Response:", response); // Ghi lại phản hồi để gỡ lỗi

      if (response && response.data && response.data.data && Array.isArray(response.data.data.items)) {
        setFilmTv(response.data.data.items);
        setTotalPages(response.data.data.totalPages || 1); // Thiết lập tổng số trang từ phản hồi API
        res.current = response; // Lưu giá trị vào ref
      } else {
        // console.error("Cấu trúc phản hồi không mong muốn", response);
      }
    } catch (error) {
      // console.error("Lỗi khi tải phim:", error);
    }
  };



  return (
    <div className="sm:w-[1310px] w-full h-auto mr-auto mt-10 flex sm:justify-start flex-col justify-center  mb-8">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col gap-y-0.5">
            <div className="underline font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
            {res.current && res.current.data.data.seoOnPage.titleHead}
            </div>
            <div className="border-t border-solid w-full border-pink-500"></div>
          </div>

         
        </div>

        <div className="border-t border-solid border-gray-800 mt-1"></div>

        <div className="grid sm:grid-cols-6 grid-cols-2 mx-auto sm:w-[1310px] sm:gap-x-4 sm:gap-y-4 gap-x-3 gap-y-3 mt-3">
          {Array.isArray(filmsTv) && filmsTv.length > 0 ? (
            filmsTv.map((item) => (
              <Link key={item._id} to={`/trangchitietphim/${item.slug}`}>
                <div className="sm:w-[201.66px] w-[170px] h-[340px] bg-gray-800 flex flex-col rounded-md overflow-hidden relative">
                  <p className="absolute z-10 left-2 top-2 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-pink-500 to-purple-700 w-20 h-6 text-white text-xs font-semibold flex items-center justify-center">
                    HD+Vietsub
                  </p>
                  {/* <a className="absolute right-2 top-[252px] w-[67.43px] h-6 z-10 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-red-500 to-yellow-700 text-white text-xs font-semibold flex items-center justify-center">
                    Hoàn tất
                  </a> */}
                   <div className="absolute right-2 top-[252px] px-3 h-6 z-10 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-red-500 to-yellow-700 text-white text-xs font-semibold flex items-center justify-center">
                    {item.episode_current}
                  </div>
                  {/* <img
                    className="w-[201.66px] h-[281.5px] rounded-tl-md rounded-tr-md transform transition-transform duration-200 hover:scale-105 object-cover"
                    src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
                    alt={item.name}
                  /> */}
                   <span className="relative">
                  <LazyLoadImage
                    className="sm:w-[201.66px] w-[170px] h-[281.5px] rounded-tl-md rounded-tr-md transform transition-transform duration-200 hover:scale-105 object-cover"
                    src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
                    effect="blur"  // Thêm hiệu ứng blur
                    // height={281.5}  // Đảm bảo hình ảnh có chiều cao
                    // width={201.66}  // Đảm bảo hình ảnh có chiều rộng
                    loading="lazy"
                  />
                </span>
                  <div className="sm:w-[201.66px] w-[170px] flex flex-col bg-gray-800 justify-center items-center z-10">
                    <div className="flex justify-center sm:w-[185.66px] w-[160px]">
                      <Link to={`/trangchitietphim/${item.slug}`} className="text-yellow-300 font-semibold truncate ">{item.origin_name}</Link>
                    </div>
                    <div className="flex justify-center sm:w-[185.66px] w-[160px]">
                      <a className="text-white truncate">{item.name}</a>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/15640/15640107.png"/>
          )}
        </div>

  
      </div>
    </div>
  );
}

export default ExtraTheLoai;

