import { TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = (): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.todoListWrapper}>
      <div>
        <input className={styles.input} type="text" onChange={handleChange} />
        <button className={styles.button}>Add new Todo</button>
      </div>
      <TodoItem>React</TodoItem>
    </div>
  );
};
