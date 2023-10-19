import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FiSettings } from "react-icons/fi";
import { BsFunnel } from "react-icons/bs";
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="body">

            <div className="row">
                <div className="button-section">
                    <div className="wd-title">
                        <p style={{ color: "red" }}>Gradebook</p>
                        <div className="d-flex import-export-button">

                            <button type="button" className="btn btn-light mx-2">
                                <i className="fas fa-file-import"></i>
                                Import
                            </button>
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-file-export"></i>
                                    Export
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                            <button type="button" className="btn btn-light ms-2">
                                <FiSettings />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <label className="form-check-label" style={{ fontWeight: 'bold' }}>Student Names</label>
                        </div>
                        <div className="col" style={{ marginLeft: '400px' }}>
                            <label className="form-check-label" style={{ fontWeight: 'bold' }}>Assignment Names</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="col">
                                <div className="input-group" style={{ width: "75%" }}>
                                    <select className="form-select">
                                        <option selected>Search Students</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col">
                                <div className="input-group" style={{ width: "75%" }}>
                                    <select className="form-select">
                                        <option selected>Search Assignments</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <button type="button" className="btn btn-light mx-2">

                        <BsFunnel />
                        Apply Filters
                    </button>
                </div>
            </div>


            <div className="table-responsive">
  <table className="table table-striped table-sm custom-table">
    <thead>
      <tr className="gray-row">
        <th>Student Name</th>
        {assignments.map((assignment) => (
          <th key={assignment._id}>{assignment.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {enrollments.map((enrollment, index) => {
        const user = db.users.find((user) => user._id === enrollment.user);
        return (
          <tr key={enrollment.user} className={index % 2 === 0 ? 'white-row' : 'gray-row'}>
            <td className="red-text">{user.firstName} {user.lastName}</td>
            {assignments.map((assignment) => {
              const grade = db.grades.find(
                (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
              );
              return <td key={assignment._id}>{grade?.grade || ''}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
</div>

        </div>);
}
export default Grades;

