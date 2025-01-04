
import Body from "../Body";
import Footer from "../Footer";
// import Option from "../../Events/Option";
import Extraphimle from "../Extra/Extraphimle";
import Sidebar from "../Forein.js/Sidebar";
import Nextpage from "../../Events/Nextpage";

function Phimle() {


    return (
        <div>
            <Body>
                {/* <Option /> */}
                <div className="flex sm:justify-between sm:flex-row flex-col  gap-x-4 sm:mb-0 mb-8">
                    <Extraphimle />
                    <Sidebar />
                </div>
                {/* <div className="flex justify-center my-8">
                    <Nextpage />
                </div> */}
            </Body>
            <Footer />
        </div>
    );
}

export default Phimle;
