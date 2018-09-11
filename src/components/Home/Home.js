import React, { Component } from 'react';
import './Home.css';

import { Logo } from '../Logo';
import { Tile } from '../Tile';
import { TileOverlay } from '../TileOverlay';
import { TileContainer } from '../TileContainer';
import { Label } from '../Label';
import { Grid } from '../Grid';

class Home extends Component {

  getTiles() {
    var tiles = [];
    for (var i = 1; i <= 12; i++) {
      tiles.push(<TileContainer style={
        {
          animation: `fadein ${0.25 * i}s`,
          animationDelay: `${0.1 * i}s`,
          animationFillMode: 'both'
        }
      }>
        <Tile>
          <TileOverlay>
            <Label text="Hello world"/>
          </TileOverlay>
        </Tile>
      </TileContainer>
      );
    }
    return tiles;
  }

  render() {
    return (
      <div>
        <Logo />
        <Grid>
          {this.getTiles()}
        </Grid>
      </div>
    );
  }

}

export default Home;
