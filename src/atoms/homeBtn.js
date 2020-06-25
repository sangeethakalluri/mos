import React from 'react';
import {
    Link
  } from "react-router-dom";
import 'App.css'

function HomeBtn(){
    
    return (
        <Link to='/'>
            <div className="home-btn">
                <i className="mdi mdi-home"></i>
            </div>
        </Link>
    )

}

export default HomeBtn;