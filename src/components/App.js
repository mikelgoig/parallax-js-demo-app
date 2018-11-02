import React, { Component } from 'react';
import fullpage from 'fullpage.js';

/* Components */
import Scene from './device-orientation/Scene';

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

class App extends Component {
  render() {
    return (
      <div id="fullpage">
        <div className="section">
          <Scene
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
    );
  }

  componentDidMount() {
    new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    });
  }
}

export default App;
