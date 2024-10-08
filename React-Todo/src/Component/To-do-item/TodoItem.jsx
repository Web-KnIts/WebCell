import React, { useState, useEffect } from 'react';
import "../List-To-Do/index.css";

const TodoItem = ({ item, deleteTask, updateTaskList, idx }) => {
    const [toggle, setToggle] = useState(false);
    const [updateTask, setUpdateTask] = useState(item);

    const handleSave = () => {
        updateTaskList(idx, updateTask); 
        setToggle(false);
    };

    return (
        <div className='List-box'>
            <input
                type='text'
                className='task-text'
                value={updateTask}
                disabled={!toggle}
                onChange={(e) => setUpdateTask(e.target.value)}
            />
            <button id='delete' onClick={() => deleteTask(idx)}>Delete</button>
            <button id='edit' onClick={() => setToggle(prev => !prev)}>
                {toggle ? 'Cancel' : 'Edit'}
            </button>
            {toggle && (
                <button id='save' onClick={handleSave}>
                    Save
                </button>
            )}
        </div>
    );
}

export default TodoItem;
