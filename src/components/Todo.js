import { useState } from 'react';
import './todo.css';

const Todo = () => {
    //initialize state- 
    const [inputData, setInputData] = useState("");
    const [listData, setListData] = useState([])
    //Add task- 
    function handleAddTodo() {
        //    setListData([...listData,inputData])
        // console.log(listData);    
        setListData(() => {
            const updatedList = [...listData, inputData]
            // console.log(updatedList);
            setInputData(' ');
            return updatedList;
        })
    }
    //Delete task-
    function removeTodo(index) {
        const updatedListData = listData.filter((value, id) => {
            return index !== id
        })
        setListData(updatedListData)
    }

    //Remove all task-
    function removeAll(){
setListData([])
    }
    return (
        <>
            <div className="container">
                <div className='header'>Todo List</div>
                <div className='todo_cover'>
                    <input type='text' placeholder='Add Content' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <button className='btn' onClick={handleAddTodo}>Add task</button>
                </div>
                {listData.map((item, index) => {
                    return (
                        <>
                            <div key={index} className='showData'>{item}
                                <button className='btn delete' onClick={() => removeTodo(index)}>Remove</button>
                            </div>
                        </>
                    )
                })}
                {listData.length >= 1 && <button className='btn' onClick={removeAll}>Delete All</button>}
            </div>
        </>
    )
}

export default Todo;