import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ASetting.css";
import profile from "../../assets/logoMain.png";
import {
  RiAdminFill,
  RiBuildingFill,
  RiEditBoxFill,
  RiFacebookBoxFill,
  RiFileUserFill,
  RiGlobalFill,
  RiGlobalLine,
  RiLinkedinBoxFill,
  RiLoader2Fill,
  RiLock2Fill,
  RiMailFill,
  RiMapPin2Fill,
  RiMapPin4Fill,
  RiMapPinUserFill,
  RiPhoneFill,
  RiTwitterFill,
  RiUserLocationFill,
} from "react-icons/ri";

// ----------------------------------------

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ANavbar from "../ANavbar/ANavbar";
import ASidebar from "../ASidebar/ASidebar";

// --------------------------------------------

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "1px solid #d3d3d3",
  boxShadow: 24,
  p: 2,
};

const ASetting = () => {
  const [admin, setAdmin] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const [open5, setOpen5] = React.useState(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  useEffect(() => {
    async function adminAuth() {
      try {
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
      } catch (error) {
        console.log(error);
        navigate("/admin-login");
      }
    }
    adminAuth();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="aDashboard">
        <div className="aNavbar">
          <ANavbar />
        </div>
        <div className="aMain">
          <div className="ASettingContainer">
            <div className="ASetting">
              {/* --------------------- */}
              <div className="ASettingProfile">
                <img src={profile} alt="" />
                <h4>
                  {admin ? (
                    admin.company.toUpperCase()
                  ) : (
                    <RiLoader2Fill className="lmsLoading" />
                  )}
                </h4>
                <p>Last Login Was on 3 Hours Ago</p>
                <button onClick={handleOpen4}>Change Profile Picture</button>
                <Modal
                  open={open4}
                  onClose={handleClose4}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="ASettingProfileUpload">
                      <h4>Company Logo</h4>
                      <form>
                        <label>Select Company Logo To Upload</label>
                        <br />
                        <input type="file" />
                        <p>Maximum File Size: 1MB</p>
                        <p>
                          <span>
                            Note: This could take a few minutes to show up on
                            your profile
                          </span>
                        </p>
                        <button>Upload</button>
                        <button>Cancel</button>
                      </form>
                    </div>
                  </Box>
                </Modal>
              </div>
              {/* ------------------ */}

              <div className="ASettingPersonal">
                <div className="ASettingEditIcon">
                  <h4>Personal Information /</h4>
                  <RiEditBoxFill onClick={handleOpen} />
                </div>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="ASettingEditPI">
                      <h4>Personal Information</h4>
                      <form>
                        <div>
                          <label>
                            Company<span>*</span>
                          </label>
                          <br />
                          <input placeholder="Company Name" type="text" />
                        </div>
                        <div>
                          <label>
                            Username<span>*</span>
                          </label>
                          <br />
                          <input placeholder="Username" type="text" />
                          <p>You Can Use Email As Your Username</p>
                          <button>Save</button>
                          <button>Cancel</button>
                        </div>
                      </form>
                    </div>
                  </Box>
                </Modal>
                <table>
                  <tr>
                    <td>
                      <span>
                        <RiBuildingFill className="aSettingTableIcons" />{" "}
                        Company:
                      </span>
                    </td>
                    <td>
                      {admin ? (
                        admin.company.toUpperCase()
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiFileUserFill className="aSettingTableIcons" />{" "}
                        Username:
                      </span>
                    </td>
                    <td>
                      {admin ? (
                        admin.username
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiAdminFill className="aSettingTableIcons" /> Role:
                      </span>
                    </td>
                    <td>
                      {admin ? (
                        admin.role.toUpperCase()
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="noBorder">
                      <span>
                        <RiLock2Fill className="aSettingTableIcons" /> Password:
                      </span>
                    </td>
                    <td className="noBorder">
                      <button onClick={handleOpen5}>Change Password</button>
                      <Modal
                        open={open5}
                        onClose={handleClose5}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>
                          <div className="ASettingEditPI">
                            <h4>Personal Information</h4>
                            <form>
                              <div>
                                <label>
                                  Current Password<span>*</span>
                                </label>
                                <br />
                                <input
                                  placeholder="Current Password"
                                  type="password"
                                />
                              </div>
                              <div>
                                <label>
                                  New Password<span>*</span>
                                </label>
                                <br />
                                <input placeholder="New Password" type="text" />
                              </div>
                              <div>
                                <label>
                                  Confirm New Password<span>*</span>
                                </label>
                                <br />
                                <input
                                  placeholder="Confirm New Password"
                                  type="text"
                                />
                              </div>
                              <button>Save</button>
                              <button>Cancel</button>
                            </form>
                          </div>
                        </Box>
                      </Modal>
                    </td>
                  </tr>
                </table>
              </div>
              {/* -------------- */}

              <div className="ASettingBasic">
                <div className="ASettingEditIcon">
                  <h4>Basic Information /</h4>
                  <RiEditBoxFill onClick={handleOpen2} />
                </div>
                <Modal
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="ASettingEditPI">
                      <h4>Basic Information</h4>
                      <form>
                        <div>
                          <label>
                            Email<span>*</span>
                          </label>
                          <br />
                          <input placeholder="Email" type="email" />
                        </div>
                        <div>
                          <label>
                            Work Phone<span>*</span>
                          </label>
                          <br />
                          <input placeholder="Work Phone" type="number" />
                        </div>
                        <div>
                          <label>
                            LinkedIn<span>*</span>
                          </label>
                          <br />
                          <input placeholder="LinkedIn Username" type="text" />
                        </div>
                        <div>
                          <label>
                            Facebook<span>*</span>
                          </label>
                          <br />
                          <input placeholder="Facebook Username" type="text" />
                        </div>
                        <div>
                          <label>
                            Twitter<span>*</span>
                          </label>
                          <br />
                          <input placeholder="Twitter Username" type="text" />
                        </div>
                        <button>Save</button>
                        <button>Cancel</button>
                      </form>
                    </div>
                  </Box>
                </Modal>
                <table>
                  <tr>
                    <td>
                      <span>
                        <RiMailFill className="aSettingTableIcons" /> Email:
                      </span>
                    </td>
                    <td>
                      {admin ? (
                        admin.email
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiPhoneFill className="aSettingTableIcons" /> Work
                        Phone:
                      </span>
                    </td>
                    <td>
                      +91{" "}
                      {admin ? (
                        admin.phone
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiLinkedinBoxFill className="aSettingTableIcons" />{" "}
                        LinkedIn:
                      </span>
                    </td>
                    <td>3alearningsolutions</td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiFacebookBoxFill className="aSettingTableIcons" />{" "}
                        Facebook:
                      </span>
                    </td>
                    <td>3alearningsolutions</td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiTwitterFill className="aSettingTableIcons" />{" "}
                        Twitter:
                      </span>
                    </td>
                    <td>3alearningsolutions</td>
                  </tr>
                  <tr>
                    <td className="noBorder">
                      <span>
                        <RiGlobalLine className="aSettingTableIcons" /> Website:
                      </span>
                    </td>
                    <td className="noBorder">
                      {admin ? (
                        admin.website
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                </table>
              </div>

              {/* ------------------------------ */}

              <div className="ASettingAddress">
                <div className="ASettingEditIcon">
                  <h4>Address /</h4>
                  <RiEditBoxFill onClick={handleOpen3} />
                </div>
                <Modal
                  open={open3}
                  onClose={handleClose3}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="ASettingEditPI">
                      <h4>Address</h4>
                      <form>
                        <div>
                          <label>
                            Address<span>*</span>
                          </label>
                          <br />
                          <textarea placeholder="Write Address" type="text" />
                        </div>
                        <div>
                          <label>
                            City<span>*</span>
                          </label>
                          <br />
                          <input placeholder="City Name" type="number" />
                        </div>
                        <div>
                          <label>
                            State<span>*</span>
                          </label>
                          <br />
                          <input placeholder="State Name" type="text" />
                        </div>
                        <div>
                          <label>
                            Zip<span>*</span>
                          </label>
                          <br />
                          <input placeholder="Zip Code" type="text" />
                        </div>
                        <div>
                          <label>
                            Country<span>*</span>
                          </label>
                          <br />
                          <input placeholder="Country Name" type="text" />
                        </div>
                        <button>Save</button>
                        <button>Cancel</button>
                      </form>
                    </div>
                  </Box>
                </Modal>
                <table>
                  <tr>
                    <td>
                      <span>
                        <RiUserLocationFill className="aSettingTableIcons" />{" "}
                        Address:
                      </span>
                    </td>
                    <td>
                      {admin ? (
                        admin.address.toUpperCase()
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiMapPinUserFill className="aSettingTableIcons" />{" "}
                        City:
                      </span>
                    </td>
                    <td>
                      {admin ? (
                        admin.city.toUpperCase()
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiMapPin2Fill className="aSettingTableIcons" /> State:
                      </span>
                    </td>
                    <td>
                      {admin ? (
                        admin.state.toUpperCase()
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>
                        <RiMapPin4Fill className="aSettingTableIcons" /> Zip:
                      </span>
                    </td>
                    <td>
                      {admin ? (
                        admin.zip
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="noBorder">
                      <span>
                        <RiGlobalFill className="aSettingTableIcons" /> Country:
                      </span>
                    </td>
                    <td className="noBorder">
                      {admin ? (
                        admin.country.toUpperCase()
                      ) : (
                        <RiLoader2Fill className="lmsLoading" />
                      )}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="aSidebar">
          <ASidebar />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default ASetting;
