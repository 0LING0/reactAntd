import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import Order from './pages/order/index'
import NoMatch from './pages/nomatch';

export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" component={()=>
                        <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/modals" component={Modals}></Route>
                                    <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                    <Route path="/admin/ui/notice" component={Notice}></Route>
                                    <Route path="/admin/ui/messages" component={Messages}></Route>
                                    <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                    <Route path="/admin/ui/gallerys" component={Gallery}></Route>
                                    <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                    <Route path="/admin/form/login" component={FormLogin}></Route>
                                    <Route path="/admin/form/register" component={FormRegister}></Route>
                                    <Route path="/admin/table/basicTable" component={BasicTable}></Route>
                                    <Route path="/order" component={Order} />
                                    <Route  component={NoMatch}></Route>
                                </Switch>
                        </Admin>
                    }></Route>
                    <Route path="/order/detail" component={Login}></Route>
                </App>
            </HashRouter>
        );
    }
}