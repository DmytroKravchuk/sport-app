import React from "react";
import {Route, Switch} from "react-router-dom";
import StartPage from '../components/StartPage';
import Programs from "./Programs";
import ProgramsDays from "./ProgramsDays";
import Play from "./Play";

const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={StartPage}/>
                <Route exact path='/pushups' component={() => <Programs typeProgram='pushups' currentPath='pushups'/>}/>
                <Route path='/pushups/:id' component={() => <ProgramsDays path='/pushups' pathToPlay='/play'/>}/>
                <Route exact path='/pullups' component={() => <Programs typeProgram='pullups' currentPath='pullups'/>}/>
                <Route path='/pullups/:id' component={() => <ProgramsDays path='/pullups' pathToPlay='/play'/>}/>
                <Route exact path='/squats' component={() => <Programs typeProgram='squats' currentPath='squats'/>}/>
                <Route path='/squats/:id' component={() => <ProgramsDays path='/squats' pathToPlay='/play'/>}/>
                <Route path='/play' component={() => <Play/>}/>
                <Route path='*' component={() => <div>Error</div>}/>
            </Switch>
        </>
    )
}

export default Routing;