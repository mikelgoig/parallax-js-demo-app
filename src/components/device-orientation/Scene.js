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
    this.handleOrientation = this.handleOrientation.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    const scene = this.scene.current;

    scene.style.left = '-' + (this.state.imageWidth/2 - window.innerWidth/2) + 'px';
    scene.style.top = 0;

    // Parallax.js.
    new Parallax(scene, {
      limitX: false,
    });

    // Device Orientation Event.
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.handleOrientation);
    } else {
      alert('Device Orientation Event is not supported on your current device...');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    if (window.DeviceOrientationEvent) {
      window.removeEventListener('deviceorientation', this.handleOrientation);
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
            <div data-depth={depth}>
              <Image src={layer} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Scene;
