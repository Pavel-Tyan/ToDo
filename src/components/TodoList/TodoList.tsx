import { TodoItem } from "../TodoItem/TodoItem";
import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "../../redux/hooks";
import { todoActions } from "../../redux/todoSlice";
import styles from "./TodoList.module.css";
import { useState } from "react";

export const TodoList = (): JSX.Element => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const todos = useAppSelector((state) => state.todos.todosList);

  const dispatch = useAppDispatch();

  const addTodo = (value: string): void => {
    dispatch(todoActions.addTodo(value));
  };

  const removeTodo = (id: string): void => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <div className={styles.todoListWrapper}>
      <div>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={() => addTodo(value)}>
          Add new Todo
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={`todo ${todo.id}`}
          handleClick={() => removeTodo(todo.id)}
        >
          {todo.text}
        </TodoItem>
      ))}
    </div>
  );
};
