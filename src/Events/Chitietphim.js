import { useState, useEffect,useRef } from "react";
import { fetchFilmById } from "../Services/itemService"; // Assuming this is your API service
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Chitietphim({playFilm, setPlayFilm}) {
    const [showTrailer, setShowTrailer] = useState(false);
    const { slug } = useParams();  // Extract the movie slug from the URL
    const [chiTietPhim, setChiTietPhim] = useState({});
    const [filmsSapRa, setFilmsSapRa] = useState([]);
    const [show, setShow] = useState(false);
    const [next,setNext] = useState(0)
    // const [playFilm, setPlayFilm] = useState(false);


    


    // const resRef = useRef(null);
    const filmsRef = useRef(null);


    const handleNext = (item) =>{
        setNext(item)
        setPlayFilm(true)
    }


    const handlePlayFilm = () =>  {
        setPlayFilm(true)
       
    }


    const handleTrailerClick = () => {
        setShowTrailer(true);
    };

    const closeTrailer = (e) => {
        if (e.target === e.currentTarget) {
            setShowTrailer(false);
        }
    };

    const handleClick = () => {
        setTimeout(() => {
            setShow(prevShow => !prevShow);
        }, 200);
    };

    useEffect(() => {
        getChiTiet(slug);  // Fetch movie details
        window.scrollTo(0, 0); // Scroll to top of the page
    }, [slug]);  // Re-run when `slug` changes

    const getChiTiet = async (slug) => {
        try {
            let res = await fetchFilmById(slug);  // Fetch movie details by `slug`
            console.log("Movie details fetched:", res);  // Log the response
            if (res && res.data) {
                setChiTietPhim(res.data);  // Update state with movie details
            }
        } catch (error) {
            console.error("Error fetching movie details:", error);  // Log error if fetch fails
        }
    };

        const selectedEpisode = chiTietPhim.episodes?.[0]?.server_data?.[next] || {};

    return (
        <div className="sm:w-[860px] h-auto mr-auto flex flex-col mt-12">

            {chiTietPhim.movie && (

            <div className="flex flex-row sm:gap-x-4 gap-x-2 sm:justify-start justify-center ">
                {/* Breadcrumb */}
                <a href="/" className="flex flex-row gap-x-1 items-center">
                    <img className=" h-3 w-3" src="https://cdn-icons-png.flaticon.com/128/5974/5974636.png" />
                    <div className="text-gray-300">Trang chủ</div>
                </a>
                <div className="flex flex-row gap-x-1 items-center">
                    <img className=" h-3 w-3" src="https://cdn-icons-png.flaticon.com/128/15943/15943346.png" />
                    <p className="text-gray-300">{chiTietPhim.movie.type}</p>
                   
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                    <img className=" h-3 w-3" src="https://cdn-icons-png.flaticon.com/128/15943/15943346.png" />
                    <p className="text-gray-300">{chiTietPhim.movie.country[0]?.name}</p>
                </div>
                <div className="flex flex-row gap-x-1 items-center">
                    <img className=" h-3 w-3" src="https://cdn-icons-png.flaticon.com/128/15943/15943346.png" />
                    
                    <p className="text-yellow-400">{chiTietPhim.movie.category[0]?.name}</p>
                    {/* {`${chiTietPhim.movie.category[1]?.name ? ',' + chiTietPhim.movie.category[1]?.name : ''}`} {`${chiTietPhim.movie.category[2]?.name ? ',' + chiTietPhim.movie.category[2]?.name : ''}`} */}
                </div>
            </div>

            )}


                  {/* {console.log("link phim này>>>:",chiTietPhim.episodes[0].server_data[0].link_embed)} */}
          
            { playFilm ? (
               <div className="flex sm:justify-start justify-center">
                    <div className="sm:w-[860px] sm:h-[483.7px] w-[350px] h-[196.6px] bg-gray-800 rounded-md mt-3 flex items-center justify-center ">
                         {/* <iframe className="w-[860px] h-[483.7px] rounded-md" src={chiTietPhim.episodes[0].server_data[0].link_embed} allowFullScreen></iframe> */}
                         {  selectedEpisode.link_embed
                         ?(<iframe className="sm:w-[860px] sm:h-[483.7px] w-[350px] h-[196.6px] rounded-md" src={selectedEpisode.link_embed} allowFullScreen></iframe>)
                         :(<div className=" p-2 gap-x-2 flex flex-row bg-gray-700 rounded-md sm:w-full w-[300px]">
                            <img className="h-6 w-6" src="https://cdn-icons-png.flaticon.com/128/4539/4539472.png"/>
                            <p className="font-normal text-white">Rất tiếc bộ phim đang chưa hoàn thiện, mình chọn phim khác bạn nhé !</p>
                         </div>)}
                     </div>
               </div>


            ) : (   
                <div className="sm:w-[860px] sm:h-[408.84px] w-[350px] flex sm:flex-row flex-col  gap-x-8 mt-8 relative">
                    {chiTietPhim.movie && (
                        < div className="flex sm:justify-start justify-center relative">
                            <img className="rounded-md w-[276px] h-[408.84px] relative " src={chiTietPhim.movie.thumb_url} />

                            <div className="flex flex-row gap-x-4 justify-center ">
                        <button onClick={handleClick} className="sm:left-2 top-[360px] sm:mr-0 mr-[390px]  absolute font-semibold text-white flex justify-center items-center w-28 py-2 rounded-xl bg-gradient-to-r from-blue-400 to-blue-700 hover:scale-95">
                            <div className="flex flex-row gap-x-2 items-center">
                                <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/15281/15281960.png" />
                                <p className="font-normal">Tập phim</p>
                            </div>
                        </button>

                            
                            <button onClick={handlePlayFilm} className="sm:left-[156px] sm:mr-0 mr-[138px]  top-[360px] absolute font-semibold text-white flex justify-center items-center w-28 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-95">
                                <div className="flex flex-row gap-x-2 items-center">
                                    <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/10257/10257610.png" alt="watch icon" />
                                    <p className="font-normal">Xem phim</p>
                                </div>
                            </button>
                          </div>
                            
                        </div>

                      


                

                    )}
    
                    {chiTietPhim.movie && (
                     <div className="flex sm:justify-end justify-center ">
                            <div className="flex flex-col gap-y-2  sm:items-start sm:pt-0 pt-6 sm:w-[523.45px] w-[350px] sm:px-0 px-2">
                                <p className="font-bold text-2xl text-gray-200 ">{chiTietPhim.movie.name}</p>
                                <p className="font-semibold text-gray-400 ">{chiTietPhim.movie.origin_name}</p>
                                <div className="flex flex-row sm:gap-x-24 gap-x-2  justify-start">
                                    <div className="flex flex-row gap-x-1">
                                        <p className="font-semibold text-gray-400 text-sm">Năm:</p>
                                        <p className="font-semibold text-gray-200 text-sm">{chiTietPhim.movie.year}</p>
                                    </div>
                                    <div className="flex flex-row gap-x-1">
                                        <p className="font-semibold text-gray-400 text-sm">Thời lượng:</p>
                                        <p className="font-semibold text-gray-200 text-sm">{chiTietPhim.movie.time}</p>
                                    </div>
                                </div>
        
                                <div className="flex flex-row sm:gap-x-24 gap-x-2 justify-start">
                                    <div className="flex flex-row gap-x-1">
                                        <p className="font-semibold text-gray-400 text-sm">Trạng thái:</p>
                                        <p className="font-semibold text-gray-200 text-sm">{chiTietPhim.movie?.episode_current}</p>
                                    </div>
                                    <div className="flex flex-row gap-x-1">
                                        <p className="font-semibold text-gray-400 text-sm">Số tập hiện tại:</p>
                                        <p className="font-semibold text-gray-200 text-sm">{chiTietPhim.movie?.episode_total}</p>
                                    </div>
                                </div>
        
                                <div className="flex flex-row sm:gap-x-24 gap-x-2 justify-start">
                                    <div className="flex flex-row gap-x-1">
                                        <p className="font-semibold text-gray-400 text-sm">Quốc gia:</p>
                                        <p className="font-semibold text-gray-200 text-sm">
                                            {chiTietPhim.movie?.country && chiTietPhim.movie.country.length > 0
                                                ? chiTietPhim.movie.country.map(coun => coun.name).join(', ')
                                                : 'Chưa có thông tin quốc gia'}
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-x-1 justify-start">
                                        <p className="font-semibold text-gray-400 text-sm">Chất lượng:</p>
                                        <p className="font-semibold text-gray-200 text-sm">{chiTietPhim.movie?.lang}+{chiTietPhim.movie?.quality}</p>
                                    </div>
                                </div>
        
                                <div className="flex flex-row gap-x-1 justify-start">
                                    <p className="font-semibold text-gray-400 text-sm">Thể loại:</p>
                                    <p className="font-semibold text-gray-200 text-sm">
                                        {chiTietPhim.movie?.category && chiTietPhim.movie.category.length > 0
                                            ? chiTietPhim.movie.category.map(cat => cat.name).join(', ')
                                            : 'Chưa có thông tin thể loại'}
                                    </p>
                                </div>
        
                                <p className="font-semibold text-gray-200 text-xl flex justify-start">Diễn viên</p>
                                <p className="font-semibold text-gray-400 text-sm flex justify-start">
                                    {chiTietPhim.movie?.actor && chiTietPhim.movie.actor.some(actor => actor.trim() !== "")
                                        ? chiTietPhim.movie.actor.filter(actor => actor.trim() !== "").join(', ') : 'Đang cập nhật'}
                                </p>
        
                                <div className="flex flex-row gap-x-2 items-center justify-start">
                                    <img className="h-6 w-6" src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" />
                                    <p className="text-2xl font-semibold text-gray-400 ">{chiTietPhim.movie?.tmdb.vote_average}</p>
                                    <p className="font-semibold text-gray-400 text-sm">{chiTietPhim.movie?.tmdb.vote_count} lượt</p>
                                </div>
        
                                {chiTietPhim.movie?.trailer_url && chiTietPhim.movie.trailer_url.trim() !== "" && (
                                    <div className="">
                                        <button onClick={handleTrailerClick} className="font-semibold text-white flex justify-center items-center w-24 py-2 rounded-2xl bg-gradient-to-r from-green-500 to-green-700 mt-1 hover:scale-95 ">
                                            <div className="flex flex-row gap-x-2 items-center justify-start">
                                                <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/1709/1709973.png" />
                                                <p className="font-normal">Trailer</p>
                                            </div>
                                        </button>
        
                                        {/* Show Trailer if showTrailer is true */}
                                        {showTrailer && (
                                            <div onClick={closeTrailer} className="fixed flex justify-center items-center inset-0 z-30 bg-black bg-opacity-80 transition-opacity">
                                                <iframe className="sm:w-[896px] sm:h-[504px] w-[350px] h-[196px]" src={chiTietPhim.movie.trailer_url.replace("watch?v=", "embed/")} allowFullScreen></iframe>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                     </div>
                    )}
                </div>

                )}
      
              
        
 


             <div show={show} 
                  playFilm={playFilm}
             className={`flex-col ${show || playFilm ? '' : 'hidden'}`}>
                            <div className="flex sm:justify-start justify-center flex-col">
                            <div className="flex sm:justify-start justify-center sm:mr-0 mr-[190px]">
                                <div className="rounded-tl-md rounded-tr-md flex flex-row gap-x-2 sm:w-[192px] w-[160px] h-9 bg-gray-800 mt-5 justify-center items-center">
                                    <img className="h-4 w-4" src="https://cdn-icons-png.flaticon.com/128/15379/15379943.png" />
                                    <p className="text-yellow-400 font-semibold">VIETSUB #1</p>
                                </div>
                            </div>

                            <div className="flex sm:justify-start justify-center">
                                <div className="rounded-tr-md rounded-br-md rounded-bl-md sm:w-[860px] w-[350px] bg-gray-800 h-auto grid sm:grid-cols-19 grid-cols-7 gap-2 px-3 py-3">
                                    {
                                    chiTietPhim.episodes?.[0]?.server_data?.length === 1 ? (
                                        <button onClick={handlePlayFilm} className={`w-9 h-9 text-white font-bold text-sm flex justify-center items-center  rounded-lg ${playFilm ?'bg-yellow-400':'bg-gray-700'}`}>Full</button>
                                    ) : (
                                        [...Array(chiTietPhim.episodes?.[0]?.server_data?.length)].map((_, index) => (
                                       
                                    <Link to={chiTietPhim.episodes?.[0]?.server_data?.link_embed}>
                                            <button
                                            // onClick={handlePlayFilm}
                                            onClick={() => handleNext(index)}  // Pass index to handleNext
                                            key={index}
                                            className={`w-9 h-9 text-white font-bold text-sm flex justify-center items-center rounded-lg ${next === index ? 'bg-yellow-400' : 'bg-gray-700'}`}  // Apply active class based on index
                                        >
                                            {index + 1}
                                        </button>
                                    </Link>
                                        ))
                                    )
                                    }
                                </div>
                                </div>
                            </div>
                            </div>


            <div className={`bg-gray-800 h-auto sm:flex hidden items-center py-3 flex-row gap-x-2 pl-3 mt-5 rounded-md ${playFilm ?'hidden':''} `}>
                <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/128/4539/4539472.png" />
                <p className="text-yellow-400 font-normal ">Phim bị lỗi thì bình luận bên dưới để ad fix hoặc qua nhóm tele:...</p>
            </div>

           

{/* <div className={`flex sm:justify-start justify-center ${playFilm ? 'sm:mt-0 mt-[354px]' : show ? 'sm:mt-0' : ''}`}> */}
           <div className="flex sm:justify-start justify-center ">
                <div className="flex flex-col gap-y-3 py-3 px-3 bg-gray-800 sm:w-[860px] w-[350px] rounded-md sm:mt-4 mt-4 ">
    
                    <div className={`${playFilm ?'':'hidden'}`}>
                    {chiTietPhim.movie && (
                        <div className="flex flex-col gap-y-3">
                        <p className="font-semibold text-xl text-yellow-400">{chiTietPhim.movie.name}</p>
                        <p className="font-semibold text-gray-200 text-sm">{chiTietPhim.movie?.lang}+{chiTietPhim.movie?.quality}</p>
                        <div className="border-t border-solid sm:w-[835px] w-full"></div>
                        </div>
                    )}
                    </div>
                    
    
                    <div className="flex flex-col gap-y-0.5">
                        <div
                        className=" font-bold text-xl text-gray-300">
                            Nội Dung Phim
                        </div>
                    </div>
                    <p className="text-gray-300 font-normal">
                        {
                            chiTietPhim.movie?.content && chiTietPhim.movie.content.trim().length > 0
                                ? chiTietPhim.movie.content
                                    .replace(/<p>&nbsp;<\/p>/g, '')  // Xóa các thẻ <p>&nbsp;</p>
                                    .replace(/&nbsp;/g, '')  // Xóa các thẻ <p>&nbsp;</p>
                                    .replace(/<\/?[^>]+(>|$)/g, '') // Xóa các thẻ HTML khác nếu có
                                : 'Đang cập nhật'
                        }
                    </p>
                </div>
           </div>
                   
        </div>
    );
}

export default Chitietphim;




