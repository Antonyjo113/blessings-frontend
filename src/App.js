// React Router
import { React, useState, useEffect, useRef, createContext } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import CSS files
import './App.css';

// Import files
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Booking from './components/booking/Booking';
import Layout from './components/layout/Layout';
import BookingList from './components/booking/BookingList';
import MakeBooking from './components/booking/MakeBooking';
import CreateBooking from './components/booking/CreateBooking';
import BusinessUnit from './components/businessunit/BusinessUnit';
import User from './components/user/User';
import UserRoleConfig from './components/user/UserRoleConfig';
import BusinessUnitConfig from './components/businessunit/BusinessUnitConfig';


export const UserContext = createContext();

function App() {
  

  const [createPageTitle, setCreatePageTitle] = useState({
    setPageTitle: false,
    pageTitle: ''
  })


  const navigate = useNavigate();

  useEffect(() => {
    loginRedirection();
  }, [])

  const loginRedirection =  () => {
    let userAuth = sessionStorage.getItem('authentication')
    // setAppLogin(userAuth)
    // if (userAuth) {
    //   console.log('2222');
    //   // navigate('/dashboard');
    // }
  }

  const setTitle = (data, title) => {
    setCreatePageTitle({
      setPageTitle: data,
      pageTitle: title
    })
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

      </Routes>
        { sessionStorage.getItem('authentication') && 
          <Routes>
            <Route path='/' element={
                <UserContext.Provider value={createPageTitle}>
                  <Layout setTitle={setTitle} isSetTitle={true} />
                </UserContext.Provider>
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/booking-list" element={<BookingList />} />
              <Route path="/make-booking" element={<MakeBooking />} />
              <Route path="/create-booking" element={<CreateBooking />} />
              <Route path="/businessunit" element={<BusinessUnit />} />
              <Route path="/user" element={<User />} />
              <Route path="/userRoleConfig" element={<UserRoleConfig />} />
              <Route path="/businessUnitConfig" element={<BusinessUnitConfig />} />

            </Route>
          </Routes>
        }
    </div>
  );
}

export default App;