import React,{useState , useEffect} from 'react'
import io from "socket.io-client"
import queryString from "query-string";
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer'
import './chat.css'




let socket;
const Chat = ({location}) => {
    const [name , setName] = useState('');
    const [room , setRoom] = useState('');
    const [message , setMessage] = useState('');
    const [messages , setMessages] = useState([]);
    const [users, setUsers] = useState('');
    const ENDPOINT = "https://simple-chat-backend-licnpin.herokuapp.com/"

    useEffect(()=>{
        const {name,room} = queryString.parse(location.search);

        socket = io(ENDPOINT)

        setName(name);
        setRoom(room)

        socket.emit("join" , {name , room}, ()=> {

        })
        return () =>{
            socket.emit('disconnect');
            socket.off()
        }
    } , [ENDPOINT , location.search])

    // useEffect(() => {
    //     socket.on('message' , (message)=>{
    //         setMessages([...messages , message]);
    //     })

    //     socket.on("roomData", ({ users }) => {
    //         setUsers(users);
    //       });
    // }, [messages])



    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);






    const sendMessage = (event) =>{
        event.preventDefault();
        if(message){
            socket.emit('sendMessage' , message , () => setMessage(''));
        }
    }


    console.log("CREATE BY SHAYAN DOROODIAN")
    return(
        <div className="outerContainer">
            <TextContainer users={users} />

            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}></Input>
                {/* <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null }/> */}
            </div>

        </div>
    )
}
export default Chat;