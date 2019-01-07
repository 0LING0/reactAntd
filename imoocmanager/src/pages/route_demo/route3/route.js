import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Main from './../route1/Main';
import Info from './info';
import Topic from './../route1/topic';
import About from './../route1/about';
import Home from './Home';

export default class IRoute extends React.Component{
    render(){
        return (
            <Router>
                <Home>
                    <Route exact='true' path="/main" render={()=>
                        <Main>
                            <Route path='/main/:mainId' component={Info}></Route>
                        </Main>
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>                
            </Router>
        );
    }
}