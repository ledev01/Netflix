

import Body from "../Body";
import Footer from "../Footer";
import Banner from "../../Events/Banner";
import Phimmoi from "../Forein.js/Phimmoi";
import Sidebar from "../Forein.js/Sidebar";
import Extraphimle from "../Extra/Extraphimle";
import Extraphimbo from "../Extra/Extraphimbo";
import Extratvshow from "../Extra/Extratvshow";
import Extrahoathinh from "../Extra/Extrahoathinh";

function Home() {
    return (
        <div>
                <Body>
                    <div className="flex flex-col justify-center mt-8">
                        <div className="flex justify-center"><Banner /></div>
                        <div className="flex justify-center"><Phimmoi/></div>
                        <div className="flex justify-between mb-8">
                            <div className="flex flex-col ">
                                <Extraphimle showPagination={false}/>
                                <Extraphimbo showPagination={false}/>
                                <Extratvshow showPagination={false}/>
                                <Extrahoathinh showPagination={false}/>
                            </div>
                            <Sidebar/>
                        </div>
                    </div>
                </Body>
            <Footer />
        </div>
    );
}

export default Home;
