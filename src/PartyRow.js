import React from 'react';

export default class PartyRow extends React.Component {
    render() {
        return <li>{(this.props.content.name ? (this.props.content.name + '-') : '')
            + this.props.content.longName}</li>;
    }
}
