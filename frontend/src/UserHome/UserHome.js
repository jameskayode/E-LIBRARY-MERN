import React,{useState} from 'react';
import './UserHome.css'
import Navbar from '../Navbar/Navbar.js'
import Home from './Home';
import SearchBook from './SearchBook/SearchBook'
import {Switch,Route} from 'react-router-dom';





function UserHome(props) {

    const [User]=useState(props.user);
    return (
        <>
        <div>
                <Navbar User={User}/>
        </div>
        <div  className='HomeContent'>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/SearchBook' exact={true} component={SearchBook}/>
                </Switch>
        </div>
        </>
    )
}

export default UserHome;

export const UserMenuItems=[
    {
        title:'Home',
        cName1:'nav__item',
        cName2:'nav__link',
        routerlink:'/'
    },
    {
        title:'Search Book',
        cName1:'nav__item',
        cName2:'nav__link',
        routerlink:'/SearchBook'
    },
]
