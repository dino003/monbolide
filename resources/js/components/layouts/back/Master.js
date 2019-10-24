import React from 'react'
import {NavLink, Route} from 'react-router-dom'

import Header from './Header'
import Foot from './Foot'
import NavBack from '../../../navigation/back/NavBack'
import Sidebar from './Sidebar'
import Milieu from './Milieu'



export default function Master({component: Component, ...rest}) {
    return (
        <Route {...rest} render={matchProps => (

            <div className="wrapper">
                <Header />
                     <Sidebar />
                     <div className="content-wrapper">
                            <Component {...matchProps} />


                        </div>
                <Foot />
            </div >
    )} />

    )
}




