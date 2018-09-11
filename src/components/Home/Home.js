import React, { Component } from 'react';
import './Home.css';

import { Logo } from '../Logo';
import { Tile } from '../Tile';
import { TileOverlay } from '../TileOverlay';
import { Grid } from '../Grid';
import TileContainer from '../TileContainer/TileContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Grid>
          <TileContainer>
            <Tile>
              <TileOverlay />
            </Tile>
          </TileContainer>
          <TileContainer>
            <Tile>
              <TileOverlay />
            </Tile>
          </TileContainer>
          <TileContainer>
            <Tile>
              <TileOverlay />
            </Tile>
          </TileContainer>
        </Grid>
      </div>
    );
  }
}

export default Home;
