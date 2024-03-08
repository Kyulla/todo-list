import { useState } from "react";
import { TodoContextProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";
import { GlobalStyle } from "./components/styled-components";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  const [darktheme, setDarktheme] = useState<boolean>(false);

  function handleDarkTheme(){
    setDarktheme(!darktheme);
  }

  return (
    <div>
      <GlobalStyle handleDarkTheme={darktheme} />
      <ThemeButton handleDarkTheme={handleDarkTheme} darktheme={darktheme}/>
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}
