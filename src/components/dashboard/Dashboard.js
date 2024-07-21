// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Datatable from '../../uiComponents/Datatable';
import PieChart from '../../uiComponents/PieChart';

// REACT COMPONENT
const Dashboard = (props) => {


    const vacantData = [
        { "VACANT": 23, "OCCUPIED": 23, "OCCUPANY": 23},
        { "VACANT": 23, "OCCUPIED": 23, "OCCUPANY": 23}
    ]
    const vacantColumn = [
        {field: 'VACANT', header: 'VACANT', width: '30%'},
        {field: 'OCCUPIED', header: 'OCCUPIED', width: '35%'},
        {field: 'OCCUPANY', header: 'OCCUPANY', width: '35%'}
    ]

    const pieData = {
        labels: ['OYO', 'WALKIN', 'MARRIAGE'],
        values: [12, 19, 3]
    };

    const bookingsData1 = [
        { "101": 23, "102": 23, "103": 23, "104": 23, "105": 23, "106": 23, "107": 23, "108": 23 },
        { "101": 23, "102": 23, "103": 23, "104": 23, "105": 23, "106": 23, "107": 23, "108": 23 }
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
        { "201": 23, "202": 23, "203": 23, "204": 23, "205": 23, "206": 23, "207": 23, "208": 23 },
        { "201": 23, "202": 23, "203": 23, "204": 23, "205": 23, "206": 23, "207": 23, "208": 23 }
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
        
    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>
            <div className='content-start'>
                <div className='spacing width-50'>
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
                        subheader={true} 
                        headerGroup={bookingHeaderGroup1}

                    />
            </div>
            <div className='spacing width-100'>
                <p className='m-zero tx-blue fw-semibold'>Second Floor</p>
                <Datatable 
                    value={bookingsData2}
                    columns={bookingColumns2}
                    subheader={true} 
                    headerGroup={bookingHeaderGroup2}

                />
            </div>
        </div>
    );
}
export default Dashboard;



// // const Dashboard = () => {
//     const bookingsData1 = [
//         { "101": 23, "102": 23, "103": 23, "104": 23, "105": 23, "106": 23, "107": 23, "108": 23 },
//         { "101": 23, "102": 23, "103": 23, "104": 23, "105": 23, "106": 23, "107": 23, "108": 23 }
//     ];

//     const firstFloorRooms = [101, 102, 103, 104, 105, 106, 107, 108];

//     const bookingColumns1 = firstFloorRooms.map(room => ({
//         field: room.toString(),
//         header: room.toString(),
//         sortable: true
//     }));

//     const bookingHeaderGroup = firstFloorRooms.map(room => ({
//         header: room.toString(),
//         subheader: room === 101 ? 'AC' : 
//                    room === 102 ? 'Non AC' : 
//                    room === 105 ? 'AC/Non AC' : 
//                    room === 106 ? 'AC' : 
//                    ''
//     }));

//     return (
//         <div>
//             <Datatable 
//                 value={bookingsData1}
//                 columns={bookingColumns1}
//                 headerGroup={bookingHeaderGroup}
//             />
//         </div>
//     );
// };

// export default Dashboard;
