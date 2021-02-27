import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TimelineIcon from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import FolderIcon from "@material-ui/icons/Folder";
import MailIcon from "@material-ui/icons/Mail";
import ChatIcon from "@material-ui/icons/Chat";
import ContactsIcon from "@material-ui/icons/Contacts";
import ListIcon from "@material-ui/icons/List";
import PersonIcon from "@material-ui/icons/Person";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { auth } from "../Firebase";
import { useStateValue } from "./StateProvider";

import "./css/sidebar.css";

const Sidebar = () => {
  const [{ user }] = useStateValue();
  const [{}, dispatch] = useStateValue();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const signOut = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result,
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="sidebar">
      <div className="account__details">
        <img className="avatar" src={user?.photoURL} />
        <h6>{user?.displayName}</h6>
        <Button
          style={{ outline: "none" }}
          aria-describedby={id}
          onClick={handleClick}
        >
          <ArrowDropDownIcon className="drop text-light" />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Button onClick={signOut} className="logoutBtn p-2">
            Logout
          </Button>
        </Popover>
      </div>

      <div className="main">
        <h6>MAIN</h6>
      </div>

      <div className="dash__sidebar">
        <div className="firstChild">
          <div className="first">
            <DashboardIcon />
            <h6>Dashboard</h6>
          </div>
          <div className="second">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="secondChild">
          <h6 className="text-light">Crypto</h6>
          <h6>Listing</h6>
          <h6>Crm</h6>
          <h6>Intranet</h6>
          <h6>eCommerce</h6>
          <h6>News</h6>
          <h6>Misc</h6>
        </div>
      </div>

      <div className="components">
        <div className="firstChild">
          <div className="first">
            <FolderIcon />
            <h6>Components</h6>
          </div>
          <div className="second">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <WidgetsIcon />
            <h6>Widgets</h6>
          </div>
          <div className="second">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <TimelineIcon />
            <h6>Metrics</h6>
          </div>
          <div className="second">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <br />
        <hr className="hori"></hr>
        <br />
      </div>

      <div className="components">
        <h6>IN-Build APPS</h6>
        <div className="firstChild">
          <div className="first">
            <MailIcon />
            <h6>Mail</h6>
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <ListIcon />
            <h6>To-Do</h6>
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <ContactsIcon />
            <h6>Contact</h6>
          </div>
        </div>
        <div className="firstChild">
          <div className="first">
            <ChatIcon />
            <h6>Chat</h6>
          </div>
        </div>

        <br />
        <hr className="hori"></hr>
        <br />
      </div>

      <div className="components">
        <h6>SOCIAL APPS</h6>
        <div className="firstChild">
          <div className="first">
            <PersonIcon />
            <h6>Profile</h6>
          </div>
        </div>

        <hr className="hori"></hr>
        <br />
      </div>
    </div>
  );
};

export default Sidebar;
