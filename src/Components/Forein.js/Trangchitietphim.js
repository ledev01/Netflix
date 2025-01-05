


import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Body from "../Body";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import Chitietphim from "../../Events/Chitietphim";
import Extraphimkhac from "../Extra/Extraphimkhac";
import Search from "../../Events/Search";
import { fetchFilmById } from "../../Services/itemService";

function Trangchitietphim() {
    const [filmsSapRa, setFilmsSapRa] = useState([]);
    const [playFilm, setPlayFilm] = useState(false);
    const [chiTietPhim, setChiTietPhim] = useState({});
    const { slug } = useParams();  // Extract the movie slug from the URL

    const handleCT = () => {
        setPlayFilm(false);
        // console.log("Đã handle thành công ");
    };

    const handleCTFilm = () => {
        setPlayFilm(false);
        // console.log("Đã handle thành công ");
    };

    // const handleChose = () => {
    //     console.log("HandleChose thành công iiii");
    //     setPlayFilm(false);
    // };

    // const category = chiTietPhim.movie?.category || []; // Lấy thể loại từ chiTietPhim
    const categories = chiTietPhim.movie?.category || [];

    useEffect(() => {
        getChiTiet(slug);  // Fetch movie details
        window.scrollTo(0, 0); // Scroll to top of the page
    }, [slug]);  // Re-run when `slug` changes

    const getChiTiet = async (slug) => {
        try {
            let res = await fetchFilmById(slug);  // Fetch movie details by `slug`
            if (res && res.data) {
                setChiTietPhim(res.data);  // Update state with movie details
            }
        } catch (error) {
            // console.error("Error fetching movie details:", error);
        }
    };
    

    return (
        <div>
            <Body>
                <div className="flex sm:justify-between gap-x-4 mb-8 sm:flex-row flex-col">
                    <div className="flex flex-col">
                        <Chitietphim 
                            setPlayFilm={setPlayFilm} 
                            playFilm={playFilm}
                        />
                        <Extraphimkhac 
                            handleCTFilm={handleCTFilm}
                            categories={categories}  
                        />
                        {/* <Search 
                            handleChose={handleChose}
                        /> */}
                    </div>
                    <Sidebar 
                        handleCT={()=>handleCT()}
                    />
                </div>
            </Body>
            <Footer />
        </div>
    );
}

export default Trangchitietphim;


