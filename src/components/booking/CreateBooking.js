// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datatable from '../../uiComponents/Datatable';
import ButtonElement from '../../uiComponents/ButtonElement';
import TextboxElement from '../../uiComponents/InputTextElement';
import BookingService from '../../services/booking/BookingService';

// REACT COMPONENT
const CreateBooking = (props) => {


    const navigate = useNavigate();
    const location = useLocation();

    const [bookingDetails, setBookingDetails] = useState({
        id:location.state?.id || '',
        booking_no: location.state?.booking_no || '',
        checkin: location.state?.checkin || '',
        checkout: location.state?.checkout || '',
        guest_name: location.state?.guest_name || '',
        total_amount_including_extra_cost: location.state?.total_amount_including_extra_cost || '',
        get_amount_paid: location.state?.get_amount_paid || '',
        status: location.state?.status || 'Pending', // Default status
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails({ ...bookingDetails, [name]: value });
    };

    const submitBooking = async () => {
        try {
            await BookingService.updateBooking(bookingDetails.id, bookingDetails);
            console.log('Booking updated successfully!', bookingDetails);
            navigate('/booking'); // Redirect back to the bookings page
        } catch (error) {
            console.error('Error updating booking:', error);
            // Optionally, show an error message to the user
        }
    };

    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>
            <div className='spacing'></div>
            <div className='create-booking'>
                <div className='create-booking-box'>
                    <div className='create-booking'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='input-box'>
                                        <TextboxElement 
                                            label="Booking No"
                                            name="booking_no"
                                            value={bookingDetails.booking_no}
                                            onChangeText={handleChange}
                                        />
                                    </div>
                                    <div className='input-box'>
                                        <TextboxElement
                                            label="Check-in"
                                            name="checkin"
                                            type="date"
                                            value={bookingDetails.checkin}
                                            onChangeText={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='input-box'>
                                        <TextboxElement 
                                            label="Check-out"
                                            name="checkout"
                                            type="date"
                                            value={bookingDetails.checkout}
                                            onChangeText={handleChange}
                                        />
                                    </div>
                                    <div className='input-box'>
                                        <TextboxElement
                                            label="Guest Name"
                                            name="guest_name"
                                            value={bookingDetails.guest_name}
                                            onChangeText={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='input-box'>
                                        <TextboxElement 
                                            label="Guest Name"
                                            name="guest_name"
                                            value={bookingDetails.guest_name}
                                            onChangeText={handleChange}
                                        />
                                    </div>
                                    <div className='input-box'>
                                        <TextboxElement
                                            label="Total Amount (Including Extra Cost)"
                                            name="total_amount_including_extra_cost"
                                            value={bookingDetails.total_amount_including_extra_cost}
                                            onChangeText={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='input-box'>
                                        <TextboxElement 
                                            label="Amount Paid"
                                            name="get_amount_paid"
                                            value={bookingDetails.get_amount_paid}
                                            onChangeText={handleChange}
                                        />
                                    </div>
                                    <div className='input-box'>
                                        <TextboxElement 
                                            label="Amount Paid"
                                            name="status"
                                            value={bookingDetails.status}
                                            onChangeText={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="button-box tx-center">
                                    <ButtonElement
                                        label="Submit Booking"
                                        className="button-one tx-black bg-yellow fw-semibold"
                                        type="submit"
                                        onClickButton={() => submitBooking()}
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}
export default CreateBooking;