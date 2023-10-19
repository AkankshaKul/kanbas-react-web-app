import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
function ButtonSection() {
  return (
    <div className="button-section">
      <div className="wd-title">
        <div className="d-flex wd-button">
          <button type="button" className="btn btn-light">Collapse All</button>
          <button type="button" className="btn btn-light ms-2">View Progress</button>

          <div className="dropdown">
            <button className="btn btn-light dropdown-toggle ms-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-check-circle" style={{ color: '#099f72' }}></i>
              Publish All
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <button type="button" className="btn btn-danger ms-2">
            <i className="fas fa-plus" aria-hidden="true"></i>
            Module
          </button>
          <button type="button" className="btn btn-light ms-2">
            <BsThreeDotsVertical/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ButtonSection;
