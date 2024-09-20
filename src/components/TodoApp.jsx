import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../app/todoSlice';
import '../assets/Todo.css';

function TodoApp() {
    const todos = useSelector((state) => state.todos); 
    const dispatch = useDispatch(); 
    const [task, setTask] = useState(''); 

   
    const handleTodo = () => {
        if (task.trim()) {
            dispatch(addTodo(task)); 
            setTask(''); 
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleTodo();
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id)); 
    };

    const handleToggle = (id) => {
        dispatch(toggleTodo(id)); 
    };

    return (
        <div className='todo'>
        <div className='p-6 max-w-sm mx-auto bg-white/30 backdrop-blur-lg rounded-lg border border-gray-200 shadow-lg my-10'>
            <h1 className='text-lg font-bold my-4'>LIST Item</h1>

            <div className=' p-2 flex items-center '> 
                <input
                    type='text'
                    value={task}
                    placeholder='Enter a task ...'
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className='p-2 bg-transparent flex-grow rounded-md border border-transparent  outline-none '
                />
                <button 
                    onClick={handleTodo}
                >
                    <i className="bi bi-plus-circle-dotted"></i> 
                </button>
            </div>

            {/* Display To-do List */}
            <ul className='mt-4'>
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex justify-between items-center p-2  ${todo.completed ? 'line-through text-gray-400' : ''}`}
                        >
                            {/* Task text */}
                            <span onClick={() => handleToggle(todo.id)} className='cursor-pointer '>
                            {todo.completed ? <i class="bi bi-check-circle p-2"></i> : <i class="bi bi-circle p-2"></i>}
                            {todo.text}

                            </span>

                            {/* Delete button */}
                            <button
                                onClick={() => handleDelete(todo.id)}>
                                <i className="bi bi-trash"></i> 
                            </button>
                        </li>
                    ))
                ) : (
                    <li className='text-gray-500'>No tasks available.</li>
                )} 
            </ul>
        </div>
        </div>
    );
}

export default TodoApp;
