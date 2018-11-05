/* Vendor */
import React, { Component } from 'react';
import styled from 'styled-components';
import fullpage from 'fullpage.js';

/* Components */
import WelcomePage from './WelcomePage';
import Scene from './Scene';

/* Images */
const scene01 = (name) => require.context('../images/scene-01', true)(name, true);
const scene02 = (name) => require.context('../images/scene-02', true)(name, true);
const scene03 = (name) => require.context('../images/scene-03', true)(name, true);

/* Styled Components */
const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
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
      <Wrapper>
        <div id="fullpage">
          <div className="section">
            <WelcomePage moveSectionDown={this.moveSectionDown}/>
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
      </Wrapper>
    );
  }
}

export default App;
