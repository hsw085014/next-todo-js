import { useState } from 'react';
import '../styles/globals.css'
import Header from './components/header';
import Board from './components/todoBoard';
import Head from 'next/head';

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
      setUserInput('');
    }
  }

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> 
      </Head>
      <Header />
      <Board taskList={taskList}/>
      <div id='inputDiv'>
        <input id='userinput' onChange={getInput} value={userInput}></input>
        <button id='sumitButton' className='material-symbols-outlined' onClick={addTask}>arrow_upward</button>
      </div>
    </div>
  );
}

export default MyApp;
