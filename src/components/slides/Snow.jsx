import { Component } from 'react';
import Confetti from 'react-confetti'

function drawSnowflake(ctx) {
  const radius = (Math.random()* 0.1)
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

class Snow extends Component {
  render() {

    return (
      <div className="confetti-container">
        <Confetti
          width={9000}
          drawShape={drawSnowflake}
          colors={['rgba(225, 225, 255, 1)', 'rgba(225, 225, 225, 0.7)']}
          gravity={0.005}
          wind={0.001}
          numberOfPieces={50}
          initialVelocityX={-1}
        />
      </div>
    );
  }
}

export default Snow;
