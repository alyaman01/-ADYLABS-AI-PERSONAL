import React, { useState, useEffect } from 'react';
import './SchedulerSection.css';

const SchedulerSection = () => {
  // 1. Live Date & Month States
  const [currentDate, setCurrentDate] = useState(new Date()); // Aaj ki date handle karne ke liye
  const [selectedDate, setSelectedDate] = useState(new Date()); // Jo user click karega
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null); // Clicked time slot tracking
  const [selectedTimezone, setSelectedTimezone] = useState(""); // Dynamic timezone placeholder
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false); // Dropdown visibility state

  // Dynamic Timezones array selection list ke liye
  const timezonesList = [
    "Central Time - US & Canada",
    "India Standard Time (IST)",
    "Eastern Time - US & Canada",
    "Greenwich Mean Time (GMT)"
  ];

  // 2. Automatic Live System Timezone Detection
  useEffect(() => {
    const systemTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const cleanTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setSelectedTimezone(`${systemTimezone} (${cleanTime})`);
  }, []);

  // Time Slots Generation Array
  const timeSlots = [
    "8:00am", "8:30am", "9:00am", "9:30am", 
    "10:00am", "11:00am", "11:30am", "12:00pm", "12:30pm"
  ];

  // 3. Dynamic Month & Year Logic
  const currentMonthIdx = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Is mahine mein total kitne din hain calculation
  const daysInMonth = new Date(currentYear, currentMonthIdx + 1, 0).getDate();
  // Mahine ka pehla din kis weekday se start ho rha hai (0 = Sun, 1 = Mon...)
  const firstDayIndex = new Date(currentYear, currentMonthIdx, 1).getDay();

  // Next and Previous Month Handlers
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonthIdx - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonthIdx + 1, 1));
  };

  // Date Selection Click Handler
  const handleDateSelect = (day) => {
    const newSelected = new Date(currentYear, currentMonthIdx, day);
    setSelectedDate(newSelected);
    setSelectedTimeSlot(null); // Reset timeslot when date changes
  };

  // Right column ke heading ke liye formated selected text loop
  const formattedSelectedDay = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="connect-scheduler-section">
      <h2 className="scheduler-main-heading">Book a call with our team</h2>

      <div className="scheduler-three-column-container">
        
        {/* ================= COLUMN 1: LEFT PANEL ================= */}
        <div className="scheduler-left-panel">
          <div className="scheduler-logo-box">
            <span className="scheduler-mock-logo">!J</span>
          </div>
          <p className="scheduler-company-name">Upfluence Enterprise</p>
          <h3 className="scheduler-event-title">Software Demo</h3>
          
          <div className="scheduler-duration-row">
            <span className="scheduler-clock-icon">🕒</span>
            <span className="scheduler-duration-text">30 min</span>
          </div>
          
          <p className="scheduler-event-description">
            Our team will facilitate a demo targeted to your needs. Learn more about how our product can work for you and your team!
          </p>
          
          <div className="scheduler-cookie-settings">Cookie settings</div>
        </div>

        {/* ================= COLUMN 2: MIDDLE PANEL (LIVE CALENDAR) ================= */}
        <div className="scheduler-middle-panel">
          <h4 className="scheduler-panel-title">Select a Date & Time</h4>
          
          <div className="scheduler-month-header">
            <span className="scheduler-current-month">{monthNames[currentMonthIdx]} {currentYear}</span>
            <div className="scheduler-month-arrows">
              <button className="scheduler-arrow-btn" onClick={handlePrevMonth}>&lt;</button>
              <button className="scheduler-arrow-btn" onClick={handleNextMonth}>&gt;</button>
            </div>
          </div>

          <div className="scheduler-calendar-days-grid">
            <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
          </div>

          {/* DYNAMIC DATES CALCULATION LOOP */}
          <div className="scheduler-calendar-dates-grid">
            {/* Blank tags to offset start day position of weekday */}
            {[...Array(firstDayIndex)].map((_, i) => (
              <span key={`empty-${i}`} className="empty-day"></span>
            ))}
            
            {/* Real month days listing rendering */}
            {[...Array(daysInMonth)].map((_, i) => {
              const dayNum = i + 1;
              
              // Checking if it's currently selected in state
              const isSelected = selectedDate.getDate() === dayNum && 
                                 selectedDate.getMonth() === currentMonthIdx && 
                                 selectedDate.getFullYear() === currentYear;

              // Design rule: Make future dates or weekdays look clickable
              return (
                <span 
                  key={`day-${dayNum}`} 
                  className={`calendar-date-num active-clickable-slot ${isSelected ? 'selected-slot-blue' : ''}`}
                  onClick={() => handleDateSelect(dayNum)}
                >
                  {dayNum}
                </span>
              );
            })}
          </div>

          {/* DYNAMIC TIMEZONE SELECTOR DROPDOWN */}
          <div className="scheduler-timezone-block">
            <span className="timezone-globe-icon">🌐</span>
            <div className="timezone-dropdown-trigger" onClick={() => setIsTimezoneOpen(!isTimezoneOpen)}>
              <strong>Time zone</strong>
              <p>{selectedTimezone} ▾</p>
              
              {isTimezoneOpen && (
                <div className="timezone-custom-dropdown">
                  {timezonesList.map((tz, idx) => (
                    <div 
                      key={idx} 
                      className="timezone-dropdown-item" 
                      onClick={(e) => {
                        e.stopPropagation();
                        const rightNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                        setSelectedTimezone(`${tz} (${rightNow})`);
                        setIsTimezoneOpen(false);
                      }}
                    >
                      {tz}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= COLUMN 3: RIGHT PANEL (DYNAMIC SLOTS) ================= */}
        <div className="scheduler-right-panel">
          <p className="scheduler-selected-day-label">{formattedSelectedDay}</p>
          
          <div className="scheduler-slots-scroll-box">
            {timeSlots.map((slot, index) => {
              const isSlotActive = selectedTimeSlot === slot;
              return (
                <button 
                  key={index} 
                  className={`scheduler-time-slot-button ${isSlotActive ? 'active-slot-selected' : ''}`}
                  onClick={() => setSelectedTimeSlot(slot)}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SchedulerSection;