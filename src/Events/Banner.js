import { fetchBanner } from "../Services/itemService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Banner() {
  const [banner, setBanner] = useState([]);
  const [index, setIndex] = useState(0); // Index for controlling the carousel

  useEffect(() => {
    // Call API to fetch banner data
    getBanner();

    // Set up automatic image transition every 5 seconds
    const intervalId = setInterval(handleNext, 5000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty array to only run once when the component mounts

  const getBanner = async () => {
    let res = await fetchBanner();
    if (res && res.data && res.data.data && res.data.data.items) {
      // Slice the first 6 items
      setBanner(res.data.data.items.slice(0,4));
    }
    console.log("Check res banner>>> :", res);
  };

  // Update the index for the next image
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 4); // Loop through the first 4 images
  };

  // Update the index for the previous image
  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 4) % 4); // Loop through the first 4 images
  };

  return (
    <div className=" flex justify-center sm:w-[1310px] w-[352px]">
      {/* Carousel container */}
      {banner.length > 0 && (
        <div className="relative sm:w-[1310px] sm:h-[736.88px] w-[352px]">
          {/* Add smooth transition to the images */}
          <div className="transition-all duration-500 ease-in-out sm:w-[1310px] w-[352px] sm:h-[736.88px] ">
            {/* Wrap the banner image with a Link to navigate to the detail page */}
            {/* w-[384px] h-[218.6px] */}
            {/* w-full h-full flex justify-cente */}
            {/* sm:w-[1310px] sm:h-[736.88px] */}
              <img
                key={`banner-image-${index}`}
                className="rounded-md bg-cover relative w-full h-full"
                src={`https://img.ophim.live/uploads/movies/${banner[index].poster_url}`}
                alt={`Banner Image ${index + 1}`}
              />
          </div>

          {/* Previous button */}
          <button
            onClick={handlePrevious}
            className="absolute w-8 h-8 top-1/2 left-2 transform -translate-y-1/2"
          >
            <img
              className="w-6 hover:w-7 h-auto"
              src="https://cdn-icons-png.flaticon.com/128/9590/9590006.png"
              alt="Previous"
            />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute w-8 h-8 top-1/2 right-0 transform -translate-y-1/2"
          >
            <img
              className="w-6 hover:w-7 h-auto"
              src="https://cdn-icons-png.flaticon.com/128/9688/9688285.png"
              alt="Next"
            />
          </button>

          {/* Text overlay (optional information about the banner) */}
          <div className="flex flex-col gap-y-3 absolute justify-center sm:left-28 left-14 top-1/3">
            <p className="sm:text-6xl text-sm font-bold text-lime-400">{banner[index].origin_name}</p>
            <p className="sm:text-3xl text-xs font-bold text-gray-100">{banner[index].name}</p>
            <div className="sm:flex flex-row gap-x-4 items-center hidden">
              <div className="rounded-2xl border border-1 py-2 px-3 text-gray-100 font-semibold">T13</div>
              <div className="flex flex-row gap-x-1 items-center">
                <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/17959/17959848.png" />
                <p className="text-gray-100 font-semibold">{banner[index].year}</p>
              </div>
              <div className="flex flex-row gap-x-1 items-center">
                <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/1040/1040227.png" />
                <p className="text-gray-100 font-semibold">{banner[index].time}</p>
              </div>
            </div>
            <div className="sm:flex flex-row gap-x-1 items-center hidden">
              <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/3412/3412644.png" />
              <p className="text-gray-100 font-semibold">{`Ngôn ngữ: ${banner[index].lang}`}</p>
            </div>
            <div className="sm:flex flex-row gap-x-1 items-center hidden">
              <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/4340/4340530.png" />
              <p className="text-gray-100 font-semibold">{`Chất lượng: ${banner[index].quality}`}</p>
            </div>
            <div className="flex flex-row gap-x-4">

            {banner[index].movie?.trailer_url && banner[index].movie.trailer_url.trim() !== "" && (
              <button className="w-[93.04px] h-[36px] flex flex-row gap-x-2 justify-center items-center bg-custom-blue rounded-md">
                <img className="w-4 h-4" src="https://cdn-icons-png.flaticon.com/128/4340/4340129.png" />
                <Link to={`/trangchitietphim/${banner[index].slug}`}>
                <p className="text-gray-100 font-semibold">Trailer</p>
                </Link>
              </button>
                 )}

              <button className="py-2 px-3 flex flex-row gap-x-2 justify-center items-center bg-gray-500 rounded-md">
                <img className="sm:w-4 sm:h-4 h-3 w-3" src="https://cdn-icons-png.flaticon.com/128/8358/8358920.png" />
                <Link to={`/trangchitietphim/${banner[index].slug}`}>
                <p className="text-gray-100 sm:font-semibold font-normal">More Info</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Banner;

