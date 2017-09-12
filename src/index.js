import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import InscriptionPage from './pages/InscriptionPage'
import PassOublierPage from './pages/PassOublierPage'
import ResultatPage from './pages/ResultatPage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/inscription" component={InscriptionPage} />
            <Route path="/passOublier" component={PassOublierPage} />
            <Route path="/Resultat" component={ResultatPage} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();


//<Link to={''}></Link>