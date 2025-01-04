import axios from "axios";




function fetchFilmsBo(page) {
  return ( 
        axios.get(`https://ophim1.com/v1/api/danh-sach/phim-bo?page=${page}`)
      );
}

function fetchFilmsTvShows(page) {
  return ( 
        axios.get(`https://ophim1.com/v1/api/danh-sach/tv-shows?page=${page}`)
      );
}

function fetchFilmsHoatHinh(page) {
  return ( 
        axios.get(`https://ophim1.com/v1/api/danh-sach/hoat-hinh?page=${page}`)
      );
}



function fetchFilmsTheLoai({page}) {
  return ( 
        axios.get(`https://ophim1.com/v1/api/the-loai/kinh-di?page=${page}`)
      );
}

function fetchFilmsQuocGia() {
  return ( 
        axios.get("https://ophim1.com/danh-sach/phim-le")
      );
}

function fetchFilmsSapRa(page) {
  return ( 
        axios.get(`https://ophim1.com/v1/api/danh-sach/phim-sap-chieu?category=&country=&year=&sort_field=&page=${page}`)
      );
}

function fetchFilmsGoiY() {
  return ( 
        axios.get("https://ophim1.com/v1/api/danh-sach/phim-sap-chieu?category=&country=&year=&sort_field=&page=2")
      );
}


function fetchFilmsViews(date) {
  return ( 
        axios.get(`https://ophim1.com/v1/api/danh-sach/moi?category=&country=&year=&sort_field=${date}&page=1`)
      );
}



function fetchBanner(page) {
  return ( 
    axios.get(`https://ophim1.com/v1/api/danh-sach/phim-sap-chieu?category=&country=&year=&sort_field=&page=${page}`)
      );
}

function fetchFilmsChiTiet(name) {
  return ( 
    axios.get(`https://ophim1.com/phim/${name}`)
      );
}




function fetchFilmsLe(page) {
  return ( 
        axios.get(`https://ophim1.com/v1/api/danh-sach/phim-le?page=${page}`)
      );
}


function fetchFilmById(slug) {
  return (
    axios.get(`https://ophim1.com/phim/${slug}`)
  );
}

function fetchFilmsByCategory(categorySlug) {
  
return axios.get(`https://ophim1.com/phim/the-loai/${categorySlug}`);
}

function fetchFilmsTimKiem(key) {
  
  return axios.get(`https://ophim1.com/v1/api/tim-kiem?keyword=${key}`);
  }
  
function fetchSearchArray({loaiphim,theloai,quocgia,nam}) {
  return axios.get(`https://ophim1.com/v1/api/danh-sach/${loaiphim}?category=${theloai}&country=${quocgia}&year=${nam}`)
}


export  {
  fetchFilmsLe,
  fetchFilmsBo,
  fetchFilmsTvShows,
  fetchFilmsHoatHinh,
  fetchFilmsTheLoai,
  fetchFilmsQuocGia,
  fetchFilmsSapRa,
  fetchFilmsViews,
  fetchBanner,
  fetchFilmsChiTiet,
  fetchFilmById,
  fetchFilmsByCategory,
  fetchFilmsGoiY,
  fetchFilmsTimKiem,
  fetchSearchArray
};