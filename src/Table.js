import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>
    )
}  

class Table extends Component {
    constructor(props) {
        var date = new Date();
        super(props);
        this.state = { date: date };
    }
    render() {
        var date = this.state.date;
        return (
            <div>
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
                <h6>generated: {date.toLocaleString()}</h6>
            </div>
        )
    }
}

export default Table
