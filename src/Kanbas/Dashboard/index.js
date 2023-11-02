import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { LuPenSquare } from 'react-icons/lu';
import { React, useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
    

    return (
        <div>
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <hr />
            

    <div className="list-group mb-4">
    <div className="list-group-item">
       
       
        <button onClick={updateCourse} className="btn btn-primary float-end ms-2 mb-2">
            Update
        </button>
        <button onClick={addNewCourse} className="btn btn-success float-end ms-2 mb-2">
            Add
        </button>
        <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />

      
    </div>
    </div>


            <div className="list-group">
                {courses.map((course) => (
                    <Link key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="list-group-item">
                         {course.name}

                         <button
                            onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end ms-2">
                            Delete
                        </button>

                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                            }}
                            className="btn btn-warning float-end ms-2">
                            Edit
                        </button>

                       
                    
                    </Link>
                ))}
            </div>


        </div>
    );
}
export default Dashboard;