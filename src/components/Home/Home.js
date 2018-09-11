import React, { Component } from 'react';
import './Home.css';

import { Logo } from '../Logo';
import { Tile } from '../Tile';
import { ReviewOverlay } from '../ReviewOverlay';
import { Grid } from '../Grid';

class Home extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Grid>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
          <Tile>
            <ReviewOverlay />
          </Tile>
        </Grid>
      </div>
    );
  }
}

export default Home;
