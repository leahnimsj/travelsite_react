import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import Tablerow from './components/tablerow/Tablerow';
import { Table, TableProps} from 'react-bootstrap';
import { Grid, GridProps, Row  } from 'react-bootstrap';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">


        <Navigation />
        <Hero />
        <br/>
        <br/>
        <Grid>
          <Row className="show-grid">
            <Card country="Aruba" countryLink="http://www.arubatourism.com/" imageLink="images/aruba_flag.svg" />
            <Card country="Chile" countryLink="http://chile.travel/en/" imageLink="images/chile_flag.svg" />
            <Card country="Italy" countryLink="http://www.italia.it/en/home.html" imageLink="images/italy_flag.svg" />
            <Card country="Spain" countryLink="http://www.spain.info/en_US/" imageLink="images/spain_flag.svg" />
          </Row>
        </Grid>
        <br/>
        <br/>

        <section className="tableSection">
        <h1>Some information about the places I would like to visit</h1>
        <br/>
          <Table striped bordered condensed hover className="text-center">
            <thead>
              <tr>
                <th className="text-center">Destination</th>
                <th className="text-center">Capital</th>
                <th className="text-center">Official Language</th>
                <th className="text-center">Population (aprox.)</th>
                <th className="text-center">National Bird</th>
              </tr>
            </thead>
            <tbody>
              <Tablerow destination="Aruba" capital="Oranjestad" language="Dutch" population="102,911" nationalBird="Aruban Burrowing Owl"/>
              <Tablerow destination="Chile" capital="Santiago" language="Spanish" population="17.62 million" nationalBird="Andean condor"/> 
              <Tablerow destination="Italy" capital="Rome" language="Italian" population="59.83 million" nationalBird="Bluebirds"/>
              <Tablerow destination="Spain" capital="Madrid" language="Spanish" population="46.77 million" nationalBird="Eagle"/>
            </tbody>
          </Table>
          <br/>
        </section>
        <br/>
        <br/>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;
