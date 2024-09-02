import { useState } from "react";
import "./style.css";

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let today = new Date();
const Calendar = () => {
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let currentDate = today.getDate(); 

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  let days = [];
  let monthAndYear = months[month] + "   " + year;

  const showCalender = () => {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < Math.ceil((daysInMonth + firstDay) / 7); i++) {
      let daysInaWeek = 7;
      for (let j = 0; j < daysInaWeek; j++) {
        if (i === 0 && j < firstDay) {
          days.push("");
        } else if (date < daysInMonth + 1) {
          days.push(date++);
        } else {
          days.push("");
        }
      }
    }
  };
  showCalender();

  const nextMonthandYear = () => {
    setYear(month === 11 ? year + 1 : year);
    setMonth(month === 11 ? 0 : month + 1);
  };

  const previousMonthandYear = () => {
    setYear(month === 0 ? year - 1 : year);
    setMonth(month === 0 ? 11 : month - 1);
  };

  return (
    <div className="wrapper">
      <h1 className="title">CALENDAR</h1>
      <div className="calendarView">
        <div className="header">
          <h3>{monthAndYear}</h3>
        </div>
        <div className="weekdays">
          {weekDays.map((days, day) => {
            return (
              <div className="week" key={day}>
                {days}
              </div>
            );
          })}
        </div>
        <div className="days">
          {days.map((goodays, day) => {
            return (
              <div className={`dates ${
                goodays === currentDate && month === currentMonth && year === currentYear
                  ? "highlight"
                  : ""
              }`} key={day}>
                {goodays}
              </div>
            );
          })}
        </div>
        <div className="jumpTo">
        <button className="btn2" onClick={previousMonthandYear}>
            Previous
          </button>
          <button className="btn1" onClick={nextMonthandYear}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
