import React, { Component } from 'react'
import "./css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


export default class Header extends Component {
    constructor() {
      super()
    
      this.state = {
         menuClic:false,
      }
    }


    clickTrue(){
        this.setState({
            menuClic:true
        })
    }
    clickfalse(){
        this.setState({
            menuClic:false
        })
    }
    
  render() {
    return (
        <div className='header'>
            <a href='#inicio'><p className='bienvenidx'>Bienvenidx!</p></a>
        <div className='burguerMenu'>
            {
                this.state.menuClic ?
                null
                :
                <FontAwesomeIcon icon={faBars} className='boton'/>
                
            }
        </div>
        </div>
    )
  }
}
