import Body from "../Body";
import Footer from "../Footer";
import Option from "../../Events/Option";
import Extraphimsap from "../Extra/Extraphimsap";
import Sidebar from "./Sidebar";
import Nextpage from "../../Events/Nextpage";
import { fetchFilmsSapRa } from "../../Services/itemService";
import { useState } from "react";

function Phimsapra() {

   
    return ( <div>
        <Body>
                {/* <Option /> */}
                <div className="flex sm:justify-between sm:flex-row flex-col  gap-x-4 sm:mb-0 mb-8">
                    <Extraphimsap />
                    <Sidebar />
                </div>
                {/* <div className="flex justify-center my-8">
                    <Nextpage 
                    //   handleActive={handleActive}
                    //   handlePrevious={handlePrevious}
                    //   handleNext={handleNext}
                    />
                </div> */}
            </Body>
        <Footer/>
    </div> );
}

export default Phimsapra;



