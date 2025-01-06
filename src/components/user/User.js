// UserPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/user/UserService'; // Adjust the import based on your project structure
import Datatable from '../../uiComponents/Datatable';
import ButtonElement from '../../uiComponents/ButtonElement';
import TextboxElement from '../../uiComponents/InputTextElement';
import CheckboxElement from '../../uiComponents/CheckboxElement';
import { Dialog } from 'primereact/dialog';
import { FaPlus } from 'react-icons/fa6';
import { LuPencil } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";


const User = () => {
    const [allUserData, setAllUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userStatus, setUserStatus] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [dialogVisible, setDialogVisible] = useState(false);

    const getAllUserData = () => {
        UserService.getUserAllData().then(data => {
            setAllUserData(data);
        });
    };

    useEffect(() => {
        getAllUserData();
    }, []);

    const handleSelectUser = (user) => {
        setSelectedUser(user);
        setUserName(user.name);
        setUserEmail(user.email);
        setUserStatus(user.status === 'ACTIVE');
        setUserRole(user.role);
        setDialogVisible(true);
    };

    const handleCreate = async () => {
        const newUser = {
            name: userName,
            email: userEmail,
            status: userStatus ? 'ACTIVE' : 'INACTIVE',
            role: userRole,
            password:'admin'
        };
        try {
            const createdUser = await UserService.createUser(newUser);
            setAllUserData([...allUserData, createdUser]);
            resetForm();
            setDialogVisible(false);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleUpdate = async () => {
        if (!selectedUser) return;
        const updatedUser = {
            name: userName,
            email: userEmail,
            status: userStatus ? 'ACTIVE' : 'INACTIVE',
            role: userRole,
            password:'admin'
        };
        try {
            const updated = await UserService.updateUser(selectedUser.id, updatedUser);
            setAllUserData(allUserData.map(user => (user.id === updated.id ? updated : user)));
            resetForm();
            setDialogVisible(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const userColumns = [
        { field: 'name', header: 'Name' },
        { field: 'email', header: 'Email' },
        { field: 'status', header: 'Status' },
        { field: 'role', header: 'Role' },
        {
            header: 'Action',
            body: (rowData) => (
                // <ButtonElement
                //     label="Edit"
                //     className="tx-white bg-blue fw-semibold br-10 b-zero pa-5"
                //     icon="pi pi-pencil"
                //     onClickButton={() => handleSelectUser(rowData)}
                // />
                <LuPencil onClick={() => handleSelectUser(rowData)} />
            ),
        },
    ];

    const resetForm = () => {
        setSelectedUser(null);
        setUserName('');
        setUserEmail('');
        setUserStatus(false);
        setUserRole('');
    };

    const openDialog = () => {
        resetForm();
        setDialogVisible(true);
    };

    return (
        <div className='main-content-wrapper'>
            {/* <ButtonElement
                label="Create User"
                className="spacing tx-white bg-blue fw-semibold br-10 b-zero pa-5"
                icon="pi pi-plus"
                onClickButton={openDialog}
            /> */}

            <FaPlus onClick={openDialog} />

            <div className='spacing width-100'>
                <Datatable 
                    value={allUserData}
                    columns={userColumns}   
                />
            </div>

            <Dialog header={selectedUser ? 'Update User' : 'Create User'} visible={dialogVisible} onHide={() => setDialogVisible(false)}>
                <div>
                    <TextboxElement 
                        id='userName' 
                        label="Name"
                        className='user-name input-text' 
                        value={userName}
                        onChangeText={(e) => setUserName(e.target.value)} 
                    />
                    <TextboxElement 
                        id='userEmail' 
                        label="Email"
                        className='user-email input-text' 
                        value={userEmail}
                        onChangeText={(e) => setUserEmail(e.target.value)} 
                    />
                    <CheckboxElement
                        id='userStatus' 
                        className='' 
                        label="Status"
                        value={userStatus}
                        onChangeCheck={(e) => setUserStatus(e.checked)} 
                    />
                    <TextboxElement 
                        id='userRole' 
                        label="Role"
                        className='user-role input-text' 
                        value={userRole}
                        onChangeText={(e) => setUserRole(e.target.value)} 
                    />
                </div>
                <div className="dialog-footer">
                    <ButtonElement
                        label="Cancel"   
                        className="tx-black bg-yellow fw-semibold"
                        icon="pi pi-times" 
                        onClickButton={() => setDialogVisible(false)}
                    />

                    <ButtonElement
                        label={selectedUser ? 'Update' : 'Create'}
                        className="tx-black bg-yellow fw-semibold"
                        icon="pi pi-check"
                        onClickButton={selectedUser ? handleUpdate : handleCreate}
                    />
                </div>
            </Dialog>
        </div>
    );
};

export default User;
