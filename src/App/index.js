import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Login from "../components/Login/index";
import Index from "../containers/Index/index";
export default class App extends React.Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path={'/'} exact component={Login}/>
                        <Route path={'/home'} component={Index}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}