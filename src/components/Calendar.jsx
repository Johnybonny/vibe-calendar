import React from 'react';
import '../Calendar.css';

const Calendar = ({ events }) => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startingDay; i++) {
    cells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  return (
    <div className="calendar">
      <h2>{today.toLocaleString('default', { month: 'long' })} {year}</h2>
      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
          <div key={d} className="day-header">{d}</div>
        ))}
        {cells.map((day, idx) => {
          const cellDate = day ? `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : null;
          const dayEvents = events.filter(e => e.date === cellDate);
          return (
            <div key={idx} className="calendar-cell">
              {day && <div className="date-number">{day}</div>}
              {dayEvents.map(ev => (
                <div
                  key={ev.id}
                  className="event"
                  style={{ backgroundColor: ev.color }}
                  title={ev.description}
                >
                  <strong>{ev.time}</strong> {ev.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;