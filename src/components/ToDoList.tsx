import React from 'react';
import ToDoItem from "./ToDoItem";
import {ITodo} from "../types/data";

interface IToDoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};


const ToDoList: React.FC<IToDoListProps> = (props) => {
    const {items, toggleTodo, removeTodo} = props;

    return (
        <div>
            {
                props.items.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        {...todo}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />))
            }

        </div>
    );
};

export default ToDoList;