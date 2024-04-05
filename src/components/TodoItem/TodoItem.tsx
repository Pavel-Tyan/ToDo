import { TodoItemProps } from "./TodoItem.props";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ children }: TodoItemProps): JSX.Element => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemTextWrapper}>
        <div className={styles.todoItemText}>{children}</div>
      </div>
      <button className={styles.button}>X</button>
    </div>
  );
};
