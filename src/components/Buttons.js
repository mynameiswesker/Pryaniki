import React from 'react';

export class Buttons extends React.Component {
    onButtonClick = e => {
        e.preventDefault();
        const period = e.target.value;
        this.props.getPeriod(period);
    }
    render() {
        return (
            <ul>
                <li><button onClick={this.onButtonClick} value="years">From years</button></li>
                <li><button onClick={this.onButtonClick} value="months">From months</button></li>
                <li><button onClick={this.onButtonClick} value="days">From days</button></li>
            </ul>
        );
    }
}

