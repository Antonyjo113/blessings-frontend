// REACT IMPORTS
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


  
// REACT COMPONENT
const Booking = (props) => {

    let navigate = useNavigate();

    const localizer = momentLocalizer(moment)

    const now = new Date();
    const oneHourLater = new Date(now);
    oneHourLater.setHours(now.getHours() + 1);
    
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    
    const oneHourAfterTomorrow = new Date(tomorrow);
    oneHourAfterTomorrow.setHours(tomorrow.getHours() + 1);
    
    const events = [
        {
            title: '12',
            start: now,
            end: oneHourLater,
        },
        {
            title: '13',
            start: tomorrow,
            end: oneHourAfterTomorrow,
        }
    ];

    const handleSelectEvent = useCallback(event => {
        // alert(event.title);
        navigate('/booking-list')
    }, []);
    

    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>
            <div className='spacing'>
            <div className='calendar-box' style={{ height: '100vh' }}>   
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        defaultView="month"
                        views={['month', 'week', 'agenda']}
                        style={{ height: 600 }}
                        onSelectEvent={handleSelectEvent}
                    />
                </div>

            </div>
        </div>
    );
}
export default Booking;