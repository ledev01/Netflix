function Option() {
    return ( <div>
        <div className="w-[1310px] h-[126px] mt-10 flex flex-col gap-y-8">
           <div className="flex flex-row gap-x-4">

              <div className="flex flex-col gap-y-3">
                 <p className="font-bold text-gray-300">Loại phim</p>
                 <div className="w-[168px] h-[35.2px] bg-gray-800 flex items-center px-3 rounded-md">
                    <p className="text-gray-300">- Tất cả -</p>
                    <img className="ml-auto h-4 w-4" src="https://cdn-icons-png.flaticon.com/128/15281/15281960.png"/>
                 </div>
              </div>

              <div className="flex flex-col gap-y-3">
                 <p className="font-bold text-gray-300">Thể loại</p>
                 <div className="w-[168px] h-[35.2px] bg-gray-800 flex items-center px-3 rounded-md">
                    <p className="text-gray-300">- Tất cả -</p>
                    <img className="ml-auto h-4 w-4" src="https://cdn-icons-png.flaticon.com/128/15281/15281960.png"/>
                 </div>
              </div>

              <div className="flex flex-col gap-y-3">
                 <p className="font-bold text-gray-300">Quốc gia</p>
                 <div className="w-[168px] h-[35.2px] bg-gray-800 flex items-center px-3 rounded-md">
                    <p className="text-gray-300"> - Tất cả -</p>
                    <img className="ml-auto h-4 w-4" src="https://cdn-icons-png.flaticon.com/128/15281/15281960.png"/>
                 </div>
              </div>

              <div className="flex flex-col gap-y-3">
                 <p className="font-bold text-gray-300">Năm</p>
                 <div className="w-[168px] h-[35.2px] bg-gray-800 flex items-center px-3 rounded-md">
                    <p className="text-gray-300">- Tất cả -</p>
                    <img className="ml-auto h-4 w-4" src="https://cdn-icons-png.flaticon.com/128/15281/15281960.png"/>
                 </div>
              </div>

              <div className="flex flex-col gap-y-3">
                 <p className="font-bold text-gray-300">Sắp xếp</p>
                 <div className="w-[168px] h-[35.2px] bg-gray-800 flex items-center px-3 rounded-md">
                    <p className="text-gray-300">- Tất cả -</p>
                    <img className="ml-auto h-4 w-4" src="https://cdn-icons-png.flaticon.com/128/15281/15281960.png"/>
                 </div>
              </div>

              <img className="w-10 h-10 mt-8 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/566/566737.png"/>

           </div>

          <div className="flex flex-row gap-x-4">
             <a href="/" className="flex flex-row gap-x-1 items-center">
                <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/5974/5974636.png"/>
                <div className="text-gray-300">Trang chủ</div>
             </a>
             <div className="flex flex-row gap-x-1 items-center">
                <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/15943/15943346.png"/>
                <p className="text-gray-300">Phim Bộ Chiến Tranh</p>
             </div>
             <div className="flex flex-row gap-x-1 items-center">
             <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/15943/15943346.png"/>
                <p className="text-yellow-400">Trang 1</p>
             </div>
          </div>

        </div>
    </div> );
}

export default Option;
