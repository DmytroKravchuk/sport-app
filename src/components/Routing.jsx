import React from "react";
import {Route, Switch} from "react-router-dom";
import StartPage from '../components/StartPage';
import Programs from "./Programs";

const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={StartPage}/>
                <Route exact path='/pushups' component={() => <Programs typeProgram='pushups' currentPath='pushups'/>}/>
                <Route path='/pushups/:id' component={() => <div>pushups 1</div>}/>
                <Route exact path='/pullups' component={Programs}/>
                <Route path='/pullups/:id' component={() => <div>pullups 1</div>}/>
                <Route exact path='/squats' component={Programs}/>
                <Route path='/squats/:id' component={() => <div>squats</div>}/>
                <Route path='*' component={() => <div>Error</div>}/>
            </Switch>
        </>
    )
}

export default Routing;