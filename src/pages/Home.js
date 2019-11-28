import React from 'react';
import { Container, Grid, Typography, Divider, Box } from '@material-ui/core';
import styled from 'styled-components';
import training from '../assets/training.jpg';
import trial from '../assets/trial.jpg';
import simulator from '../assets/simulator.jpg';
import Tile from '../components/Tile';
import Carousel from '../components/Carousel';

const TileContainer = styled(Container)`
  position: relative;
  top: -100px;
  margin-bottom: -75px;
`;

const tiles = [
  {
    title: 'Pilot Training',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit felis, semper id augue vitae, tempus placerat magna. Maecenas interdum, mauris sagittis pharetra finibus, sem purus venenatis lectus, non lobortis enim ante non enim. Praesent ac egestas urna, vel accumsan est. In tincidunt orci odio, vel vehicula nibh dignissim fringilla.',
    image: training
  },
  {
    title: 'Trial Lessons',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit felis, semper id augue vitae, tempus placerat magna. Maecenas interdum, mauris sagittis pharetra finibus, sem purus venenatis lectus, non lobortis enim ante non enim. Praesent ac egestas urna, vel accumsan est. In tincidunt orci odio, vel vehicula nibh dignissim fringilla.',
    image: trial
  },
  {
    title: 'Flight Simulator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit felis, semper id augue vitae, tempus placerat magna. Maecenas interdum, mauris sagittis pharetra finibus, sem purus venenatis lectus, non lobortis enim ante non enim. Praesent ac egestas urna, vel accumsan est. In tincidunt orci odio, vel vehicula nibh dignissim fringilla.',
    image: simulator
  },
]

function Home() {
  return (
    <div>
      <Carousel />
      <TileContainer>
        <Grid container spacing={4}>
          {tiles.map(tile => (
            <Grid item sm={12} md={4}>
              <Tile
                key={tile.title}
                title={tile.title}
                description={tile.description}
                image={tile.image}
              />
            </Grid>
          ))}
        </Grid>
      </TileContainer>
      <Container>
        <Box marginBottom={2}>
          <Divider />
        </Box>
        <Box marginY={4}>
          <Typography align="center" variant="h5">Welcome to Harvard Flight Centres</Typography>
          <Typography align="center">Limited Time – 15% Discount on Private Hire, Mondays to Wednesdays, at Redhill</Typography>
          <Typography align="center">Easily accessible from London, Kent and Sussex, learn to fly at Redhill in Surrey or Shoreham in West Sussex.</Typography>
          <Typography align="center">Harvard Flight Centres offer flight training and flying experiences.</Typography>
          <Typography align="center">We offer a full range of courses, whether you are looking for your first taste of flying with a trial lesson, want to gain your private pilot’s licence (PPL), or extend your skills with an IMC, Night, Instrument Rating, or Renewal.</Typography>
        </Box>
      </Container>
    </div>
  )
}

export default Home;