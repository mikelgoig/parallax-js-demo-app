/* Vendor */
import React from 'react';
import styled from 'styled-components';

/* Images */
import logo from '../images/binalogue.png';
import iconArrowDown from '../images/icon-arrow-down.png';

/* Styled Components */
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: black;
`;
const LogoWrapper = styled.div`
  width: 100%;
`;
const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
const TextWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const Text = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: white;
  text-align: center;
  text-transform: uppercase;
`;
const ButtonDownWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  cursor: pointer;
`;
const ButtonDown = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-image: url(${props => props.icon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const WelcomePage = (props) => (
  <Wrapper>
    <LogoWrapper>
      <Logo src={logo}/>
    </LogoWrapper>

    <TextWrapper>
      <Text>
        Parallax.js<br/>
        <span style={{ fontFamily: 'serif', fontSize: '20px', fontWeight: '400', fontStyle: 'italic', textTransform: 'none' }}>and</span><br/>
        Device Orientation<br/>
        Events
      </Text>
    </TextWrapper>

    <ButtonDownWrapper onClick={props.moveSectionDown}>
      <ButtonDown icon={iconArrowDown}/>
    </ButtonDownWrapper>
  </Wrapper>
);

export default WelcomePage;
