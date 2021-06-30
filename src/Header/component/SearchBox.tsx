import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "../style/SearchBox.css";

// Search Box UX/UI: http://blog.wishket.com/%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-ux-%EC%84%A4%EA%B3%84%EB%A5%BC-%EC%9C%84%ED%95%9C-8%EA%B0%80%EC%A7%80-%ED%8C%81/

export default class SearchBox extends React.Component<any, any> {

  render() {
    return (
      <>
        <div className="search-box-wrapper">
          <div className="search-box">
            <input type="text" className="search-text-input" placeholder="Search.." />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </div>
        </div>
      </>
    )
  }
}


// const SearchBox = () => {
//   return (
//     <>
//       <div className="search">
//          <div className="searchInput">
//            <input type="text" placeholder="Search.." alt="" />
//            <button type="submit" className="search-button">
//              <SearchIcon />
//            </button>
//          </div>
//          <div className="data-result">
//             Hello
//          </div>
//        </div>
//     </>
//   )
// }

// export default SearchBox;
