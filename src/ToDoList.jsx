import { useState } from "react"

export default function ToDoList() {

    const [tasks, setTasks] = useState(['Eat Breakfast'])
    const [newTask, setNewTask] = useState('')

    function handleInputChange (e){
        setNewTask(e.target.value)
    }

    function addTask (){
        newTask.trim() ? setTasks(t => [...t, newTask]) : null
        setNewTask('')
    }

    function deleteTask (index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp (index){
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown (index){
         if (index < tasks.length -1) {
            const updatedTasks = [...tasks]
            ;[updatedTasks[index], updatedTasks[index + 1]] = [
                updatedTasks[index + 1],
                updatedTasks[index],
            ]
            setTasks(updatedTasks)
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div className="task-input">
                <input 
                    type="text" 
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index )=> 
                                <li key={index}>
                                    <span className="text">{task}</span>
                                    <div className="task-btns">
                                        <button className="move-button" onClick={()=>moveTaskUp(index)}>👆</button>
                                        <button className="move-button" onClick={()=>moveTaskDown(index)}>👇</button>
                                        <button className="delete-button" onClick={()=>deleteTask(index)}>❌</button>
                                    </div>
                                </li>
                )}

            </ol>
        </div>
    )
}
