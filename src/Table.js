import React from 'react';

export default class Table extends React.Component {
    render() {
        const Row = this.props.children.type;

        return (
            <div>
                <div className="PageTitle"></div>

                <div className="table">
                    <h2>
                        {this.props.name}
                    </h2>
                    <ul>
                        {this.props.items.length
                            ? this.props.items.map((row) => <Row key={row.id} content={row} />)
                            : 'Keine Daten gefunden'
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
