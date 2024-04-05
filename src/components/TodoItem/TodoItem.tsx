import { TodoItemProps } from "./TodoItem.props";
import styles from "./TodoItem.module.css";

export const TodoItem = ({
  children,
  handleClick,
}: TodoItemProps): JSX.Element => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemTextWrapper}>
        <div className={styles.todoItemText}>{children}</div>
      </div>
      <button className={styles.button} onClick={handleClick}>
        X
      </button>
    </div>
  );
};
