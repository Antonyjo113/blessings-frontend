// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datatable from '../../uiComponents/Datatable';
import ButtonElement from '../../uiComponents/ButtonElement';

// REACT COMPONENT
const BookingList = (props) => {

    let navigate = useNavigate();

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
        navigate('/create-booking');
    }

    const actionTemplate = (rowData) => {
        let data ={
            start: 'check',
            end: 'check',
        }
        return (
           <span onClick={() => actionTemplateValue(data)} className='icon'>
                <i class="bi bi-pencil"></i> 
           </span>
        )
    }

    const bookingColumns = [
        {field: 'roomNo', header:'Room No'},
        {field: 'startDate', header:'Start Date'},
        {field: 'endDate', header:'End Date'},
        {field: 'customerDetails', header:'Customer Details'},
        {field: 'status', header:'Status'},
        {field: 'action', header:'Action', body: actionTemplate, style:{textAlign:'center', cursor:'pointer'}}
    ]

    const makeBookingData = [
        {
          roomNo: '106',
          availableInfo: 'Available',
          roomFeatures: 'King Size Bed, Sea View',
          serviceInformation: 'Free Wi-Fi, Breakfast Included'
        },
        {
          roomNo: '107',
          availableInfo: 'Booked',
          roomFeatures: 'Queen Size Bed, Garden View',
          serviceInformation: 'Free Wi-Fi, Spa Access'
        },
        {
          roomNo: '108',
          availableInfo: 'Available',
          roomFeatures: 'Double Bed, City View',
          serviceInformation: 'Free Parking, Gym Access'
        },
        {
          roomNo: '109',
          availableInfo: 'Available',
          roomFeatures: 'Single Bed, Pool View',
          serviceInformation: 'Free Breakfast, Airport Shuttle'
        },
        {
            roomNo: '110',
            availableInfo: 'Available',
            roomFeatures: 'Single Bed, Pool View',
            serviceInformation: 'Free Breakfast, Airport Shuttle'
          }
      ];
      

    const makeBookingColumns = [
        {field: 'roomNo', header:'Room No'},
        {field: 'availableInfo', header:'Available Info'},
        {field: 'roomFeatures', header:'Room Features'},
        {field: 'serviceInformation', header:'Service Information'},
        {field: 'action', header:'Action', body: actionTemplate, style:{textAlign:'center', cursor:'pointer'}}
    ]

    const onClickMakeBooking = () => {
        navigate('/create-booking');
    }
        
    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>

            <div className='spacing width-100'>
                <p className='m-zero tx-blue fw-semibold'>Confirmed Booking</p>
                    <Datatable 
                        value={bookingData}
                        columns={bookingColumns}   
                    />
            </div>
            <div className='spacing'></div>
            <div className='spacing'>
                <div class="row">
                    <div class="col-3 box-shadow">
                        <div className='d-flex p-2 bg-blue'>
                            <div>
                                <p className='m-zero tx-white fw-normal'>Booked Rooms</p>
                            </div>
                            <div className='ms-1'>
                                <p className='m-zero tx-white fw-semibold'>78</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 box-shadow">
                        <div className='d-flex p-2 bg-blue'>
                            <div>
                                <p className='m-zero tx-white fw-normal'>Booked Rooms</p>
                            </div>
                            <div className='ms-1'>
                                <p className='m-zero tx-white fw-semibold'>78</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 box-shadow">
                        <div className='d-flex p-2 bg-blue'>
                            <div>
                                <p className='m-zero tx-white fw-normal'>Booked Rooms</p>
                            </div>
                            <div className='ms-1'>
                                <p className='m-zero tx-white fw-semibold'>78</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 box-shadow">
                        <div className='d-flex p-2 bg-blue'>
                            <div>
                                <p className='m-zero tx-white fw-normal'>Booked Rooms</p>
                            </div>
                            <div className='ms-1'>
                                <p className='m-zero tx-white fw-semibold'>78</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='spacing width-100'>
                <p className='m-zero tx-blue fw-semibold'>Make Booking</p>
                    <Datatable 
                        value={makeBookingData}
                        columns={makeBookingColumns}   
                    />
            </div>
            <div className='button-box tx-center'>
                <ButtonElement
                    label="Make Booking"   
                    className="button-one tx-white bg-yellow fw-semibold"
                    onClickButton={() => onClickMakeBooking()}
                />
            </div>
        </div>
    );
}
export default BookingList;