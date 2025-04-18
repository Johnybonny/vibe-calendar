import React from 'react';
import events from './events.json';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calendar events={events} />
    </div>
  );
}

export default App;