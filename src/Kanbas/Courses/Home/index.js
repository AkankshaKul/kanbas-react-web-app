import ModuleList from "../Modules/ModuleList";
import ButtonSection from "../Modules/ButtonSection";
import "./index.css";
import {RxCross1} from "react-icons/rx";
import {LiaFileImportSolid} from "react-icons/lia";
import {MdOutlineNotificationImportant} from "react-icons/md";
import {ImStatsBars} from "react-icons/im";
import {HiOutlineSpeakerphone} from "react-icons/hi";
import {FaCreativeCommonsRemix} from "react-icons/fa";
import {RxHome} from "react-icons/rx";
function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div className="button-section">
          <ButtonSection />
        </div>
        <hr />
        <ModuleList />
      </div>
      <div style={{ flex: 1 }}>
        <div className="status-section">

          <button type="button" className="btn btn-light button-space">
            <LiaFileImportSolid/>
            Import Existing Content</button><br />
          <button type="button" className="btn btn-light button-space">
            <FaCreativeCommonsRemix/>
            Import From Commons</button><br />
          <button type="button" className="btn btn-light button-space">
            <RxHome/>
            Choose Home Page</button><br />
          <button type="button" className="btn btn-light button-space">
            <ImStatsBars/>
             View Course Stream</button><br />
          <button type="button" className="btn btn-light button-space">
            <HiOutlineSpeakerphone/>
            New Announcement</button><br />
          <button type="button" className="btn btn-light button-space">
            <ImStatsBars/>
            New Analytics</button><br />
          <button type="button" className="btn btn-light button-space">
            <MdOutlineNotificationImportant/>
            View Course Notifications</button><br />
        </div>
        <div className="to-do-section">
          <h5>To Do</h5>
          <hr />

       
          <a href="#" style={{ marginRight: '200px' }}>Grade A1 - ANV + HTML</a>
          <RxCross1/>
          <p>100 points Sep 18 at 11:59pm</p>
    
      
         
       
          <a href="#" style={{ marginRight: '150px' }}>Grade A2 - CSS + BOOTSTRAP</a>
          <RxCross1/>
          <p>100 points Oct 2 at 11:59pm</p>
         
    
         
        
        </div>
      </div>
    </div>

  );
}
export default Home;