import React from 'react';
import {ITodo} from "../types/data";

interface IToDoItem extends ITodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

const ToDoItem: React.FC<IToDoItem> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props;

    return (
        <div>
            <input
                type="checkbox"
                checked={complete}
                onChange={() => toggleTodo(id)}
            />
            <span style={{display:  'inline-block', margin: '0 10px'}}>
                {title}
            </span>
            <button
                onClick={() => removeTodo(id)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'red'
                }}
            >x
            </button>
        </div>
    );
};

export default ToDoItem;