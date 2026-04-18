import React from 'react';
import { motion } from 'framer-motion';
import { Construction, Euro, Zap, Users } from 'lucide-react';

const PlaceholderPage = ({ title }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container"
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        color: 'var(--text-muted)',
        textAlign: 'center'
      }}
    >
      <div style={{ 
        width: '64px', 
        height: '64px', 
        background: 'rgba(34, 197, 94, 0.05)', 
        borderRadius: '16px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '1.5rem',
        border: '1px solid rgba(34, 197, 94, 0.1)'
      }}>
        <Construction size={32} color="var(--primary)" />
      </div>
      <h1 style={{ color: 'var(--text-main)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h1>
      <p style={{ fontSize: '0.9rem', maxWidth: '400px', opacity: 0.7, marginBottom: '2rem' }}>
        This module is currently under development as part of the professional CRM suite. 
        Advanced AI features and real-time syncing will be available soon.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '1rem', 
        width: '100%', 
        maxWidth: '800px',
        padding: '1rem',
        background: 'var(--bg-card)',
        borderRadius: '12px',
        border: '1px solid var(--border)'
      }}>
        {[
          { label: 'Projected Revenue', val: '€1.2M', icon: <Euro size={16}/> },
          { label: 'Active Automations', val: '24', icon: <Zap size={16}/> },
          { label: 'Team Efficiency', val: '98%', icon: <Users size={16}/> }
        ].map((m, i) => (
          <div key={i} style={{ padding: '1rem', borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
              {m.icon} {m.label}
            </div>
            <div style={{ color: 'var(--primary)', fontWeight: 900, fontSize: '1.25rem' }}>{m.val}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PlaceholderPage;
