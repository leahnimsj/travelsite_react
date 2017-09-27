import React, { Component } from 'react';
import './Hero.css';
import view from './view.jpeg';
import globe from './globe.jpeg';
import bus from './bus.jpeg';
import artsy from './artsy.jpeg';
import { Carousel, Jumbotron, Button } from 'react-bootstrap';


class Hero extends Component {
  render() {
    return (
    <Carousel>
        <Carousel.Item>
            <img width="100%" alt="900x500" src={globe}/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h4>Here are some places I would like to visit</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" alt="900x500" src={bus}/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h4>Here are some places I would like to visit</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src={view}/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h4>Here are some places I would like to visit</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img width="100%" src={artsy}/>
            <Carousel.Caption>
                <h1>Welcome to my travel site</h1>
                <h2>This site is about places I would like to travel</h2>
                <h4>Here are some places I would like to visit</h4>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
  }
}

export default Hero;