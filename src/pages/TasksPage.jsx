import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, MoreHorizontal, Clock, CheckCircle, AlertCircle, User } from 'lucide-react';
import './TasksPage.css';

const TASK_DATA = [
  { id: 't1', title: 'Follow up with Mr. Bernard', priority: 'high', status: 'todo', dueDate: 'Today', tags: ['Pige'], user: 'JD' },
  { id: 't2', title: 'Prepare estimate for 75011 Appt', priority: 'medium', status: 'todo', dueDate: 'Tomorrow', tags: ['Draft'], user: 'JD' },
  { id: 't3', title: 'Call notary regarding Bordeaux file', priority: 'high', status: 'in-progress', dueDate: 'Today', tags: ['Legal'], user: 'MD' },
  { id: 't4', title: 'Update SeLoger listings', priority: 'low', status: 'in-progress', dueDate: '2d', tags: ['Admin'], user: 'MD' },
  { id: 't5', title: 'Send signed mandate to Landlord', priority: 'high', status: 'completed', dueDate: 'Yesterday', tags: ['Closing'], user: 'JD' },
  { id: 't6', title: 'Onboarding call with new intern', priority: 'medium', status: 'completed', dueDate: 'Yesterday', tags: ['Internal'], user: 'MD' },
];

const COLUMNS = [
  { id: 'todo', title: 'TO DO', color: '#94a3b8' },
  { id: 'in-progress', title: 'IN PROGRESS', color: '#60a5fa' },
  { id: 'completed', title: 'COMPLETED', color: '#10b981' },
];

const TasksPage = () => {
  const [tasks] = useState(TASK_DATA);

  return (
    <motion.div 
      className="tasks-page fade-in"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="tasks-header">
        <div className="tasks-title">
          <h1>TASK BOARD</h1>
          <span className="task-count">{tasks.length} active tasks</span>
        </div>
        <div className="tasks-actions">
           <button className="add-task-btn"><Plus size={16} /> NEW TASK</button>
        </div>
      </div>

      <div className="task-kanban">
        {COLUMNS.map(col => (
          <div key={col.id} className="task-column">
            <div className="task-col-header" style={{ borderTop: `4px solid ${col.color}` }}>
              <div className="col-info">
                <h3>{col.title}</h3>
                <span className="badge">{tasks.filter(t => t.status === col.id).length}</span>
              </div>
              <MoreHorizontal size={16} />
            </div>

            <div className="task-list">
              {tasks.filter(t => t.status === col.id).map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-tags">
                    {task.tags.map(tag => (
                      <span key={tag} className="task-tag">{tag}</span>
                    ))}
                    <div className={`priority-dot ${task.priority}`}></div>
                  </div>
                  <h4 className="task-card-title">{task.title}</h4>
                  <div className="task-card-footer">
                    <div className="due-date">
                      <Clock size={12} /> {task.dueDate}
                    </div>
                    <div className="task-user">
                      <div className="avatar-xs">{task.user}</div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="quick-add-task">+ Quick Task</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TasksPage;
