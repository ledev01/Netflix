


import { useState } from "react";

function Nextpage() {

    // const {handleActive,handlePrevious,handleNext} = props

    const [active, setActive] = useState(1); // Trạng thái trang hiện tại là 1

       const handleActive = (item) => {
        setActive(item);
    };
    
    const handlePrevious = () => {
        setActive((prev) => (prev > 1 ? prev - 1 : prev)); // Giảm trang nếu có thể
    };
    
    const handleNext = () => {
        setActive((prev) => (prev < 5 ? prev + 1 : prev)); // Tăng trang nếu có thể
    };

    return (
        <div>
            <div className="flex items-center justify-between gap-x-2">
                {/* Previous button */}
                <button
                    onClick={handlePrevious}
                    className="w-8 h-8 flex justify-center items-center bg-gray-300 text-gray-700 rounded-md"
                >
                    <img className="w-4 h-auto" src="https://cdn-icons-png.flaticon.com/128/9590/9590006.png" />
                </button>

                {/* Page numbers */}
                <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            onClick={() => handleActive(page)}
                            className={`w-8 h-8 flex justify-center items-center  rounded-md ${
                                active === page ? 'bg-gradient-to-r from-pink-500 to-purple-700 text-white' : 'bg-gray-300 text-gray-700'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Next button */}
                <button
                    onClick={handleNext}
                    className="w-8 h-8 flex justify-center items-center bg-gray-300 text-gray-700 rounded-md"
                >
                    <img className="w-4 h-auto" src="https://cdn-icons-png.flaticon.com/128/9688/9688285.png" />
                </button>
            </div>
        </div>
    );
}

export default Nextpage;

// import { useState } from "react";
// import Extraphimsap from "../Components/Extra/Extraphimsap" // Make sure to import Extraphimsap

// function Nextpage() {
//   const [active, setActive] = useState(1); // Current active page, default is 1

//   const handleActive = (item) => {
//     setActive(item); // Update the active page when clicked
//   };

//   const handlePrevious = () => {
//     setActive((prev) => (prev > 1 ? prev - 1 : prev)); // Decrease page number
//   };

//   const handleNext = () => {
//     setActive((prev) => (prev < 5 ? prev + 1 : prev)); // Increase page number, limit to 5
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-between gap-x-2">
//         {/* Previous button */}
//         <button
//           onClick={handlePrevious}
//           className="w-8 h-8 flex justify-center items-center bg-gray-300 text-gray-700 rounded-md"
//         >
//           <img className="w-4 h-auto" src="https://cdn-icons-png.flaticon.com/128/9590/9590006.png" />
//         </button>

//         {/* Page numbers */}
//         <div className="flex space-x-2">
//           {[1, 2, 3, 4, 5].map((page) => (
//             <button
//               key={page}
//               onClick={() => handleActive(page)}
//               className={`w-8 h-8 flex justify-center items-center rounded-md ${
//                 active === page ? 'bg-gradient-to-r from-pink-500 to-purple-700 text-white' : 'bg-gray-300 text-gray-700'
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//         </div>

//         {/* Next button */}
//         <button
//           onClick={handleNext}
//           className="w-8 h-8 flex justify-center items-center bg-gray-300 text-gray-700 rounded-md"
//         >
//           <img className="w-4 h-auto" src="https://cdn-icons-png.flaticon.com/128/9688/9688285.png" />
//         </button>
//       </div>

//       {/* Pass the active page number to the Extraphimsap component */}
//       <Extraphimsap page={active} />
//     </div>
//   );
// }

// export default Nextpage;

