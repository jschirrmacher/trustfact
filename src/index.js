import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import App from './App'
import PartiesPage from './PartiesPage'
import Footer from './Footer'

import './main.scss'

const apiUrls = {
    development: 'https://trustfact.dilab.co/api/v2',
    production: 'http://localhost:3100'
}
const apiUrl = apiUrls[process.env.NODE_ENV || 'development']

ReactDOM.render((
    <HashRouter>
        <div>
            <NavigationBar />

            <Route path="/" exact component={() => (<App apiUrl={apiUrl} />)} />
            <Route path="/parties" component={() => (<PartiesPage apiUrl={apiUrl} />)} />

            <Footer />
        </div>
    </HashRouter>
    ), document.getElementById('root')
)
