import React, { Component } from 'react';
import Parallax from 'parallax-js';
import styled from 'styled-components';

/* Styled Components */
const Image = styled.img`
  height: 100vh;
`;

class Scene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageWidth: window.innerHeight * 1920/1080,
    };

    this.scene = React.createRef();
    this.handleMotion = this.handleMotion.bind(this);
    this.handleOrientation = this.handleOrientation.bind(this);
  }

  componentDidMount() {
    const scene = this.scene.current;

    // Initial styles.
    scene.style.left = '-' + (this.state.imageWidth/2 - window.innerWidth/2) + 'px';
    scene.style.top = 0;

    // Parallax.
    new Parallax(scene, {
      limitX: false,
    });

    if (!window.DeviceOrientationEvent) {
      alert('Device Orientation Event is not supported on your current device...');
    }

    if (!window.DeviceMotionEvent) {
      alert('Device Motion Event is not supported on your current device...');
    }
  }

  componentDidUpdate() {
    // Device Orientation Event.
    if (window.DeviceOrientationEvent) {
      if (this.props.isEnabledDeviceOrientation) {
        window.addEventListener('deviceorientation', this.handleOrientation);
      } else {
        window.removeEventListener('deviceorientation', this.handleOrientation);
      }
    }

    // Device Motion Event.
    if (window.DeviceMotionEvent) {
      if (this.props.isEnabledDeviceMotion) {
        window.addEventListener('devicemotion', this.handleMotion);
      } else {
        window.removeEventListener('devicemotion', this.handleMotion);
      }
    }
  }

  componentWillUnmount() {
    if (window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', this.handleOrientation);
    }

    if (window.DeviceMotionEvent) {
      window.removeEventListener('devicemotion', this.handleMotion);
    }
  }

  handleMotion(event) {
    const preMoveX = Math.floor(event.accelerationIncludingGravity.x);
    const keyX = localStorage.getItem('presetx');

    let moveX, xSign;

    if (!keyX) {
      const xPreset = parseInt(preMoveX);
      localStorage.setItem('presetx', xPreset);
      return false;
    } else {
      if (preMoveX < 0) {
        moveX = parseInt(preMoveX) + Math.abs(parseInt(keyX));
      } else {
        moveX = (preMoveX) - (keyX);
      }
    }

    if (moveX < 0) {
      xSign = '+';
      moveX = Math.abs(moveX) * 2;
    } else {
      xSign = '-';
    }

    const xPos = this.scene.current.offsetLeft;
    if ((xPos < -(this.state.imageWidth - window.innerWidth/2) && xSign === '-') || (xPos > 0 && xSign === '+')) {
      // return false;
    } else {
      if (xSign === '-') {
        this.scene.current.style.left = parseInt(this.scene.current.style.left, 10) - moveX + 'px';
      } else {
        this.scene.current.style.left = parseInt(this.scene.current.style.left, 10) + moveX + 'px';
      }
    }
  }

  handleOrientation(event) {
    let alpha = event.alpha; // In degrees, in the range [0,360]

    // To make computation easier, we have to normalize the 'alpha' value to [0,180].
    if (alpha >= 0 && alpha <= 180) {
      alpha = Math.max(0, -alpha + 90);
    };
    if (alpha > 180 && alpha <= 360) {
      alpha = Math.min(90 + (360 - alpha), 180);
    };

    const a = (this.state.imageWidth * alpha/180) - window.innerWidth/2;
    const b = Math.min(a, this.state.imageWidth - window.innerWidth);
    this.scene.current.style.left = '-' + b + 'px';
  }

  render() {
    return (
      <div ref={this.scene}>
        {this.props.layers.map((layer, index) => {
          const depth = `${Math.min(index/10, 1)}`;

          return (
            <div key={index} data-depth={depth}>
              <Image data-src={layer} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Scene;
