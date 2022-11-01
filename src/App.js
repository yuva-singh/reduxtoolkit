import Header from "./components/Header";
import Home from "./pages/Home";
import store from "./Store/Store";
import { Route,Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Card from "./pages/Card";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <div className="container">
        <div className="row">
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/card" element={<Card/>}></Route>
       </Routes>
       </div>
       </div>
    </Provider>
  );
}

export default App;
