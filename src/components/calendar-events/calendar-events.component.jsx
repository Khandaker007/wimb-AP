import React from "react";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";

const locales = {
  // 'en-US': require('date-fns/locale/en-US')
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Final Meeting",
    allDay: true,
    start: new Date(2021, 9, 21),
    end: new Date(2021, 9, 21),
  },
  {
    title: "First Meeting",
    start: new Date(2021, 9, 1),
    end: new Date(2021, 9, 1),
  },
  {
    title: "Vacation",
    start: new Date(2021, 9, 3),
    end: new Date(2021, 9, 5),
  },
];

import './calendar-events.style.scss'

const EventCalendar = () => {
  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default EventCalendar;

// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

// export default class EventCalendar extends React.Component {

//   render() {
//     return (
//       <FullCalendar
//         plugins={[ dayGridPlugin, interactionPlugin ]}
//         dateClick={this.handleDateClick}
//       />
//     )
//   }

//   handleDateClick = (arg) => { // bind with an arrow function
//     alert(arg.dateStr)
//   }

// }
