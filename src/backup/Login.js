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
                <div className='logo-section content-flexend'>
                    <div className='logo-box tx-center'>
                        {/* <img src={logoimage} className='logo' alt='Blessings Logo' />
                        <h1 className='logo-title tx-white m-zero'>Blessings</h1> */}
                        <img src={logoimage1} className='login-image' alt='Blessing Building Image' />
                    </div>
                </div>
                <div className='login-section content-center'>
                    <div className='login-box tx-left'>
                        <h1 className='login-title tx-white m-zero'>LOGIN</h1>
                        <div className='login-input-box'>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <TextboxElement id='username' placeholder="Username" className='username input-text' value={username}  onChangeText={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='login-input-box'>
                                                <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                            <TextboxElement id="password" placeholder="Password" className='password input-text' value={password}  onChangeText={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='input-box'>
                        <button type="submit">Login</button>
                            {/* <ButtonElement
                                label="LOGIN"   
                                className="login-button tx-white bg-yellow fw-semibold"
                                onClickButton={() => onClickLogin()}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;



import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';

export default function BasicDemo() {
    const items = [     
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Documents',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'Invoices',
                            icon: 'pi pi-file-pdf',
                            items: [
                                {
                                    label: 'Pending',
                                    icon: 'pi pi-stop'
                                },
                                {
                                    label: 'Paid',
                                    icon: 'pi pi-check-circle'
                                }
                            ]
                        },
                        {
                            label: 'Clients',
                            icon: 'pi pi-users'
                        }
                    ]
                },
                {
                    label: 'Images',
                    icon: 'pi pi-image',
                    items: [
                        {
                            label: 'Logos',
                            icon: 'pi pi-image'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Cloud',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Upload',
                    icon: 'pi pi-cloud-upload'
                },
                {
                    label: 'Download',
                    icon: 'pi pi-cloud-download'
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-refresh'
                }
            ]
        },
        {
            label: 'Devices',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Phone',
                    icon: 'pi pi-mobile'
                },
                {
                    label: 'Desktop',
                    icon: 'pi pi-desktop'
                },
                {
                    label: 'Tablet',
                    icon: 'pi pi-tablet'
                }
            ]
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function BasicDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

export default function ColumnGroupDemo() {
    const [sales] = useState([
        { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
        { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
        { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
        { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
        { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
        { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
        { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
        { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
        { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
        { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
    ]);

    const lastYearSaleBodyTemplate = (rowData) => {
        return `${rowData.lastYearSale}%`;
    };

    const thisYearSaleBodyTemplate = (rowData) => {
        return `${rowData.thisYearSale}%`;
    };

    const lastYearProfitBodyTemplate = (rowData) => {
        return `${formatCurrency(rowData.lastYearProfit)}`;
    };

    const thisYearProfitBodyTemplate = (rowData) => {
        return `${formatCurrency(rowData.thisYearProfit)}`;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const lastYearTotal = () => {
        let total = 0;

        for (let sale of sales) {
            total += sale.lastYearProfit;
        }

        return formatCurrency(total);
    };

    const thisYearTotal = () => {
        let total = 0;

        for (let sale of sales) {
            total += sale.thisYearProfit;
        }

        return formatCurrency(total);
    };

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Product" rowSpan={3} />
                <Column header="Sale Rate" colSpan={4} />
            </Row>
            <Row>
                <Column header="Sales" colSpan={2} />
                <Column header="Profits" colSpan={2} />
            </Row>
            <Row>
                <Column header="Last Year" sortable field="lastYearSale" />
                <Column header="This Year" sortable field="thisYearSale" />
                <Column header="Last Year" sortable field="lastYearProfit" />
                <Column header="This Year" sortable field="thisYearProfit" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} footerStyle={{ textAlign: 'right' }} />
                <Column footer={lastYearTotal} />
                <Column footer={thisYearTotal} />
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
                <Column field="product" />
                <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
                <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
            </DataTable>
        </div>
    );
}
        



<i class="bi bi-pencil"></i>
