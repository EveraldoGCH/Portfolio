import React, { Component } from 'react'
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default class Header extends Component {
    constructor() {
      super()
    
      this.state = {
         toggleMenu:true
      }
    }

    toggleMenuFn(){
        if(this.state.toggleMenu===true){
            this.setState({
                toggleMenu:false
            })
        }
        else{
            this.setState({
                toggleMenu:true
            })
        }
    }

  render() {
    return (
        <div className='header'>
            <div>
                <a href='#inicio'>
                <p className='bienvenidx'>Bienvenidx!</p></a>
            </div>
                <FontAwesomeIcon icon={faBars} className='boton' onClick={()=>this.toggleMenuFn()}/>
            <div className={this.state.toggleMenu?"burguerMenuClosed":"burguerMenuOpen"}>

                <ul>
                    <li>
                        <a href='#inicio'>Bloque1</a>
                    </li>

                    <li>
                        <a href='#bloque2'>Bloque2</a>
                    </li>
                    
                    <li>
                        <a href='#bloque3'> Bloque3</a>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}
