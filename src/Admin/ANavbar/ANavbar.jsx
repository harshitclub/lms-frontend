import React, { useEffect, useState } from "react";
import {
  RiAddCircleFill,
  // RiAdminFill,
  RiLockPasswordFill,
  RiLogoutBoxFill,
  RiNotification2Fill,
  RiProfileFill,
  RiSettingsFill,
  RiUserLine,
} from "react-icons/ri";
import "./ANavbar.css";
import profile from "../../assets/logoMain.png";
import { Link, useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ANavbar = () => {
  const [admin, setAdmin] = useState();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    async function adminAuth() {
      const response = await fetch("/admin-auth", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      const data = await response.json();

      if (data.status === "400") {
        navigate("/admin-login");
      } else {
        setAdmin(data.data);
      }
    }
    adminAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="adminMainTopBar">
        <div className="adminMainDash">
          <img src={profile} alt="" />
        </div>
        <div className="adminMainUser">
          <div className="aTopBarNotification">
            <RiNotification2Fill />
          </div>
          <RiUserLine onClick={handleClick} className="adminTopBarIcon" />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem className="dropDownItems" onClick={handleClose}>
              <h4>
                {admin
                  ? admin.company.split(" ").slice(0, 4).join(" ")
                  : "Loading..."}
                <br />
                <span>{admin ? admin.role.toUpperCase() : "Loading..."}</span>
              </h4>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <RiProfileFill className="basic-menu-icons" />
              <Link to="/admin-profile" className="aTopBarLink">
                {" "}
                Profile{" "}
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <RiAddCircleFill className="basic-menu-icons" />
              <Link to="/admin-create-user" className="aTopBarLink">
                {" "}
                Add User{" "}
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <RiAddCircleFill className="basic-menu-icons" />
              <Link to="/admin-add-course" className="aTopBarLink">
                {" "}
                Add Course{" "}
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <RiNotification2Fill className="basic-menu-icons" />
              <Link to="/admin-notifications" className="aTopBarLink">
                {" "}
                Notifications{" "}
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <RiSettingsFill className="basic-menu-icons" />
              <Link to="/admin-setting" className="aTopBarLink">
                {" "}
                Setting{" "}
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <RiLockPasswordFill className="basic-menu-icons" />
              <Link to="/admin-setting" className="aTopBarLink">
                {" "}
                Change Password
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <RiLogoutBoxFill className="basic-menu-icons" />
              <Link to="/" className="aTopBarLink">
                {" "}
                Logout
              </Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default ANavbar;
