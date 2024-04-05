import { useEffect } from "react";
import { TodoList } from "./components/TodoList/TodoList";
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { themeActions } from "./redux/themeSlice";
import styles from "./App.module.css";

function App() {
  const theme = useAppSelector((state) => state.theme.color);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className={styles.appWrapper}>
      <button onClick={() => dispatch(themeActions.switchTheme())}>asd</button>
      <TodoList />
    </div>
  );
}

export default App;
