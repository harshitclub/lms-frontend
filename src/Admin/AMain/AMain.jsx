import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AMain.css";
import {
  FaClipboardCheck,
  FaSwatchbook,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import {
  RiAddCircleFill,
  RiBuildingFill,
  RiFileUserFill,
  RiGlobalLine,
  RiLoader2Fill,
  RiMailFill,
  RiPhoneFill,
  RiUserAddFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

const AMain = () => {
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
      <div className="aMainContainer">
        <div className="aMainTabHead">
          <div>
            <h2>Dashboard /</h2>
            <hr />
          </div>
        </div>
        <div className="aMainTab1Container">
          <div className="aMainTabs">
            <div>
              <FaUsers className="aMainTab1Icons" />
            </div>
            <div>
              <h4>Total Users</h4>
              <p>10</p>
            </div>
          </div>
          <div className="aMainTabs">
            <div>
              <FaSwatchbook className="aMainTab1Icons" />
            </div>
            <div>
              <h4>Total Courses</h4>
              <p>10</p>
            </div>
          </div>
          <div className="aMainTabs">
            <div>
              <FaUserCheck className="aMainTab1Icons" />
            </div>
            <div>
              <h4>Active Users</h4>
              <p>10</p>
            </div>
          </div>
          <div className="aMainTabs">
            <div>
              <FaClipboardCheck className="aMainTab1Icons" />
            </div>
            <div>
              <h4>Active Courses</h4>
              <p>10</p>
            </div>
          </div>
        </div>
        {/* ------------------- */}

        <div className="aMainTab2Container">
          <div className="aMainTabs2">
            <h4>Admin Information /</h4>
            <table>
              <tbody>
                <tr className="trNoBorder">
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <span>
                      <RiBuildingFill className="aMT2TIcons" /> Company
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
                      <RiMailFill className="aMT2TIcons" /> Email
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
                      <RiGlobalLine className="aMT2TIcons" /> Website
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
                      <RiPhoneFill className="aMT2TIcons" /> Contact
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
                      <RiFileUserFill className="aMT2TIcons" /> Role
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
              </tbody>
            </table>
            <Link to="/admin-profile" className="aMainTabs2Link">
              All Information
            </Link>
          </div>
          <div className="aMainTabs2Right">
            <div className="aMainTabs2Cuser">
              <Link to="/admin-create-user">
                <p>
                  <RiUserAddFill className="aMainTabs2RightIcon" /> Create User
                </p>
              </Link>
            </div>
            <div className="aMainTabs2Ccourse">
              <Link to="/admin-add-course">
                <p>
                  <RiAddCircleFill className="aMainTabs2RightIcon" /> Create
                  Course
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AMain;
