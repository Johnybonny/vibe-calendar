import React from 'react';
import '../Calendar.css';

const Calendar = ({ events, year, month }) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < startingDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="calendar">
      <h3 className="month-title">
        {firstDayOfMonth.toLocaleString('default', { month: 'long' })} {year}
      </h3>
      <div className="calendar-grid">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
          <div key={d} className="day-header">{d}</div>
        ))}
        {cells.map((day, idx) => {
          const dateStr = day
            ? `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
            : null;
          const dayEvents = events.filter(e => e.date === dateStr);
          return (
            <div key={idx} className="calendar-cell">
              {day && <div className="date-number">{day}</div>}
              {dayEvents.map(ev => (
                <div
                  className={`event${ev.active === false ? ' inactive' : ''}`}
                  style={{ backgroundColor: ev.active === false ? undefined : ev.color }}
                >
                  <span className="event-title">{ev.title}</span>
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