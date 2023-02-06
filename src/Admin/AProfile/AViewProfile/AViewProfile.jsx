import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AViewProfile.css";
import { Link } from "react-router-dom";
import {
  TbAt,
  TbBuilding,
  TbBusinessplan,
  TbCalendarTime,
  TbEye,
  TbPencil,
  TbPhone,
  TbUser,
} from "react-icons/tb";
import {
  BsGlobe2,
  BsFileEarmarkZip,
  BsFillGeoAltFill,
  BsFillGeoFill,
  BsFillMapFill,
  BsGlobe,
} from "react-icons/bs";
// import Logo from "../../../assets/logoMain.png";
import {
  RiBookletLine,
  RiBookReadFill,
  RiDatabaseFill,
  RiLoader2Fill,
  RiUserFill,
} from "react-icons/ri";
import ANavbar from "../../ANavbar/ANavbar";
import ASidebar from "../../ASidebar/ASidebar";

const AViewProfile = () => {
  const [admin, setAdmin] = useState();
  const navigate = useNavigate();
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
          <div className="AViewProfile">
            <h4>Profile /</h4>
            <hr />
            <div className="AViewProfileContainer1">
              <div className="AViewProfileContainerContent">
                <h4>Account Details /</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>
                          <TbBuilding className="AViewProfileCIcon" /> Company:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.company
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <TbBusinessplan className="AViewProfileCIcon" />{" "}
                          Business:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.business
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <RiUserFill className="AViewProfileCIcon" /> Username:
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
                          <TbAt className="AViewProfileCIcon" /> Email:
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
                          <TbPhone className="AViewProfileCIcon" /> Phone:
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
                          <RiBookReadFill className="AViewProfileCIcon" />{" "}
                          GSTIN:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.gstin
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <BsGlobe2 className="AViewProfileCIcon" /> Website:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.website
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <TbCalendarTime className="AViewProfileCIcon" />{" "}
                          Created:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.date
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <TbCalendarTime className="AViewProfileCIcon" /> Due
                          Date:
                        </span>
                      </td>
                      <td>01/01/2024</td>
                    </tr>
                    <tr>
                      <td className="td-no-border">
                        <span>
                          <TbEye className="AViewProfileCIcon" /> Role:
                        </span>
                      </td>
                      <td className="td-no-border">
                        {admin ? (
                          admin.role
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/admin-setting" className="AViewProfileEdit">
                  Edit <TbPencil className="AViewProfileCIcon" />
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="AViewProfileContainer2">
              <div className="AViewProfileContainer2Content">
                <h4>Address /</h4>
                <table>
                  <tbody>
                    {/* <tr>
                      <th></th>
                      <th></th>
                    </tr> */}
                    <tr>
                      <td>
                        <span>
                          <BsFillGeoAltFill className="AViewProfileCIcon" />{" "}
                          Address:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.address
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <BsFillMapFill className="AViewProfileCIcon" /> City:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.city
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <BsFillGeoFill className="AViewProfileCIcon" /> State:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.state
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>
                          <BsGlobe className="AViewProfileCIcon" />{" "}
                          Country/Region:
                        </span>
                      </td>
                      <td>
                        {admin ? (
                          admin.country
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="td-no-border">
                        <span>
                          <BsFileEarmarkZip className="AViewProfileCIcon" />{" "}
                          Zip:
                        </span>
                      </td>
                      <td className="td-no-border">
                        {admin ? (
                          admin.zip
                        ) : (
                          <RiLoader2Fill className="lmsLoading" />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* ------------- */}
            <div className="AViewProfileContainer3">
              <div className="AViewProfileContainerChild1">
                <h4>Total Users /</h4>
                <hr />
                <TbUser className="AViewProfileCCIcon" />
                <p className="AViewProfileCCPara">15</p>
                <Link to="/admin-users">Manage Users</Link>
              </div>
              <div className="AViewProfileContainerChild2">
                <h4>Total Courses /</h4>
                <hr />
                <RiBookletLine className="AViewProfileCCIcon" />
                <p className="AViewProfileCCPara">4</p>
                <Link to="/admin-view-courses">Manage Courses</Link>
              </div>
              <div className="AViewProfileContainerChild3">
                <h4>Your Plan /</h4>
                <hr />
                <RiDatabaseFill className="AViewProfileCCIcon" />
                <p className="AViewProfileCCPara">15/15</p>
                <Link to="/admin">Upgrade Plan</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="aSidebar">
          <ASidebar />
        </div>
      </div>
    </>
  );
};

export default AViewProfile;
