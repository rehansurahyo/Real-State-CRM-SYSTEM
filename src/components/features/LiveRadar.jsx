import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Clock, MapPin, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import './LiveRadar.css';

const LiveRadar = ({ isOpen, onClose }) => {
  const newLeads = [
    { id: 1, type: 'House 140m² garden + pool', city: 'Lyon 6th', price: '620,000 €', time: '1 min ago', score: 95 },
    { id: 2, type: 'T4 Apartment with Terrace', city: 'Paris 15th', price: '780,000 €', time: '3 min ago', score: 88 },
    { id: 3, type: 'Investment Studio', city: 'Marseille', price: '125,000 €', time: '4 min ago', score: 72 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="radar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="radar-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="radar-drawer-header">
              <div className="radar-title">
                <Zap size={20} className="zap-icon" fill="#ff4d4d" />
                <h2>DEAL RADAR</h2>
                <span className="live-badge">LIVE</span>
              </div>
              <button onClick={onClose} className="close-btn"><X size={20} /></button>
            </div>

            <p className="radar-subtitle">Perfect properties listed less than 5 min ago</p>

            <div className="radar-leads-list">
              {newLeads.map((lead) => (
                <div key={lead.id} className="radar-lead-card">
                  <div className="lead-card-header">
                    <div className="lead-type-row">
                      <span className="lead-name">{lead.type}</span>
                      <span className="lead-tag">LBC</span>
                    </div>
                    <span className="lead-price">{lead.price}</span>
                  </div>

                  <div className="lead-meta-row">
                    <div className="meta-item"><MapPin size={12} /> {lead.city}</div>
                    <div className="meta-item time"><Clock size={12} /> {lead.time}</div>
                  </div>

                  <div className="lead-matching">
                    <div className="matching-bar">
                      <div className="matching-fill" style={{ width: `${lead.score}%` }}></div>
                    </div>
                    <span>Score: {lead.score}%</span>
                  </div>

                  <div className="radar-actions">
                    <button className="attack-btn-large">
                      <Zap size={16} fill="white" />
                      ENGAGE (1 €)
                    </button>
                    <div className="fast-actions">
                      <button className="sq-btn"><Phone size={16} /></button>
                      <button className="sq-btn"><MessageCircle size={16} /></button>
                      <button className="sq-btn"><ChevronRight size={16} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="radar-footer">
              <div className="wallet-info">
                <span>Remaining Credits: <strong>42 €</strong></span>
                <button className="recharge-link">Recharge</button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LiveRadar;
