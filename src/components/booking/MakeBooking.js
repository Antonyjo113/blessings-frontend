// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datatable from '../../uiComponents/Datatable';
import ButtonElement from '../../uiComponents/ButtonElement';
import { TabView, TabPanel } from 'primereact/tabview';
        
// REACT COMPONENT
const MakeBooking = (props) => {

    let navigate = useNavigate();

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
      

    const makeBookingColumns = [
        {field: 'roomNo', header:'Room No'},
        {field: 'availableInfo', header:'Available Info'},
        {field: 'roomFeatures', header:'Room Features'},
        {field: 'serviceInformation', header:'Service Information'},
        {field: 'action', header:'Action', body: actionTemplate, style:{textAlign:'center'}}
    ]

    const onClickMakeBooking = () => {
        navigate('/create-booking');
    }
        
    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>
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
            <div className='spacing'></div>
            <div className="tabs">
                <TabView>
                    <TabPanel header="Make Booking">
                        <div className='spacing width-100'>
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
                    </TabPanel>
                    <TabPanel header="Upcoming Booking">
                        <div className='spacing width-100'>
                            <Datatable 
                                value={makeBookingData}
                                columns={makeBookingColumns}   
                            />
                        </div>
                    </TabPanel>
                    <TabPanel header="Marriage">
                        <p className="m-0">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </TabPanel>
                </TabView>
            </div>
        
            
            
        </div>
    );
}
export default MakeBooking;