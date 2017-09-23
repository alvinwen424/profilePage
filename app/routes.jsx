import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'

import Home from './components/Home'
import NotFound from './components/NotFound'
import Resume from './components/Resume'


export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/resume' component={Resume} />
                    <Route path='/' component={Home} />
                    <Route path='*' component={NotFound}/>
                </Switch>
            </Router> 
        )
    }
}