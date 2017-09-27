import React, { Component } from 'react';
import './Card.css';
import { Grid, GridProps, Row, Col  } from 'react-bootstrap';

class Card extends Component {
  render() {
    return (

        <Col md={3}>
            <img width="250px" src={this.props.imageLink} />
            <div className="cardSection">
                <h3>{this.props.country}</h3>
                <a href={this.props.countryLink} target="_blank">{this.props.country} Tourism Site</a>
            </div>
        
        </Col>

        // <div>
        //     <div className="col-md-3">
        //         <img width="250px" src={this.props.imageLink} />
        //         <div>
        //         <h3>{this.props.country}</h3>
        //         <a href={this.props.countryLink} target="_blank">{this.props.country} Tourism Site</a>
        //         </div>
        //     </div>
        // </div>
    );
  }
}


export default Card;