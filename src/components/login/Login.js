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
import logoimage1 from '../../assets/images/image.png';
import logoimage2 from '../../assets/images/captionimage.png';

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
                <div className='logo-section content-itemend'>
                    <div className='logo-box tx-center'>
                        <div className='caption-box content-center'>
                            <h1 className='caption-txt'>Home away from home</h1>
                            <img src={logoimage2} className='caption-logo' alt='logo' />
                        </div>
                        {/* <img src={logoimage} className='logo' alt='Blessings Logo' />
                        <h1 className='logo-title tx-white m-zero'>Blessings</h1> */}
                        <img src={logoimage1} className='login-image' alt='Blessing Building Image' />

                    </div>
                </div>
                <div className='login-section content-center'>
                    <div className='login-box tx-left'>
                        <div className='logo-section-v2 content-itemend'>
                            <img src={logoimage} className='logo' alt='Logo' />
                            <h1 className='login-title tx-white m-zero'>lessings</h1>
                        </div>
                        <div className='login-input-box'>
                            <TextboxElement id='username' placeholder="Username" className='username input-text' value={username}  onChangeText={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='login-input-box'>
                            <TextboxElement id="password" type='password' placeholder="Password" className='password input-text' value={password}  onChangeText={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='login-button-one tx-center'>
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