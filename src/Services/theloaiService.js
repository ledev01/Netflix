import axios from "axios";

function fetchFilmHanhDong({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/hanh-dong?page=${page}`)
        );
  }

function fetchFilmCoTrang({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/co-trang?page=${page}`)
        );
  }

function fetchFilmChienTranh({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/chien-tranh?page=${page}`)
        );
  }

  function fetchFilmVienTuong({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/vien-tuong?page=${page}`)
        );
  }

function fetchFilmKinhDi({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/kinh-di?page=${page}`)
        );
  }

function fetchFilmTaiLieu({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/tai-lieu?page=${page}`)
        );
  }

  function fetchFilmBiAn({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/bi-an?page=${page}`)
        );
  }

function fetchFilmPhim18({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/phim-18?page=${page}`)
        );
  }

function fetchFilmTinhCam({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/tinh-cam?page=${page}`)
        );
  }

  function fetchFilmTamLy({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/tam-ly?page=${page}`)
        );
  }

function fetchFilmTheThao({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/the-thao?page=${page}`)
        );
  }

function fetchFilmPhieuLuu({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/phieu-luu?page=${page}`)
        );
  }

  function fetchFilmAmNhac({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/am-nhac?page=${page}`)
        );
  }

function fetchFilmGiaDinh({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/gia-dinh?page=${page}`)
        );
  }

function fetchFilmHocDuong({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/hoc-duong?page=${page}`)
        );
  }

  function fetchFilmHaiHuoc({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/hai-huoc?page=${page}`)
        );
  }

function fetchFilmHinhSu({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/hinh-su?page=${page}`)
        );
  }

function fetchFilmVoThuat({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/vo-thuat?page=${page}`)
        );
  }

  function fetchFilmKhoaHoc({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/khoa-hoc?page=${page}`)
        );
  }

function fetchFilmThanThoai({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/than-thoai?page=${page}`)
        );
  }

function fetchFilmChinhKich({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/chinh-kich?page=${page}`)
        );
  }

  function fetchFilmKinhDien({page}) {
    return ( 
          axios.get(`https://ophim1.com/v1/api/the-loai/kinh-dien?page=${page}`)
        );
  }




export {
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
};