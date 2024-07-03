// import React from 'react';

// const MyComponent = () => {
//     return (
//         <div>
        
//         </div>
//     );
// };

// export default MyComponent;


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



const Login = (props) => {

    // HOOKS
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //  FUNCTIONS
    const onClickLogin = () => {

        let loginData = {
            'username': username,
            'password': password
        }

		LoginService.userLogin(loginData).then(data => {
            console.log('data', data);
        })

        // PerformanceService.getForm(id).then(data => {
        //     setLoading(false);
        //     props.isClone(true);
        //     navigate(`/kra/edit`, { state: { isEdit: true } });
        // })
    }

    // RETURN COMPONENT
    return (
        <div className='login-form'>

                <div className='input-box'>
                    <TextboxElement id='username' placeholder="Username" className='username input-text' value={username}  onChangeText={(e) => setUsername(e.target.value)} />
                </div>

                <div className='input-box'>
                    <TextboxElement id="password" placeholder="Password" className='password input-text' value={password}  onChangeText={(e) => setPassword(e.target.value)} />
                </div>
                <div className='input-box'>
                    {/* <Button icon='pi pi-arrow-right' iconPos="right"  type='button' className="p-mt-2 signin-button-o365 signin-button" /> */}
                    <ButtonElement
                        label="LOGIN"
                        icon="pi pi-plus"
                        iconPos="left"
                        className="addRoles-button"
                        onClickButton={() => onClickLogin()}
                    />
                </div>

        </div>

    );

}
export default Login;