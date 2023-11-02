// import React from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import db from "../../../Database";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import "./index.css";

// function AssignmentEditor() {
//     const { assignmentId } = useParams();
//     const { courseId } = useParams();
//     const navigate = useNavigate();

//     const assignment = db.assignments.find(
//         (assignment) => assignment._id === assignmentId);




//     const handleSave = () => {
//         console.log("Actually saving assignment TBD in later assignments");
//         navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//     };
//     return (
//         <div>
//             <div className="buttons">
//                 <button type="button" class="btn btn-success mb-1">
//                     Published
//                 </button>
//                 <button type="button" class="btn btn-light ms-2">
//                     <BsThreeDotsVertical />
//                 </button>
//             </div>


//             <div className="assignment-edit-content">
//                 <hr />
//                 <p>Assignment Name</p>
//                 <input value={assignment.title}
//                     className="form-control mb-2" />
//                 <hr />
//                 <div className="float-end">
//                     <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
//                         className="btn btn-light">
//                         Cancel
//                     </Link>
//                     <button onClick={handleSave} className="btn btn-danger me-2">
//                         Save
//                     </button>
//                 </div> 
//             </div>


//         </div> 
//     );
// }


// export default AssignmentEditor;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import { addAssignment, updateAssignment } from '../assignmentsReducer';
import { FaCalendar } from 'react-icons/fa';


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Determine if the AssignmentEditor is in create mode or edit mode
    const isCreateMode = assignmentId === "create";

    // State to store assignment data
    const [assignment, setAssignment] = useState({
        title: "",
        course: courseId,
        due: "",
        points: "",
    });

    useEffect(() => {
        // If in edit mode, load the assignment data from the database
        if (!isCreateMode) {
            const existingAssignment = db.assignments.find(
                (assignment) => assignment._id === assignmentId
            );

            if (existingAssignment) {
                setAssignment(existingAssignment);
            }
        }
    }, [assignmentId, isCreateMode]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAssignment((prevAssignment) => ({
            ...prevAssignment,
            [name]: value,
        }));
    };

    const handleSave = () => {
        if (isCreateMode) {
            // Creating a new assignment
            dispatch(addAssignment(assignment));
        } else {
            // Updating an existing assignment
            dispatch(updateAssignment(assignment));
        }

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
                <p>Assignment Name</p>
                <input
                    type="text"
                    name="title"
                    value={assignment.title}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                />

                <p>Assignment Description</p>
                <input
                    type="text"
                    name="description"
                    value={assignment.description}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                />

                <p>Points</p>
                <input
                    type="text"
                    name="points"
                    value={assignment.points}
                    onChange={handleInputChange}
                    className="form-control mb-2"
                />


                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="input1" className="form-label">Assign</label>
                        </div>
                        <div className="col">
                            <div className="card text-center">
                                <div className="card-body">
                                    
                                    <div className="mb-3">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <label className="form-check-label" style={{ fontWeight: 'bold' }}>Due</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="input-group">
                                                    <input type="text" name="due" className="form-control" value={assignment.due}  onChange={handleInputChange}/>
                                                    <button className="btn btn-secondary" type="button">
                                                        <FaCalendar className="mr-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <label className="form-check-label" style={{ fontWeight: 'bold' }}>Available from</label>
                                            </div>
                                            <div className="col">
                                                <label className="form-check-label" style={{ fontWeight: 'bold' }}>Until</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="input-group">
                                                    <input type="text" name="available-from" className="form-control" value="" />
                                                    <button className="btn btn-secondary" type="button">
                                                    <FaCalendar className="mr-2" />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="input-group">
                                                    <input type="text" name="until" className="form-control" />
                                                    <button className="btn btn-secondary" type="button">
                                                    <FaCalendar className="mr-2" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <div className="float-end">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light">
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
