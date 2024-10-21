// REACT IMPORTS
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BusinessUnitService from '../../services/businessunit/BusinessUnitService';
import Datatable from '../../uiComponents/Datatable';
import ButtonElement from '../../uiComponents/ButtonElement';
import TextboxElement from '../../uiComponents/InputTextElement';
import CheckboxElement from '../../uiComponents/CheckboxElement';
import { Dialog } from 'primereact/dialog';
import { FaPlus } from 'react-icons/fa6';
import { LuPencil } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

// REACT COMPONENT
const BusinessUnit = (props) => {

    const [allBusinessUnitData, setAllBusinessUnitData] = useState("");
    const [selectedBusinessUnit, setSelectedBusinessUnit] = useState(null);
    const [unitName, setUnitName] = useState('');
    const [unitPlace, setUnitPlace] = useState('');
    const [unitStatus, setUnitStatus] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);

    function getAllBusinessUnitData (){
        BusinessUnitService.getBusinessUnitAllData().then(data => {
            let data2 = data;
            setAllBusinessUnitData(data2)
        });
    }
    useEffect(() => {
        getAllBusinessUnitData();
    }, []);

    const handleSelectUnit = (unit) => {
        setSelectedBusinessUnit(unit);
        setUnitName(unit.name);
        setUnitPlace(unit.place);
        setUnitStatus(unit.status);
        setDialogVisible(true);
    };


    const handleCreate = async () => {
        const newBusinessUnit = { name: unitName, place: unitPlace, status: unitStatus== true? 'ACTIVE': 'INACTIVE' };
        try {
            const createdUnit = await BusinessUnitService.createBusinessUnit(newBusinessUnit);
            setAllBusinessUnitData([...allBusinessUnitData, createdUnit]);
            resetForm();
            setDialogVisible(false);
        } catch (error) {
            console.error('Error creating business unit:', error);
        }
    };

    const handleUpdate = async () => {
        if (!selectedBusinessUnit) return;
        const updatedBusinessUnit = { name: unitName, place: unitPlace, status: unitStatus== true? 'ACTIVE': 'INACTIVE' };
        try {
            const updatedUnit = await BusinessUnitService.updateBusinessUnit(selectedBusinessUnit.id, updatedBusinessUnit);
            setAllBusinessUnitData(allBusinessUnitData.map(unit => (unit.id === updatedUnit.id ? updatedUnit : unit)));
            resetForm();
            setDialogVisible(false);
        } catch (error) {
            console.error('Error updating business unit:', error);
        }
    };

    const businessUnitColumns = [
        {field: 'name', header:'Name'},
        {field: 'place', header:'Place'},
        {field: 'status', header:'Status'},
        {
            header: 'Action',
            body: (rowData) => (
                <LuPencil onClick={() => handleSelectUnit(rowData)}/>
                // <ButtonElement
                //     label="I"   
                //     className="tx-white bg-blue fw-semibold br-10 b-zero pa-5"
                //     icon="pi pi-check" 
                // />
            )
        }
    ]

    const resetForm = () => {
        setSelectedBusinessUnit(null);
        setUnitName('');
        setUnitPlace('');
        setUnitStatus('');
    };

    const openDialog = () => {
        resetForm();
        setDialogVisible(true);
    };

    // RETURN COMPONENT
    return (
        <div className='main-content-wrapper'>

            {/* <ButtonElement
                label="Create Business Unit"
                className=" spacing tx-white bg-blue fw-semibold br-10 b-zero pa-5"
                icon="pi pi-plus" 
                onClickButton={openDialog}
            /> */}
            
            <FaPlus onClick={openDialog} />

           <div className='spacing width-100'>
                <Datatable 
                    value={allBusinessUnitData}
                    columns={businessUnitColumns}   
                />
            </div>
            <Dialog header={selectedBusinessUnit ? 'Update Business Unit' : 'Create Business Unit'} visible={dialogVisible} onHide={() => setDialogVisible(false)}>
                <div>
                    <TextboxElement 
                        id='businessUnitName' 
                        label = "Name"
                        className='businessunit-name input-text' 
                        value={unitName}
                        onChangeText={(e) => setUnitName(e.target.value)} 
                    />
                    <TextboxElement 
                        id='businessUnitPlace' 
                        label = "Place"
                        className='businessunit-name input-text' 
                        value={unitPlace}
                        onChangeText={(e) => setUnitPlace(e.target.value)} 
                    />
                    <CheckboxElement
                        id='businessUnitStatus' 
                        className='' 
                        label = "Status"
                        value={unitStatus}
                        onChangeCheck={(e) => setUnitStatus(e.checked)} 
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
                        label={selectedBusinessUnit ? 'Update' : 'Create'}
                        className="tx-black bg-yellow fw-semibold"
                        icon="pi pi-check"
                        onClickButton={selectedBusinessUnit ? handleUpdate : handleCreate}
                    />
                </div>
            </Dialog>

        </div>
    );
}
export default BusinessUnit;