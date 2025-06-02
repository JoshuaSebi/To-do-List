import React, {useState} from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        } else {
            alert('Please enter a task');
        }    
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_,i)=> i!== index);
        setTasks(updatedTasks);
    }

  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input 
                type="text" 
                value={newTask} 
                onChange={handleInputChange} 
                placeholder='Enter new Task...'/>
            <button 
                className='add-button' 
                onClick={handleAddTask}>
                    +
                </button>
        </div>
        
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    {task}
                    <button 
                        className='delete-button' 
                        onClick={() => handleDeleteTask(index)}>
                            x
                    </button>
                </li>
            )}
        </ol>
    </div>
  )
}

export default ToDoList