import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../store/back/Store'

import NavBack from '../navigation/back/NavBack'

export default class BackMain extends Component {
    render() {
        return (
            <Router>

                <NavBack />
            </Router>    
        )
    }
}
ReactDOM.render( 
    <Provider store={store}>
        <BackMain />
    </Provider>
    , document.getElementById('back'))