import React,{useState} from 'react'
import './index.css'
const AddTodo = ({addTask}) => {
    const [task,setTask] = useState("")
  return (
    <div id='addBar'>
        <input id='searchInput' type="text" placeholder="Enter List" title="Add to List"  name="task" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <span className='add-btn' onClick={(e)=>{addTask(e,task);setTask('')}}>Add</span>
    </div>
  )
}

export default AddTodo