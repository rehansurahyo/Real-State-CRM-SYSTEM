import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, MapPin, Home, Euro, Phone, Mail, CheckCircle, Zap } from 'lucide-react';
import './AddLeadModal.css';

const AddLeadModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Apartment',
    city: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // Success step
    setTimeout(() => {
      onClose();
      setStep(1);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>{step === 3 ? 'SUCCESS' : 'ADD NEW LEAD'}</h2>
            <button className="close-btn" onClick={onClose}><X size={20} /></button>
          </div>

          <div className="modal-body">
            {step === 1 && (
              <form className="lead-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Seller Name</label>
                    <div className="input-icon">
                      <User size={16} />
                      <input type="text" placeholder="John Smith" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <div className="input-icon">
                      <Phone size={16} />
                      <input type="text" placeholder="+33 6 12 34 56 78" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Property Type</label>
                  <div className="type-pills">
                    {['Apartment', 'House', 'Land', 'Commercial'].map(t => (
                      <button 
                        key={t}
                        type="button"
                        className={`type-pill ${formData.type === t ? 'active' : ''}`}
                        onClick={() => setFormData({...formData, type: t})}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <button type="button" className="next-btn" onClick={() => setStep(2)}>
                  NEXT STEP
                </button>
              </form>
            )}

            {step === 2 && (
              <form className="lead-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>City / Location</label>
                  <div className="input-icon">
                    <MapPin size={16} />
                    <input type="text" placeholder="Paris 75011" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Estimated Price (€)</label>
                  <div className="input-icon">
                    <Euro size={16} />
                    <input type="text" placeholder="450,000" />
                  </div>
                </div>
                <div className="btn-row">
                  <button type="button" className="back-btn" onClick={() => setStep(1)}>BACK</button>
                  <button type="submit" className="submit-btn">
                    <Zap size={18} fill="currentColor" /> CREATE LEAD
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="success-state">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="success-icon"
                >
                  <CheckCircle size={64} color="var(--primary)" />
                </motion.div>
                <h3>LEAD CREATED!</h3>
                <p>Lead has been successfully added to your pipeline.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AddLeadModal;
