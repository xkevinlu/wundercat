import Circle from './Circle';
import * as utils from './utils';
import { charts } from './app.js';
import { colorList } from './colorList.js';

export default function Simulation(canvas, id) {
  this.canvas = canvas;
  this.id = id;
  this.c = this.canvas.getContext('2d');
  this.circleList = [];
  this.frameCount = 0;
  this.animation;
  this.inView = false;

  this.duration = 2400;
  this.speed = 1.1;
  this.radius = 5;
  this.totalCount = 250;

  this.isLockdown = false;
  this.lockdownRatio = 1;
  this.isRestricted = false;
  this.restrictionRate = 1;

  this.infectionDuration = 480; //in Number of frames
  this.transmissionRatio = 0.5;

  this.healthyCount = this.totalCount;
  this.infectedCount = 0;
  this.removedCount = 0;


  this.init = () => {
    var Sim = this;
    utils.resizeCanvasToDisplaySize(this.canvas);
    this.radius = this.canvas.width < 400 ? 3 : 5;
    if (document.querySelectorAll('.replay-button').length > 1) {
    document.querySelectorAll('.replay-button')[this.id].onclick = this.replay;
    } else {
      document.querySelectorAll('.replay-button')[0].onclick = this.replay;

    }
    document.getElementById(`replay${this.id}`).onclick = this.replay;

    initCircles(this);
  }; // this.init

  this.animate = () => {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
    charts[this.id].update();

    this.circleList.forEach((a) => {
      this.circleList.forEach((b) => {
        if (a != b && utils.checkCircleCollision(a, b)) {

          utils.resolveCollision(a, b);

          if (utils.checkInfectedandSusceptible(a, b)) {
            if (Math.random() < this.transmissionRatio) {
              a.color = colorList.infected;
              a.isInfected = true;
              a.isHealthy = false;

              b.color = colorList.infected;
              b.isInfected = true;
              b.isHealthy = false;

              this.healthyCount -= 1;
              this.infectedCount += 1;
            }

          }
        }
      })
      utils.checkWallCollision(a, this.canvas, this.isRestricted);

      // Develop immunity or die
      if (a.isInfected && a.infectionFrame > this.infectionDuration) {
        a.color = colorList.removed;
        a.opacity = 0.5;
        a.isInfected = false;
        a.isRemoved = true;
        this.infectedCount -= 1;
        this.removedCount += 1;
      }
      a.update();
    });
    //Update data
    document.getElementById(`healthy${this.id}`).innerHTML = this.healthyCount;
    document.getElementById(`infected${this.id}`).innerHTML = this.infectedCount;
    document.getElementById(`removed${this.id}`).innerHTML = this.removedCount;

    //Check duration of animation and only play if in view
    if (this.frameCount < this.duration && this.inView) {
      this.frameCount += 1;
      this.animation = requestAnimationFrame(this.animate);
    }
    if (this.frameCount >= this.duration) {
      this.canvas.previousElementSibling.style.display = 'flex';
    }
  };
  this.toggleLockdown = () => {
    this.isLockdown = !this.isLockdown;
    if (this.isLockdown) {
      this.circleList.forEach((a) => {
        if (Math.random() <= this.lockdownRatio) {
          a.lockedDown = true;
        }
      });
    } else {
      this.circleList.forEach((a) => {
        if (a.lockedDown) {
          a.lockedDown = false;
          a.restoreInitVelocity();
        }
      })

    }
  },
    this.toggleRestriction = () => {
      this.isRestricted = !this.isRestricted;
      const divider = document.getElementById("sim-travel-divider");
      divider.style.display = (divider.style.display === "") ? "block" : "";
      this.circleList.forEach(a => {
        if (a.x < (this.canvas.width / 2) + 10 && a.x > (this.canvas.width / 2) - 10) {
          a.x -= 20;
        }
      })
    },
    this.replay = () => {
      this.canvas.previousElementSibling.style.display = 'none';
      charts[this.id].c.clearRect(0, 0, this.canvas.width, this.canvas.height);
      charts[this.id].time = 0;

      window.cancelAnimationFrame(this.animation);
      this.healthyCount = this.totalCount;
      this.infectedCount = 0;
      this.removedCount = 0;
      this.frameCount = 0;
      this.circleList = [];

      initCircles(this);
      this.animate();
    };
}

function initCircles(sim) {

  //Initialize circles
  for (let i = 0; i < sim.totalCount; i++) {
    const x = utils.mathRandomInRange(0 + sim.radius, sim.canvas.width - sim.radius);
    const y = utils.mathRandomInRange(0 + sim.radius, sim.canvas.height - sim.radius);
    const dx = utils.mathRandomInRangeFloat(-sim.speed, sim.speed);
    const dy = utils.mathRandomInRangeFloat(-sim.speed, sim.speed);
    const tempCircle = new Circle(sim.c, x, y, dx, dy, sim.radius);
    tempCircle.lockedDown = sim.isLockdown;
    //No overlap on spawn
    if (i !== 0) {
      for (let j = 0; j < sim.circleList.length; j++) {
        if (utils.hasCollision(sim.circleList[j], tempCircle)) {
          tempCircle.x = utils.mathRandomInRange(0 + sim.radius, sim.canvas.width - sim.radius);
          tempCircle.y = utils.mathRandomInRange(0 + sim.radius, sim.canvas.height - sim.radius);
          j = -1;
        }
      }
    }
    //No overlap with divider
    if (sim.isRestricted) {
      sim.circleList.forEach(a => {
        if (a.x < (sim.canvas.width / 2) + 10 && a.x > (sim.canvas.width / 2) - 10) {
          a.x -= 20;
        }
      })
    }
    sim.circleList.push(tempCircle);
  }

  // Set seed number of infected
  for (let i = 0; i < 1; i++) {
    sim.circleList[i].isInfected = true;
    sim.circleList[i].velocity.x = utils.mathRandomInRange(0, 1) > 0.5 ? -sim.speed * 1.5 : sim.speed * 1.5;
    sim.circleList[i].velocity.y = utils.mathRandomInRange(0, 1) > 0.5 ? -sim.speed * 1.5 : sim.speed * 1.5;
    sim.circleList[i].color = colorList.infected;
    sim.infectedCount += 1;
    sim.healthyCount -= 1;
    if (sim.id === 3) {
      sim.circleList[i].x *= 0.2;
    }
  }
  sim.circleList.forEach((a) => {
    a.update();
  });
}