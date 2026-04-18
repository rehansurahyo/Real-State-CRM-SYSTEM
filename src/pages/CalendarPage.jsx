import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Plus, MapPin, Clock, Users, Video } from 'lucide-react';
import './CalendarPage.css';

const EVENTS = [
  { day: 12, time: '10:00 AM', title: 'Property Showing - Lyon 3rd', type: 'showing', pos: 1 },
  { day: 12, time: '02:30 PM', title: 'Mandate Signing - Valéry', type: 'legal', pos: 2 },
  { day: 14, time: '11:00 AM', title: 'Appraisal: Modern Loft', type: 'appraisal', pos: 1 },
  { day: 18, time: '09:00 AM', title: 'Team Sync: Weekly Goals', type: 'meeting', pos: 1 },
  { day: 22, time: '04:00 PM', title: 'Zoom: Intro Mr. Dupont', type: 'video', pos: 1 },
  { day: 25, time: '10:30 AM', title: 'Final Inspection: Penthouse', type: 'showing', pos: 1 },
  { day: 28, time: '02:00 PM', title: 'Contract Review: Bordeaux', type: 'legal', pos: 1 },
];

const CalendarPage = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <motion.div 
      className="calendar-page fade-in"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="calendar-header">
        <div className="month-selector">
          <h1>MARCH 2026</h1>
          <div className="nav-btns">
            <button className="nav-btn"><ChevronLeft size={18} /></button>
            <button className="nav-btn"><ChevronRight size={18} /></button>
          </div>
        </div>
        <div className="calendar-actions">
          <button className="today-btn">TODAY</button>
          <button className="add-event-btn"><Plus size={16} /> ADD EVENT</button>
        </div>
      </div>

      <div className="calendar-container">
        <div className="calendar-grid-header">
          {weekDays.map(d => <div key={d} className="weekday-label">{d}</div>)}
        </div>
        <div className="calendar-grid">
          {/* Empty days for start of month - March 2026 starts on Sunday (assume 6 empty) */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`empty-${i}`} className="calendar-day empty"></div>
          ))}
          
          {days.map(d => {
            const dayEvents = EVENTS.filter(e => e.day === d);
            return (
              <div key={d} className={`calendar-day ${d === 18 ? 'today' : ''}`}>
                <span className="day-number">{d}</span>
                <div className="day-events">
                  {dayEvents.map((e, i) => (
                    <div key={i} className={`event-pill ${e.type}`}>
                      <span className="event-time">{e.time}</span>
                      <span className="event-title">{e.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="upcoming-sidebar">
        <div className="sidebar-section">
          <h3>UPCOMING TODAY</h3>
          <div className="upcoming-list">
            <div className="upcoming-item">
              <div className="item-time">09:00 AM</div>
              <div className="item-info">
                <h4>Team Sync: Weekly Goals</h4>
                <p><Users size={12} /> 8 Participants • Room 4B</p>
              </div>
            </div>
            <div className="upcoming-item active">
              <div className="item-time">11:30 AM</div>
              <div className="item-info">
                <h4>Phone Call: Marc J.</h4>
                <p><Clock size={12} /> Priority Lead • SeLoger</p>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-section">
          <h3>RECENT ACTIVITY</h3>
          <div className="activity-feed">
             <div className="activity-entry">
                <Video size={14} /> Zoom call with Client recorded
             </div>
             <div className="activity-entry">
                <MapPin size={14} /> Property visit in Paris 11 logged
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CalendarPage;
