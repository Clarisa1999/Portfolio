import React, { Component } from 'react'
import  { menuItems } from './menuItems';

class navbar extends Component{
    render(){
        return(
            <nav className = "NavbarItems">
            <h1 className = "navbar-logo"> React<i className ="fab fa-react"></i></h1>
            <div className = "menu-icon">


            </div>
            <ul>
                {menuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}> 
                                {item.title}
                             </a> 
                        </li>
                     )
                })}
            </ul>
            </nav>
        )
    }
}

export default navbar