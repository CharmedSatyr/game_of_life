import React from 'react';
import PropTypes from 'prop-types';

import Generations from './Generations';
import Grid from './Grid';
import Controls from './Controls';

const Game = props => (
  <div className="game">
    <Generations generation={props.generation} />
    <Grid cellData={props.cellData} makeGrid={props.makeGrid} toggle={props.toggle} />
    <Controls clear={props.clear} makeGrid={props.makeGrid} nextGen={props.nextGen} />
  </div>
);

export default Game;

Game.propTypes = {
  cellData: PropTypes.arrayOf(PropTypes.bool).isRequired,
  clear: PropTypes.func.isRequired,
  generation: PropTypes.number.isRequired,
  makeGrid: PropTypes.func.isRequired,
  nextGen: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};