import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import { FaPlus, FaEllipsisV } from "react-icons/fa";

function Assignments() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dropdownStyle = {
    width: '75vw',
    textAlign: "left",
  };
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>

      <div class="button-section">

        <div class="wd-title d-flex">
          <div class="input-group mb-3 mr-5 w-25">
            <input type="text" class="form-control" placeholder="Search for Assignment" aria-label="Search for Assignment" aria-describedby="button-addon"></input>
          </div>

          <div class="assignments-button">

            <button type="button" class="btn btn-light ms-2 ">
              <i class="fas fa-plus" aria-hidden="true"></i>
              Group
            </button>
            <button type="button" class="btn btn-danger ms-2">
              <i class="fas fa-plus" aria-hidden="true"></i>
              Assignment
            </button>
            <button type="button" class="btn btn-light ms-2">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>

        <hr />
      </div>



      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle text-left"
          type="button"
          id="assignmentsDropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
          style={dropdownStyle}
        >
          <div className="float-end">
            <button className="badge rounded-pill text-dark border-0 badge-lg" style={{ marginRight: "10px" }}>
              40% of Total
            </button>
            <FaPlus style={{ marginRight: "20px" }} />
            <FaEllipsisV />
          </div>
          ASSIGNMENTS
        </button>
        <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="assignmentsDropdown" style={dropdownStyle}>
          {courseAssignments.map((assignment, index) => (
            <React.Fragment key={assignment._id}>
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="dropdown-item"
              >
                <div>
                  <strong>{assignment.title}</strong>
                  <p>
                    <span style={{ color: "red" }}>Multiple Modules</span> | Due: {assignment.due} | Points: {assignment.points}
                  </p>
                </div>
              </Link>
              {index !== courseAssignments.length - 1 && <div className="dropdown-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;