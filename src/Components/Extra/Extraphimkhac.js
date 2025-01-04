// import { useState, useEffect } from "react";
// import { fetchFilmById ,fetchFilmsGoiY} from "../../Services/itemService";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// function Extraphimkhac({handleCTFilm}) {
//     const [filmsSapRa, setFilmsSapRa] = useState([]);
//     const [playFilm, setPlayFilm] = useState(false);  // State for controlling the film play


//        // Fetch films when the page changes
//   useEffect(() => {
//     getFilmsSapRa();
//   }, []); // Trigger when active page changes




//   const getFilmsSapRa = async (page) => {
//     try {
//       let res = await fetchFilmsGoiY(page);  
//       console.log("API Response:", res); // Log the entire response to inspect it

//       if (res && res.data && res.data.data && Array.isArray(res.data.data.items)) {
//         setFilmsSapRa(res.data.data.items);
//       } else {
//         console.error("Unexpected response structure", res);
//       }
//     } catch (error) {
//       console.error("Error fetching films:", error);
//     }
//   };


//     return (
//             <div className="w-[860px] h-auto mr-auto mt-10">
//                 <div className="flex flex-col">
//                     <div className="flex flex-row">
//                         <div className="flex flex-col gap-y-0.5">
//                             <div className="underline font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">Có Thể Bạn Sẽ Thích</div>
//                             <div className="border-t border-solid w-full border-pink-500"></div>
//                         </div>
//                     </div>

//                     <div className="border-t border-solid border-gray-800 mt-1"></div>

//                     <div className="grid grid-cols-4 mx-auto w-[860px] gap-x-4 gap-y-4 mt-3">



//                 {/* {Array.isArray(filmsSapRa) && filmsSapRa.length > 0 ? (
//                     filmsSapRa.map((item) => ( */}
//                     {Array.isArray(filteredFilms) && filteredFilms.length > 0 ? (
//                         filteredFilms.map((item) => (
//                     <Link to={`/trangchitietphim/${item.slug}`}>
                            
//                     <div 
//                     onClick={()=>handleCTFilm()}
//                     key={item._id} className="w-[201.66px] h-[340px] bg-gray-800 flex flex-col rounded-md overflow-hidden relative">
//                         <p className="absolute z-10 left-2 top-2 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-pink-500 to-purple-700 w-20 h-6 text-white text-xs font-semibold flex items-center justify-center">HD+Vietsub</p>
//                         <a className="absolute right-2 top-[252px] w-14 h-6 z-10 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-red-500 to-yellow-700 text-white text-xs font-semibold flex items-center justify-center">Trailer</a>
//                         <img className="w-[201.66px] h-[281.5px] rounded-tl-md rounded-tr-md transform transition-transform duration-200 hover:scale-105 object-cover" src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`} />
//                         <div className="flex flex-col bg-gray-800 justify-center items-center z-10">
//                         <div className="flex justify-center w-[185.66px]">
//                             <Link to={`/trangchitietphim/${item.slug}`} className="text-yellow-300 font-semibold truncate ">{item.origin_name}</Link>
//                         </div>
//                         <div className="flex justify-center w-[185.66px]">
//                             <a className="text-white truncate">{item.name}</a>
//                         </div>
//                         </div>
//                     </div>

//                     </Link>
//                     ))
//                 ) : (
//                     <div className="text-center text-white">Loading Films</div>
//                 )}





//                     </div>
//                 </div>
//             </div>

    
// );
// }

// export default Extraphimkhac;



// Extraphimkhac.js

import { useState, useEffect } from "react";
import { fetchFilmsLe } from "../../Services/itemService";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Extraphimkhac({ categories, handleCTFilm }) {
    const [filmsSapRa, setFilmsSapRa] = useState([]);

    useEffect(() => {
        getFilmsSapRa();
    }, []); // Fetch films when the page loads

    
    const getFilmsSapRa = async () => {
      try {
          // Create an array of promises for all pages (1 to 10)
          const pagePromises = Array.from({ length: 10 }, (_, pageIndex) => fetchFilmsLe(pageIndex + 1));
  
          // Wait for all the promises to resolve concurrently
          const responses = await Promise.all(pagePromises);
  
          const allFilms = [];
  
          // Process each API response
          responses.forEach((res) => {
              console.log("API Response:", res);
  
              // Validate and collect films from each page
              if (res && res.data && res.data.data && Array.isArray(res.data.data.items)) {
                  allFilms.push(...res.data.data.items);
              } else {
                  console.error("Unexpected response structure", res);
              }
          });
  
          // Set the combined films from all pages
          setFilmsSapRa(allFilms);
  
      } catch (error) {
          console.error("Error fetching films:", error);
      }
  };
  
  
















    // Lọc các phim có cùng thể loại
    const filterFilmsByCategory = (films) => {
        if (!categories || categories.length === 0) return films;

        return films.filter(film => {
            // Kiểm tra xem phim có thể loại nào chung với phim chi tiết
            const filmCategories = film.category || [];
            return filmCategories.some(filmCategory =>
                categories.some(category => category.name === filmCategory.name)
            );
        });
    };

    // Lọc phim theo thể loại
    const filteredFilms = filterFilmsByCategory(filmsSapRa);

    return (
        <div className="sm:w-[860px] w-full h-auto mr-auto mt-10 flex sm:justify-start flex-col justify-center">
            <div className="flex flex-col">
               <div className="">
                    <div className="flex flex-row sm:justify-start justify-center sm:mr-0 mr-[158px]">
                        <div className="flex flex-col gap-y-0.5">
                            <div className="underline font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">Có Thể Bạn Sẽ Thích</div>
                            <div className="border-t border-solid w-full border-pink-500"></div>
                        </div>
                    </div>
    
                    {/* <div className="border-t border-solid border-gray-800 mt-1 "></div> */}
               </div>

                <div className="grid sm:grid-cols-4 grid-cols-2 mx-auto sm:w-[860px] sm:gap-x-4 sm:gap-y-4 gap-x-3 gap-y-3 mt-3">
                    {Array.isArray(filteredFilms) && filteredFilms.length > 0 ? (
                        filteredFilms.map((item) => (
                            <Link to={`/trangchitietphim/${item.slug}`} key={item._id}>
                                <div 
                                    onClick={() => handleCTFilm()}
                                    className="sm:w-[201.66px] w-[170px] h-[340px] bg-gray-800 flex flex-col rounded-md overflow-hidden relative">
                                    <p className="absolute z-10 left-2 top-2 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-pink-500 to-purple-700 w-20 h-6 text-white text-xs font-semibold flex items-center justify-center">HD+Vietsub</p>
                                    <a className="absolute right-2 top-[252px] px-3 h-6 z-10 rounded-tl-md rounded-br-md rounded-tr bg-gradient-to-r from-red-500 to-yellow-700 text-white text-xs font-semibold flex items-center justify-center">{item.episode_current}</a>
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
    );
}

export default Extraphimkhac;


