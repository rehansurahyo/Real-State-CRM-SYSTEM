import React from 'react';
import { 
  Users, 
  PhoneCall, 
  Calendar, 
  FileCheck, 
  Radio, 
  TrendingUp, 
  Clock, 
  MapPin,
  ExternalLink,
  Zap,
  MoreVertical,
  ChevronDown,
  MessageSquare,
  Plus
} from 'lucide-react';
import './DashboardPage.css';

const DashboardPage = ({ onOpenProperty, onAddLead }) => {
  const stats = [
    { label: 'New Listings', value: '128', change: '+12%', icon: <Radio size={16} />, color: '#22c55e' },
    { label: 'Leads Contacted', value: '45', change: '+5%', icon: <PhoneCall size={16} />, color: '#22c55e' },
    { label: 'Appointments', value: '12', change: '+2%', icon: <Calendar size={16} />, color: '#22c55e' },
    { label: 'Mandates Signed', value: '3', change: '+1%', icon: <FileCheck size={16} />, color: '#22c55e' },
    { label: 'Market Hotness', value: '92%', change: '+3%', icon: <TrendingUp size={16} />, color: '#22c55e' },
    { label: 'Avg. Response', value: '4m 12s', change: '-15%', icon: <Clock size={16} />, color: '#22c55e' },
  ];

  const platforms = [
    { name: 'LeBonCoin', total: 842, today: 12, weekly: 156 },
    { name: 'PAP.fr', total: 421, today: 5, weekly: 89 },
    { name: 'SeLoger', total: 615, today: 8, weekly: 112 },
    { name: 'Bien\'ici', total: 298, today: 3, weekly: 45 },
    { name: 'Logic-Immo', total: 512, today: 7, weekly: 94 },
    { name: 'MeilleursAgents', total: 184, today: 2, weekly: 28 },
  ];

  const recentLeads = [
    { id: 1, type: 'Modern House 140m²', city: 'Lyon 3rd', price: '450,000 €', time: '2 min', source: 'LBC', avatar: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800' },
    { id: 2, type: 'Bright T3 Apartment', city: 'Paris 11th', price: '520,000 €', time: '8 min', source: 'PAP', avatar: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800' },
    { id: 3, type: 'Contemporary Villa', city: 'Aix-en-Provence', price: '890,000 €', time: '15 min', source: 'LBC', avatar: 'https://images.unsplash.com/photo-1580587771525-78b9bed3b924?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1580587771525-78b9bed3b924?w=800' },
    { id: 4, type: 'Renovated Loft 85m²', city: 'Bordeaux', price: '385,000 €', time: '22 min', source: 'LBC', avatar: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800' },
    { id: 5, type: 'Stone Village House', city: 'Annecy', price: '360,000 €', time: '30 min', source: 'PAP', avatar: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800' },
    { id: 6, type: 'Luxury Penthouse', city: 'Cannes', price: '2,150,000 €', time: '45 min', source: 'LBC', avatar: 'https://images.unsplash.com/photo-1512918766675-ed40fc5040f7?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1512918766675-ed40fc5040f7?w=800' },
    { id: 7, type: 'Cozy Studio', city: 'Nice', price: '185,000 €', time: '52 min', source: 'PAP', avatar: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800' },
    { id: 8, type: 'Modern Duplex', city: 'Toulouse', price: '412,000 €', time: '1h 5m', source: 'LBC', avatar: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800' },
    { id: 9, type: 'Garden Apartment', city: 'Montpellier', price: '295,000 €', time: '1h 20m', source: 'LBC', avatar: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800' },
    { id: 10, type: 'Riverside House', city: 'Nantes', price: '575,000 €', time: '2h', source: 'PAP', avatar: 'https://images.unsplash.com/photo-1449156001437-3a16d1dafa39?w=200&h=200&fit=crop', image: 'https://images.unsplash.com/photo-1449156001437-3a16d1dafa39?w=800' },
  ];

  return (
    <div className="dashboard-page fade-in">
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>DASHBOARD</h1>
          <p>Overview of your prospecting activity</p>
        </div>
        <button className="add-lead-btn" onClick={onAddLead} style={{ padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}>
          <Plus size={16} /> QUICK ADD LEAD
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
              <span className="stat-change" style={{ color: stat.color }}>
                <TrendingUp size={12} /> {stat.change}
              </span>
            </div>
            <div className="stat-graph">
               {/* Simple sparkline mock */}
               <svg viewBox="0 0 100 30" width="60" height="20">
                  <path d="M0,15 L10,12 L20,18 L30,10 L40,15 L50,13 L60,17 L70,8 L80,12 L90,10 L100,15" fill="none" stroke={stat.color} strokeWidth="2" />
               </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="platforms-row">
        {platforms.map((platform, idx) => (
          <div key={idx} className="platform-card">
            <div className="platform-header">
              <div className="platform-name">
                <div className="status-dot" style={{ backgroundColor: '#22c55e' }}></div>
                {platform.name}
              </div>
              <div className="platform-active">ACTIVE</div>
            </div>
            <div className="platform-body">
              <div className="platform-stat">
                <span className="stat-val">{platform.total}</span>
                <span className="stat-desc">TOTAL</span>
              </div>
              <div className="platform-stat">
                <span className="stat-val highlight">{platform.today}</span>
                <span className="stat-desc">TODAY</span>
              </div>
              <div className="platform-stat">
                <span className="stat-val">{platform.weekly}</span>
                <span className="stat-desc">7 DAYS</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="market-trends-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
        <div className="radar-section">
          <div className="section-header">
            <div className="section-title">
              <TrendingUp size={16} /> MARKET ACQUISITION TRENDS
            </div>
            <div className="lead-tag">Last 30 Days • +18.4% growth</div>
          </div>
          <div style={{ height: '120px', width: '100%', padding: '1rem 0' }}>
            <svg viewBox="0 0 1000 120" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: 'var(--primary)', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
              <path d="M0,100 Q100,80 200,90 T400,60 T600,70 T800,40 T1000,50 L1000,120 L0,120 Z" fill="url(#grad)" />
              <path d="M0,100 Q100,80 200,90 T400,60 T600,70 T800,40 T1000,50" fill="none" stroke="var(--primary)" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="radar-section">
          <div className="section-header">
            <div className="section-title">AI INSIGHTS</div>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            <p><Zap size={12} color="var(--primary)" /> <strong>High Velocity:</strong> Lyon 3rd district listings are selling 15% faster than last month.</p>
            <p style={{ marginTop: '0.5rem' }}><Zap size={12} color="var(--primary)" /> <strong>Inventory Alert:</strong> T3 apartments in Paris 11th have dropped in price by 2.4% avg.</p>
          </div>
        </div>
      </div>

      <div className="radar-section">
        <div className="section-header">
          <div className="section-title">
            <div className="live-dot"></div>
            LIVE RADAR — LATEST LISTINGS
          </div>
          <button className="view-all">8 LISTINGS <ChevronDown size={14} /></button>
        </div>

        <div className="leads-table-container">
          <table className="leads-table">
            <thead>
              <tr>
                <th>PHOTO</th>
                <th>PROPERTY</th>
                <th>CITY</th>
                <th>PRICE</th>
                <th>TIME</th>
                <th>SOURCE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id} onClick={() => onOpenProperty(lead)} style={{ cursor: 'pointer' }}>
                  <td>
                    <img src={lead.avatar} alt="" className="lead-thumb" />
                  </td>
                  <td>
                    <div className="lead-info">
                      <span className="lead-name">{lead.type}</span>
                      <span className="lead-tag">House • 120m²</span>
                    </div>
                  </td>
                  <td>
                    <div className="lead-city">
                      <MapPin size={12} /> {lead.city}
                    </div>
                  </td>
                  <td><span className="lead-price">{lead.price}</span></td>
                  <td>
                    <div className="lead-time">
                      <Clock size={12} /> {lead.time}
                    </div>
                  </td>
                  <td>
                    <span className={`source-badge ${lead.source.toLowerCase()}`}>
                      {lead.source}
                    </span>
                  </td>
                  <td>
                    <div className="lead-actions">
                      <button className="attack-btn">
                        <Zap size={14} fill="currentColor" /> ENGAGE
                      </button>
                      <button className="icon-action"><MessageSquare size={16} /></button>
                      <button className="icon-action"><PhoneCall size={16} /></button>
                      <button className="icon-action"><MoreVertical size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
