import React, { Component } from 'react';
import './Home.css';

import { Logo } from '../Logo';
import { Tile } from '../Tile';
import { TileCover } from '../TileCover';
import { Grid } from '../Grid';

class Home extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Grid>
          <Tile>
            <TileCover />
          </Tile>
        </Grid>
      </div>
    );
  }
}

export default Home;
