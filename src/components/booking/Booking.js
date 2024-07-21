// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

// REACT COMPONENT
const Booking = (props) => {

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
            title: 'Event 1',
            start: now,
            end: oneHourLater,
        },
        {
            title: 'Event 2',
            start: tomorrow,
            end: oneHourAfterTomorrow,
        }
    ];
    

    // RETURN COMPONENT
    return (
        <div>
            <h1> Booking Page </h1>
            <div className='spacing'>
            <div className='spacing'>
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>

            </div>
        </div>
    );
}
export default Booking;