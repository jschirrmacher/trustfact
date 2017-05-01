import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import NavigationBar from './NavigationBar'
import StartPage from './StartPage'
import DataTable from './DataTable'
import PartyRow from './PartyRow'
import PoliticianRow from './PoliticianRow'
import StatementRow from './StatementRow'
import ApplyPage from './ApplyPage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
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

            <div className="Content">
                <Route path="/" exact component={() => <StartPage />} />
                <Route path="/apply" component={() => <ApplyPage apiUrl={apiUrl} />} />
                <Route path="/about" component={() => <AboutPage />} />
                <Route path="/contact" component={() => <ContactPage apiUrl={apiUrl} />} />
                <Route path="/imprint" component={() => <ApplyPage apiUrl={apiUrl} />} />
                <Route path="/parties" component={() => (
                    <DataTable title="Parteien" data={apiUrl + "/parties"}>
                        <PartyRow />
                    </DataTable>
                )} />
                <Route path="/politicians" component={() => (
                    <DataTable title="Politiker" data={apiUrl + "/politicians"}>
                        <PartyRow />
                    </DataTable>
                )} />
                <Route path="/statements" component={() => (
                    <DataTable title="Aussagen" data={apiUrl + "/statements"}>
                        <StatementRow />
                    </DataTable>
                )} />
            </div>

            <Footer />
        </div>
    </HashRouter>
    ), document.getElementById('root')
)
