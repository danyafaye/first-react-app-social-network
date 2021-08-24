import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Input } from 'antd';
const { TextArea } = Input;

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {
    return <div>
        <Messages/>
        <AddMessageForm/>
    </div>
}
const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(()=>{
        wsChannel.addEventListener('message', (e: MessageEvent)=>{
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])
    return <div style={{height: '400px', overflowY: 'auto'}}>
        {messages.map((m, index) => <Message key={index} message={m}/>)}
    </div>
}



const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return <div>
        <img src={message.photo} style={{width: '30px'}}/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}
const AddMessageForm: React.FC = () => {
    const[message, setMessage] = useState('')
    const sendMessage = () => {
        if(!message){
            return;
        }
        wsChannel.send(message)
        setMessage('')
    }

    return <div>
        <div>
            <TextArea rows={4} onChange={(e)=>setMessage(e.currentTarget.value)} value={message}/>
        </div>
        <div>
            <Button onClick={sendMessage}>Send</Button>
        </div>
    </div>
}

export default ChatPage;