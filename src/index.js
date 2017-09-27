import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from './components/Layout'
import Findus from './components/Findus'
import Menu from './components/Menu'
import About from './components/About'

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      {/* <Switch> */}
        <Route path="/menu" component={Menu} />
        <Route path="/findus" component={Findus} />
        <Route path="/" exact component={About} />
      {/* </Switch> */}
    </BaseLayout>
  </BrowserRouter>
,document.getElementById('root'));
registerServiceWorker();
