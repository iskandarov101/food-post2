import { useState } from "react"
import { Link } from "react-router-dom"
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from "../../assets/icon/icon"
import SidebarIcon from "../../components/SidebarIcon/SidebarIcon"
import Logo from "../../assets/images/Vector.svg"

import "./main.scss";

const Sidebar = () => {
    const [activePage, setActivePage] = useState("/")

    return (
      <div>
        <div className="sidebar">

          <Link 
          to="" 
          className={`header-link Logo-header`} 
          > 
          <span className="logo">
            <img src={Logo} alt="" />
          </span> 
          </Link>

          <Link to="/" className={`header-link ${activePage === '/' ? 'active' : ''}`}onClick={() => setActivePage("/")}
          > <SidebarIcon icon={<Icon1 />} /></Link>

          <Link to="/discount"className={`header-link ${activePage === '/discount' ? 'active' : ''}`} onClick={() => setActivePage("/discount")}
          > <SidebarIcon icon={<Icon2 />} /></Link>

          <Link to="/statistics"className={`header-link ${activePage === '/statistics' ? 'active' : ''}`} onClick={() => setActivePage("/statistics")}
          >  <SidebarIcon icon={<Icon3 />} /></Link>

          <Link to="/messages"className={`header-link ${activePage === '/messages' ? 'active' : ''}`} onClick={() => setActivePage("/messages")}
          >  <SidebarIcon icon={<Icon4 />} /></Link>

          <Link to="/notifications"className={`header-link ${activePage === '/notifications' ? 'active' : ''}`} onClick={() => setActivePage("/notifications")}
          >  <SidebarIcon icon={<Icon5 />} /></Link>

          <Link to="/settings"className={`header-link ${activePage === '/settings' ? 'active' : ''}`} onClick={() => setActivePage("/settings")}
          >  <SidebarIcon icon={<Icon6 />} /></Link>

          <Link to="/quit"className={`last header-link  ${activePage === '/quit' ? 'active' : ''}`} onClick={() => setActivePage("/quit")}
          >  <SidebarIcon icon={<Icon7 />} /></Link>
        </div>

      </div>
    );
};

export default Sidebar;