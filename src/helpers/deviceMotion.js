const motion = (event) => {
	const leftRight = event.accelerationIncludingGravity.x;
	const topBottom = event.accelerationIncludingGravity.y;

	const preMoveY = Math.floor(topBottom);
	const preMoveX = Math.floor(leftRight);

	const keyX = localStorage.getItem('presetx');
  const keyY = localStorage.getItem('presety');

  let moveY, moveX, ySign, xSign;

	if (!keyX && !keyY) {
		const yPreset = parseInt(preMoveY);
		const xPreset = parseInt(preMoveX);
		localStorage.setItem('presety', yPreset);
		localStorage.setItem('presetx', xPreset);
		return false;
		// next motion event will get executed (I guess we could potentially execute this one aswell...
	} else {
		if (preMoveY < 0) {
			moveY = parseInt(preMoveY) + Math.abs(parseInt(keyY));
		} else {
			moveY = (preMoveY) - (keyY);
		}

    if (preMoveX < 0) {
			moveX = parseInt(preMoveX) + Math.abs(parseInt(keyX));
		} else {
			moveX = (preMoveX) - (keyX);
		}
	}

	if (moveY < 0) {
		ySign = '-';
		moveY = Math.abs(moveY);
	} else {
		ySign = '+';
	}

	if (moveX < 0) {
		xSign = '+';
		moveX = Math.abs(moveX);
	} else {
		xSign = '-';
  }

	var yPos = document.getElementById('scene').offsetTop;
  var xPos = document.getElementById('scene').offsetLeft;

	if ( (yPos < -350 && ySign === '-') || (yPos > -20 && ySign === '+') ) {
		// return false;
  } else {
    if (ySign === '-') {
      document.getElementById('scene').style.top = parseInt(document.getElementById('scene').style.top, 10) - moveY + 'px';
    } else {
      document.getElementById('scene').style.top = parseInt(document.getElementById('scene').style.top, 10) + moveY + 'px';
    }
  }

	if ( (xPos < -350 && xSign === '-') || (xPos > -20 && xSign === '+') ) {
    // return false;
  } else {
    if (xSign === '-') {
      document.getElementById('scene').style.left = parseInt(document.getElementById('scene').style.left, 10) - moveX + 'px';
    } else {
      document.getElementById('scene').style.left = parseInt(document.getElementById('scene').style.left, 10) + moveX + 'px';
    }
  }
}

export default motion;
