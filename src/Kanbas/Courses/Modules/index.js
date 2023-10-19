import ButtonSection from "./ButtonSection";
import ModuleList from "./ModuleList";
import "./index.css";
function Modules() {
  return (
    <div>
      <div className="button-section">
      <ButtonSection/>

      </div>
     
     <hr/>
      <div className="module-list">
      <ModuleList/>
      </div>
   
    </div>
  );
}
export default Modules;