import { Link, useLocation } from "react-router-dom";
import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { BsCalendarWeek } from "react-icons/bs";
import { FaInbox } from "react-icons/fa"
import { FiClock } from "react-icons/fi";
import { FaNetworkWired } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import "./index.css";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

    const linkToIconMap = {
        "Account": <BiSolidUserCircle/>,
        "Dashboard": <RiDashboard3Fill />,
        "Courses": <FaBookOpen />,
        "Calendar": <BsCalendarWeek />,
        "Inbox": <FaInbox />,
        "History": <FiClock />,
        "Studio": <FaNetworkWired />,
        "Commons": <BsBoxArrowInRight />,
        "Help": <AiFillQuestionCircle />

    }
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
            
            <img className="northeastern-logo" src="/images/NEULogo.png" />
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${link} ${pathname.includes(link) && "active"}`}>
                    <div className="icon">
                        {linkToIconMap[link]}
                    </div>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;