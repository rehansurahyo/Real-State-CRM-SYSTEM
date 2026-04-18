import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/layout/Sidebar';
import TopBar from './components/layout/TopBar';
import DashboardPage from './pages/DashboardPage';
import PipelinePage from './pages/PipelinePage';
import ScrapingPage from './pages/ScrapingPage';
import PlaceholderPage from './pages/PlaceholderPage';
import LiveRadar from './components/features/LiveRadar';
import PropertyDetails from './components/features/PropertyDetails';
import AddLeadModal from './components/modals/AddLeadModal';
import CalendarPage from './pages/CalendarPage';
import TasksPage from './pages/TasksPage';
import './styles/App.css';

const AnimatedRoutes = ({ openProperty, onAddLead }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage onOpenProperty={openProperty} onAddLead={onAddLead} />} />
        <Route path="/pipeline" element={<PipelinePage onOpenProperty={openProperty} onAddLead={onAddLead} />} />
        <Route path="/scraper" element={<ScrapingPage />} />
        
        {/* Prospecting Routes */}
        <Route path="/radar" element={<DashboardPage onOpenProperty={openProperty} onAddLead={onAddLead} />} />
        <Route path="/leads" element={<PipelinePage onOpenProperty={openProperty} onAddLead={onAddLead} />} />
        <Route path="/history" element={<PlaceholderPage title="Lead History" />} />
        
        {/* Execution Routes */}
        <Route path="/dialer" element={<PlaceholderPage title="Power Dialer" />} />
        <Route path="/cockpit" element={<PlaceholderPage title="Omnichannel Cockpit" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/agenda" element={<CalendarPage />} />
        
        {/* Intelligence Routes */}
        <Route path="/cancelled" element={<PlaceholderPage title="Cancelled Appointments" />} />
        
        {/* Settings Routes */}
        <Route path="/automation" element={<PlaceholderPage title="Automation" />} />
        <Route path="/team" element={<PlaceholderPage title="Team Management" />} />
        <Route path="/suggestions" element={<PlaceholderPage title="Feedback & Suggestions" />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isRadarOpen, setRadarOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [isAddLeadOpen, setAddLeadOpen] = useState(false);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const openProperty = (prop) => setSelectedProperty(prop);
  const closeProperty = () => setSelectedProperty(null);

  return (
    <Router>
      <div className="app-container" data-theme={theme}>
        <Sidebar onOpenRadar={() => setRadarOpen(true)} />
        <div className="main-content">
          <TopBar onToggleTheme={toggleTheme} currentTheme={theme} />
          <div className="page-container">
            <AnimatedRoutes 
              openProperty={openProperty} 
              onAddLead={() => setAddLeadOpen(true)}
            />
          </div>
        </div>

        <LiveRadar isOpen={isRadarOpen} onClose={() => setRadarOpen(false)} />
        <PropertyDetails 
          isOpen={!!selectedProperty} 
          onClose={closeProperty} 
          property={selectedProperty} 
        />

        <AddLeadModal 
          isOpen={isAddLeadOpen} 
          onClose={() => setAddLeadOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
