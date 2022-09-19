import { useState } from "react";

const Userinput = () => {
    const[userInput, setUserInput] = useState('');

    const getUserInput = (userInput) => {
        setUserInput(userInput.target.value);

    }

    return(
        <div >
            <h1>{userInput}</h1>
            <input id="userinput" onChange={getUserInput}></input>
        </div>
    );
}

export default Userinput;