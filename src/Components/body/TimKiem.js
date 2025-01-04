


import { useLocation } from 'react-router-dom';
import Body from "../Body";
import Footer from "../Footer";
import ExtraTimKiem from "../Extra/ExtraTimKiem";
// import Search from '../../Events/Search';
import Search from '../../Events/Search';

function TimKiem({filmsTv}) {
  // Sử dụng useLocation để lấy query từ URL
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('keyword');

  return (
    <div>
      <Body>

        <div className="results-container">
          <ExtraTimKiem 
          searchQuery={searchQuery} 
          filmsTv={filmsTv}
          />
        </div>
      </Body>
      <Footer />
    </div>
  );
}

export default TimKiem;


