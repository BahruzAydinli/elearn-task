import png from "./../../../../assets/png";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import BrokenImageOutlinedIcon from "@material-ui/icons/BrokenImageOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="logo">
        <img src={png.logo} />
      </div>
      <nav
        className="main-navber collapse navbar-collapse ml-lg-5"
        id="navbarSupportedContent"
      >
        <ul role="menubar" className="navbar-nav mr-lg-auto">
          <li role="presentation">
            <NavLink
              to="/home"
              className="menu-item"
              exact
              activeClassName="active"
            >
              <FavoriteBorderIcon />
              <span>Home</span>
            </NavLink>
          </li>
          <li role="presentation">
            <NavLink
              to="/my-courses"
              className="menu-item"
              exact
              activeClassName="active"
            >
              <EventNoteOutlinedIcon />
              <span>My courses</span>
            </NavLink>
          </li>
          <li role="presentation">
            <NavLink
              to="/favorites"
              className="menu-item"
              exact
              activeClassName="active"
            >
              <BrokenImageOutlinedIcon />
              <span>Favorite</span>
            </NavLink>
          </li>
          <li role="presentation">
            <NavLink
              to="/test"
              className="menu-item"
              exact
              activeClassName="active"
            >
              <AssignmentOutlinedIcon />
              <span>Test</span>
            </NavLink>
          </li>
          <li role="presentation">
            <NavLink
              to="/achievement"
              className="menu-item"
              exact
              activeClassName="active"
            >
              <EmojiEventsOutlinedIcon />
              <span>Achievement</span>
            </NavLink>
          </li>
          <li role="presentation">
            <NavLink
              to="/certificate"
              className="menu-item"
              exact
              activeClassName="active"
            >
              <BookOutlinedIcon />
              <span>Certificate</span>
            </NavLink>
          </li>
          <li role="presentation">
            <NavLink
              to="/settings"
              className="menu-item"
              exact
              activeClassName="active"
            >
              <SettingsIcon />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
