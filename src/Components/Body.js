
function Body({children}) {
    return ( 
             <div className="">
                 <div className=" h-auto min-h-[1000px] bg-gray-800 flex justify-center">
                    <div className=" w-full h-full sm:w-[1350px]  min-h-[1000px]  bg-gray-900 flex flex-col items-center">
                         <div className="text-xs py-2 px-2 rounded-lg mt-24 sm:w-[1310px] w-[352px] bg-gray-800 flex justify-center items-center text-yellow-400 font-semibold">
                            NẾU KHÔNG TẢI ĐƯỢC NỘI DUNG, HÃY BẤM F5 HOẶC TẢI LẠI TRANG 1 HOẶC 2 LẦN BẠN NHÉ .
                         </div>
                         {children}
                    </div>
                   
                </div> 


                
                
             </div>
    );
}

export default Body;