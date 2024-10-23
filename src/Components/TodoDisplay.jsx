// Displays all to-do items.

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="todo-list">
            <h1>To-Do List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    index={index} 
                    todo={todo} 
                    completeTodo={completeTodo} 
                    deleteTodo={deleteTodo} 
                />
            ))}
        </div>
    );
};

export default TodoList;
