import React from 'react';

export default class PartyRow extends React.Component {
    render() {
        return <li>{this.props.content.name}</li>;
    }
}
