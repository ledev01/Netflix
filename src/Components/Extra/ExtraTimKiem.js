import React, { useState, useEffect, useRef } from 'react';
import { fetchFilmsTimKiem } from "../../Services/itemService";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ExtraTimKiem({searchQuery, showPagination = true }) {
  const [filmsTv, setFilmTv] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [noFilmsFound, setNoFilmsFound] = useState(false); // Trạng thái để kiểm tra không có phim
  const res = useRef(null);

  // Gọi API khi searchQuery hoặc activePage thay đổi
  useEffect(() => {
    if (searchQuery) {
      getFilm(searchQuery); // Lấy kết quả phim khi searchQuery thay đổi
    }
  }, [searchQuery, activePage]);

  const getFilm = async (keyword) => {
    window.scrollTo(0, 0); 

    try {
      let response = await fetchFilmsTimKiem(keyword);
      // console.log("API Response timkiem:", response);

      if (response && response.data && response.data.data && Array.isArray(response.data.data.items)) {
        const films = response.data.data.items;
        setFilmTv(films);
        setTotalPages(response.data.data.totalPages || 1);
        setNoFilmsFound(films.length === 0); // Cập nhật nếu không có phim
        res.current = response;
      } else {
        // console.error("Cấu trúc phản hồi không mong muốn", response);
        setNoFilmsFound(true); // Nếu không có dữ liệu hợp lệ, hiển thị không có phim
      }
    } catch (error) {
      // console.error("Lỗi khi tải phim:", error);
      setNoFilmsFound(true); // Nếu có lỗi, hiển thị không có phim
    }
  };

  return (
    <div className="sm:w-[1310px] w-full h-auto mr-auto mt-10 flex sm:justify-start flex-col justify-center  mb-8">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col gap-y-0.5">
            <div className="underline font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              {res.current && res.current.data.data.titlePage}
            </div>
            <div className="border-t border-solid w-full border-pink-500"></div>
          </div>
        </div>

        <div className="border-t border-solid border-gray-800 mt-1"></div>

        {/* Kiểm tra nếu không có phim nào */}
        {noFilmsFound ? (
          <div className="text-center text-white mt-5">
            Không có phim bạn tìm kiếm !
          </div>
        ) : (
          <div className="grid sm:grid-cols-6 grid-cols-2 mx-auto sm:w-[1310px] sm:gap-x-4 sm:gap-y-4 gap-x-3 gap-y-3 mt-3">
            {Array.isArray(filmsTv) && filmsTv.length > 0 ? (
              filmsTv.map((item) => (
                <Link key={item._id} to={`/trangchitietphim/${item.slug}`}>
                  <div className="sm:w-[201.66px] w-[170px] h-[340px] bg-gray-800 flex flex-col rounded-md overflow-hidden relative">
                    <p className="absolute z-10 left-2 top-2 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-pink-500 to-purple-700 w-20 h-6 text-white text-xs font-semibold flex items-center justify-center">
                      HD+Vietsub
                    </p>
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
        )}
      </div>
    </div>
  );
}

export default ExtraTimKiem;




