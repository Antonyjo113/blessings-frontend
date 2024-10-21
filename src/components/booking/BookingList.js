// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datatable from '../../uiComponents/Datatable';
import ButtonElement from '../../uiComponents/ButtonElement';
import BookingService from '../../services/booking/BookingService';

// REACT COMPONENT
const BookingList = (props) => {

    const [bookingAllData, setBookingAllData] = useState("");


    let navigate = useNavigate();

    function getAllBookingData (){
        BookingService.getBookingAllData().then(data => {
            let data2 = data;
            setBookingAllData(data2)
        });
    }
    useEffect(() => {
        getAllBookingData();
    }, []);



    const bookingData = [
        {
          roomNo: '101',
          startDate: '2024-07-01',
          endDate: '2024-07-07',
          customerDetails: 'John Doe, johndoe@example.com',
          status: 'Booked'
        },
        {
          roomNo: '102',
          startDate: '2024-07-05',
          endDate: '2024-07-10',
          customerDetails: 'Jane Smith, janesmith@example.com',
          status: 'Checked In'
        },
        {
          roomNo: '103',
          startDate: '2024-07-10',
          endDate: '2024-07-15',
          customerDetails: 'Michael Johnson, michaelj@example.com',
          status: 'Checked Out'
        },
        {
          roomNo: '104',
          startDate: '2024-07-12',
          endDate: '2024-07-18',
          customerDetails: 'Emily Davis, emilydavis@example.com',
          status: 'Cancelled'
        },
        {
          roomNo: '105',
          startDate: '2024-07-15',
          endDate: '2024-07-20',
          customerDetails: 'William Brown, wbrown@example.com',
          status: 'Booked'
        }
      ];


    const actionTemplateValue = (data) => {
        navigate('/create-booking', { state: data });
    };

    const actionTemplate = (rowData) => {
        return (
           <span onClick={() => actionTemplateValue(rowData)} className='icon'>
                <i class="bi bi-pencil"></i> 
           </span>
        )
    }

    const bookingColumns = [
        { field: 'id', header: 'ID', visible: false },
        { field: 'booking_no', header: 'Booking No', visible: true },
        { field: 'checkin', header: 'Check-in', visible: true },
        { field: 'checkout', header: 'Check-out', visible: true },
        { field: 'guest_name', header: 'Guest Name', visible: true },
        { field: 'total_amount_including_extra_cost', header: 'Total Amount (Including Extra Cost)', visible: true },
        { field: 'get_amount_paid', header: 'Amount Paid', visible: true },
        { field: 'status', header: 'Status', visible: true },
        { field: 'action', header: 'Action', body: actionTemplate, style: { textAlign: 'center', cursor: 'pointer' }, visible: true },
    ];

    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>

            <div className='spacing width-100'>
                <p className='m-zero tx-blue fw-semibold'>Confirmed Booking</p>
                    <Datatable 
                        value={bookingAllData}
                        columns={bookingColumns}   
                    />
            </div>
        </div>
    );
}
export default BookingList;