import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
 
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

  return (


    <div className="mod" style={{ width: '700px' }} >
  
        {modules
          .filter((module) => module.course === courseId)
          .map((module, moduleIndex) => (
            <li key={moduleIndex} className="list-group-item module">
              <button
                className={`dropdown-button ${openModule === moduleIndex ? "open" : ""}`} style={{ width: '700px' , textAlign: 'left'}}
                onClick={() => handleModuleClick(moduleIndex)}
              >
            
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
      {/* </ul> */}
    </div>
   
  );
}
export default ModuleList;


