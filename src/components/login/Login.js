// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// PRIME REACT IMPORTS
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

// FILES IMPORTS
import TextboxElement from '../../uiComponents/InputTextElement';
import ButtonElement from '../../uiComponents/ButtonElement';
import LoginService from '../../services/login/LoginService';
import logoimage from '../../assets/images/logo.png';

// REACT COMPONENT
const Login = (props) => {

    // HOOKS
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // REACT INITIATIONS
    let navigate = useNavigate();

    // FUNCTIONS
    const onClickLogin = () => {

        let loginData = {
            'username': username,
            'password': password
        }
        console.log('LOGIN CREDENTIALS: ', loginData);

        if(username != undefined && username != '' && password != undefined && password != ''){

            if(username === 'admin' && password == 'admin'){
                sessionStorage.setItem('authentication', 'blessings');
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            }
            else {
                console.log('Authentication Failed ...!');
            }
        }
        // ==========  API SERVICES ==========
		// LoginService.userLogin(loginData).then(data => {
        //     console.log('data', data);
        // })

        // PerformanceService.getForm(id).then(data => {
        //     setLoading(false);
        //     props.isClone(true);
        //     navigate(`/kra/edit`, { state: { isEdit: true } });
        // })
    }

    // RETURN COMPONENT
    return (
        <div className='login'>
            <div className='login-wrapper'>
                <div className='logo-section'>
                    <div className='logo-box'>
                        <img src={logoimage} className='logo' alt='Blessings Logo' />
                        <h1 className='logo-title tx-white m-zero'>Blessings</h1>
                    </div>
                </div>
                <div className='login-section'>
                    <div className='login-box'>
                        <h1 className='login-title tx-white m-zero'>LOGIN</h1>
                        <div className='input-box'>
                            <TextboxElement id='username' placeholder="Username" className='username input-text' value={username}  onChangeText={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='input-box'>
                            <TextboxElement id="password" placeholder="Password" className='password input-text' value={password}  onChangeText={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='input-box'>
                            <ButtonElement
                                label="LOGIN"
                                className="login-button tx-white bg-yellow fw-semibold"
                                onClickButton={() => onClickLogin()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;