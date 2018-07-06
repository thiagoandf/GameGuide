/**
 *
 * VerticalContainer
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledVerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  margin-bottom: 5px;
  max-width: 100%;
  min-width: 100%;
`;

function VerticalContainer(props) {
  return <StyledVerticalContainer>{props.children}</StyledVerticalContainer>;
}

VerticalContainer.propTypes = {
  children: PropTypes.any,
};

export default VerticalContainer;
