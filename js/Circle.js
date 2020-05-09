import { colorList } from './colorList.js';

export default function Circle(c, x, y, dx, dy, radius) {
  this.c = c; //Canvas context
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.velocity = {
    x: dx,
    y: dy,
    x_init: dx,
    y_init: dy
  };
  this.lockedDown = false;
  this.isInfected = false;
  this.infectionFrame = 0;
  this.isRemoved = false;

  this.color = this.isInfected ? colorList.infected : colorList.healthy;
  this.mass = 1;
  this.opacity = 1;

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.globalAlpha = this.opacity;
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = () => {
    this.x += this.lockedDown ? this.velocity.x*0.05 : this.velocity.x;
    this.y += this.lockedDown ? this.velocity.y*0.05 : this.velocity.y;
    this.infectionFrame = this.isInfected ? this.infectionFrame + 1 : this.infectionFrame;

    this.draw();
  };

  this.restoreInitVelocity = () => {
    this.velocity.x = this.velocity.x * Math.abs(this.velocity.x_init/this.velocity.x);
    this.velocity.y = this.velocity.y * Math.abs(this.velocity.y_init/this.velocity.y);
  }
}
