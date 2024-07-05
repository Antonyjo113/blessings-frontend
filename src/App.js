// React Router
import { React, useState, useEffect, useRef, createContext } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

// Import CSS files
import './App.css';

// Import files
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Booking from './components/booking/Booking';
import Layout from './components/layout/Layout';

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
              <Route path="/booking" element={<Booking />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        }
    </div>
  );
}

export default App;


// import logo from "./logo.svg";
// import "./App.scss";

// // React Router
// import { Route, Routes, useNavigate } from "react-router-dom";



// // Import files
// import Login from "./components/login/Login";
// import Home from "./components/home/Home";



// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;
