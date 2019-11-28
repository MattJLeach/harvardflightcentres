import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  margin: 0 auto;
`;

const NavLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  color: black;

  :hover {
    color: red;
  }
`;

function Navigation() {
  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/training-courses">Training Courses</NavLink>
      <NavLink to="/">Prices</NavLink>
      <NavLink to="/trial-lessons">Trial Lessons</NavLink>
      <NavLink to="/">Contact</NavLink>
    </Container>
  )
}

export default Navigation;