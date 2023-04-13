import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Chatpage = () => {
    const [chats, fchats] = useState([]);
    const fetchchat = async () => {
        const {data}  = await axios.get('/api/chat');
        console.log(data);
        fchats(data);
    };
    useEffect(() => {
        fetchchat();
    }, []);
    return (
        <div>
            {chats.map((chat) => (
                <div key={chat.id}>
                    {chat.chatName}
                </div>
            ))};
        </div>
    )
};

export default Chatpage
