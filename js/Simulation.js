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

  this.duration = 1800;
  this.speed = 1.5;
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
    utils.resizeCanvasToDisplaySize(this.canvas);
    this.radius = this.canvas.width > 700 ? 8 : 5;
    this.circleList = []
    this.healthyCount = this.totalCount;
    this.infectedCount = 0;
    this.removedCount = 0;
    this.frameCount = 0;
    document.querySelectorAll('.replay-button')[this.id].onclick = this.replay;
    document.getElementById(`replay${this.id}`).onclick = this.replay;

    if (this.id === 1) {
      const inputTR = document.getElementById('transmissionRatio');
      this.transmissionRatio = 0.25;
      inputTR.value = this.transmissionRatio * 100;
      inputTR.onchange = () => {
        this.transmissionRatio = inputTR.value / 100;
      }

      const inputDuration = document.getElementById('infectionDurationEntry');
      inputDuration.value = this.infectionDuration / 60;
      inputDuration.onchange = () => {
        this.infectionDuration = inputDuration.value * 60;
      }
    }

    if (this.id === 2) {
      const checkBox = document.getElementById('lockdownCheckbox');
      checkBox.checked = this.isLockdown;
      checkBox.onclick = this.toggleLockdown;

      const inputLR = document.getElementById('lockdownRatio');
      inputLR.value = this.lockdownRatio * 100;
      inputLR.onchange = () => {
        this.lockdownRatio = inputLR.value / 100;
      }
    }

    if (this.id === 3) {
      document.getElementById('restrictionCheckbox').onclick = this.toggleRestriction;
      this.isRestricted = document.getElementById('restrictionCheckbox').checked;
    }
    //Initialize circles
    for (let i = 0; i < this.totalCount; i++) {
      const x = utils.mathRandomInRange(0 + this.radius, this.canvas.width - this.radius);
      const y = utils.mathRandomInRange(0 + this.radius, this.canvas.height - this.radius);
      const dx = utils.mathRandomInRangeFloat(-this.speed, this.speed);
      const dy = utils.mathRandomInRangeFloat(-this.speed, this.speed);
      const tempCircle = new Circle(this.c, x, y, dx, dy, this.radius);
      tempCircle.lockedDown = this.isLockdown;
      //No overlap on spawn
      if (i !== 0) {
        for (let j = 0; j < this.circleList.length; j++) {
          if (utils.hasCollision(this.circleList[j], tempCircle)) {
            tempCircle.x = utils.mathRandomInRange(0 + this.radius, this.canvas.width - this.radius);
            tempCircle.y = utils.mathRandomInRange(0 + this.radius, this.canvas.height - this.radius);
            j = -1;
          }
        }
      }
      //No overlap with divider
      if (this.isRestricted) {
        this.circleList.forEach(a => {
          if (a.x < (this.canvas.width / 2) + 10 && a.x > (this.canvas.width / 2) - 10) {
            a.x -= 20;
          }
        })
      }
      this.circleList.push(tempCircle);
    }

    // Set seed number of infected
    for (let i = 0; i < 2; i++) {
      this.circleList[i].isInfected = true;
      this.circleList[i].color = colorList.infected;
      this.infectedCount += 1;
      this.healthyCount -= 1;
      if (this.id === 3) {
        this.circleList[i].x *= 0.2;
      }
    }

    this.circleList.forEach((a) => {
      a.update();
    });
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
              a.infectionFrame += 1;

              b.color = colorList.infected;
              b.isInfected = true;
              b.isHealthy = false;
              b.infectionFrame += 1;

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

      this.init();
      this.animate();
    };
}