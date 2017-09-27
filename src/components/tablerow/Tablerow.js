import React, { Component } from 'react';
import './Tablerow.css';


class Tablerow extends Component {
  render() {
    return (
        <tr>
            <td>{this.props.destination}</td>
            <td>{this.props.capital}</td>
            <td>{this.props.language}</td>
            <td>{this.props.population}</td>
            <td>{this.props.nationalBird}</td>
        </tr>
    );
  }
}

export default Tablerow;