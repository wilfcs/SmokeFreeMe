import React from 'react'
import { BsFillChatDotsFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
const QuitNavbar = () => {
     const history = useHistory();
     const toggleAccordion = ()=>{
        history.push("/chats")
     }
  return (
    <div className="quitnav">
      <div>SmokeFreeMe</div>
      <div onClick={toggleAccordion} className="point">
        <BsFillChatDotsFill />
      </div>
    </div>
  );
}

export default QuitNavbar