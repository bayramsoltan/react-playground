import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import DarkModeSwitcher from "./components/dark-mode/dark-mode-switcher";

const App = () => {
  return (
    <Provider store={store}>
      <DarkModeSwitcher/>
    </Provider>
  );
};

export default App;
