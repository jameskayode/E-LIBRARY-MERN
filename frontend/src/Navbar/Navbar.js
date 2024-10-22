import React,{useState} from 'react'
import './Navbar.css'
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import { Avatar } from '@material-ui/core';
import {AdminMenuItems} from '../AdminHome/AdminHome';
import {UserMenuItems} from '../UserHome/UserHome';
import {Link} from 'react-router-dom'

function Navbar(props) {


    const [user,setuser]=useState(props.User);
    console.log("this is form nave ",user)

    const [show,setshowvalue]=useState('');

    const setshow=()=>{
        setshowvalue('show')
    }

    const hideshow=()=>{
        setshowvalue('');
    }

    return (
        <div>
           <header class="header">
            <div className="header__logo">
                    <h1><span style={{color:'#3664F4',fontSize:'xx-large'}}>E</span>-Library<TurnedInNotIcon/></h1>
                    </div>
            <ion-icon name="menu-outline" class="header__toggle" id="nav-toggle" onClick={setshow}></ion-icon>

            <nav class={`nav ${show}`}  id="nav-menu">
                <div class="nav__content bd-grid">
                    <ion-icon name="close-outline" class="nav__close" id="nav-close" onClick={hideshow}></ion-icon>
                    <div class="nav__profile">
                        <div class="nav__img">
                            <Avatar src={user.photoURL}/>
                        </div>
                        <div>
                            <p href="#" class="nav__name">{user.displayName}</p>
                        </div>
                    </div>
                    <div class="nav__menu" >
                        <ul class="nav__list" style={{textAlign:'center'}}>
                            {UserMenuItems.map((item,index)=>{
                                    return <li className={item.cName1} key={index.key} onClick={hideshow}><Link to={item.routerlink} className={item.cName2}>{item.title}</Link></li>
                            })}
                        </ul>
                    </div>
                    <div className="nav__title">
                            <h1><span style={{color:'#3664F4',fontSize:'xx-large'}}>E</span>-Library<TurnedInNotIcon/></h1>
                    </div>
                </div>
            </nav>
        </header>
        </div>
    );
    
}

export default Navbar;
