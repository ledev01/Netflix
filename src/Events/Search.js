// import { useState, useRef, useEffect } from 'react';
// import { fetchFilmsTimKiem } from '../Services/itemService';
// import { Link, useNavigate } from 'react-router-dom';
// import useDebounce from '../Services/useDebounce';
// import './index.css'; 
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// // ,keyword, setKeyword , search, setSearch,logo, setLogo
// function Search({ searchQuery }) {
//   const [keyword, setKeyword] = useState('');
//   const [filmsTv, setFilmTv] = useState([]);
//   const [activePage, setActivePage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [noFilmsFound, setNoFilmsFound] = useState(false);
//   const [search, setSearch] = useState(false);
//   const searchRef = useRef();
//   const res = useRef(null);
//   const [logo, setLogo] = useState(true);
//   const dropdownRef = useRef();  // Ref cho dropdown kết quả tìm kiếm

//   const navigate = useNavigate();
//   const debouncedKeyword = useDebounce(keyword, 200);

//   const handleSearchChange = (e) => {
//     setKeyword(e.target.value);
//   };


//   const handleSearchSubmit = () => {
//     setSearch(true);
//     if (keyword.trim() !== '') {
//       navigate(`/timkiem?keyword=${encodeURIComponent(keyword)}`);
//     }
//   };

  

//   const handleClickSearchIcon = () => {
//     setLogo(false);
//     setSearch(true);
//     searchRef.current.focus();
//   };



//   const handleBlur = (e) => {
//     // Kiểm tra nếu người dùng không click vào input hoặc dropdown
//     if (
//       dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget) && // Nếu không phải click vào dropdown
//       !searchRef.current.contains(e.relatedTarget) // Nếu không phải click vào input tìm kiếm
//     ) {
//       setLogo(true);  // Hiện lại logo tìm kiếm
//       setSearch(false);  // Ẩn input tìm kiếm
//       setKeyword('')

//     }
//   };
  

//   const handleKeyDown = (e) => {
    
//     if (e.key === 'Enter') {
//       handleSearchSubmit();
//       setSearch(false)
//       setLogo(true)
//       setKeyword('')
//     }
//   };

//   useEffect(() => {
//     if (searchQuery) {
//       getFilm(searchQuery);
//     }
//   }, [searchQuery, activePage]);

//   const getFilm = async (keyword) => {
//     try {
//       let response = await fetchFilmsTimKiem(keyword);
//       if (response && response.data && response.data.data && Array.isArray(response.data.data.items)) {
//         const films = response.data.data.items;
//         setFilmTv(films);
//         setTotalPages(response.data.data.totalPages || 1);
//         setNoFilmsFound(films.length === 0);
//         res.current = response;
//       } else {
//         setNoFilmsFound(true);
//       }
//     } catch (error) {
//       console.error('Lỗi khi tải phim:', error);
//       setNoFilmsFound(true);
//     }
//   };

//   useEffect(() => {
//     if (search) {
//       searchRef.current.focus();
//     }
//   }, [search]);

//   useEffect(() => {
//     if (debouncedKeyword.trim()) {
//       getFilm(debouncedKeyword);
//     } else {
//       setFilmTv([]);
//     }
//   }, [debouncedKeyword]);

 
  

//     const handleChose = () =>{
//     setSearch(false);
//     setLogo(true);
//     setKeyword('')
//   }

//   return (
//     <div className="flex flex-col relative">




//       <div className="relative flex flex-row items-center">
//         <img
//           onClick={handleClickSearchIcon}
//           className={`w-6 h-6 cursor-pointer z-10 mr-2
//               ${logo ? '' : 'hidden'}`}
//           src="https://cdn-icons-png.flaticon.com/128/18290/18290728.png"
//           alt="search icon"
//         />
//         <input
//           spellCheck="false" 
//           ref={searchRef}
//           onBlur={handleBlur} // Thêm sự kiện handleBlur
//           onKeyDown={handleKeyDown}
//           value={keyword}
//           onChange={handleSearchChange}
//           className={`absolute font-normal -right-0 h-10 sm:w-96 w-48 sm:mr-0 bg-gray-800 outline-none rounded-lg pl-2 border border-gray-700 bg-blackoil/70 p-2 px-10 text-slate-200 placeholder-gray-400 transition-all duration-300 opacity-80 ${search ? '' : 'hidden'}`}
//           placeholder="Tìm kiếm tên phim .."
//         />
//       </div>

//       {/* Dropdown kết quả tìm kiếm */}
//       <div 
//         ref={dropdownRef} // Gán ref cho dropdown
//         className={`sm:w-96 sm:max-h-[516px] max-h-[316px] w-48 rounded-md bg-black -right-0 top-8 absolute shadow-2xl overflow-y-auto ${search ? '' : 'hidden'}`}
//       >
//         <div className="flex flex-col">
//           {filmsTv.length > 0 && (
//             filmsTv.map((item) => (
//               <Link key={item._id} to={`/trangchitietphim/${item.slug}`}
//               // onClick={() => {
//               //   setSearch(false);
//               //   setLogo(true);
//               // }} 
//               onClick={()=>handleChose()}          
//               >
//                 <div className="pl-2 sm:h-[120px] h-[100px] w-full hover:bg-gray-400 flex flex-row gap-x-2 rounded-md relative items-center search-result">
//                   {/* <img
//                     className="w-[64px] h-[96px] rounded-md object-cover"
//                     src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
//                     alt={item.name}
//                   /> */}
//                   <span className="">
//                     <LazyLoadImage
//                       className="sm:w-[64px] sm:h-[96px] h-[80px] w-[54px]  rounded-md object-cover"
//                       src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
//                       effect="blur"  // Thêm hiệu ứng blur
//                       loading="lazy"
//                     />
//                   </span>
//                   <div className="flex flex-col items-center sm:w-[270px] w-[100px] justify-start">
//                     <div className="flex justify-start sm:w-[270px] w-[100px]">
//                       <div className="text-yellow-300 font-semibold truncate">{item.origin_name}</div>
//                     </div>
//                     <div className="flex justify-start sm:w-[270px] w-[100px]">
//                       <a className="text-white truncate">{item.name}</a>
//                     </div>
//                     <div className="flex justify-start sm:w-[270px] w-[100px]">
//                       <a className="text-white truncate">{item.year}</a>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Search;



// import { useState, useRef, useEffect } from 'react';
// import { fetchFilmsTimKiem } from '../Services/itemService';
// import { Link, useNavigate } from 'react-router-dom';
// import useDebounce from '../Services/useDebounce';
// import './index.css'; 
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

// function Search({ searchQuery }) {
//   const [keyword, setKeyword] = useState('');
//   const [filmsTv, setFilmTv] = useState([]);
//   const [activePage, setActivePage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [noFilmsFound, setNoFilmsFound] = useState(false);
//   const [search, setSearch] = useState(false);
//   const searchRef = useRef();
//   const res = useRef(null);
//   const [logo, setLogo] = useState(true);
//   const dropdownRef = useRef();  // Ref cho dropdown kết quả tìm kiếm

//   const navigate = useNavigate();
//   const debouncedKeyword = useDebounce(keyword, 200);

//   const handleSearchChange = (e) => {
//     setKeyword(e.target.value);
//   };

//   const handleSearchSubmit = () => {
//     setSearch(true);
//     if (keyword.trim() !== '') {
//       navigate(`/timkiem?keyword=${encodeURIComponent(keyword)}`);
//     }
//   };

//   const handleClickSearchIcon = () => {
//     setLogo(false);
//     setSearch(true);
//     searchRef.current.focus();
//   };

//   const handleBlur = (e) => {
//     // Kiểm tra nếu người dùng không click vào input hoặc dropdown
//     if (
//       dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget) && // Nếu không phải click vào dropdown
//       !searchRef.current.contains(e.relatedTarget) // Nếu không phải click vào input tìm kiếm
//     ) {
//       setLogo(true);  // Hiện lại logo tìm kiếm
//       setSearch(false);  // Ẩn input tìm kiếm
//       setKeyword('');
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSearchSubmit();
//       setSearch(false);
//       setLogo(true);
//       setKeyword('');
//     }
//   };

//   useEffect(() => {
//     if (searchQuery) {
//       getFilm(searchQuery);
//     }
//   }, [searchQuery, activePage]);

//   const getFilm = async (keyword) => {
//     try {
//       let response = await fetchFilmsTimKiem(keyword);
//       if (response && response.data && response.data.data && Array.isArray(response.data.data.items)) {
//         const films = response.data.data.items;
//         setFilmTv(films);
//         setTotalPages(response.data.data.totalPages || 1);
//         setNoFilmsFound(films.length === 0);
//         res.current = response;
//       } else {
//         setNoFilmsFound(true);
//       }
//     } catch (error) {
//       console.error('Lỗi khi tải phim:', error);
//       setNoFilmsFound(true);
//     }
//   };

//   useEffect(() => {
//     if (search) {
//       searchRef.current.focus();
//     }
//   }, [search]);

//   useEffect(() => {
//     if (debouncedKeyword.trim()) {
//       getFilm(debouncedKeyword);
//     } else {
//       setFilmTv([]);
//     }
//   }, [debouncedKeyword]);

//   const handleChose = () => {
//     setSearch(false);
//     setLogo(true);
//     setKeyword('');
//   };

//   return (
//     <div className="flex flex-col relative">
//       {/* Search Icon and Input */}
//       <div className="relative flex flex-row items-center">
//         <img
//           onClick={handleClickSearchIcon}
//           className={`w-6 h-6 cursor-pointer z-10 mr-5 ${logo ? '' : 'hidden'}`}
//           src="https://cdn-icons-png.flaticon.com/128/18290/18290728.png"
//           alt="search icon"
//         />
//         <input
//           spellCheck="false" 
//           ref={searchRef}
//           onBlur={handleBlur}
//           onKeyDown={handleKeyDown}
//           value={keyword}
//           onChange={handleSearchChange}
//           className={`absolute font-normal right-5 h-10 sm:w-96 w-48 sm:mr-0 bg-gray-800 outline-none rounded-lg pl-2 border border-gray-700 bg-blackoil/70 p-2 px-10 text-slate-200 placeholder-gray-400 transition-all duration-300 opacity-80 ${search ? '' : 'hidden'}`}
//           placeholder="Tìm kiếm tên phim "
//         />
//       </div>

//       {/* Dropdown kết quả tìm kiếm */}
//       <div
//         ref={dropdownRef} 
//         className={`sm:w-96 sm:max-h-[516px] max-h-[220px] w-48 rounded-md bg-black right-5 top-8 absolute shadow-2xl overflow-y-auto ${search ? '' : 'hidden'}`}
//       >
//         <div className="flex flex-col">
//           {filmsTv.length > 0 && (
//             filmsTv.map((item) => (
//               <Link 
//                 key={item._id} 
//                 to={`/trangchitietphim/${item.slug}`}
//                 onClick={() => handleChose()}
//               >
//                 <div className="pl-2 sm:h-[120px] h-[100px] w-full hover:bg-gray-400 flex flex-row gap-x-2 rounded-md relative items-center search-result">
//                   <span>
//                     <LazyLoadImage
//                       className="sm:w-[64px] sm:h-[96px] h-[80px] w-[54px] rounded-md object-cover"
//                       src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
//                       effect="blur" 
//                       loading="lazy"
//                     />
//                   </span>
//                   <div className="flex flex-col items-center sm:w-[270px] w-[100px] justify-start">
//                     <div className="flex justify-start sm:w-[270px] w-[100px]">
//                       <div className="text-yellow-300 font-semibold truncate">{item.origin_name}</div>
//                     </div>
//                     <div className="flex justify-start sm:w-[270px] w-[100px]">
//                       <a className="text-white truncate">{item.name}</a>
//                     </div>
//                     <div className="flex justify-start sm:w-[270px] w-[100px]">
//                       <a className="text-white truncate">{item.year}</a>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Search;


import { useState, useRef, useEffect } from 'react';
import { fetchFilmsTimKiem } from '../Services/itemService';
import { Link, useNavigate } from 'react-router-dom';
import useDebounce from '../Services/useDebounce';
import './index.css'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Search({ searchQuery }) {
  const [keyword, setKeyword] = useState('');
  const [filmsTv, setFilmTv] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [noFilmsFound, setNoFilmsFound] = useState(false);
  const [search, setSearch] = useState(false);
  const searchRef = useRef();
  const res = useRef(null);
  const [logo, setLogo] = useState(true);
  const dropdownRef = useRef();  // Ref cho dropdown kết quả tìm kiếm

  const navigate = useNavigate();
  const debouncedKeyword = useDebounce(keyword, 200);

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchSubmit = () => {
    setSearch(true);
    if (keyword.trim() !== '') {
      navigate(`/timkiem?keyword=${encodeURIComponent(keyword)}`);
    }
  };

  const handleClickSearchIcon = () => {
    setLogo(false);
    setSearch(true);
    searchRef.current.focus();
  };

  // Hàm xử lý sự kiện blur
  const handleBlur = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget) && !searchRef.current.contains(e.relatedTarget)) {
      setLogo(true);  // Hiện lại logo tìm kiếm
      setSearch(false);  // Ẩn input tìm kiếm
      setKeyword('');
    }
  };

  // Xử lý khi nhấn phím Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
      setSearch(false);
      setLogo(true);
      setKeyword('');
    }
  };

  useEffect(() => {
    if (searchQuery) {
      getFilm(searchQuery);
    }
  }, [searchQuery, activePage]);

  const getFilm = async (keyword) => {
    try {
      let response = await fetchFilmsTimKiem(keyword);
      if (response && response.data && response.data.data && Array.isArray(response.data.data.items)) {
        const films = response.data.data.items;
        setFilmTv(films);
        setTotalPages(response.data.data.totalPages || 1);
        setNoFilmsFound(films.length === 0);
        res.current = response;
      } else {
        setNoFilmsFound(true);
      }
    } catch (error) {
      // console.error('Lỗi khi tải phim:', error);
      setNoFilmsFound(true);
    }
  };

  useEffect(() => {
    if (search) {
      searchRef.current.focus();
    }
  }, [search]);

  useEffect(() => {
    if (debouncedKeyword.trim()) {
      getFilm(debouncedKeyword);
    } else {
      setFilmTv([]);
    }
  }, [debouncedKeyword]);

  const handleChose = () => {
    setSearch(false);
    setLogo(true);
    setKeyword('');
  };

  // Sử dụng sự kiện touchstart để cải thiện việc kiểm soát khi bàn phím di chuyển
  const handleTouchStart = (e) => {
    // Nếu người dùng chạm vào ngoài dropdown, đóng dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(e.target) && !searchRef.current.contains(e.target)) {
      setSearch(false);
      setLogo(true);
      setKeyword('');
    }
  };

  useEffect(() => {
    // Thêm sự kiện để kiểm tra khi người dùng click ra ngoài
    document.addEventListener('touchstart', handleTouchStart);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);


  const handleClickFilm = (e, slug) => {
    e.preventDefault(); // Ngăn không cho bàn phím ẩn ngay lập tức
    setSearch(false);  // Ẩn input tìm kiếm
    setLogo(true);  // Hiện logo tìm kiếm lại
    setKeyword('');  // Xóa từ khóa tìm kiếm
    
    // Sau đó, thực hiện điều hướng
    navigate(`/trangchitietphim/${slug}`);
  };
  

  return (
    <div className="flex flex-col relative">
      {/* Search Icon and Input */}
      <div className="relative flex flex-row items-center">
        <img
          onClick={handleClickSearchIcon}
          className={`w-6 h-6 cursor-pointer z-10 mr-5 ${logo ? '' : 'hidden'}`}
          src="https://cdn-icons-png.flaticon.com/128/18290/18290728.png"
          alt="search icon"
        />
        <input
          spellCheck="false" 
          ref={searchRef}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          value={keyword}
          onChange={handleSearchChange}
          className={`absolute font-normal right-5 h-10 sm:w-96 w-48 sm:mr-0 bg-gray-800 outline-none rounded-lg pl-2 border border-gray-700 bg-blackoil/70 p-2 px-10 text-slate-200 placeholder-gray-400 transition-all duration-300 opacity-80 ${search ? '' : 'hidden'}`}
          placeholder="Tìm kiếm tên phim "
        />
      </div>

      {/* Dropdown kết quả tìm kiếm */}
      <div
        ref={dropdownRef} 
        className={`sm:w-96 sm:max-h-[516px] max-h-[220px] w-48 rounded-md bg-black right-5 top-8 absolute shadow-2xl overflow-y-auto ${search ? '' : 'hidden'}`}
        style={{
          display: search && filmsTv.length > 0 ? 'block' : 'none',  // Kiểm tra nếu có kết quả tìm kiếm mới hiển thị
        }}
      >
        <div className="flex flex-col">
          {/* {filmsTv.length > 0 ? (
            filmsTv.map((item) => (
              <Link 
                key={item._id} 
                to={`/trangchitietphim/${item.slug}`}
                onClick={() => handleChose()}
              >
                <div className="pl-2 sm:h-[120px] h-[100px] w-full hover:bg-gray-400 flex flex-row gap-x-2 rounded-md relative items-center search-result">
                  <span>
                    <LazyLoadImage
                      className="sm:w-[64px] sm:h-[96px] h-[80px] w-[54px] rounded-md object-cover"
                      src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
                      effect="blur" 
                      loading="lazy"
                    />
                  </span>
                  <div className="flex flex-col items-center sm:w-[270px] w-[100px] justify-start">
                    <div className="flex justify-start sm:w-[270px] w-[100px]">
                      <div className="text-yellow-300 font-semibold truncate">{item.origin_name}</div>
                    </div>
                    <div className="flex justify-start sm:w-[270px] w-[100px]">
                      <a className="text-white truncate">{item.name}</a>
                    </div>
                    <div className="flex justify-start sm:w-[270px] w-[100px]">
                      <a className="text-white truncate">{item.year}</a>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center text-gray-400 p-2">Không có kết quả tìm kiếm.</div>
          )} */}

{filmsTv.length > 0 ? (
  filmsTv.map((item) => (
    <Link 
      key={item._id} 
      to="#" // Sử dụng '#' thay vì trực tiếp vào link vì chúng ta sẽ xử lý việc điều hướng thủ công
      onClick={(e) => handleClickFilm(e, item.slug)} // Gọi hàm handleClickFilm khi nhấn vào
    >
      <div className="pl-2 sm:h-[120px] h-[100px] w-full hover:bg-gray-400 flex flex-row gap-x-2 rounded-md relative items-center search-result">
        <span>
          <LazyLoadImage
            className="sm:w-[64px] sm:h-[96px] h-[80px] w-[54px] rounded-md object-cover"
            src={`https://img.ophim.live/uploads/movies/${item.thumb_url}`}
            effect="blur" 
            loading="lazy"
          />
        </span>
        <div className="flex flex-col items-center sm:w-[270px] w-[100px] justify-start">
          <div className="flex justify-start sm:w-[270px] w-[100px]">
            <div className="text-yellow-300 font-semibold truncate">{item.origin_name}</div>
          </div>
          <div className="flex justify-start sm:w-[270px] w-[100px]">
            <a className="text-white truncate">{item.name}</a>
          </div>
          <div className="flex justify-start sm:w-[270px] w-[100px]">
            <a className="text-white truncate">{item.year}</a>
          </div>
        </div>
      </div>
    </Link>
  ))
) : (
  <div className="text-center text-gray-400 p-2">Không có kết quả tìm kiếm.</div>
)}


        </div>
      </div>
    </div>
  );
}

export default Search;

