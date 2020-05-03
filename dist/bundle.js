/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Areachart.js":
/*!*************************!*\
  !*** ./js/Areachart.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Areachart; });
/* harmony import */ var _colorList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorList.js */ "./js/colorList.js");


function Areachart(sim, chart) {
    this.canvas = chart;
    this.c = this.canvas.getContext('2d');
    this.width = 300;
  
    this.init = () => {
      this.time = 0;
    };
    this.update = () => {
      if (this.time < this.canvas.width) {
        // Plot healthy
        this.c.beginPath();
        this.c.rect(this.time, 0, 1, sim.healthyCount / sim.totalCount * this.canvas.height);
        this.c.fillStyle = _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].healthy;
        this.c.fill();
  
        // Plot Removed
        this.c.beginPath();
        this.c.rect(this.time, this.canvas.height - (sim.removedCount / sim.totalCount) * this.canvas.height - (sim.infectedCount / sim.totalCount) * this.canvas.height, 1, this.canvas.height * sim.removedCount / sim.totalCount);
        this.c.fillStyle = _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].removed;
        this.c.globalAlpha = 1;
        this.c.fill();
  
        // Plot Infected
        this.c.beginPath();
        this.c.rect(this.time, this.canvas.height - (sim.infectedCount / sim.totalCount) * this.canvas.height, 1, this.canvas.height);
        this.c.fillStyle = _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].infected;
        this.c.fill();
        this.c.globalAlpha = 1;
        this.time += this.width / sim.duration;
      }
    };
  }

/***/ }),

/***/ "./js/Circle.js":
/*!**********************!*\
  !*** ./js/Circle.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var _colorList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorList.js */ "./js/colorList.js");


function rotate(velocity, angle) {
    const rotatedVelocities = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };
  
    return rotatedVelocities;
  };

function Circle(sim, x, y, dx, dy, radius, isInfected) {
    this.sim = sim;
    this.radius = sim.radius;
    this.x = x;
    this.y = y;
    this.velocity = {
      x: dx,
      y: dy,
    };
    this.isInfected = isInfected;
    this.isHealthy = !isInfected;
    this.color = this.isInfected ? _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].infected : _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].healthy;
    this.infectionFrame = 0;
    this.isRemoved = false;
    this.mass = 1;
    this.opacity = 1;
    this.lockedDown = false;
  
  
    this.draw = () => {
      sim.c.beginPath();
      sim.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      sim.c.globalAlpha = this.opacity;
      sim.c.fillStyle = this.color;
      sim.c.fill();
    };

    this.checkWallCollision = () => {
        if ((this.x + this.radius) > this.sim.canvas.width || (this.x - this.radius) < 0) {
          this.velocity.x = -this.velocity.x;
        }
        if ((this.y + this.radius) > this.sim.canvas.height || (this.y - this.radius) < 0) {
          this.velocity.y = -this.velocity.y;
        }
        if (this.sim.isRestricted) {
          if (this.x < this.sim.canvas.width / 2 && (this.x + this.radius) > (this.sim.canvas.width / 2 ) - 2) {
            this.velocity.x = -this.velocity.x;
          }
          if (this.x > this.sim.canvas.width / 2 && (this.x - this.radius) < (this.sim.canvas.width / 2) + 2) {
            this.velocity.x = -this.velocity.x;
          }
        }
      },

    this.checkCircleCollision = (target) => {
        if (Math.sqrt(Math.pow(this.x - target.x, 2) + Math.pow(this.y - target.y, 2)) <= this.radius + target.radius) {
          return true;
        }
        return false;
      },
    this.resolveCollision = (target) => {
        const xVelocityDiff = this.velocity.x - target.velocity.x;
        const yVelocityDiff = this.velocity.y - target.velocity.y;

        const xDist = target.x - this.x;
        const yDist = target.y - this.y;

        // Prevent accidental overlap of particles
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            // Grab angle between the two colliding particles
            const angle = -Math.atan2(target.y - this.y, target.x - this.x);

            // Store mass in var for better readability in collision equation
            const m1 = this.mass;
            const m2 = target.mass;

            // Velocity before equation
            const u1 = rotate(this.velocity, angle);
            const u2 = rotate(target.velocity, angle);

            // Velocity after 1d collision equation
            const v1 = {
            x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
            y: u1.y
            };
            const v2 = {
            x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
            y: u2.y
            };

            // Final velocity after rotating axis back to original location
            const vFinal1 = rotate(v1, -angle);
            const vFinal2 = rotate(v2, -angle);

            // Swap particle velocities for realistic bounce effect

            this.velocity.x = this.lockedDown ? vFinal1.x * 0.05 : vFinal1.x;
            this.velocity.y = this.lockedDown ? vFinal1.y * 0.05 : vFinal1.y;

            target.velocity.x = target.lockedDown ? vFinal2.x * 0.05 : vFinal2.x;
            target.velocity.y = target.lockedDown ? vFinal2.x * 0.05 : vFinal2.y;
        }
    },
    this.update = () => {
        // Basic movement
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.infectionFrame = this.isInfected ? this.infectionFrame + 1 : this.infectionFrame;
        // Wall Collision
        this.checkWallCollision();
    
        // Develop immunity or die
        if (this.isInfected && this.infectionFrame > sim.infectionDuration) {
          this.color = _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].removed;
          this.opacity = 0.5;
          this.isInfected = false;
          this.isRemoved = true;
          sim.infectedCount -= 1;
          sim.removedCount += 1;
        }
    
        // Ball Collision check
        sim.circleList.forEach((element) => {
          if (this != element) {
            if (this.checkCircleCollision(element)) {
              if ((this.isInfected && !element.isInfected) ||
                (element.isInfected && !this.isInfected)) {
                if (!this.isRemoved && !element.isRemoved) {
                  if (Math.random() < sim.transmissionRatio) {
                    this.color = _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].infected;
                    this.isInfected = true;
                    this.isHealthy = false;
                    this.infectionFrame += 1;
    
                    element.color = _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].infected;
                    element.isInfected = true;
                    element.isHealthy = false;
                    element.infectionFrame += 1;
    
                    sim.healthyCount -= 1;
                    sim.infectedCount += 1;
                  }
                }
              }
              this.resolveCollision(element);
            }
          }
        });
    
        this.draw();
      };
  }



/***/ }),

/***/ "./js/Simulation.js":
/*!**************************!*\
  !*** ./js/Simulation.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Simulation; });
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle */ "./js/Circle.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./js/utils.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./js/app.js");
/* harmony import */ var _colorList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorList.js */ "./js/colorList.js");






function Simulation(canvas, id) {
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
    this.frameCount = 0;
    this.duration = 2400;
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
    
        for (let i = 0; i < this.totalCount; i++) {
            const x = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRange"](0 + this.radius, this.canvas.width - this.radius);
            const y = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRange"](0 + this.radius, this.canvas.height - this.radius);
            const dx = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRangeFloat"](-this.speed, this.speed);
            const dy = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRangeFloat"](-this.speed, this.speed);
            const isInfected = false;
            const tempCircle = new _Circle__WEBPACK_IMPORTED_MODULE_0__["default"](this, x, y, dx, dy, this.radius, isInfected);
    
        if (i !== 0) {
          for (let j = 0; j < this.circleList.length; j++) {
            if (_utils__WEBPACK_IMPORTED_MODULE_1__["hasCollision"](this.circleList[j], tempCircle)) {
              tempCircle.x = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRange"](0 + this.radius, this.canvas.width - this.radius);
              tempCircle.y = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRange"](0 + this.radius, this.canvas.height - this.radius);
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
        this.circleList[i].color = _colorList_js__WEBPACK_IMPORTED_MODULE_3__["colorList"].infected;
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
      this.frameCount += 1;
      //Update chart and sim
      _app_js__WEBPACK_IMPORTED_MODULE_2__["charts"][this.id].update();
      this.circleList.forEach((circle) => {
        circle.update(this.circleList);
      });

      //Update data
      document.getElementById(`healthy${this.id}`).innerHTML = this.healthyCount;
      document.getElementById(`infected${this.id}`).innerHTML = this.infectedCount;
      document.getElementById(`removed${this.id}`).innerHTML = this.removedCount;
  
      //Check duration of animation and only play if in view
      if (this.frameCount < this.duration && this.inView) {
        this.animation = requestAnimationFrame(this.animate);
      } else if (this.frameCount > this.duration) {
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
            element.velocity.x = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRangeFloat"](-this.speed, this.speed);
            element.velocity.y = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRangeFloat"](-this.speed, this.speed);
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
        _app_js__WEBPACK_IMPORTED_MODULE_2__["charts"][this.id].c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        _app_js__WEBPACK_IMPORTED_MODULE_2__["charts"][this.id].time = 0;
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

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! exports provided: charts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony import */ var _Simulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Simulation */ "./js/Simulation.js");
/* harmony import */ var _Areachart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Areachart */ "./js/Areachart.js");
// Variables



let sims = [];
let charts = [];

for (let i = 0; i < 4; i++) {
  sims[i] = new _Simulation__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById(`simulation${i}`), i);
  sims[i].init();
  charts[i] = new _Areachart__WEBPACK_IMPORTED_MODULE_1__["default"](sims[i], document.getElementById(`chart${i}`));
  charts[i].init();
}

sims[0].inView = true;
sims[0].init();
sims[0].animate();

sims[1].transmissionRatio = 0.25;

window.onscroll = () => {
  sims.forEach((element) => {
    if (element.canvas.getBoundingClientRect().top < 500 &&
        element.canvas.getBoundingClientRect().bottom > 50 &&
        !element.inView) {
      element.inView = true;
      element.animate();
    } else if (
      element.canvas.getBoundingClientRect().bottom < 50 &&
      element.inView
      ) {
      element.inView = false;
      console.log("pause " + element.inView);
      
    }
  });
}


/***/ }),

/***/ "./js/colorList.js":
/*!*************************!*\
  !*** ./js/colorList.js ***!
  \*************************/
/*! exports provided: colorList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorList", function() { return colorList; });
const colorList = {
    healthy: '#63c2db',
    infected: '#f66654',
    removed: 'gray',
  };

/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: hasCollision, mathRandomInRange, mathRandomInRangeFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCollision", function() { return hasCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathRandomInRange", function() { return mathRandomInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathRandomInRangeFloat", function() { return mathRandomInRangeFloat; });
function hasCollision(a, b) {
    if (Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) <= a.radius + b.radius) {
      return true;
    }
    return false;
  }
  
function mathRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
function mathRandomInRangeFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQXJlYWNoYXJ0LmpzIiwid2VicGFjazovLy8uL2pzL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9TaW11bGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb2xvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBeUM7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFTO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1REFBUyxZQUFZLHVEQUFTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix1REFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1REFBUztBQUMxQztBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLHVEQUFTO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNHO0FBQ0Q7QUFDUzs7O0FBRzFCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFFBQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixxQkFBcUI7QUFDNUMsc0JBQXNCLHdEQUF1QjtBQUM3QyxzQkFBc0Isd0RBQXVCO0FBQzdDLHVCQUF1Qiw2REFBNEI7QUFDbkQsdUJBQXVCLDZEQUE0QjtBQUNuRDtBQUNBLG1DQUFtQywrQ0FBTTs7QUFFekM7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JELGdCQUFnQixtREFBa0I7QUFDbEMsNkJBQTZCLHdEQUF1QjtBQUNwRCw2QkFBNkIsd0RBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBLG1DQUFtQyx1REFBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOENBQU07QUFDWjtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hELHlDQUF5QyxRQUFRO0FBQ2pELHdDQUF3QyxRQUFROztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxpQ0FBaUMsNkRBQTRCO0FBQzdELGlDQUFpQyw2REFBNEI7QUFDN0Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDhDQUFNO0FBQ2QsUUFBUSw4Q0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7OztBQ2xLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3NDO0FBQ0Y7O0FBRXBDO0FBQ087O0FBRVAsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixtREFBVSxzQ0FBc0MsRUFBRTtBQUNsRTtBQUNBLGtCQUFrQixrREFBUywwQ0FBMEMsRUFBRTtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEk7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0EsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQge2NvbG9yTGlzdH0gZnJvbSAnLi9jb2xvckxpc3QuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXJlYWNoYXJ0KHNpbSwgY2hhcnQpIHtcclxuICAgIHRoaXMuY2FudmFzID0gY2hhcnQ7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy53aWR0aCA9IDMwMDtcclxuICBcclxuICAgIHRoaXMuaW5pdCA9ICgpID0+IHtcclxuICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMudGltZSA8IHRoaXMuY2FudmFzLndpZHRoKSB7XHJcbiAgICAgICAgLy8gUGxvdCBoZWFsdGh5XHJcbiAgICAgICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuYy5yZWN0KHRoaXMudGltZSwgMCwgMSwgc2ltLmhlYWx0aHlDb3VudCAvIHNpbS50b3RhbENvdW50ICogdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmMuZmlsbFN0eWxlID0gY29sb3JMaXN0LmhlYWx0aHk7XHJcbiAgICAgICAgdGhpcy5jLmZpbGwoKTtcclxuICBcclxuICAgICAgICAvLyBQbG90IFJlbW92ZWRcclxuICAgICAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jLnJlY3QodGhpcy50aW1lLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAoc2ltLnJlbW92ZWRDb3VudCAvIHNpbS50b3RhbENvdW50KSAqIHRoaXMuY2FudmFzLmhlaWdodCAtIChzaW0uaW5mZWN0ZWRDb3VudCAvIHNpbS50b3RhbENvdW50KSAqIHRoaXMuY2FudmFzLmhlaWdodCwgMSwgdGhpcy5jYW52YXMuaGVpZ2h0ICogc2ltLnJlbW92ZWRDb3VudCAvIHNpbS50b3RhbENvdW50KTtcclxuICAgICAgICB0aGlzLmMuZmlsbFN0eWxlID0gY29sb3JMaXN0LnJlbW92ZWQ7XHJcbiAgICAgICAgdGhpcy5jLmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgICB0aGlzLmMuZmlsbCgpO1xyXG4gIFxyXG4gICAgICAgIC8vIFBsb3QgSW5mZWN0ZWRcclxuICAgICAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jLnJlY3QodGhpcy50aW1lLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAoc2ltLmluZmVjdGVkQ291bnQgLyBzaW0udG90YWxDb3VudCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQsIDEsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jLmZpbGxTdHlsZSA9IGNvbG9yTGlzdC5pbmZlY3RlZDtcclxuICAgICAgICB0aGlzLmMuZmlsbCgpO1xyXG4gICAgICAgIHRoaXMuYy5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy50aW1lICs9IHRoaXMud2lkdGggLyBzaW0uZHVyYXRpb247XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSIsImltcG9ydCB7Y29sb3JMaXN0fSBmcm9tICcuL2NvbG9yTGlzdC5qcyc7XHJcblxyXG5mdW5jdGlvbiByb3RhdGUodmVsb2NpdHksIGFuZ2xlKSB7XHJcbiAgICBjb25zdCByb3RhdGVkVmVsb2NpdGllcyA9IHtcclxuICAgICAgeDogdmVsb2NpdHkueCAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5LnkgKiBNYXRoLnNpbihhbmdsZSksXHJcbiAgICAgIHk6IHZlbG9jaXR5LnggKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eS55ICogTWF0aC5jb3MoYW5nbGUpLFxyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2lyY2xlKHNpbSwgeCwgeSwgZHgsIGR5LCByYWRpdXMsIGlzSW5mZWN0ZWQpIHtcclxuICAgIHRoaXMuc2ltID0gc2ltO1xyXG4gICAgdGhpcy5yYWRpdXMgPSBzaW0ucmFkaXVzO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xyXG4gICAgICB4OiBkeCxcclxuICAgICAgeTogZHksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pc0luZmVjdGVkID0gaXNJbmZlY3RlZDtcclxuICAgIHRoaXMuaXNIZWFsdGh5ID0gIWlzSW5mZWN0ZWQ7XHJcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5pc0luZmVjdGVkID8gY29sb3JMaXN0LmluZmVjdGVkIDogY29sb3JMaXN0LmhlYWx0aHk7XHJcbiAgICB0aGlzLmluZmVjdGlvbkZyYW1lID0gMDtcclxuICAgIHRoaXMuaXNSZW1vdmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLm1hc3MgPSAxO1xyXG4gICAgdGhpcy5vcGFjaXR5ID0gMTtcclxuICAgIHRoaXMubG9ja2VkRG93biA9IGZhbHNlO1xyXG4gIFxyXG4gIFxyXG4gICAgdGhpcy5kcmF3ID0gKCkgPT4ge1xyXG4gICAgICBzaW0uYy5iZWdpblBhdGgoKTtcclxuICAgICAgc2ltLmMuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgc2ltLmMuZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgIHNpbS5jLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgIHNpbS5jLmZpbGwoKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jaGVja1dhbGxDb2xsaXNpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnggKyB0aGlzLnJhZGl1cykgPiB0aGlzLnNpbS5jYW52YXMud2lkdGggfHwgKHRoaXMueCAtIHRoaXMucmFkaXVzKSA8IDApIHtcclxuICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodGhpcy55ICsgdGhpcy5yYWRpdXMpID4gdGhpcy5zaW0uY2FudmFzLmhlaWdodCB8fCAodGhpcy55IC0gdGhpcy5yYWRpdXMpIDwgMCkge1xyXG4gICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltLmlzUmVzdHJpY3RlZCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMueCA8IHRoaXMuc2ltLmNhbnZhcy53aWR0aCAvIDIgJiYgKHRoaXMueCArIHRoaXMucmFkaXVzKSA+ICh0aGlzLnNpbS5jYW52YXMud2lkdGggLyAyICkgLSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5zaW0uY2FudmFzLndpZHRoIC8gMiAmJiAodGhpcy54IC0gdGhpcy5yYWRpdXMpIDwgKHRoaXMuc2ltLmNhbnZhcy53aWR0aCAvIDIpICsgMikge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICB0aGlzLmNoZWNrQ2lyY2xlQ29sbGlzaW9uID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGlmIChNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54IC0gdGFyZ2V0LngsIDIpICsgTWF0aC5wb3codGhpcy55IC0gdGFyZ2V0LnksIDIpKSA8PSB0aGlzLnJhZGl1cyArIHRhcmdldC5yYWRpdXMpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICB0aGlzLnJlc29sdmVDb2xsaXNpb24gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeFZlbG9jaXR5RGlmZiA9IHRoaXMudmVsb2NpdHkueCAtIHRhcmdldC52ZWxvY2l0eS54O1xyXG4gICAgICAgIGNvbnN0IHlWZWxvY2l0eURpZmYgPSB0aGlzLnZlbG9jaXR5LnkgLSB0YXJnZXQudmVsb2NpdHkueTtcclxuXHJcbiAgICAgICAgY29uc3QgeERpc3QgPSB0YXJnZXQueCAtIHRoaXMueDtcclxuICAgICAgICBjb25zdCB5RGlzdCA9IHRhcmdldC55IC0gdGhpcy55O1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwYXJ0aWNsZXNcclxuICAgICAgICBpZiAoeFZlbG9jaXR5RGlmZiAqIHhEaXN0ICsgeVZlbG9jaXR5RGlmZiAqIHlEaXN0ID49IDApIHtcclxuICAgICAgICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKHRhcmdldC55IC0gdGhpcy55LCB0YXJnZXQueCAtIHRoaXMueCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxyXG4gICAgICAgICAgICBjb25zdCBtMSA9IHRoaXMubWFzcztcclxuICAgICAgICAgICAgY29uc3QgbTIgPSB0YXJnZXQubWFzcztcclxuXHJcbiAgICAgICAgICAgIC8vIFZlbG9jaXR5IGJlZm9yZSBlcXVhdGlvblxyXG4gICAgICAgICAgICBjb25zdCB1MSA9IHJvdGF0ZSh0aGlzLnZlbG9jaXR5LCBhbmdsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHUyID0gcm90YXRlKHRhcmdldC52ZWxvY2l0eSwgYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVmVsb2NpdHkgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHYxID0ge1xyXG4gICAgICAgICAgICB4OiB1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSxcclxuICAgICAgICAgICAgeTogdTEueVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB2MiA9IHtcclxuICAgICAgICAgICAgeDogdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksXHJcbiAgICAgICAgICAgIHk6IHUyLnlcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZpbmFsIHZlbG9jaXR5IGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxyXG4gICAgICAgICAgICBjb25zdCB2RmluYWwxID0gcm90YXRlKHYxLCAtYW5nbGUpO1xyXG4gICAgICAgICAgICBjb25zdCB2RmluYWwyID0gcm90YXRlKHYyLCAtYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gU3dhcCBwYXJ0aWNsZSB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxyXG5cclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5sb2NrZWREb3duID8gdkZpbmFsMS54ICogMC4wNSA6IHZGaW5hbDEueDtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5sb2NrZWREb3duID8gdkZpbmFsMS55ICogMC4wNSA6IHZGaW5hbDEueTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldC52ZWxvY2l0eS54ID0gdGFyZ2V0LmxvY2tlZERvd24gPyB2RmluYWwyLnggKiAwLjA1IDogdkZpbmFsMi54O1xyXG4gICAgICAgICAgICB0YXJnZXQudmVsb2NpdHkueSA9IHRhcmdldC5sb2NrZWREb3duID8gdkZpbmFsMi54ICogMC4wNSA6IHZGaW5hbDIueTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gQmFzaWMgbW92ZW1lbnRcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5Lnk7XHJcbiAgICAgICAgdGhpcy5pbmZlY3Rpb25GcmFtZSA9IHRoaXMuaXNJbmZlY3RlZCA/IHRoaXMuaW5mZWN0aW9uRnJhbWUgKyAxIDogdGhpcy5pbmZlY3Rpb25GcmFtZTtcclxuICAgICAgICAvLyBXYWxsIENvbGxpc2lvblxyXG4gICAgICAgIHRoaXMuY2hlY2tXYWxsQ29sbGlzaW9uKCk7XHJcbiAgICBcclxuICAgICAgICAvLyBEZXZlbG9wIGltbXVuaXR5IG9yIGRpZVxyXG4gICAgICAgIGlmICh0aGlzLmlzSW5mZWN0ZWQgJiYgdGhpcy5pbmZlY3Rpb25GcmFtZSA+IHNpbS5pbmZlY3Rpb25EdXJhdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yTGlzdC5yZW1vdmVkO1xyXG4gICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMC41O1xyXG4gICAgICAgICAgdGhpcy5pc0luZmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmlzUmVtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgICBzaW0uaW5mZWN0ZWRDb3VudCAtPSAxO1xyXG4gICAgICAgICAgc2ltLnJlbW92ZWRDb3VudCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIEJhbGwgQ29sbGlzaW9uIGNoZWNrXHJcbiAgICAgICAgc2ltLmNpcmNsZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMgIT0gZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0NpcmNsZUNvbGxpc2lvbihlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgIGlmICgodGhpcy5pc0luZmVjdGVkICYmICFlbGVtZW50LmlzSW5mZWN0ZWQpIHx8XHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudC5pc0luZmVjdGVkICYmICF0aGlzLmlzSW5mZWN0ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNSZW1vdmVkICYmICFlbGVtZW50LmlzUmVtb3ZlZCkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHNpbS50cmFuc21pc3Npb25SYXRpbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvckxpc3QuaW5mZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0luZmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSGVhbHRoeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5mZWN0aW9uRnJhbWUgKz0gMTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29sb3IgPSBjb2xvckxpc3QuaW5mZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc0luZmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlzSGVhbHRoeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5mZWN0aW9uRnJhbWUgKz0gMTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHNpbS5oZWFsdGh5Q291bnQgLT0gMTtcclxuICAgICAgICAgICAgICAgICAgICBzaW0uaW5mZWN0ZWRDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMucmVzb2x2ZUNvbGxpc2lvbihlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge2NoYXJ0c30gZnJvbSAnLi9hcHAuanMnO1xyXG5pbXBvcnQge2NvbG9yTGlzdH0gZnJvbSAnLi9jb2xvckxpc3QuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXVsYXRpb24oY2FudmFzLCBpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5pc0xvY2tkb3duID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzUmVzdHJpY3RlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZXN0cmljdGlvblJhdGUgPSAxO1xyXG4gICAgdGhpcy5pbmZlY3Rpb25EdXJhdGlvbiA9IDQ4MDsgLy9pbiBOdW1iZXIgb2YgZnJhbWVzXHJcbiAgICB0aGlzLnRyYW5zbWlzc2lvblJhdGlvID0gMC41MDtcclxuICAgIHRoaXMubG9ja2Rvd25GYWN0b3IgPSAwLjA1O1xyXG4gICAgdGhpcy5vYmV5aW5nTG9ja2Rvd24gPSAwLjk7XHJcbiAgICB0aGlzLnRvdGFsQ291bnQgPSAyNTA7XHJcbiAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5yYWRpdXMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmMgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcclxuICAgIHRoaXMuZHVyYXRpb24gPSAyNDAwO1xyXG4gICAgdGhpcy5jaXJjbGVMaXN0ID0gW107XHJcbiAgICB0aGlzLmFuaW1hdGlvbjtcclxuICAgIHRoaXMuaW5WaWV3ID0gZmFsc2U7XHJcbiAgXHJcbiAgICB0aGlzLmhlYWx0aHlDb3VudDtcclxuICAgIHRoaXMuaW5mZWN0ZWRDb3VudDtcclxuICAgIHRoaXMucmVtb3ZlZENvdW50O1xyXG4gIFxyXG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5jYW52YXMud2lkdGgvMTAwO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXBsYXktYnV0dG9uJylbdGhpcy5pZF0ub25jbGljayA9IHRoaXMucmVwbGF5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZXBsYXkke3RoaXMuaWR9YCkub25jbGljayA9IHRoaXMucmVwbGF5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrZG93bkNoZWNrYm94Jykub25jbGljayA9IHRoaXMudG9nZ2xlTG9ja2Rvd247XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RyaWN0aW9uQ2hlY2tib3gnKS5vbmNsaWNrID0gdGhpcy50b2dnbGVSZXN0cmljdGlvbjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNtaXNzaW9uUmF0aW8nKS52YWx1ZSA9IHRoaXMudHJhbnNtaXNzaW9uUmF0aW8gKiAxMDA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZmVjdGlvbkR1cmF0aW9uRW50cnknKS52YWx1ZSA9IHRoaXMuaW5mZWN0aW9uRHVyYXRpb24gLyAxMDAwO1xyXG5cclxuICAgIFxyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5mZWN0ZWRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFsdGh5Q291bnQgPSB0aGlzLnRvdGFsQ291bnQ7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVkQ291bnQgPSAwO1xyXG4gICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0luZmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBDaXJjbGUgPSBuZXcgQ2lyY2xlKHRoaXMsIHgsIHksIGR4LCBkeSwgdGhpcy5yYWRpdXMsIGlzSW5mZWN0ZWQpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jaXJjbGVMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5oYXNDb2xsaXNpb24odGhpcy5jaXJjbGVMaXN0W2pdLCB0ZW1wQ2lyY2xlKSkge1xyXG4gICAgICAgICAgICAgIHRlbXBDaXJjbGUueCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgdGVtcENpcmNsZS55ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgaiA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdC5wdXNoKHRlbXBDaXJjbGUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFNldCBzZWVkIG51bWJlciBvZiBpbmZlY3RlZFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS5pc0luZmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNpcmNsZUxpc3RbaV0uaW5mZWN0aW9uU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS5jb2xvciA9IGNvbG9yTGlzdC5pbmZlY3RlZDtcclxuICAgICAgICB0aGlzLmluZmVjdGVkQ291bnQgKz0gMTtcclxuICAgICAgICB0aGlzLmhlYWx0aHlDb3VudCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAzKSB7XHJcbiAgICAgICAgICB0aGlzLmNpcmNsZUxpc3RbaV0ueCAqPSAwLjI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChjaXJjbGUpID0+IHtcclxuICAgICAgICBjaXJjbGUudXBkYXRlKHRoaXMuY2lyY2xlTGlzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTsgLy8gdGhpcy5pbml0XHJcbiAgICB0aGlzLmFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgIC8vIFJlZnJlc2ggY2FudmFzICBcclxuICAgICAgdGhpcy5jLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5mcmFtZUNvdW50ICs9IDE7XHJcbiAgICAgIC8vVXBkYXRlIGNoYXJ0IGFuZCBzaW1cclxuICAgICAgY2hhcnRzW3RoaXMuaWRdLnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLmNpcmNsZUxpc3QuZm9yRWFjaCgoY2lyY2xlKSA9PiB7XHJcbiAgICAgICAgY2lyY2xlLnVwZGF0ZSh0aGlzLmNpcmNsZUxpc3QpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vVXBkYXRlIGRhdGFcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGhlYWx0aHkke3RoaXMuaWR9YCkuaW5uZXJIVE1MID0gdGhpcy5oZWFsdGh5Q291bnQ7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbmZlY3RlZCR7dGhpcy5pZH1gKS5pbm5lckhUTUwgPSB0aGlzLmluZmVjdGVkQ291bnQ7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZW1vdmVkJHt0aGlzLmlkfWApLmlubmVySFRNTCA9IHRoaXMucmVtb3ZlZENvdW50O1xyXG4gIFxyXG4gICAgICAvL0NoZWNrIGR1cmF0aW9uIG9mIGFuaW1hdGlvbiBhbmQgb25seSBwbGF5IGlmIGluIHZpZXdcclxuICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudCA8IHRoaXMuZHVyYXRpb24gJiYgdGhpcy5pblZpZXcpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZnJhbWVDb3VudCA+IHRoaXMuZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnRvZ2dsZUxvY2tkb3duID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2tkb3duQ2hlY2tib3gnKTtcclxuICAgICAgICB0aGlzLmlzTG9ja2Rvd24gPSBjaGVja0JveC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub2JleWluZ0xvY2tkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29iZXlpbmdMb2NrZG93bicpLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5pc0xvY2tkb3duKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDw9IHRoaXMub2JleWluZ0xvY2tkb3duKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC52ZWxvY2l0eS54ID0gZWxlbWVudC52ZWxvY2l0eS54ICogdGhpcy5sb2NrZG93bkZhY3RvcjtcclxuICAgICAgICAgICAgICBlbGVtZW50LnZlbG9jaXR5LnkgPSBlbGVtZW50LnZlbG9jaXR5LnkgKiB0aGlzLmxvY2tkb3duRmFjdG9yO1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQubG9ja2VkRG93biA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudmVsb2NpdHkueCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBlbGVtZW50LnZlbG9jaXR5LnkgPSB1dGlscy5tYXRoUmFuZG9tSW5SYW5nZUZsb2F0KC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICBlbGVtZW50LmxvY2tlZERvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMudG9nZ2xlUmVzdHJpY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1Jlc3RyaWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdHJpY3Rpb25DaGVja2JveCcpLmNoZWNrZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGRpdmlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpbS10cmF2ZWwtZGl2aWRlclwiKTtcclxuICAgICAgICBkaXZpZGVyLnN0eWxlLmRpc3BsYXkgPSAoZGl2aWRlci5zdHlsZS5kaXNwbGF5ID09PSBcIlwiKSA/IFwiYmxvY2tcIiA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGVsZW1lbnQueCA8ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpICsgMTAgJiYgZWxlbWVudC54ID4gKHRoaXMuY2FudmFzLndpZHRoIC8gMikgLSAxMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnggLT0gMjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdGhpcy5yZXBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09IDEpIHtcclxuICAgICAgICAgIHRoaXMudHJhbnNtaXNzaW9uUmF0aW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNtaXNzaW9uUmF0aW8nKS52YWx1ZSAvIDEwMDtcclxuICAgICAgICAgIHRoaXMuaW5mZWN0aW9uRHVyYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mZWN0aW9uRHVyYXRpb25FbnRyeScpLnZhbHVlICogMTAwMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09IDIpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrZG93bkNoZWNrYm94JykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICB0aGlzLmNhbnZhcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgY2hhcnRzW3RoaXMuaWRdLmMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNoYXJ0c1t0aGlzLmlkXS50aW1lID0gMDtcclxuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnJlc2l6ZUNhbnZhc1RvRGlzcGxheVNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoO1xyXG4gICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgfSIsIi8vIFZhcmlhYmxlc1xuaW1wb3J0IFNpbXVsYXRpb24gZnJvbSAnLi9TaW11bGF0aW9uJztcbmltcG9ydCBBcmVhY2hhcnQgZnJvbSAnLi9BcmVhY2hhcnQnO1xuXG5sZXQgc2ltcyA9IFtdO1xuZXhwb3J0IGxldCBjaGFydHMgPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgc2ltc1tpXSA9IG5ldyBTaW11bGF0aW9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzaW11bGF0aW9uJHtpfWApLCBpKTtcbiAgc2ltc1tpXS5pbml0KCk7XG4gIGNoYXJ0c1tpXSA9IG5ldyBBcmVhY2hhcnQoc2ltc1tpXSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXJ0JHtpfWApKTtcbiAgY2hhcnRzW2ldLmluaXQoKTtcbn1cblxuc2ltc1swXS5pblZpZXcgPSB0cnVlO1xuc2ltc1swXS5pbml0KCk7XG5zaW1zWzBdLmFuaW1hdGUoKTtcblxuc2ltc1sxXS50cmFuc21pc3Npb25SYXRpbyA9IDAuMjU7XG5cbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHtcbiAgc2ltcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IDUwMCAmJlxuICAgICAgICBlbGVtZW50LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPiA1MCAmJlxuICAgICAgICAhZWxlbWVudC5pblZpZXcpIHtcbiAgICAgIGVsZW1lbnQuaW5WaWV3ID0gdHJ1ZTtcbiAgICAgIGVsZW1lbnQuYW5pbWF0ZSgpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBlbGVtZW50LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCA1MCAmJlxuICAgICAgZWxlbWVudC5pblZpZXdcbiAgICAgICkge1xuICAgICAgZWxlbWVudC5pblZpZXcgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwicGF1c2UgXCIgKyBlbGVtZW50LmluVmlldyk7XG4gICAgICBcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGNvbG9yTGlzdCA9IHtcclxuICAgIGhlYWx0aHk6ICcjNjNjMmRiJyxcclxuICAgIGluZmVjdGVkOiAnI2Y2NjY1NCcsXHJcbiAgICByZW1vdmVkOiAnZ3JheScsXHJcbiAgfTsiLCJleHBvcnQgZnVuY3Rpb24gaGFzQ29sbGlzaW9uKGEsIGIpIHtcclxuICAgIGlmIChNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LCAyKSArIE1hdGgucG93KGEueSAtIGIueSwgMikpIDw9IGEucmFkaXVzICsgYi5yYWRpdXMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0aFJhbmRvbUluUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0aFJhbmRvbUluUmFuZ2VGbG9hdChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==