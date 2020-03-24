import React, { useState } from "react"
import Input from "../../InputField"

function DataField(props) {
    const [inputName] = useState(props.data.name)
    const [inputValue] = useState(props.data.value)
    const [isHovering, handleMouseHover] = useState(false)
    const [isButtonClicked, handleButtonClicked] = useState(false)

    function changeButtonState(){
        if (isButtonClicked){
            handleButtonClicked(false)
        } else {
            handleButtonClicked(true)
        }
    }

    if (props) {
        return (
            <>
            {!isButtonClicked ?
            <div
                onMouseEnter={() => handleMouseHover(true)}
                onMouseLeave={() => handleMouseHover(false)}
            >
                <h3>{inputName}</h3>
                <p>{inputValue}</p>
                {isHovering && <button onClick={changeButtonState} >Bam di</button> }
            </div>
            :
            <Input handleButtonClicked={changeButtonState} />
            }
            </>
        )
    }
}


export default DataField