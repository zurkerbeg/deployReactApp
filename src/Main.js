import React,{Component} from 'react';
import {Route,BrowserRouter,Switch} from "react-router-dom";
import Home from './Home';
import Detail from './component/Detail';
class Main extends Component{
  render(){
    return (
        <BrowserRouter>
           <Switch>
           <div>
                <ul className="header">
                  <h1>Single Page Application</h1>
                </ul>
                <div className="content">
                    <Route exact path="/deployReactApp" component={Home}></Route>
                    <Route path="/detail" component={Detail}></Route>
                </div>
            </div>
           </Switch>
        </BrowserRouter>
      );
  }
}

export default Main;
