import React from 'react';

export default class Table extends React.Component {
    render() {
        const Row = this.props.children.type;

        return (
            <div className="table">
                <h2>
                    {this.props.name}
                </h2>
                <ul>
                    {this.props.items.map((row) => <Row key={row.id} content={row} />)}
                </ul>
            </div>
        );
    }
}
