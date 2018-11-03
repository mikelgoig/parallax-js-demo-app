import React, { Component } from 'react';
import fullpage from 'fullpage.js';
import styled from 'styled-components';

/* Components */
import Scene from './Scene';

/* Images */
import welcome from '../images/welcome.jpg';
import iconArrowDown from '../images/icon-arrow-down.png';
const scene01 = (name) => require.context('../images/scene-01', true)(name, true);
const scene02 = (name) => require.context('../images/scene-02', true)(name, true);
const scene03 = (name) => require.context('../images/scene-03', true)(name, true);

/* Styled Components */
const WelcomePage = styled.div`
  height: 100vh;
  position: relative;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const WelcomeButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px;
  cursor: pointer;
`;
const WelcomeButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-image: url(${props => props.icon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const ButtonsWrapper = styled.div`
  display: ${props => props.display};
  position: absolute;
  bottom: 10px;
  left: 20px;
  z-index: 1;
`;
const Button = styled.button`
  min-height: 60px;
  margin-right: 10px;
  background-color: ${props => props.background};
  opacity: 0.8;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnabledDeviceOrientation: false,
      isEnabledDeviceMotion: false,
      isShownButtonsWrapper: false,
    };

    this.moveSectionDown = this.moveSectionDown.bind(this);
    this.toggleDeviceMotion = this.toggleDeviceMotion.bind(this);
    this.toggleDeviceOrientation = this.toggleDeviceOrientation.bind(this);
  }

  componentDidMount() {
    new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors: ['welcomePage', 'scene01', 'scene02', 'scene03'],
      afterLoad: (origin, destination) => {
        this.setState({
          isShownButtonsWrapper: destination.anchor !== 'welcomePage',
        });
      }
    });
  }

  moveSectionDown() {
    window.fullpage_api.moveSectionDown();
  }

  toggleDeviceMotion() {
    this.setState({
      isEnabledDeviceMotion: !this.state.isEnabledDeviceMotion,
    });
  }

  toggleDeviceOrientation() {
    this.setState({
      isEnabledDeviceOrientation: !this.state.isEnabledDeviceOrientation,
    });
  }

  render() {
    return (
      <div>
        <div id="fullpage">
          <div className="section">
            <WelcomePage image={welcome}>
              <WelcomeButtonWrapper onClick={this.moveSectionDown}>
                <WelcomeButton icon={iconArrowDown}/>
              </WelcomeButtonWrapper>
            </WelcomePage>
          </div>

          <div className="section">
            <Scene
              isEnabledDeviceMotion={this.state.isEnabledDeviceMotion}
              isEnabledDeviceOrientation={this.state.isEnabledDeviceOrientation}
              layers={[
                scene01('./layer-01.png'),
                scene01('./layer-02.png'),
                scene01('./layer-03.png'),
                scene01('./layer-04.png'),
                scene01('./layer-05.png'),
              ]}
            />
          </div>

          <div className="section">
            <Scene
              isEnabledDeviceMotion={this.state.isEnabledDeviceMotion}
              isEnabledDeviceOrientation={this.state.isEnabledDeviceOrientation}
              layers={[
                scene02('./layer-01.png'),
                scene02('./layer-02.png'),
                scene02('./layer-03.png'),
                scene02('./layer-04.png'),
                scene02('./layer-05.png'),
                scene02('./layer-06.png'),
                scene02('./layer-07.png'),
              ]}
            />
          </div>

          <div className="section">
            <Scene
              isEnabledDeviceMotion={this.state.isEnabledDeviceMotion}
              isEnabledDeviceOrientation={this.state.isEnabledDeviceOrientation}
              layers={[
                scene03('./layer-01.png'),
                scene03('./layer-02.png'),
                scene03('./layer-03.png'),
                scene03('./layer-04.png'),
                scene03('./layer-05.png'),
                scene03('./layer-06.png'),
                scene03('./layer-07.png'),
                scene03('./layer-08.png'),
              ]}
            />
          </div>
        </div>

        <ButtonsWrapper
          display={this.state.isShownButtonsWrapper ? 'block' : 'none'}
        >
          <Button
            background={
              this.state.isEnabledDeviceOrientation
                ? 'green'
                : 'white'
            }
            onClick={this.toggleDeviceOrientation}
          >
            Dev.Orientation
          </Button>

          <Button
            background={
              this.state.isEnabledDeviceMotion
                ? 'green'
                : 'white'
            }
            onClick={this.toggleDeviceMotion}
          >
            Dev.Motion
          </Button>
        </ButtonsWrapper>
      </div>
    );
  }
}

export default App;
