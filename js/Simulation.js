import Circle from './Circle';
import * as utils from './utils';
import {charts} from './app.js';
import {colorList} from './colorList.js';


export default function Simulation(canvas, id) {
    this.id = id;
    this.isLockdown = false;
    this.isRestricted = false;
    this.restrictionRate = 1;
    this.infectionDuration = 480; //in Number of frames
    this.transmissionRatio = 0.50;
    this.lockdownFactor = 0.05;
    this.obeyingLockdown = 0.9;
    this.totalCount = 250;
    this.speed = 1;
    this.canvas = canvas;
    this.radius = undefined;
    this.c = this.canvas.getContext('2d');
    this.start = undefined;
    this.duration = 300;
    this.circleList = [];
    this.animation;
    this.inView = false;
  
    this.healthyCount;
    this.infectedCount;
    this.removedCount;
  
    this.init = () => {
        this.resizeCanvasToDisplaySize();
        this.radius = this.canvas.width/100;
        document.querySelectorAll('.replay-button')[this.id].onclick = this.replay;
        document.getElementById(`replay${this.id}`).onclick = this.replay;
        document.getElementById('lockdownCheckbox').onclick = this.toggleLockdown;
        document.getElementById('restrictionCheckbox').onclick = this.toggleRestriction;
        document.getElementById('transmissionRatio').value = this.transmissionRatio * 100;
        document.getElementById('infectionDurationEntry').value = this.infectionDuration / 1000;

    
        this.circleList = [];
        this.infectedCount = 0;
        this.healthyCount = this.totalCount;
        this.removedCount = 0;
        this.start = Date.now();
    
        for (let i = 0; i < this.totalCount; i++) {
            const x = utils.mathRandomInRange(0 + this.radius, this.canvas.width - this.radius);
            const y = utils.mathRandomInRange(0 + this.radius, this.canvas.height - this.radius);
            const dx = utils.mathRandomInRangeFloat(-this.speed, this.speed);
            const dy = utils.mathRandomInRangeFloat(-this.speed, this.speed);
            const isInfected = false;
            const tempCircle = new Circle(this, x, y, dx, dy, this.radius, isInfected);
    
        if (i !== 0) {
          for (let j = 0; j < this.circleList.length; j++) {
            if (utils.hasCollision(this.circleList[j], tempCircle)) {
              tempCircle.x = utils.mathRandomInRange(0 + this.radius, this.canvas.width - this.radius);
              tempCircle.y = utils.mathRandomInRange(0 + this.radius, this.canvas.height - this.radius);
              j = -1;
            }
          }
        }
        this.circleList.push(tempCircle);
      }
      // Set seed number of infected
      for (let i = 0; i < 2; i++) {
        this.circleList[i].isInfected = true;
        this.circleList[i].infectionStart = Date.now();
        this.circleList[i].color = colorList.infected;
        this.infectedCount += 1;
        this.healthyCount -= 1;
        if (this.id === 3) {
          this.circleList[i].x *= 0.2;
        }
      }
  
      this.circleList.forEach((circle) => {
        circle.update(this.circleList);
      });
    }; // this.init
    this.animate = () => {
      // Refresh canvas  
      this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //Update chart and sim
      charts[this.id].update();
      this.circleList.forEach((circle) => {
        circle.update(this.circleList);
      });

      //Update data
      document.getElementById(`healthy${this.id}`).innerHTML = this.healthyCount;
      document.getElementById(`infected${this.id}`).innerHTML = this.infectedCount;
      document.getElementById(`removed${this.id}`).innerHTML = this.removedCount;
  
      //Check duration of animation
      if (Date.now() - this.start < this.duration) {
        this.animation = requestAnimationFrame(this.animate);
      } else {
        this.canvas.previousElementSibling.style.display = 'flex';
      }
    };
    this.toggleLockdown = () => {
        const checkBox = document.getElementById('lockdownCheckbox');
        this.isLockdown = checkBox.checked ? true : false;
        this.obeyingLockdown = document.getElementById('obeyingLockdown').value / 100;
        this.circleList.forEach((element) => {
          if (this.isLockdown) {
            if (Math.random() <= this.obeyingLockdown) {
              element.velocity.x = element.velocity.x * this.lockdownFactor;
              element.velocity.y = element.velocity.y * this.lockdownFactor;
              element.lockedDown = true;
            }
          } else {
            element.velocity.x = utils.mathRandomInRangeFloat(-this.speed, this.speed);
            element.velocity.y = utils.mathRandomInRangeFloat(-this.speed, this.speed);
            this.circleList.forEach((element) => {
              element.lockedDown = false;
            });
          }
        });
      },
      this.toggleRestriction = () => {
        this.isRestricted = document.getElementById('restrictionCheckbox').checked ? true : false;
        let divider = document.getElementById("sim-travel-divider");
        divider.style.display = (divider.style.display === "") ? "block" : "";
        this.circleList.forEach( element => {
          if (element.x < (this.canvas.width / 2) + 10 && element.x > (this.canvas.width / 2) - 10) {
            element.x -= 20;
          }
        })
      },
      this.replay = () => {
        if (this.id === 1) {
          this.transmissionRatio = document.getElementById('transmissionRatio').value / 100;
          this.infectionDuration = document.getElementById('infectionDurationEntry').value * 1000;
        }
  
        if (this.id === 2) {
          document.getElementById('lockdownCheckbox').checked = false;
        }
  
        this.canvas.previousElementSibling.style.display = 'none';
        charts[this.id].c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        charts[this.id].time = 0;
        window.cancelAnimationFrame(this.animation);
        this.init();
        this.animate();
      };
      this.resizeCanvasToDisplaySize = () => {
          const width = this.canvas.clientWidth;
          const height = this.canvas.clientHeight;
        
          if (this.canvas.width !== width || this.canvas.height !== height) {
            this.canvas.width = width;
            this.canvas.height = height;
            return true;
          }
        
          return false;
      }
  }