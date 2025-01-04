function Footer() {
    return ( 


    <div className="w-full bg-gray-900 sm:h-[255px] h-full flex items-center border-t border-gray-800 border-solid flex-col sm:pb-0 pb-2">
    <div className="flex flex-row gap-x-6 sm:w-[1310px] w-full sm:px-0 px-2 mt-8">
         <img className="h-14 w-16" src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png" />
         <p className="text-gray-400 mt-3">NETFLIX - Trang web xem phim trực tuyến miễn phí chất lượng cao với giao diện trực quan, tốc độ tải trang nhanh, cùng kho phim với hơn 20.000+ bộ phim hot luôn cập nhật phim nhanh, hứa hẹn sẽ đem lại phút giây giải trí tuyệt vời cho bạn.</p>
    </div>
    <div className="sm:w-[1310px] sm:px-0 w-full px-2 border-t border-gray-800 border-solid  mt-14"></div>

    <div className="flex sm:justify-between sm:flex-row flex-col gap-y-1 justify-center items-center mt-10 sm:w-[1310px]">
         <p className="text-gray-400 text-sm ">© 2024 NETFLIX. All rights reserved.</p>
         <div className="flex sm:flex-row flex-col gap-x-2 gap-y-1">
             <p className="text-red-800 text-sm">Trang web thuộc quyền sở hữu của Lê Đình Chính</p>
             <div className="flex flex-row gap-x-2 justify-center">
                 <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" />
                 <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" />
                 <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/3178/3178158.png" />
             </div>
         </div>
     </div>

</div> 
    );
}

export default Footer;