import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import './AdminHome.css';

function AdminHome(props) {

    const [User]=useState(props.user);

    return (
        <div className="adminHome">
            <div >
            {/* <Navbar/> */}
        <Navbar User={User} />
            </div>
        </div>
    )
}

export default AdminHome;

export const AdminMenuItems=[
    {
        title:'Home',
        cName1:'nav__item',
        cName2:'nav__link'
    },
    {
        title:'Books',
        cName1:'nav__item',
        cName2:'nav__link'
    },
    {
        title:'Users',
        cName1:'nav__item',
        cName2:'nav__link'
    },
    {
        title:'Resquest Book',
        cName1:'nav__item',
        cName2:'nav__link'
    },
    {
        title:'Settings',
        cName1:'nav__item',
        cName2:'nav__link'
    },
]


