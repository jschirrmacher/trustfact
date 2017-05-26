import React from 'react';

export default class Table extends React.Component {
    render() {
        const Row = this.props.children.type;
        const copyright = this.props.copyright && this.props.copyright.length ? (
                <ul className="copyright-info">
                    {this.props.copyright.map(row => (<li>{row}</li>))}
                </ul>
            ) : ''

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
                    {copyright}
                </div>
            </div>
        );
    }
}
