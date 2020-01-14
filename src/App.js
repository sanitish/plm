import React from 'react';
import Navbar from './components/Navbar';
import PieChart from './components/chart';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <PieChart/>
      <TaskList/>
    </div>
  );
}

export default App;
