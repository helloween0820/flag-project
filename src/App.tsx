import { Provider } from "react-redux";
import { createStore } from "redux";
import { AppRouter } from "./routes/AppRouter";
import "./styles/App.css";
import reducer from "./components/reducer";
import { useEffect, useState } from "react";
const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: "",
};
const store = createStore(reducer, initialState);
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq: any) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);
  return (
    <main className={mainClass}>
      <div className="App">
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </div>
    </main>
  );
}

export default App;
