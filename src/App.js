
import Create from './Create.js'
import Home from "./Home.js"
import About from "./About.js"
import Navbar from "./Navbar.js"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BlogDetails from "./BlogDetails.js";




function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <div className="maindiv">
        <Navbar />
        <Switch>
          <Route path="/create">  <Create />  </Route>
          <Route path="/about">  <About />  </Route>
          <Route path="/blogs/:id">  <BlogDetails />  </Route>
          <Route path="/" exact={true}>  <Home />  </Route>
        
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
