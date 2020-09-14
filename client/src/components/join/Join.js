import React,{useState} from 'react'
import {Link} from "react-router-dom"
import './join.css'


const Join = () => {
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');
    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">LOGIN</h1>
                <div><input className="joinInput" type="text" placeholder="name" onChange={(event) => {setName(event.target.value)}}/></div>
                <div><input className="joinInput mt-20" type="text" placeholder="room" onChange={(event) => {setRoom(event.target.value)}}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign IN</button>
                </Link>
            </div>
        </div>
    )
}
export default Join;