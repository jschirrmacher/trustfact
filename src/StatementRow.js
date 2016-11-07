import React from 'react';

export default class StatementRow extends React.Component {
    render() {
        return <li>{this.props.content.text}</li>;
    }
}
