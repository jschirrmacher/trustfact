import React, { Component } from 'react'
import Table from './Table'
import goat from './img/goats.jpg'

export default class DataTable extends Component {
    componentWillMount() {
        const req = new XMLHttpRequest()
        req.onload = this.listener.bind(this)
        req.open('get', this.props.data)
        req.send()
    }

    listener(event) {
        this.setState({data: JSON.parse(event.currentTarget.responseText)})
    }

    render() {
        return this.state && (
            <Table name={this.props.title} items={this.state.data}>
                {this.props.children}
            </Table>
        )
    }
}
