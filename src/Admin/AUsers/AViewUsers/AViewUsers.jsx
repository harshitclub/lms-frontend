import React, { useEffect, useState } from "react";
import "./AViewUsers.css";
import { TbTrash } from "react-icons/tb";
import ANavbar from "../../ANavbar/ANavbar";
import ASidebar from "../../ASidebar/ASidebar";
import { useNavigate } from "react-router-dom";

const AViewUsers = () => {
  const [users, setUsers] = useState([]);
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
        }
      } catch (error) {
        console.log(error);
        navigate("/admin-login");
      }
    }

    async function getUsers() {
      const response = await fetch("/get/users", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      const data = await response.json();

      setUsers(data.data);
    }

    adminAuth();
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="aDashboard">
        <div className="aNavbar">
          <ANavbar />
        </div>
        <div className="aMain">
          <div className="adminMainUsers">
            <h4>All Users /</h4>
            <hr />
            <div className="adminMainUsersList">
              <div className="adminMainUserTable">
                <table>
                  <thead>
                    <tr>
                      <th scope="col" className="aMUTHminWidth">
                        #
                      </th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Username</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Position</th>
                      {/* <th scope="col">Company</th> */}
                      <th scope="col">Status</th>
                      {/* <th scope="col">Country</th> */}

                      <th scope="col">Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users &&
                      users.map((data, key) => {
                        return (
                          <tr>
                            <td data-label="#">{key}</td>
                            <td data-label="Name">{data.name}</td>
                            <td data-label="Email">{data.email}</td>
                            <td data-label="Username">{data.username}</td>
                            <td data-label="Phone">{data.phone}</td>
                            <td data-label="Gender">{data.gender}</td>
                            <td data-label="Position">{data.position}</td>
                            {/* <td data-label="Company">{data.company}</td> */}
                            <td data-label="Status">{data.status}</td>
                            {/* <td data-label="Country">{data.country}</td> */}

                            <td data-label="Action">
                              <TbTrash className="adminMainUsersTrash" />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
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

export default AViewUsers;
