import React, {useState} from 'react'

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [completedTasks, setCompletedTasks] = useState([]);

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        } else {
            alert('Enter a task');
        }    
    }

    const handleCompletedTasks = (index) => {
        const taskToComplete = tasks[index];
        setCompletedTasks([...completedTasks, taskToComplete]);
        setTasks(tasks.filter((_,i) => i !== index));
    }

    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_,i)=> i!== index);
        setTasks(updatedTasks);
    }

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    }

  return (
    <div className='to-do-list'>
        <h1>To-Do-List.</h1>
        <div className='input-container'>
            <input 
                type="text" 
                value={newTask} 
                onChange={handleInputChange}
                onKeyDown={handleEnterKey} 
                placeholder='Enter new Task...'/>
            <button 
                className='add-button' 
                onClick={handleAddTask}>
                  <ion-icon name="add-outline"></ion-icon>
                </button>
        </div>
        
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    {task}
                    <button 
                        className='delete-button' 
                        onClick={() => handleDeleteTask(index)}>
                            <ion-icon name="trash-outline"></ion-icon>
                    </button>
                    <button onClick={()=>handleCompletedTasks(index)} >
                        completed
                    </button>
                </li>
            )}
        </ol>
        <h2>Completed Ta</h2>
        <ul>
            {completedTasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList