import React, { useState } from 'react';
import { Search, MapPin, Play, Shield, Globe, Clock, CheckCircle, Zap } from 'lucide-react';
import './ScrapingPage.css';

const ScrapingPage = () => {
  const [isScraping, setIsScraping] = useState(false);
  const [progress, setProgress] = useState(0);

  const startScrape = () => {
    setIsScraping(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setIsScraping(false);
      }
    }, 200);
  };

  const platforms = [
    { name: 'Leboncoin', icon: 'LBC', active: true },
    { name: 'SeLoger', icon: 'SL', active: true },
    { name: 'PAP', icon: 'PAP', active: false },
    { name: 'BienIci', icon: 'BI', active: true },
  ];

  return (
    <div className="scraping-page fade-in">
      <div className="scraping-header">
        <h1>SCRAPING MODULE</h1>
        <p>Manually extract new property listings</p>
      </div>

      <div className="scraping-grid">
        <div className="scraping-config">
          <div className="config-card">
            <div className="form-group">
              <label>Platforms to Scan</label>
              <div className="platform-pills">
                {platforms.map(p => (
                  <button key={p.name} className={`pill ${p.active ? 'active' : ''}`}>
                    {p.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-group">
              <label>Location (City / Zip Code)</label>
              <div className="input-with-icon">
                <MapPin size={16} />
                <input type="text" placeholder="Ex: Paris 75011" defaultValue="Paris" />
              </div>
            </div>
            <div className="form-group">
              <label>Property Type</label>
              <select>
                <option>All Types</option>
                <option>House</option>
                <option>Apartment</option>
              </select>
            </div>
            <button 
              className={`scrape-main-btn ${isScraping ? 'disabled' : ''}`} 
              onClick={startScrape}
              disabled={isScraping}
            >
              <Play size={18} fill="currentColor" />
              {isScraping ? 'SCRAPING IN PROGRESS...' : 'START SCAN'}
            </button>
          </div>
        </div>

        <div className="scraping-status">
          <div className="status-card">
            <div className="status-header">
              <h3>SCAN STATUS</h3>
              <div className={`status-badge ${isScraping ? 'running' : 'idle'}`}>
                {isScraping ? 'ACTIVE' : 'IDLE'}
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="progress-stats">
                <span>{progress}% completed</span>
                <span>{Math.floor(progress * 1.2)} listings found</span>
              </div>
            </div>

            <div className="logs-section">
              <h4>ACTIVITY LOGS</h4>
              <div className="logs-container">
                <div className="log-entry">
                  <Clock size={12} /> [23:24:01] Pre-flight check: Proxy rotation active.
                </div>
                <div className="log-entry">
                  <Globe size={12} /> [23:24:03] Session established with Leboncoin API.
                </div>
                {progress > 10 && (
                  <div className="log-entry">
                    <Search size={12} /> [23:24:05] Querying: "Paris 11th, Appt, {'>'}400k".
                  </div>
                )}
                {progress > 30 && (
                  <div className="log-entry">
                    <CheckCircle size={12} /> [23:24:10] Bypass: Cloudflare challenge solved.
                  </div>
                )}
                {progress > 50 && (
                  <div className="log-entry success">
                    <Zap size={12} /> [23:24:15] 12 new listings identified in last 5 mins.
                  </div>
                )}
                {progress > 70 && (
                  <div className="log-entry">
                    <Shield size={12} /> [23:24:20] Syncing data with local Lead Intelligence DB.
                  </div>
                )}
                {progress === 100 && (
                  <div className="log-entry success">
                    <CheckCircle size={12} /> [23:24:25] SCRAPE COMPLETE. 84 total nodes parsed.
                  </div>
                )}
                <div className="log-entry" style={{ opacity: 0.5 }}>
                  <Clock size={12} /> [23:24:28] Waiting for next scheduled sync...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-scans-section" style={{ marginTop: '2rem' }}>
        <div className="section-header">
          <div className="section-title">RECENT SCANS HISTORY</div>
        </div>
        <div className="leads-table-container">
          <table className="leads-table">
            <thead>
              <tr>
                <th>TIMESTAMP</th>
                <th>PLATFORMS</th>
                <th>LOCATION</th>
                <th>LISTINGS</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {[
                { time: 'Today, 14:20', p: 'LBC, PAP', loc: 'Paris', count: 42, s: 'COMPLETED' },
                { time: 'Today, 10:15', p: 'SL, BI', loc: 'Lyon', count: 18, s: 'COMPLETED' },
                { time: 'Yesterday, 18:45', p: 'All Platforms', loc: 'Bordeaux', count: 124, s: 'COMPLETED' },
                { time: 'Yesterday, 12:00', p: 'LBC', loc: 'Nice', count: 0, s: 'FAILED' },
              ].map((scan, i) => (
                <tr key={i}>
                  <td style={{ fontSize: '0.75rem', fontWeight: 700 }}>{scan.time}</td>
                  <td>{scan.p}</td>
                  <td>{scan.loc}</td>
                  <td style={{ color: 'var(--primary)', fontWeight: 800 }}>{scan.count}</td>
                  <td>
                    <span className={`status-badge ${scan.s === 'COMPLETED' ? 'running' : 'idle'}`} style={{ fontSize: '0.65rem' }}>
                      {scan.s}
                    </span>
                  </td>
                  <td><button className="view-all" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>VIEW LEADS</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScrapingPage;
