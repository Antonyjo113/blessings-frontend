// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datatable from '../../uiComponents/Datatable';
import ButtonElement from '../../uiComponents/ButtonElement';
import TextboxElement from '../../uiComponents/InputTextElement';

// REACT COMPONENT
const CreateBooking = (props) => {

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
        console.log('data');
    }

    const actionTemplate = (rowData) => {
        let data ={
            start: 'check',
            end: 'check',
        }
        return (
           <span onclick={() => actionTemplateValue(data)} className='icon'>
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
        {field: 'action', header:'Action', body: actionTemplate, style:{textAlign:'center'}}
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
        {field: 'action', header:'Action', body: actionTemplate, style:{textAlign:'center'}}
    ]

    const submitBooking = () => {
        console.log('data');
    }

    const [roomNo, setRoomNo] = useState("");
    const [roomType, setRoomType] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerContact, setCustomerContact] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");

        
    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>
            <div className='spacing'></div>
            <div className='create-booking'>
                <div className='create-booking-box'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='m-zero tx-blue fw-semibold'>Room Details</p>
                            <div className='input-box input-box-flex'>
                                <label htmlFor="roomNo">Room No</label>
                                <TextboxElement id='roomNo' className='room-no input-text' value={roomNo}  onChangeText={(e) => setRoomNo(e.target.value)} />
                            </div>
                            <div className='input-box input-box-flex'>
                                <label htmlFor="roomType">Room Type</label>
                                <TextboxElement id="roomType" className='room-type input-text' value={roomType}  onChangeText={(e) => setRoomType(e.target.value)} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <p className='m-zero tx-blue fw-semibold'>Customer Details</p>
                            <div className='input-box input-box-flex'>
                                <label htmlFor="customerName">Customer Name</label>
                                <TextboxElement id='customerName' className='customer-name input-text' value={customerName}  onChangeText={(e) => setCustomerName(e.target.value)} />
                            </div>
                            <div className='input-box input-box-flex'>
                                <label htmlFor="customerContact">Customer Contact</label>
                                <TextboxElement id="customerContact" className='customer-contact input-text' value={customerContact}  onChangeText={(e) => setCustomerContact(e.target.value)} />
                            </div>
                            <div className='input-box input-box-flex'>
                                <label htmlFor="customerAddress">Customer Address</label>
                                <TextboxElement id="customerAddress" className='customer-address input-text' value={customerAddress}  onChangeText={(e) => setCustomerAddress(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='button-box tx-center mt-3'>
                        <ButtonElement
                            label="SUBMIT"   
                            className="button-one tx-white bg-yellow fw-semibold"
                            onClickButton={() => submitBooking()}
                        />
                    </div>
                </div>
            </div>            
        </div>
    );
}
export default CreateBooking;