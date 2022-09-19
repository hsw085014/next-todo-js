import { useState } from 'react';
import '../styles/globals.css'
import Header from './components/header';
import Todo from './components/todo';
import Board from './components/todoBoard';


function MyApp({ Component, pageProps }) {

  const[userInput, setUserInput] = useState('');
  const[taskList, setTaskList] = useState([]);

  const getInput = (userInput) => {
    setUserInput(userInput.target.value)
  }



  const addTask = () => {
    if(userInput == "") {
      alert("type your task!!")
    } else {
      setTaskList([...taskList, userInput])

    }
  }



  return (
    <div>

      <Header />
      <Board taskList={taskList}/>
      <div id='inputDiv'>
        <input id='userinput' onChange={getInput} value={userInput}></input>
        <button id='sumitButton' onClick={addTask}>SUMIT!</button>
      </div>
    </div>
  );
}

export default MyApp
