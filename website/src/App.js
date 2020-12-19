import './App.css';
import NavBar from "./components/Partials/navBar";
import Home from "./components/Home/Home";
import {Route,BrowserRouter} from "react-router-dom"
import Footer from "./components/Partials/Footer";


const Router =()=>{
  return(<>
    <Route exact path="/" >
      <Home/>
    </Route>
    {/* <Route exact path="/" >
      <Home/>
    </Route> */}
    {/* <Route exact path="/" >
      <Home/>
    </Route> */}   
  </>)
}
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Router/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
