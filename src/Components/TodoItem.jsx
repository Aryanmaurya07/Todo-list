// Represents each to-do item.


import React from 'react';

const TodoItem = ({ todo, index, completeTodo, deleteTodo }) => {
    return (
        <div
            className="todo-item"
            style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
            }}
        >
            <span>{todo.text}</span>
            <div>
                <button className="complete-button" onClick={() => completeTodo(index)}>✔️</button>
                <button className="delete-button" onClick={() => deleteTodo(index)}>❌</button>
            </div>
        </div>
    );
};

export default TodoItem;
