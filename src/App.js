import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/tailwind.css";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Navbars from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars></Navbars>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
