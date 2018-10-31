import React, { Component } from 'react';
import Parallax from 'parallax-js';
import styled from 'styled-components';

/* Images */
import Layer01 from '../../images/scene-01/layer-01.png';
import Layer02 from '../../images/scene-01/layer-02.png';
import Layer03 from '../../images/scene-01/layer-03.png';
import Layer04 from '../../images/scene-01/layer-04.png';
import Layer05 from '../../images/scene-01/layer-05.png';

/* Styled Components */
const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
`;
const Image = styled.img`
  height: 100vh;
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
    const scene = document.getElementById('scene');
    const imageWidth = window.innerHeight * 1920/1080;

    scene.style.left = '-' + (imageWidth/2 - window.innerWidth/2) + 'px';
    scene.style.top = 0;

    // Parallax.js.
    new Parallax(scene, {
      limitX: false,
    });

    // Device Orientation Event.
    if (!window.DeviceOrientationEvent) {
      alert('Device Orientation Event is not supported on your current device...');
    } else {
      const handleOrientation = (event) => {
        let alpha = event.alpha; // In degrees, in the range [0,360]

        // To make computation easier, we have to normalize the 'alpha' value to [0,180].
        if (alpha >= 0 && alpha <= 180) {
          alpha = Math.max(0, -alpha + 90);
        };
        if (alpha > 180 && alpha <= 360) {
          alpha = Math.min(90 + (360 - alpha), 180);
        };

        const a = (imageWidth * alpha/180) - window.innerWidth/2;
        const b = Math.min(a, imageWidth - window.innerWidth);
        scene.style.left = '-' + b + 'px';

        console.log(alpha);
      }

      window.addEventListener('deviceorientation', handleOrientation);
   }
  }
};

export default Scene;
