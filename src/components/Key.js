import React from "react";
import {useStateContext} from "../context/ContextProvider";

const Key = ({keyVal, bigKey, disabled}) => {

    const {onEnter, onDelete, onSelectLetter} = useStateContext()

    const selectLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        }else if (keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    };

    return (
        <div
        className='key'
        id={bigKey ? 'big' : disabled && 'disabled'}
        onClick={selectLetter}

        >
            {keyVal}
        </div>
    )
}
export default Key;