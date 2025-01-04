import { fetchFilmsSapRa } from "../../Services/itemService";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Phimmoi() {

    const [filmsSapRa,setFilmsSapRa] = useState([])

    useEffect(()=>{
       //call API
       getFilmsSapRa()
    },[])

  
    const getFilmsSapRa = async () => {
        try {
          let res = await fetchFilmsSapRa();  
          console.log("API Response:", res); // Log the entire response to inspect it
    
          if (res && res.data && res.data.data && Array.isArray(res.data.data.items)) {
            setFilmsSapRa(res.data.data.items);
          } else {
            console.error("Unexpected response structure", res);
          }
        } catch (error) {
          console.error("Error fetching films:", error);
        }
      };

    return ( <div className="flex-col mt-12">
        
        <div className="">
          <div className="flex flex-row ">
  
               <div className="flex flex-col gap-y-0.5">
                  <div class="underline font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent ">Phim mới</div>
                  <div className=" border-t border-solid w-full border-pink-500"></div> 
               </div>
  
               <a href="/phimsapra" className="text-white font-light bg-gradient-to-r from-orange-400 to-pink-600 rounded-2xl px-5 ml-auto flex items-center">Xem Thêm</a>
          </div>
  
          <div className="border-t border-solid border-gray-800 mt-1"></div>
        </div>

        <div className="grid sm:grid-cols-6 grid-cols-2 mx-auto sm:w-[1310px] sm:gap-x-5 sm:gap-y-5 gap-x-3 gap-y-3 mt-3">


{Array.isArray(filmsSapRa) && filmsSapRa.length > 0 ? (
            filmsSapRa.slice(0,12).map((item) => (
              <Link to={`/trangchitietphim/${item.slug}`}>

              <div key={item._id} className="sm:w-[201.66px] w-[170px]  sm:h-[340px] bg-gray-800 flex flex-col rounded-md overflow-hidden relative">
                <p className="absolute z-10 left-2 top-2 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-pink-500 to-purple-700 w-20 h-6 text-white text-xs font-semibold flex items-center justify-center">HD+Vietsub</p>
                {/* <a className="absolute right-2 top-[252px] w-14 h-6 z-10 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-red-500 to-yellow-700 text-white text-xs font-semibold flex items-center justify-center">Trailer</a> */}
                <a className="absolute right-2 top-[252px] px-3 h-6 z-10 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-red-500 to-yellow-700 text-white text-xs font-semibold flex items-center justify-center">
                    {item.episode_current}
                  </a>
                  {/* 187 */}
                {/* <img className="w-[201.66px] h-[281.5px] rounded-tl-md rounded-tr-md transform transition-transform duration-200 hover:scale-105 object-cover" src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`} /> */}
                <span className="relative">
                  <LazyLoadImage
                    className="sm:w-[201.66px] w-[170px]  h-[281.5px] rounded-tl-md rounded-tr-md transform transition-transform duration-200 hover:scale-105 object-cover"
                    src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
                    effect="blur"  // Thêm hiệu ứng blur
                    // height={281.5}  // Đảm bảo hình ảnh có chiều cao
                    // width={201.66}  // Đảm bảo hình ảnh có chiều rộng
                    loading="lazy"
                  />
                </span>
                <div className="sm:w-[201.66px] w-[170px]  flex flex-col bg-gray-800 justify-center items-center z-10">
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
            <div className="text-center text-white">Loading Films</div>
          )}

        </div>

    </div> );
}

export default Phimmoi