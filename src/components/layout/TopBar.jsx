import React from 'react';
import { Search, Bell, Moon, Sun, CreditCard, ChevronDown } from 'lucide-react';
import './TopBar.css';

const TopBar = ({ onToggleTheme, currentTheme }) => {
  return (
    <header className="top-bar">
      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          placeholder="Search listings, sellers, cities..." 
          className="search-input"
        />
      </div>

      <div className="top-bar-actions">
        <button 
          className="icon-btn theme-toggle" 
          onClick={onToggleTheme}
          title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="subscription-status">
          <CreditCard size={18} />
          <span>SUBSCRIPTION</span>
        </button>

        <button className="icon-btn notification-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>

        <div className="user-profile">
          <div className="avatar">MD</div>
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-role">Senior Agent</span>
          </div>
          <ChevronDown size={14} className="dropdown-icon" />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
