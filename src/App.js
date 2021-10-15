import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/tailwind.css";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Navbars from "./Components/Navbar/Navbar";
import Details from "./Components/Details/Details";
import Footer from './Components/Footer/Footer';
import AuthProvider from "./Components/context/AuthProvider";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbars></Navbars>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path='/details/:foodId'>
              <Details></Details>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
