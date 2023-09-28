import { useState, useEffect } from 'react';
import './todo.css';
const LOCAL_STORAGE_KEY = "storedData";

const Todo = () => {
  // Initialize state with local storage
  const [inputData, setInputData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return (storedData && storedData.inputData) || '';
  });
  const [activeTodos, setActiveTodos] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return (storedData && storedData.activeTodos) || [];
  });
  const [completedTodos, setCompletedTodos] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return (storedData && storedData.completedTodos) || [];
  });

  // Save state to local storage whenever it changes
  useEffect(() => {
    const dataToStore = {
      inputData,
      activeTodos,
      completedTodos,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToStore));
  }, [inputData, activeTodos, completedTodos]);

  // Add task when Enter key is pressed
  function handleKeyPress(e) {
    if (e.key === 'Enter' && inputData.trim() !== '') {
      setActiveTodos([inputData.trim(), ...activeTodos]);
      setInputData('');
    }
  }

  // Handle clicking on an active todo
  function handleActiveTodoClick(todo,index) {
    // Mark the todo as completed
    const updatedActiveTodos = activeTodos.filter((item, i) => i !== index);
    setCompletedTodos([todo, ...completedTodos]);
    setActiveTodos(updatedActiveTodos);
  }



  // Reset all tasks
  function resetAll() {
    setActiveTodos([]);
    setCompletedTodos([]);
  }

  return (
    <>
      <div className="container">
      <div className='flex justify-content spaceBottom'>
      <a href="/" className='logo'>TODO App</a>
        <button className='btn' onClick={resetAll}>Reset</button>
      </div>



          <input
            type='text'
            placeholder='Please type & press enter'
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        <h2>Active todo</h2>
        <ul>
        {activeTodos.map((item, index) => (
          <li key={index} onClick={() => handleActiveTodoClick(item,index)}>
            {item}
          </li>
        ))}
        </ul>
        <h2>Complete todo</h2>
        <ul>
        {completedTodos.map((item, index) => (
          <li key={index} >
            {item}
          </li>
         
        ))}
         </ul>
      </div>
    </>
  );
}

export default Todo;
