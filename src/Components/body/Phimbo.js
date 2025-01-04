import Body from "../Body"
import Footer from "../Footer";
// import Option from "../../Events/Option";
import Sidebar from "../Forein.js/Sidebar"
import Extraphimbo from "../Extra/Extraphimbo"
import Nextpage from "../../Events/Nextpage";

function Phimbo() {
    return ( <div>
         <Body>
                {/* <Option /> */}
                <div className="flex justify-between gap-x-4">
                    <Extraphimbo />
                    <Sidebar />
                </div>
                {/* <div className="flex justify-center my-8">
                    <Nextpage />
                </div> */}
            </Body>
        <Footer />
    </div> );
}

export default Phimbo;