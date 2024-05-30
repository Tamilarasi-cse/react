import React from 'react';
import "../App.css";
import {Slidebardata} from './slidebardata'
import { useNavigate } from 'react-router-dom';

const Slidebar=()=> {
    const navigate=useNavigate();
  return (
    <div className='sideabar'>
        <ul className='sidebarlist'>
            {Slidebardata.map((item,index)=>
            {
                return <li key={index}
                className='row' 
                onClick={()=> navigate(item.link)}>
                    <div id='icon'>{item.icon}</div>
                    <div id='title'>
                        {item.title}
                    </div>
                    </li>
            })}
        </ul>

    </div>
  )
}

export default Slidebar
