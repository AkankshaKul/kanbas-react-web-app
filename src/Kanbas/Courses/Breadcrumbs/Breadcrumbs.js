import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import "./index.css";
export default function Breadcrumbs(){
    const location = useLocation()


    const pathSegments = location.pathname.split("/").filter((segment) => segment !== "");

  // Get the last segment in the path
  const lastSegment = pathSegments[pathSegments.length - 1];

  const separator = " > ";

  const linkStyle = {
    color: "black",
    textDecoration: "none", 
    
  };


  return (
    <div className="crumbs">

      <div className="breadcrumbs" key={lastSegment}>

          <span className="seperator">{separator}</span>
     
    
        <Link style={linkStyle} to={location.pathname}>{lastSegment}</Link>
      </div>
    </div>
  );

 
}