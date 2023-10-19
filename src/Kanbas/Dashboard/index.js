import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import {LuPenSquare} from 'react-icons/lu';
function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr/>

            <div className="row">
                {courses.map((course) => (
                    <div className="col" key={course._id}>
                        <div className="card">
                            <div className="image-container">
                            <img src="/images/color.png" className="card-img-top" alt="Course Thumbnail" />
                            </div>

                            <div className="card-body">
                                <Link to={`/Kanbas/Courses/${course._id}`} className="no-underline">
                                    <div className="card-title" style={{textDecoration : 'none'}}>
                                         <h5>{course._id + " " + course.number + " " + course.name}</h5>
                                    </div>
                                   
                                   <div className="card-section-line">
                                   <p className="card-text">
                                        {course._id + "." + course.number}
                                        <br />
                                        202410_1 Spring 2023 Semester Full Term
                                    </p>
                                   </div>

                                   
                                    
                                </Link>
                                <LuPenSquare/>

                            </div>
                        </div>
                    </div>
                ))}
            </div>


           
        </div>
    );
}
export default Dashboard;