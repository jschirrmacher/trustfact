import React from 'react'
import DataTable from './DataTable'
import PartyRow from './PartyRow'

export default class PartiesPage extends React.Component {
    render() {
        return (
            <DataTable title="Parteien" data={this.props.apiUrl + "/parties"}>
                <PartyRow />
            </DataTable>
        )
    }
}
