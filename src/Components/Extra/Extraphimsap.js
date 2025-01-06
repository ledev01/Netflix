import { fetchFilmsSapRa } from "../../Services/itemService";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Extraphimsap() {
  const [active, setActive] = useState(1); // Trạng thái trang hiện tại là 1
  const [filmsSapRa, setFilmsSapRa] = useState([]);

  // Memoize the page numbers
  const pageNumbers = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, ..., 10]
  }, []);

  // useCallback to memoize page navigation handlers
  const handleActive = useCallback((page) => {
    setActive(page); // Set the current active page
    window.scrollTo(0, 0);
  }, []);

  const handlePrevious = useCallback(() => {
    setActive((prev) => (prev > 1 ? prev - 1 : prev)); // Decrease page if it's greater than 1
    window.scrollTo(0, 0);
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev < 5 ? prev + 1 : prev)); // Increase page if it's less than 10
    window.scrollTo(0, 0);
  }, []);

  // Fetch films when the page changes
  useEffect(() => {
    getFilmsSapRa(active);
  }, [active]); // Trigger when active page changes

 

  const getFilmsSapRa = async (page) => {
    try {
      let res = await fetchFilmsSapRa(page);  
      // console.log("API Response:", res); // Log the entire response to inspect it

      if (res && res.data && res.data.data && Array.isArray(res.data.data.items)) {
        setFilmsSapRa(res.data.data.items);
      } else {
        // console.error("Unexpected response structure", res);
      }
    } catch (error) {
      // console.error("Error fetching films:", error);
    }
  };

  // console.log(filmsSapRa);

  return (
    <div>
      <div className="sm:w-[860px] w-full h-auto mr-auto mt-10 flex sm:justify-start flex-col justify-center">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col gap-y-0.5">
              <div className="underline font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Phim Sắp Ra Mắt
              </div>
              <div className="border-t border-solid w-full border-pink-500"></div>
            </div>

            <a href="/phimsapra" className="text-white font-light bg-gradient-to-r from-orange-400 to-pink-600 rounded-2xl px-5 ml-auto flex items-center">
              Xem Thêm
            </a>
          </div>

          <div className="border-t border-solid border-gray-800 mt-1"></div>

          <div className="grid sm:grid-cols-4 grid-cols-2 mx-auto sm:w-[860px] sm:gap-x-4 sm:gap-y-4 gap-x-3 gap-y-3 mt-3">
           

{Array.isArray(filmsSapRa) && filmsSapRa.length > 0 ? (
            filmsSapRa.map((item) => (
              <Link to={`/trangchitietphim/${item.slug}`} key={item._id}>

              <div  className="sm:w-[201.66px] w-[170px] h-[340px] bg-gray-800 flex flex-col rounded-md overflow-hidden relative">
                <p className="absolute z-10 left-2 top-2 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-pink-500 to-purple-700 w-20 h-6 text-white text-xs font-semibold flex items-center justify-center">HD+Vietsub</p>
                <div className="absolute right-2 top-[252px] px-3 h-6 z-10 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-red-500 to-yellow-700 text-white text-xs font-semibold flex items-center justify-center">
                    {item.episode_current}
                  </div>
                {/* <a className="absolute right-2 top-[252px] w-14 h-6 z-10 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-red-500 to-yellow-700 text-white text-xs font-semibold flex items-center justify-center">Trailer</a> */}
                {/* <img className="w-[201.66px] h-[281.5px] rounded-tl-md rounded-tr-md transform transition-transform duration-200 hover:scale-105 object-cover" src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`} /> */}
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

      {/* Pagination Controls */}
      <div className="flex justify-center my-8">
        <div className="flex items-center justify-between gap-x-2">
          {/* Previous button */}
          <button
            onClick={handlePrevious}
            className="w-8 h-8 flex justify-center items-center bg-gray-300 text-gray-700 rounded-md"
          >
            <img className="w-4 h-auto" src="https://cdn-icons-png.flaticon.com/128/9590/9590006.png" />
          </button>

          {/* Page numbers */}
          <div className="flex space-x-2">
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => handleActive(page)}
                className={`w-8 h-8 flex justify-center items-center rounded-md ${
                  active === page ? 'bg-gradient-to-r from-pink-500 to-purple-700 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="w-8 h-8 flex justify-center items-center bg-gray-300 text-gray-700 rounded-md"
          >
            <img className="w-4 h-auto" src="https://cdn-icons-png.flaticon.com/128/9688/9688285.png" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Extraphimsap;
