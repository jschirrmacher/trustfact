import React from 'react';

export default class PoliticianRow extends React.Component {
    render() {
        return <li>{this.props.content.firstname + ' ' + this.props.content.lastname + ' (' + this.props.content.party.name + ')'}</li>;
    }
}
