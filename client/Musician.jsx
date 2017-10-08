import React from 'react';
import ReactDOM from 'react-dom';
import UserHeader from './UserHeader.jsx'
import AboutMe from './AboutMe.jsx'
import Tracks from './Tracks.jsx'
import Albums from './Albums.jsx'
import Collaboration from './Collaboration.jsx'
import { Grid, Row, Col } from 'react-bootstrap'
import $ from 'jquery';
const axios = require('axios');

export default class Musician extends React.Component {
 constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row >
          <Col className="user"> <UserHeader user={this.props.user}/> </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} className="about-me"> <AboutMe aboutme={this.props.profile}/> </Col>
          <Col xs={6} md={6} className="recent-track"> <Tracks/> </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} className="collaboration"> <Collaboration/> </Col>
          <Col xs={6} md={6} className="albums"> <Albums/>  </Col>
        </Row>
      </Grid>
    );
  }
}
