import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataTable';
import StatementRow from './StatementRow';
import PoliticianRow from './PoliticianRow';
import PartyRow from './PartyRow';

const apiUrl = 'http://localhost:3000';

function loadScript(url) {
    const script = document.createElement('script');
    script.async = true;
    script.href = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}

loadScript('https://cdn.jsdelivr.net/bootstrap.native/1.1.0/bootstrap-native.min.js');

ReactDOM.render(
    <div>
        <DataTable title="Aussagen" data={apiUrl + "/statements"}>
            <StatementRow />
        </DataTable>
        <DataTable title="Politiker" data={apiUrl + "/politicians"}>
            <PoliticianRow />
        </DataTable>
        <DataTable title="Parteien" data={apiUrl + "/parties"}>
            <PartyRow />
        </DataTable>
    </div>,
    document.getElementById('root')
);
