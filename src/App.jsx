import React, { useState } from 'react';
import events from './../events.json';
import Calendar from './components/Calendar';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthsToShow, setMonthsToShow] = useState(1);

  const handlePrev = () => {
    setCurrentDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  };
  const handleNext = () => {
    setCurrentDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1));
  };

  return (
    <div className="App">
      <h1 className="page-title">Zadania i zaliczenia</h1>
      <div className="controls">
        <div className="month-selector">
          <button onClick={handlePrev} className="nav-button">&lt;</button>
          <button onClick={handleNext} className="nav-button">&gt;</button>
        </div>
        <div className="month-selector">
          <span>Months to view:</span>
          {[1, 2].map(n => (
            <button
              key={n}
              className={monthsToShow === n ? 'selector-button active' : 'selector-button'}
              onClick={() => setMonthsToShow(n)}
            >{n}</button>
          ))}
        </div>
      </div>

      <div className="calendars-container">
        {Array.from({ length: monthsToShow }).map((_, idx) => {
          const viewDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + idx,
            1
          );
          return (
            <Calendar
              key={idx}
              events={events}
              year={viewDate.getFullYear()}
              month={viewDate.getMonth()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;