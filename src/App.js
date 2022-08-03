import "./App.css";
import {Route, Routes} from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/details" element={<ItemDetail/>}/>
      </Routes>
    </div>
  );
};

export default App;
