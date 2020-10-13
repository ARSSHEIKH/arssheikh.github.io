import React from 'react';
import Home from './Pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './header/NavBar';
import _404 from './Pages/404'
import Blogs from './Pages/blogs'


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="**" component={_404}/>
      </Switch>
    </Router>
  );
}

export default App;
