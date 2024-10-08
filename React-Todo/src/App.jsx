import { useState } from 'react'
import './App.css'
import AddTodo from './Component/Add-To-Do/AddTodo'
import ListTodo from './Component/List-To-Do/ListTodo';

function App() {
  const [list,setList] = useState([]);
  const handleAddTask = (e,task)=>{
    e.preventDefault();
    if(task === "")
    {
      alert('Task filed is Empty ...')
    }
    else if(list.includes(task))
    {
      alert('Task already added ...')
    }
    else
    {
      setList((prev)=>(
        [...prev,task]
      ))
    }
  }
  const handleDeleteTask = (idx) => {
    setList((prev) => prev.filter((_, id) => id !== idx));
  };
  const handleEditTask = (idx, task) => {
    setList((prev) => 
        prev.map((item, id) => {
            if (idx === id) {
                return task; 
            }
            return item; 
        })
    );
};

  return (
    <>
     <div>
      <h1>Todo</h1>
      <AddTodo addTask={handleAddTask}/>
      <ListTodo list={list} deleteTask={handleDeleteTask} updateTaskList={handleEditTask}/>
     </div>
    </>
  )
}

export default App
