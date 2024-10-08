import React ,{useState} from 'react'
import './index.css'
import TodoItem from '../To-do-item/TodoItem'
const ListTodo = ({list,deleteTask,updateTaskList}) => {

  return list.length === 0?<h4>Nothing to show</h4>:(
    <div>
        {
        list.map((item,idx)=>{
        return (
        <TodoItem item={item} idx={idx} deleteTask={deleteTask} updateTaskList={updateTaskList}/>
        )
            })
        }
    </div>
  )
}

export default ListTodo