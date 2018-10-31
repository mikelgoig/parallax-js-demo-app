import React, { Component } from 'react';
import Parallax from 'parallax-js';
import styled from 'styled-components';

import motion from '../helpers/tilt';

/* Images */
import Layer01 from '../images/scene_01/layer_01.png';
import Layer02 from '../images/scene_01/layer_02.png';
import Layer03 from '../images/scene_01/layer_03.png';
import Layer04 from '../images/scene_01/layer_04.png';
import Layer05 from '../images/scene_01/layer_05.png';

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
`;

const Image = styled.img`
  max-height: 100vh;
`;

class Scene extends Component {
  render() {
    return (
      <Wrapper id="scene">
        <div data-depth="0.00">
          <Image src={Layer01} alt="" />
        </div>

        <div data-depth="0.20">
          <Image src={Layer02} alt="" />
        </div>

        <div data-depth="0.40">
          <Image src={Layer03} alt="" />
        </div>

        <div data-depth="0.60">
          <Image src={Layer04} alt="" />
        </div>

        <div data-depth="0.80">
          <Image src={Layer05} alt="" />
        </div>
      </Wrapper>
    );
  }

  componentDidMount() {
    document.getElementById('scene').style.left = 0;
    document.getElementById('scene').style.top = 0;

    // Initialize Parallax.js
    var scene = document.getElementById('scene');
    new Parallax(scene, {
      limitX: false,
    });

    // Initialize DeviceMotion
    localStorage.clear();
    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", motion, false);
    } else {
      alert('Tilt is not supported on your current device. Try this page on your mobile device?');
    }
  }
};

export default Scene;
