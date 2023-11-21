import React, {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule, 
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  const [openModule, setOpenModule] = useState(null);
  const [openLesson, setOpenLesson] = useState(null);

  const handleModuleClick = (moduleIndex) => {
    if (openModule === moduleIndex) {
      setOpenModule(null);
    } else {
      setOpenModule(moduleIndex);
    }
  };

  const handleLessonClick = (lessonIndex) => {
    if (openLesson === lessonIndex) {
      setOpenLesson(null);
    } else {
      setOpenLesson(lessonIndex);
    }
  };
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };




  return (


    <div className="mod" style={{ width: '700px' }} >

      <ul className="list-group">


        <li className="list-group-item">
          <div className="row">
            <div className="col-9">
              <input
                value={module.name}
                onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
                }
                className="form-control"
              />
            </div>
            <div className="col-3">
            <button   onClick={handleUpdateModule} className="btn btn-primary">
                Update
        </button>

              <button
                 onClick={handleAddModule}
                className="btn btn-success"
              >
                Add
              </button>
              
            </div>
          </div>
          <div className="col-9 mt-3">
            <textarea
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
              className="form-control"
            />
          </div>
        </li>



        {modules
          .filter((module) => module.course === courseId)
          .map((module, moduleIndex) => (
            <li key={moduleIndex} className="list-group-item module">
              <button
                className={`dropdown-button ${openModule === moduleIndex ? "open" : ""}`} style={{ width: '650px', textAlign: 'left' }}
                onClick={() => handleModuleClick(moduleIndex)}
              >
                 <button
              onClick={() => dispatch(setModule(module))} className="btn btn-success float-end">
              Edit
            </button>

                <button
                   onClick={() => handleDeleteModule(module._id)}
                   className="btn btn-danger float-end">
                  Delete
                </button>

                <h3>{module.name}</h3>
              </button>
              {openModule === moduleIndex && (
                <div className="module-content">
                  <p>{module.description}</p>
                  {module.lessons && (
                    <ul className="list-group">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className="list-group-item lesson">
                          <button
                            className={`dropdown-button ${openLesson === lessonIndex ? "open" : ""}`}
                            onClick={() => handleLessonClick(lessonIndex)}
                          >

                            <h4>{lesson.name}</h4>
                          </button>
                          {openLesson === lessonIndex && (
                            <div className="lesson-content">
                              <p>{lesson.description}</p>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
      </ul>
    </div>

  );
}
export default ModuleList;


