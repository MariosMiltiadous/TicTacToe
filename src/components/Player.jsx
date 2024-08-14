import { useState } from "react";

export default function Player({name, symbol}){

    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(true);
        console.log("---", isEditing)
    }

    return(
        <li>
        <span className="player">
          {
          isEditing ? (<input type="text" required/>)
          :(<span className="player-name">{name}</span>)
          }
           
          <span className="player-symbol">{symbol}</span>
          <button onClick={handleEditClick}>Edit</button>
        </span>
      </li>
    )
}