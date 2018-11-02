import React, { Component } from 'react';
import fullpage from 'fullpage.js';
import styled from 'styled-components';

/* Components */
import Scene from './Scene';

/* Scene 01 */
import layer0101 from '../images/scene-01/layer-01.png';
import layer0102 from '../images/scene-01/layer-02.png';
import layer0103 from '../images/scene-01/layer-03.png';
import layer0104 from '../images/scene-01/layer-04.png';
import layer0105 from '../images/scene-01/layer-05.png';

/* Scene 02 */
import layer0201 from '../images/scene-02/layer-01.png';
import layer0202 from '../images/scene-02/layer-02.png';
import layer0203 from '../images/scene-02/layer-03.png';
import layer0204 from '../images/scene-02/layer-04.png';
import layer0205 from '../images/scene-02/layer-05.png';
import layer0206 from '../images/scene-02/layer-06.png';
import layer0207 from '../images/scene-02/layer-07.png';

/* Scene 03 */
import layer0301 from '../images/scene-03/layer-01.png';
import layer0302 from '../images/scene-03/layer-02.png';
import layer0303 from '../images/scene-03/layer-03.png';
import layer0304 from '../images/scene-03/layer-04.png';
import layer0305 from '../images/scene-03/layer-05.png';
import layer0306 from '../images/scene-03/layer-06.png';
import layer0307 from '../images/scene-03/layer-07.png';
import layer0308 from '../images/scene-03/layer-08.png';

/* Styled Components */
const ButtonsWrapper = styled.div`
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
    };

    this.toggleDeviceMotion = this.toggleDeviceMotion.bind(this);
    this.toggleDeviceOrientation = this.toggleDeviceOrientation.bind(this);
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
        <ButtonsWrapper>
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

        <div id="fullpage">
          <div className="section">
            <Scene
              isEnabledDeviceMotion={this.state.isEnabledDeviceMotion}
              isEnabledDeviceOrientation={this.state.isEnabledDeviceOrientation}
              layers={[
                layer0101,
                layer0102,
                layer0103,
                layer0104,
                layer0105,
              ]}
            />
          </div>

          <div className="section">
            <Scene
              isEnabledDeviceMotion={this.state.isEnabledDeviceMotion}
              isEnabledDeviceOrientation={this.state.isEnabledDeviceOrientation}
              layers={[
                layer0201,
                layer0202,
                layer0203,
                layer0204,
                layer0205,
                layer0206,
                layer0207,
              ]}
            />
          </div>

          <div className="section">
            <Scene
              isEnabledDeviceMotion={this.state.isEnabledDeviceMotion}
              isEnabledDeviceOrientation={this.state.isEnabledDeviceOrientation}
              layers={[
                layer0301,
                layer0302,
                layer0303,
                layer0304,
                layer0305,
                layer0306,
                layer0307,
                layer0308,
              ]}
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    });
  }
}

export default App;
