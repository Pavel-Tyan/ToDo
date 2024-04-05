import { useEffect } from "react";
import "./global.css";

function App() {
  const theme = "dark";

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div data-theme="dark" className="bg">
      content
    </div>
  );
}

export default App;
