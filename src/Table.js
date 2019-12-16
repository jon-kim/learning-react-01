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

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        )
    })
    return <tbody>{rows}</tbody>
}  

class Table extends Component {
    constructor(props) {
        var date = new Date();
        super(props);
        this.state = { date: date };
    }
    render() {
        var date = this.state.date;
        const { characterData } = this.props
        
        return (
            <div>
                <table>
                    <TableHeader />
                    <TableBody characterData={characterData} />
                </table>
                <h6>generated: {date.toLocaleString()}</h6>
            </div>
        )
    }
}

export default Table
