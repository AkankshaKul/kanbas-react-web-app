import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import { FaPlus, FaEllipsisV , FaTrash} from "react-icons/fa";
import { useSelector , useDispatch} from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

function Assignments() {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const dropdownStyle = {
    width: '75vw',
    textAlign: "left",
  };
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  // const assignment = useSelector((state) => state.assignmentsReducer.assignment);

  // const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);

  const navigate = useNavigate();
  const toggleAssignmentEditor = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/create`);
  };

  const openDeleteDialog = (assignment) => {
    console.log("Opening delete dialog");
    setAssignmentToDelete(assignment);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    console.log("Closing delete dialog");
    setAssignmentToDelete(null);
    setDeleteDialogOpen(false);
  };

  const confirmDelete = () => {
    console.log("Confirming delete");
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete._id));
      setAssignmentToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

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
            <button type="button" class="btn btn-danger ms-2"  onClick={toggleAssignmentEditor}>
              <i class="fas fa-plus" aria-hidden="true"></i>
              <FaPlus />
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
              <div className="d-flex">
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
              <button
                  className="btn btn-danger"
                  onClick={() => openDeleteDialog(assignment)}
 >
                  <FaTrash />
                </button>
                </div>
              {index !== courseAssignments.length - 1 && <div className="dropdown-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
      {deleteDialogOpen && (
        <Modal show={deleteDialogOpen} onHide={closeDeleteDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete the assignment "{assignmentToDelete?.title}"?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeDeleteDialog}>
              No
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
export default Assignments;