import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const StyledPage = styled.div`
  background: white;
  color: black;
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Page = ({ children }) => (
  <StyledPage>
    <Meta />
    <Header />
    <Inner>{children}</Inner>
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
