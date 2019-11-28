import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { grey } from '@material-ui/core/colors';

const StyledBox = styled(Box)`
  background-color: white;
`;

const TileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

function Tile({ title, description, image }) {
  return (
    <StyledBox padding={2} border={1} borderRadius={3} borderColor={grey[300]}>
      <Typography variant="h4" align="center">{title}</Typography>
      <Box textAlign="center" marginTop={2}>
        <TileImage src={image} />
      </Box>
      <br />
      <Typography align="center">{description}</Typography>
      <Box textAlign="center" marginY={2}>
        <Button align="center" variant="text">More...</Button>
      </Box>
    </StyledBox>
  )
}

export default Tile;