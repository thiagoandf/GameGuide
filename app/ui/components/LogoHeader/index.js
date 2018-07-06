/**
 *
 * LogoHeader
 *
 */

import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/logo.png';

const StyledLogoHeader = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

function LogoHeader() {
  return (
    <StyledLogoHeader>
      <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      <h1>GameGuide</h1>
    </StyledLogoHeader>
  );
}

LogoHeader.propTypes = {};

export default LogoHeader;
