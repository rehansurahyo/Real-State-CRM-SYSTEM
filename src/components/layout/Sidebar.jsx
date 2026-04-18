import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Radar, 
  LayoutDashboard, 
  Users, 
  History, 
  PhoneCall, 
  MessageSquare, 
  CheckSquare, 
  Calendar, 
  Settings, 
  HelpCircle,
  Zap,
  Search,
  Menu,
  ChevronLeft
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onOpenRadar }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuGroups = [
    {
      title: 'PROSPECTING',
      items: [
        { icon: <Zap size={18} />, label: 'Live Radar', path: '/radar', action: onOpenRadar },
        { icon: <Search size={18} />, label: 'Scraping Module', path: '/scraper' },
        { icon: <LayoutDashboard size={18} />, label: 'Pipeline', path: '/pipeline' },
        { icon: <Users size={18} />, label: 'My Leads', path: '/leads' },
        { icon: <History size={18} />, label: 'Lead History', path: '/history' },
      ]
    },
    {
      title: 'EXECUTION',
      items: [
        { icon: <PhoneCall size={18} />, label: 'Power Dialer', path: '/dialer' },
        { icon: <MessageSquare size={18} />, label: 'Omnichannel Cockpit', path: '/cockpit' },
        { icon: <CheckSquare size={18} />, label: 'Tasks', path: '/tasks' },
        { icon: <Calendar size={18} />, label: 'Calendar', path: '/agenda' },
      ]
    },
    {
      title: 'INTELLIGENCE',
      items: [
        { icon: <History size={18} />, label: 'Cancelled Appt.', path: '/cancelled' },
      ]
    },
    {
      title: 'SETTINGS',
      items: [
        { icon: <Settings size={18} />, label: 'Automation', path: '/automation' },
        { icon: <Users size={18} />, label: 'Team', path: '/team' },
        { icon: <HelpCircle size={18} />, label: 'Feedback', path: '/suggestions' },
      ]
    }
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="sidebar-logo">
            <div className="logo-icon">
              <Zap size={24} fill="currentColor" />
            </div>
            {!isCollapsed && <h1>PIGE<span>IMMO</span></h1>}
          </div>
        </Link>
        <button className="collapse-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="nav-group">
            {!isCollapsed && <h3 className="group-title">{group.title}</h3>}
            {group.items.map((item, idy) => (
              item.action ? (
                <button 
                  key={idy} 
                  onClick={item.action}
                  className="nav-item"
                  title={isCollapsed ? item.label : ''}
                >
                  <span className="item-icon">{item.icon}</span>
                  {!isCollapsed && <span className="item-label">{item.label}</span>}
                </button>
              ) : (
                <NavLink 
                  key={idy} 
                  to={item.path} 
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                  title={isCollapsed ? item.label : ''}
                >
                  <span className="item-icon">{item.icon}</span>
                  {!isCollapsed && <span className="item-label">{item.label}</span>}
                </NavLink>
              )
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="upgrade-btn">
          <Zap size={isCollapsed ? 18 : 16} fill="white" />
          {!isCollapsed && <span>Upgrade to Pro</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
