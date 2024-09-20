import React from 'react';
import { ScheduleXCalendar, useCalendarApp } from '@schedule-x/react';
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar';
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'; 
import '@schedule-x/theme-default/dist/index.css';
import { createEventModalPlugin } from '@schedule-x/event-modal';

function Calendar() {
  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    plugins: [
      createDragAndDropPlugin(),
      createEventModalPlugin(),
    ],
    events: [
      {
        id: '1',
        title: 'My new event',
        start: '2025-01-01 00:00', 
        end: '2025-01-01 02:00',  
      },
    ],
    selectedDate: '2025-01-01',
  });

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar}
     
  
      />
    </div>
  );
}

export default Calendar;
