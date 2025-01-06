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
import logoimage from '../../assets/images/Blessing Hospitality - White.png';
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

        if(username != undefined && username != '' && password != undefined && password != ''){

            let loginData = {
                'email': username,
                'password': password
            }

            console.log('LOGIN CREDENTIALS: ', loginData);

            LoginService.userLogin(loginData).then(data => {
                if(data.success === true){
                    sessionStorage.setItem('authentication', 'blessings');
                    sessionStorage.setItem('role', data.role);
    
                    setTimeout(() => {
                        navigate('/dashboard');
                    }, 2000);
                }
                else {
                    console.log('Authentication Failed ...!');
                }
            });
        } else {
            console.log('Validation Failed ...!');
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
                <div class="marquee">
                    <span class="marquee-text">Home Away From Home...</span>
                </div>
            <div className='login-wrapper'>
                <div className='logo-section content-itemend'>
                    <div className='logo-box tx-center'>
                        {/* <div className='caption-box content-center'>
                            <h1 className='caption-txt'>Home Away From Home</h1>
                            {/* <img src={logoimage2} className='caption-logo' alt='logo' /> */}
                        {/* </div> */} 
                        {/* <img src={logoimage} className='logo' alt='Blessings Logo' />
                        <h1 className='logo-title tx-white m-zero'>Blessings</h1> */}
                        <img src={logoimage1} className='login-image' alt='Blessing Building Image' />

                    </div>
                </div>
                <div className='login-section content-center'>
                    <div className='login-box tx-left'>
                        <div className='logo-section-v2 content-itemend'>
                            <img src={logoimage} className='logo' alt='Logo' />
                        </div>
                        <div className='login-input-box'>
                            <TextboxElement id='username' placeholder="Username" className='username input-text' labelClassName="label-hide" value={username}   onChangeText={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='login-input-box'>
                            <TextboxElement id="password" type='password' placeholder="Password" className='password input-text' labelClassName="label-hide" value={password}  onChangeText={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='login-button-box tx-center'>
                            <ButtonElement
                                label="LOGIN"   
                                className="login-button tx-black bg-yellow fw-semibold"
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