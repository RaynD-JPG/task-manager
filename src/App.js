import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  // Add new task
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Filter tasks based on selected filter
  const getFilteredTasks = () => {
    if (filter === 'active') {
      return tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="App">
      <div className="container">
        <h1>Task Manager</h1>
        
        {/* Input section */}
        <div className="input-section">
          <input
            type="text"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="task-input"
          />
          <button onClick={addTask} className="add-button">
            Add Task
          </button>
        </div>

        {/* Filter buttons */}
        <div className="filter-section">
          <button
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All ({tasks.length})
          </button>
          <button
            className={filter === 'active' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('active')}
          >
            Active ({tasks.filter(t => !t.completed).length})
          </button>
          <button
            className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('completed')}
          >
            Completed ({tasks.filter(t => t.completed).length})
          </button>
        </div>

        {/* Task list */}
        <div className="task-list">
          {filteredTasks.length === 0 ? (
            <p className="empty-message">
              {filter === 'all' ? 'No tasks yet. Add one above!' : 
               filter === 'active' ? 'No active tasks!' : 
               'No completed tasks!'}
            </p>
          ) : (
            filteredTasks.map(task => (
              <div key={task.id} className="task-item">
                <div className="task-content">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="task-checkbox"
                  />
                  <span className={task.completed ? 'task-text completed' : 'task-text'}>
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        {/* Stats */}
        {tasks.length > 0 && (
          <div className="stats">
            <p>
              {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
