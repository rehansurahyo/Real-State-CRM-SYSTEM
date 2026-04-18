import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  TrendingUp, 
  Phone, 
  Mail, 
  MessageSquare, 
  Zap, 
  Share2,
  Calendar,
  History,
  TrendingDown,
  ChevronRight,
  Bot
} from 'lucide-react';
import './PropertyDetails.css';

const PropertyDetails = ({ isOpen, onClose, property }) => {
  if (!isOpen || !property) return null;

  return (
    <div className="property-modal-overlay">
      <div className="property-modal-content fade-in">
        <button className="close-modal" onClick={onClose}><X size={24} /></button>
        
        <div className="property-grid">
          {/* Left Side: Property Info & Images */}
          <div className="property-main">
            <div className="property-gallery">
              <img src={property.image} alt="" className="main-img" />
              <div className="gallery-thumbs">
                <img src={property.image} alt="" />
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200" alt="" />
                <img src="https://images.unsplash.com/photo-1513584684374-8bdb7489feef?w=200" alt="" />
              </div>
            </div>

            <div className="property-info-header">
              <h1>{property.title}</h1>
              <div className="property-price-row">
                <span className="price">{property.price}</span>
                <span className="price-tag">Private Seller</span>
              </div>
              <div className="location">
                <MapPin size={16} /> {property.city}, France
              </div>
            </div>

            <div className="property-tabs">
              <button className="active">Description</button>
              <button>History</button>
              <button>Simulation</button>
            </div>

            <div className="tab-content">
              <p>Magnificent 120m² house with 250m² wooded garden, double garage, 4 bedrooms, bright living room with fireplace. High-end equipped kitchen. Quiet neighborhood close to all amenities.</p>
            </div>

            <div className="ai-cockpit">
              <div className="cockpit-header">
                <Bot size={20} className="ai-icon" />
                <h3>AI COCKPIT — PROSPECTING ASSISTANT</h3>
              </div>
              <div className="ai-actions">
                <button className="ai-btn">Generate Call Script</button>
                <button className="ai-btn">Objection Handling</button>
                <button className="ai-btn">Schedule Auto Callback</button>
              </div>
            </div>
          </div>

          {/* Right Side: Data & Actions */}
          <div className="property-sidebar">
            <div className="contact-card">
              <h3>OWNER CONTACT</h3>
              <div className="owner-info">
                <div className="avatar">JD</div>
                <div>
                  <div className="owner-name">John Doe</div>
                  <div className="owner-status">Online 5 min ago</div>
                </div>
              </div>
              <div className="phone-number">06 12 34 56 78</div>
              <div className="contact-actions">
                <button className="action-btn call"><Phone size={18} /> Call</button>
                <button className="action-btn sms"><MessageSquare size={18} /> SMS</button>
                <button className="action-btn orange"><Zap size={18} /> WhatsApp</button>
              </div>
            </div>

            <div className="data-card">
              <h3>PRICE HISTORY</h3>
              <div className="history-list">
                <div className="history-item">
                  <div className="dot red"></div>
                  <div className="item-info">
                    <strong>450,000 €</strong>
                    <span>Today (Initial Price)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="data-card">
              <h3>SIMILAR RECENT SALES</h3>
              <div className="sales-list">
                <div className="sale-item">
                  <span className="sale-addr">Rue Garibaldi</span>
                  <span className="sale-price">415 869 €</span>
                </div>
                <div className="sale-item">
                  <span className="sale-addr">Avenue Jean Jaurès</span>
                  <span className="sale-price">402 205 €</span>
                </div>
              </div>
            </div>

            <button className="transfer-btn">TRANSFER THIS LEAD</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
