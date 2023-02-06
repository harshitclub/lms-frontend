import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ANavbar from "../../ANavbar/ANavbar";
import ASidebar from "../../ASidebar/ASidebar";
import "./AaddCourse.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AaddCourse = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    courseFullTitle: "",
    courseShortTitle: "",
    courseIdNumber: "",
    courseStatus: "",
    courseDuration: "",
    courseLanguage: "",
    courseFormat: "",
    courseTeacher: "",
    description: "",
    admin: "gautamharshit41@gmail.com",
  });

  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      courseFullTitle,
      courseShortTitle,
      courseIdNumber,
      courseStatus,
      courseDuration,
      courseLanguage,
      courseFormat,
      courseTeacher,
      description,
      admin,
    } = inpval;

    if (courseFullTitle === "") {
      toast.error("Enter Full Title of Course!", {
        position: "top-right",
      });
    } else if (courseShortTitle === "") {
      toast.error("Enter Short Title of Course!", {
        position: "top-right",
      });
    } else if (courseIdNumber === "") {
      toast.error("Course Id is Required!", {
        position: "top-right",
      });
    } else if (courseStatus === "") {
      toast.error("Select Course Status!", {
        position: "top-right",
      });
    } else if (courseDuration === "") {
      toast.error("Select Course Duration!", {
        position: "top-right",
      });
    } else if (courseLanguage === "") {
      toast.error("Select Course Language!", {
        position: "top-right",
      });
    } else if (courseFormat === "") {
      toast.error("Select Course Format!", {
        position: "top-right",
      });
    } else if (courseTeacher === "") {
      toast.error("Course Teacher is Required!", {
        position: "top-right",
      });
    } else if (description === "") {
      toast.error("Give Course Description!", {
        position: "top-right",
      });
    }

    const data = await fetch("/add/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        courseFullTitle,
        courseShortTitle,
        courseIdNumber,
        courseStatus,
        courseDuration,
        courseLanguage,
        courseFormat,
        courseTeacher,
        description,
        admin,
      }),
    });

    const res = await data.json();
    if (res.status === "201") {
      toast.success("Course Created Succesfully!", {
        position: "top-right",
      });

      setInpval({
        ...inpval,
        courseFullTitle: "",
        courseShortTitle: "",
        courseIdNumber: "",
        courseStatus: "",
        courseDuration: "",
        courseLanguage: "",
        courseFormat: "",
        courseTeacher: "",
        description: "",
      });
    }
  };

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
          <div className="AaddCourse">
            <h2>Create Course /</h2>
            <div className="AaddCourseContainer">
              <form onSubmit={handleSubmit}>
                {/* -------------------------------------- */}
                <div className="addCourseInputs">
                  <div className="addCourseInput">
                    <label>
                      Course Full Title<span>*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Ex. Full Stack Web Development Course In JavaScript MERN Stack"
                      name="courseFullTitle"
                      value={inpval.courseFullTitle}
                      onChange={setVal}
                    />
                  </div>
                  <div className="addCourseInput">
                    <label>
                      Course Short Title<span>*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Ex. MERN Stack Course"
                      name="courseShortTitle"
                      value={inpval.courseShortTitle}
                      onChange={setVal}
                    />
                  </div>
                </div>
                {/* ----------------------------------------- */}
                <div className="addCourseInputs">
                  <div className="addCourseInput">
                    <label>
                      Course ID Number<span>*</span>
                    </label>
                    <br />
                    <input
                      type="number"
                      placeholder="Ex. 87698"
                      name="courseIdNumber"
                      value={inpval.courseIdNumber}
                      onChange={setVal}
                    />
                  </div>
                  <div className="addCourseInput">
                    <label>
                      Course Course Status<span>*</span>
                    </label>
                    <br />
                    <select
                      name="courseStatus"
                      value={inpval.courseStatus}
                      onChange={setVal}
                    >
                      <option>Select</option>
                      <option>active</option>
                      <option>inactive</option>
                    </select>
                  </div>
                </div>
                {/* ----------------------------------------- */}
                <div className="addCourseInputs">
                  <div className="addCourseInput">
                    <label>
                      Total Course Duration<span>*</span>
                    </label>
                    <br />
                    <select
                      name="courseDuration"
                      value={inpval.courseDuration}
                      onChange={setVal}
                    >
                      <option>Choose Course Duration</option>
                      <option>0 - 1 Hour</option>
                      <option>1 - 2 Hours</option>
                      <option>2 - 3 Hours</option>
                      <option>3 - 4 Hours</option>
                      <option>4 - 5 Hours</option>
                      <option>5 - 6 Hours</option>
                      <option>6 - 7 Hours</option>
                      <option>7 - 8 Hours</option>
                      <option>8 - 9 Hours</option>
                      <option>9 - 10 Hours</option>
                      <option>10 - 11 Hours</option>
                      <option>11 - 12 Hours</option>
                      <option>12 - 13 Hours</option>
                      <option>13 - 14 Hours</option>
                      <option>14 - 15 Hours</option>
                      <option>15 - 16 Hours</option>
                      <option>16 - 17 Hours</option>
                      <option>17 - 18 Hours</option>
                      <option>18 - 19 Hours</option>
                      <option>19 - 20 Hours</option>
                    </select>
                  </div>
                  <div className="addCourseInput">
                    <label>
                      Course Language<span>*</span>
                    </label>
                    <br />
                    <select
                      name="courseLanguage"
                      value={inpval.courseLanguage}
                      onChange={setVal}
                    >
                      <option>Select Language</option>
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Gujarati</option>
                      <option>Marathi</option>
                      <option>Bengali</option>
                      <option>Kannada</option>
                      <option>Punjabi</option>
                      <option>Tamil</option>
                      <option>Telugu</option>
                      <option>Malayalam</option>
                    </select>
                  </div>
                </div>
                {/* ----------------------------------------- */}
                <div className="addCourseInputs">
                  <div className="addCourseInput">
                    <label>
                      Course Format<span>*</span>
                    </label>
                    <br />
                    <select
                      name="courseFormat"
                      value={inpval.courseFormat}
                      onChange={setVal}
                    >
                      <option>Choose Course Format</option>
                      <option>Weekely Based Format</option>
                      <option>Topic Based Format</option>
                      <option>Section Based Format</option>
                      <option>Video Based Format</option>
                    </select>
                  </div>
                  <div className="addCourseInput">
                    <label>
                      Course Teacher<span>*</span>
                    </label>
                    <br />
                    <input
                      placeholder="Course Teacher Name"
                      type="text"
                      name="courseTeacher"
                      value={inpval.courseTeacher}
                      onChange={setVal}
                    />
                  </div>
                </div>

                {/* ----------------------------------------- */}
                <div className="addCourseInputs">
                  <div className="addCourseInput">
                    <label>
                      Upload Course Thumbnail<span>*</span>
                    </label>
                    <br />
                    <input
                      type="file"
                      placeholder="Course Thumbnail"
                      disabled
                    />
                  </div>
                  <div className="addCourseInput">
                    <label>
                      Upload Course Certificate<span>*</span>
                    </label>
                    <br />
                    <input
                      type="file"
                      placeholder="Course Certificate"
                      disabled
                    />
                  </div>
                </div>
                {/* ----------------------------------------- */}
                <div className="addCourseInputs">
                  <div className="addCourseInput">
                    <label>
                      Write Course Description<span>*</span>
                    </label>
                    <br />
                    <textarea
                      type="text"
                      placeholder="Course Description"
                      rows="5"
                      cols="20"
                      name="description"
                      value={inpval.description}
                      onChange={setVal}
                    />
                    <input
                      type="hidden"
                      value={inpval.admin}
                      onChange={setVal}
                      name="admin"
                    />
                  </div>
                </div>
                {/* ----------------------------------------- */}
                <button type="submit" className="addCourseBtn">
                  Create Course
                </button>
              </form>
              <ToastContainer />
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

export default AaddCourse;
