import React, { useState } from 'react';
import { 
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Calendar, 
  PhoneCall, 
  MessageSquare,
  MapPin,
  Clock
} from 'lucide-react';
import './PipelinePage.css';

const COLUMNS = [
  { id: 'prospecting', title: 'PROSPECTING', color: '#94a3b8' },
  { id: 'cold', title: 'COLD', color: '#60a5fa' },
  { id: 'warm', title: 'WARM', color: '#fb923c' },
  { id: 'hot', title: 'HOT', color: '#ef4444' },
  { id: 'negotiation', title: 'NEGOTIATION', color: '#8b5cf6' },
  { id: 'signed', title: 'SIGNED MANDATE', color: '#10b981' },
];

const INITIAL_DATA = [
  { id: '1', title: 'Modern House 140m²', price: '450,000 €', city: 'Lyon', status: 'prospecting', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop' },
  { id: '2', title: 'Bright T3 Apartment', price: '520,000 €', city: 'Paris', status: 'warm', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop' },
  { id: '3', title: 'Contemporary Villa', price: '890,000 €', city: 'Aix', status: 'hot', image: 'https://images.unsplash.com/photo-1580587771525-78b9bed3b924?w=400&h=300&fit=crop' },
  { id: '4', title: 'Renovated Loft 85m²', price: '385,000 €', city: 'Bordeaux', status: 'negotiation', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop' },
  { id: '5', title: 'Stone Village House', price: '360,000 €', city: 'Annecy', status: 'cold', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop' },
  { id: '6', title: 'Luxury Penthouse', price: '2,150,000 €', city: 'Cannes', status: 'signed', image: 'https://images.unsplash.com/photo-1512918766675-ed40fc5040f7?w=400&h=300&fit=crop' },
  { id: '7', title: 'Cozy Studio 25m²', price: '185,000 €', city: 'Nice', status: 'prospecting', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop' },
  { id: '8', title: 'Modern Duplex', price: '412,000 €', city: 'Toulouse', status: 'warm', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop' },
  { id: '9', title: 'Garden Apartment', price: '295,000 €', city: 'Montpellier', status: 'hot', image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400&h=300&fit=crop' },
  { id: '10', title: 'Riverside House', price: '575,000 €', city: 'Nantes', status: 'negotiation', image: 'https://images.unsplash.com/photo-1449156001437-3a16d1dafa39?w=400&h=300&fit=crop' },
  { id: '11', title: 'Classic T4 Haussmann', price: '1,250,000 €', city: 'Paris', status: 'signed', image: 'https://images.unsplash.com/photo-1560185127-6a5668b09c48?w=400&h=300&fit=crop' },
  { id: '12', title: 'Suburban Family Home', price: '495,000 €', city: 'Lille', status: 'cold', image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&h=300&fit=crop' },
  { id: '13', title: 'Art Deco Workshop', price: '680,000 €', city: 'Strasbourg', status: 'warm', image: 'https://images.unsplash.com/photo-1556912177-e2c7c10b4528?w=400&h=300&fit=crop' },
  { id: '14', title: 'Mountain Chalet', price: '920,000 €', city: 'Chamonix', status: 'hot', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop' },
  { id: '15', title: 'Sunny Terrace T2', price: '310,000 €', city: 'Marseille', status: 'prospecting', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=400&h=300&fit=crop' },
];

const PipelinePage = ({ onAddLead }) => {
  const [items, setItems] = useState(INITIAL_DATA);
  
  // ... rest of the sensors/handlers ...

  return (
    <div className="pipeline-page fade-in">
      <div className="pipeline-header">
        <div className="pipeline-title">
          <h1>PIPELINE</h1>
          <span className="lead-count">{items.length} tracked listings</span>
        </div>
        
        <div className="pipeline-actions">
          <div className="mini-search">
            <Search size={16} />
            <input type="text" placeholder="Search..." />
          </div>
          <button className="filter-btn"><Filter size={16} /> Filter by city</button>
          <button className="add-lead-btn" onClick={onAddLead}><Plus size={16} /> Add a lead</button>
        </div>
      </div>

      <div className="kanban-board">
        {COLUMNS.map((column) => (
          <div key={column.id} className="kanban-column">
            <div className="column-header" style={{ borderTop: `4px solid ${column.color}` }}>
              <div className="column-info">
                <span className="column-title">{column.title}</span>
                <span className="column-count">{items.filter(i => i.status === column.id).length}</span>
              </div>
              <MoreHorizontal size={16} className="column-more" />
            </div>

            <div className="column-content">
              {items
                .filter((item) => item.status === column.id)
                .map((item) => (
                  <div key={item.id} className="kanban-card">
                    <img src={item.image} alt="" className="card-img" />
                    <div className="card-body">
                      <h3>{item.title}</h3>
                      <div className="card-meta">
                        <MapPin size={12} /> {item.city}
                      </div>
                      <div className="card-price">{item.price}</div>
                      <div className="card-footer">
                        <div className="card-actions">
                          <button><PhoneCall size={14} /></button>
                          <button><MessageSquare size={14} /></button>
                          <button><Calendar size={14} /></button>
                        </div>
                        <div className="card-time">
                          <Clock size={12} /> 2d
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {items.filter(i => i.status === column.id).length === 0 && (
                <div className="empty-column">No leads</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PipelinePage;
