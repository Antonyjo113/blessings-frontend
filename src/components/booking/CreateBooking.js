// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datatable from '../../uiComponents/Datatable';
import ButtonElement from '../../uiComponents/ButtonElement';
import TextboxElement from '../../uiComponents/InputTextElement';

// REACT COMPONENT
const CreateBooking = (props) => {

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
                            className="button-one tx-black bg-yellow fw-semibold"
                            onClickButton={() => submitBooking()}
                        />
                    </div>
                </div>
            </div>            
        </div>
    );
}
export default CreateBooking;