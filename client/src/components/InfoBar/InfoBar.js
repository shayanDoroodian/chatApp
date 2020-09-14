import React from 'react'
import './InfoBar.css'
import closeIcon from '../../icons/close.png'

const InfoBar = ({room}) => (
   <div className="infoBar">
       <div className="leftInnerContainer">
            {/* <img className="onlineIcon" src={onlineIcon} alt=""/> */}
            <h3>{room}</h3>
       </div>
       <div className="rightInnerContainer">
            <a href="/"> <img className="closeIcon" src={closeIcon} alt=""/> </a>
            {/* <a href="/">+</a> */}
       </div>
   </div>
)
export default InfoBar;