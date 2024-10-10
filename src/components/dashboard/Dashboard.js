// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datatable from '../../uiComponents/Datatable';
import PieChart from '../../uiComponents/PieChart';
import { MultiSelect } from 'primereact/multiselect';

// REACT COMPONENT
const Dashboard = (props) => {

    const [role, setRole] = useState('');

    useEffect(() => {
        const roleData = sessionStorage.getItem('role');
        if (roleData) {
          setRole(roleData);
        }
    }, []);

    const vacantData = [
        { "VACANT": "13", "OCCUPIED": "11", "OCCUPANY": "46%"},
        { "VACANT": "Guests", "OCCUPIED": "19", "OCCUPANY": ""}
    ]
    const vacantColumn = [
        {field: 'VACANT', header: 'VACANT', width: '30%'},
        {field: 'OCCUPIED', header: 'OCCUPIED', width: '35%'},
        {field: 'OCCUPANY', header: 'OCCUPANY', width: '35%'}
    ]

    const pieData = {
        labels: ['OYO', 'WALKIN', 'MARRIAGE', 'GO-MMT', 'BREVISTAY', 'COMPLEMENTARY','AIRBAB'],
        values: [12, 19, 3, 7, 2, 9, 1]
    };

    const bookingsData1 = [
        { "101": "Balcony", "102": "Kitchen", "103": "Balcony", "104": "Balcony", "105": "Balcony", "106": "Balcony", "107": "Balcony", "108": "Balcony" },
        { "101": "Guest (Single)", "102": "Guest (Double)", "103": "Guest (Single)", "104": "Guest (Single)", "105": "Guest (Single)", "106": "Guest (Single)", "107": "Guest (Single)", "108": "Guest (Single)" },
        { "101": "Walk-In", "102": "OYO", "103": "Walk-In", "104": "Walk-In", "105": "Walk-In", "106": "Walk-In", "107": "Walk-In", "108": "Walk-In" },
        { "101": "12 Aug - 13 Aug", "102": "12 Aug - 13 Aug", "103": "12 Aug - 13 Aug", "104": "12 Aug - 13 Aug", "105": "12 Aug - 13 Aug", "106": "12 Aug - 13 Aug", "107": "12 Aug - 13 Aug", "108": "12 Aug - 13 Aug" },
    ];

    const firstFloorRooms = [101, 102, 103, 104, 105, 106, 107, 108];

    const bookingColumns1 = firstFloorRooms.map(room => ({
        field: room.toString(),
        header: room.toString(),
        // sortable: true'

    }));

    const bookingHeaderGroup1 = firstFloorRooms.map(room => ({
        header: room.toString(),
        subheader: room === 101 ? 'AC' : 
                   room === 102 ? 'Non AC' : 
                   room === 105 ? 'AC/Non AC' : 
                   room === 106 ? 'AC' : 
                   '',
    }));

    const bookingsData2 = [
        { "201": "Balcony", "202": "Kitchen", "203": "Balcony", "204": "Balcony", "205": "Balcony", "206": "Balcony", "207": "Balcony", "208": "Balcony" },
        { "201": "Guest (Single)", "202": "Guest (Double)", "203": "Guest (Single)", "204": "Guest (Single)", "205": "Guest (Single)", "206": "Guest (Single)", "207": "Guest (Single)", "208": "Guest (Single)" },
        { "201": "Walk-In", "202": "OYO", "203": "Walk-In", "204": "Walk-In", "205": "Walk-In", "206": "Walk-In", "207": "Walk-In", "208": "Walk-In" },
        { "201": "12 Aug - 13 Aug", "202": "12 Aug - 13 Aug", "203": "12 Aug - 13 Aug", "204": "12 Aug - 13 Aug", "205": "12 Aug - 13 Aug", "206": "12 Aug - 13 Aug", "207": "12 Aug - 13 Aug", "208": "12 Aug - 13 Aug" },
    ];

    const secondFloorRooms = [201, 202, 203, 204, 205, 206, 207, 208];

    const bookingColumns2 = secondFloorRooms.map(room => ({
        field: room.toString(),
        header: room.toString(),

    }));

    const bookingHeaderGroup2 = secondFloorRooms.map(room => ({
        header: room.toString(),
        subheader: room === 201 ? 'AC' : 
                   room === 202 ? 'Non AC' : 
                   room === 205 ? 'AC/Non AC' : 
                   room === 206 ? 'AC' : 
                   '',
    }));

    const [selectedBusinessUnit, setSelectedBusinessUnit] = useState(null);

    const businessUnit = [
        { name: 'INN24', code: 'nanganallur' },
        { name: 'INN34', code: 'velacherry' },
        { name: 'INN44', code: 'porur' }
    ];
        
    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>
            <div className='content-start'>
                <div className='spacing width-50'>
                    {role === 'superadmin' ? (
                        <div>
                            <MultiSelect value={selectedBusinessUnit} onChange={(e) => setSelectedBusinessUnit(e.value)} options={businessUnit} optionLabel="name" 
                                filter placeholder="Select Business Unit" maxSelectedLabels={3} className="w-full md:w-20rem" />
                        </div>
                    ) : ''}

                    <p className='m-zero tx-blue fw-semibold'>Booking Information</p>
                    <div className='content-center-col height-300'>
                        <div>
                        <Datatable 
                            value={vacantData}
                            columns={vacantColumn}  
                            subheader={false} 
                        />
                        </div>
                    </div>

                </div>
                <div className='spacing width-50'>
                    <p className='m-zero tx-blue fw-semibold'>Booking Information</p>
                    
                    <div className='content-center'>
                        <div className='pie-chart'>
                        <PieChart data={pieData} />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='spacing width-100'>
                <p className='m-zero tx-blue fw-semibold'>First Floor</p>
                    <Datatable 
                        value={bookingsData1}
                        columns={bookingColumns1}   
                        // subheader={true} 
                        // headerGroup={bookingHeaderGroup1}

                    />
            </div>
            <div className='spacing width-100'>
                <p className='m-zero tx-blue fw-semibold'>Second Floor</p>
                <Datatable 
                    value={bookingsData2}
                    columns={bookingColumns2}
                    // subheader={true} 
                    // headerGroup={bookingHeaderGroup2}

                />
            </div>
        </div>
    );
}
export default Dashboard;