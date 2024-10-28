import { useState } from "react"
export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [buttonText, setButtonText] = useState("Edit")
    function handleEditClick() {
        setIsEditing((editing) => !editing) //if we used setIsEditing(!isEditing) => this schedules state update to true which will not happen immediately. If we use this approach like is current, this function gets latest state of isEditing prop and it will happen immediately. You have guarrantee from react that you will have latest value in isEditing prop
        if(!isEditing) {
            setButtonText("Save")
        }else {
            setButtonText("Edit")
        } 
    }
    let playerName = <span className="player-name">{name}</span>

    if(isEditing) {
        playerName = <input type="text" required value={name}></input>
    }

    return (
        <li>
          <span className="player">
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{buttonText}</button>
        </li>
    )
}