import Body from "../Body"
import Footer from "../Footer";
// import Option from "../../Events/Option";
import Sidebar from "../Forein.js/Sidebar"
import Extrahoathinh from "../Extra/Extrahoathinh";
import Nextpage from "../../Events/Nextpage";

function Hoathinh() {
    return ( <div>
         <Body>
                {/* <Option /> */}
                <div className="flex justify-between gap-x-4">
                    <Extrahoathinh />
                    <Sidebar />
                </div>
                {/* <div className="flex justify-center my-8">
                    <Nextpage />
                </div> */}
            </Body>
        <Footer/>
    </div> );
}

export default Hoathinh;