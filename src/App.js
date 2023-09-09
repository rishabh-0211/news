//"d6376aa3c43b4c5cab848ed3de9ab836" "72a539a81a6748d9b3283633bb376d59"
import React, { Component }  from 'react'
import Navbar from './components/Navbar'
import Newdiv from './components/Newdiv'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      console.log(this.state.mode);
      document.body.style.backgroundColor = "black";
      // showAlert("this is dark mode", "success");
    } else {
      this.setState({ mode: "light" });
      
      document.body.style.backgroundColor = "white";
      // showAlert("this is light mode", "success");
    }
  };
  render() {
    return (
      <>
        <Router>
          <Navbar Mode={this.state.mode} ToggleMode={this.toggleMode} />

          <Switch>
            <Route exact path="/">
              <Newdiv Mode={this.state.mode}
                apikey="72a539a81a6748d9b3283633bb376d59"
                key="general"
                pageSize={3}
                category="general"
                country="in"
              />
            </Route>
            <Route exact path="/sports">
              <Newdiv Mode={this.state.mode}
                apikey="72a539a81a6748d9b3283633bb376d59"
                key="sports"
                pageSize={3}
                category="sports"
                country="in"
              />
            </Route>
            <Route exact path="/business">
              <Newdiv Mode={this.state.mode}
                apikey="72a539a81a6748d9b3283633bb376d59"
                key="business"
                pageSize={3}
                category="business"
                country="in"
              />
            </Route>
            <Route exact path="/entertainment">
              <Newdiv Mode={this.state.mode}
                apikey="72a539a81a6748d9b3283633bb376d59"
                key="entertainment"
                pageSize={3}
                category="entertainment"
                country="in"
              />
            </Route>
            <Route exact path="/general">
              <Newdiv Mode={this.state.mode}
                apikey="72a539a81a6748d9b3283633bb376d59"
                key="general"
                pageSize={3}
                category="general"
                country="in"
              />
            </Route>
            <Route exact path="/health">
              <Newdiv Mode={this.state.mode}
                apikey="72a539a81a6748d9b3283633bb376d59"
                key="health"
                pageSize={3}
                category="health"
                country="in"
              />
            </Route>
            <Route exact path="/science">
              <Newdiv Mode={this.state.mode}
                apikey="72a539a81a6748d9b3283633bb376d59"
                key="science"
                pageSize={3}
                category="science"
                country="in"
              />
            </Route>
            <Route exact path="/technology">
              <Newdiv Mode={this.state.mode}
                apikey="72a539a81a6748d9b3283633bb376d59"
                key="technology"
                pageSize={3}
                category="technology"
                country="in"
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

