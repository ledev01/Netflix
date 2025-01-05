

import { fetchFilmsViews } from '../../Services/itemService'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function Sidebar({ handleCT }) {

   // const {handleFilm} = props

   // if (typeof handleCT !== 'function') {
  
  
   //    console.error('handleCT is not a function');
   //    }


   const [filmsView, setFilmsView] = useState([])
   // const [active, setActive] = useState('active') // To manage the selected period
   const [active, setActive] = useState('week'); // Mặc định là 'week'


   const getFilmsBo = async () => {
      try {
        let res = await fetchFilmsViews(active);  
      //   console.log("API Response:", res); // Log the entire response to inspect it
  
        if (res && res.data && res.data.data && Array.isArray(res.data.data.items)) {
         setFilmsView(res.data.data.items);
        } else {
         //  console.error("Unexpected response structure", res);
        }
      } catch (error) {
      //   console.error("Error fetching films:", error);
      }
    };

   // Run on component mount or whenever the 'active' period changes
   useEffect(() => {
      getFilmsBo()
   }, [active])

   // Handle button toggle between periods (week, month, year)
   const handleToggle = (item) => {
      setActive(item)
   }

   return (
      <div className="">
         <div className="ml-auto sm:w-[428.84px] w-[350px] h-full flex flex-col">
            <div className="flex flex-row mt-10">
               <div className="flex flex-col gap-y-0.5">
                  <div className="underline font-bold text-xl bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent ">
                     Top xem nhiều
                  </div>
                  <div className="border-t border-solid w-full border-pink-500"></div>
               </div>

               <div className="ml-auto flex flex-row gap-x-1">
                  <button
                     onClick={() => handleToggle('week')}
                     className={`text-white text-sm font-mono rounded-md px-2 py-1 border border-gray-800 border-solid ${
                        active === 'week' ? 'bg-gradient-to-r from-red-500 to-yellow-700' : ''
                     }`}
                  >
                     Tuần
                  </button>

                  <button
                     onClick={() => handleToggle('month')}
                     className={`text-white text-sm font-mono rounded-md px-2 py-1 border border-gray-800 border-solid ${
                        active === 'month' ? 'bg-gradient-to-r from-red-500 to-yellow-700' : ''
                     }`}
                  >
                     Tháng
                  </button>

                  <button
                     onClick={() => handleToggle('year')}
                     className={`text-white text-sm font-mono rounded-md px-2 py-1 border border-gray-800 border-solid ${
                        active === 'year' ? 'bg-gradient-to-r from-red-500 to-yellow-700' : ''
                     }`}
                  >
                     Năm
                  </button>
               </div>
            </div>

            <div className="sm:w-full w-[350px] h-full flex flex-col gap-y-0.5 mt-3">

                                 {Array.isArray(filmsView) && filmsView.length > 0 ? (
                           filmsView.slice(12,24).map((item) => (
                              <Link to={`/trangchitietphim/${item.slug}`} key={item._id}>
                                    <button
                                     onClick={handleCT}
                                    // onClick={()=>handleCT()}
                                      className="rounded-md sm:w-[428.84px] w-[350px] h-[176px] border border-gray-800 border-solid flex items-center hover:bg-gray-800">
                                    <div className="flex flex-row gap-x-5 ml-4 items-center">
                                        <span >
                                          <LazyLoadImage
                                          className="w-[96px] h-[144px] bg-cover rounded-md object-cover"
                                          src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
                                          effect="blur"  // Thêm hiệu ứng blur
                                          alt={item.name}
                                          loading="lazy"
                                          />
                                       </span>
                                       <div className="flex flex-col gap-y-3 sm:w-72 w-52 justify-start ">
                                          <div className='flex justify-start'><a className="text-green-300 font-semibold truncate ">{item.origin_name}</a></div>
                                          <div className='flex justify-start'><a className="text-white truncate ">{item.name}</a></div>
                                          <div className='flex justify-start'><a className="text-gray-300  truncate ">{item.year}</a></div>
                                       </div>
                                    </div>
                                 </button>
                                 </Link>
                           ))
                        ) : (
                           <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/15640/15640107.png"/>
                        )}
           
            </div>
         </div>
      </div>
   )
}

export default Sidebar;
