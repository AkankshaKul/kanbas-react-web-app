import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
   
    const URL = "https://kanbas-node-server-app-bmci.onrender.com/api/courses";
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
      }, [courseId]);
    
    // const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <div className="menu-container">
                <AiOutlineMenu className="menu-icon" />
                <p className="course-heading"> {course.number} </p>
                <Breadcrumbs />

                <div className="student-view-button">
                    <button type="button" className="btn btn-light">Student View</button>

                </div>

            </div>
            <hr />
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />} />

                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>



    );
}
export default Courses;