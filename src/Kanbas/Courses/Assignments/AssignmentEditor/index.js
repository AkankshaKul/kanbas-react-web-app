import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="buttons">
                <button type="button" class="btn btn-success mb-1">
                    Published
                </button>
                <button type="button" class="btn btn-light ms-2">
                    <BsThreeDotsVertical />
                </button>
            </div>


            <div className="assignment-edit-content">
                <hr />
                <p>Assignment Name</p>
                <input value={assignment.title}
                    className="form-control mb-2" />
                <hr />
                <div className="float-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-light">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger me-2">
                        Save
                    </button>
                </div>
            </div>


        </div>
    );
}


export default AssignmentEditor;