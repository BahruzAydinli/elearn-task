import png from "../../../../assets/png";

const SearchBar = () => {
  return (
    <div id="search">
      <div className="search-part">
        <img src={png.search} />
        <input placeholder="Search" />
      </div>
      <div className="notification-part">
        <span>2</span>
        <img src={png.bell} />
      </div>
    </div>
  );
};

export default SearchBar;
