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
        this.time += this.width / 60 / (sim.duration / 1000);
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
      //Update chart and sim
      _app_js__WEBPACK_IMPORTED_MODULE_2__["charts"][this.id].update();
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
  charts[i] = new _Areachart__WEBPACK_IMPORTED_MODULE_1__["default"](sims[i], document.getElementById(`chart${i}`));
  charts[i].init();
}

sims[0].inView = true;
sims[0].init();
sims[0].animate();

sims[1].transmissionRatio = 0.25;

window.onscroll = () => {
  sims.forEach((element) => {
    if (element.canvas.getBoundingClientRect().top < 500 && !element.inView) {
      element.init();
      element.animate();
      element.inView = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQXJlYWNoYXJ0LmpzIiwid2VicGFjazovLy8uL2pzL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9TaW11bGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb2xvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBeUM7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFTO0FBQ3BDO0FBQ0E7O0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDhDQUFNO0FBQ2QsUUFBUSw4Q0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7OztBQ2xLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3NDO0FBQ0Y7O0FBRXBDO0FBQ087O0FBRVAsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixtREFBVSxzQ0FBc0MsRUFBRTtBQUNsRSxrQkFBa0Isa0RBQVMsMENBQTBDLEVBQUU7QUFDdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7Y29sb3JMaXN0fSBmcm9tICcuL2NvbG9yTGlzdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmVhY2hhcnQoc2ltLCBjaGFydCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjaGFydDtcclxuICAgIHRoaXMuYyA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLndpZHRoID0gMzAwO1xyXG4gIFxyXG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50aW1lIDwgdGhpcy5jYW52YXMud2lkdGgpIHtcclxuICAgICAgICAvLyBQbG90IGhlYWx0aHlcclxuICAgICAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jLnJlY3QodGhpcy50aW1lLCAwLCAxLCBzaW0uaGVhbHRoeUNvdW50IC8gc2ltLnRvdGFsQ291bnQgKiB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSBjb2xvckxpc3QuaGVhbHRoeTtcclxuICAgICAgICB0aGlzLmMuZmlsbCgpO1xyXG4gIFxyXG4gICAgICAgIC8vIFBsb3QgUmVtb3ZlZFxyXG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmMucmVjdCh0aGlzLnRpbWUsIHRoaXMuY2FudmFzLmhlaWdodCAtIChzaW0ucmVtb3ZlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpICogdGhpcy5jYW52YXMuaGVpZ2h0IC0gKHNpbS5pbmZlY3RlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpICogdGhpcy5jYW52YXMuaGVpZ2h0LCAxLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiBzaW0ucmVtb3ZlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpO1xyXG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSBjb2xvckxpc3QucmVtb3ZlZDtcclxuICAgICAgICB0aGlzLmMuZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuYy5maWxsKCk7XHJcbiAgXHJcbiAgICAgICAgLy8gUGxvdCBJbmZlY3RlZFxyXG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmMucmVjdCh0aGlzLnRpbWUsIHRoaXMuY2FudmFzLmhlaWdodCAtIChzaW0uaW5mZWN0ZWRDb3VudCAvIHNpbS50b3RhbENvdW50KSAqIHRoaXMuY2FudmFzLmhlaWdodCwgMSwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmMuZmlsbFN0eWxlID0gY29sb3JMaXN0LmluZmVjdGVkO1xyXG4gICAgICAgIHRoaXMuYy5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jLmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgICB0aGlzLnRpbWUgKz0gdGhpcy53aWR0aCAvIDYwIC8gKHNpbS5kdXJhdGlvbiAvIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0iLCJpbXBvcnQge2NvbG9yTGlzdH0gZnJvbSAnLi9jb2xvckxpc3QuanMnO1xyXG5cclxuZnVuY3Rpb24gcm90YXRlKHZlbG9jaXR5LCBhbmdsZSkge1xyXG4gICAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XHJcbiAgICAgIHg6IHZlbG9jaXR5LnggKiBNYXRoLmNvcyhhbmdsZSkgLSB2ZWxvY2l0eS55ICogTWF0aC5zaW4oYW5nbGUpLFxyXG4gICAgICB5OiB2ZWxvY2l0eS54ICogTWF0aC5zaW4oYW5nbGUpICsgdmVsb2NpdHkueSAqIE1hdGguY29zKGFuZ2xlKSxcclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gcm90YXRlZFZlbG9jaXRpZXM7XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpcmNsZShzaW0sIHgsIHksIGR4LCBkeSwgcmFkaXVzLCBpc0luZmVjdGVkKSB7XHJcbiAgICB0aGlzLnNpbSA9IHNpbTtcclxuICAgIHRoaXMucmFkaXVzID0gc2ltLnJhZGl1cztcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy52ZWxvY2l0eSA9IHtcclxuICAgICAgeDogZHgsXHJcbiAgICAgIHk6IGR5LFxyXG4gICAgfTtcclxuICAgIHRoaXMuaXNJbmZlY3RlZCA9IGlzSW5mZWN0ZWQ7XHJcbiAgICB0aGlzLmlzSGVhbHRoeSA9ICFpc0luZmVjdGVkO1xyXG4gICAgdGhpcy5jb2xvciA9IHRoaXMuaXNJbmZlY3RlZCA/IGNvbG9yTGlzdC5pbmZlY3RlZCA6IGNvbG9yTGlzdC5oZWFsdGh5O1xyXG4gICAgdGhpcy5pbmZlY3Rpb25GcmFtZSA9IDA7XHJcbiAgICB0aGlzLmlzUmVtb3ZlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5tYXNzID0gMTtcclxuICAgIHRoaXMub3BhY2l0eSA9IDE7XHJcbiAgICB0aGlzLmxvY2tlZERvd24gPSBmYWxzZTtcclxuICBcclxuICBcclxuICAgIHRoaXMuZHJhdyA9ICgpID0+IHtcclxuICAgICAgc2ltLmMuYmVnaW5QYXRoKCk7XHJcbiAgICAgIHNpbS5jLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XHJcbiAgICAgIHNpbS5jLmdsb2JhbEFscGhhID0gdGhpcy5vcGFjaXR5O1xyXG4gICAgICBzaW0uYy5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICBzaW0uYy5maWxsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuY2hlY2tXYWxsQ29sbGlzaW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICgodGhpcy54ICsgdGhpcy5yYWRpdXMpID4gdGhpcy5zaW0uY2FudmFzLndpZHRoIHx8ICh0aGlzLnggLSB0aGlzLnJhZGl1cykgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMueSArIHRoaXMucmFkaXVzKSA+IHRoaXMuc2ltLmNhbnZhcy5oZWlnaHQgfHwgKHRoaXMueSAtIHRoaXMucmFkaXVzKSA8IDApIHtcclxuICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLnZlbG9jaXR5Lnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNpbS5pc1Jlc3RyaWN0ZWQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnggPCB0aGlzLnNpbS5jYW52YXMud2lkdGggLyAyICYmICh0aGlzLnggKyB0aGlzLnJhZGl1cykgPiAodGhpcy5zaW0uY2FudmFzLndpZHRoIC8gMiApIC0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMueCA+IHRoaXMuc2ltLmNhbnZhcy53aWR0aCAvIDIgJiYgKHRoaXMueCAtIHRoaXMucmFkaXVzKSA8ICh0aGlzLnNpbS5jYW52YXMud2lkdGggLyAyKSArIDIpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgdGhpcy5jaGVja0NpcmNsZUNvbGxpc2lvbiA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICBpZiAoTWF0aC5zcXJ0KE1hdGgucG93KHRoaXMueCAtIHRhcmdldC54LCAyKSArIE1hdGgucG93KHRoaXMueSAtIHRhcmdldC55LCAyKSkgPD0gdGhpcy5yYWRpdXMgKyB0YXJnZXQucmFkaXVzKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgdGhpcy5yZXNvbHZlQ29sbGlzaW9uID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHhWZWxvY2l0eURpZmYgPSB0aGlzLnZlbG9jaXR5LnggLSB0YXJnZXQudmVsb2NpdHkueDtcclxuICAgICAgICBjb25zdCB5VmVsb2NpdHlEaWZmID0gdGhpcy52ZWxvY2l0eS55IC0gdGFyZ2V0LnZlbG9jaXR5Lnk7XHJcblxyXG4gICAgICAgIGNvbnN0IHhEaXN0ID0gdGFyZ2V0LnggLSB0aGlzLng7XHJcbiAgICAgICAgY29uc3QgeURpc3QgPSB0YXJnZXQueSAtIHRoaXMueTtcclxuXHJcbiAgICAgICAgLy8gUHJldmVudCBhY2NpZGVudGFsIG92ZXJsYXAgb2YgcGFydGljbGVzXHJcbiAgICAgICAgaWYgKHhWZWxvY2l0eURpZmYgKiB4RGlzdCArIHlWZWxvY2l0eURpZmYgKiB5RGlzdCA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIEdyYWIgYW5nbGUgYmV0d2VlbiB0aGUgdHdvIGNvbGxpZGluZyBwYXJ0aWNsZXNcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSAtTWF0aC5hdGFuMih0YXJnZXQueSAtIHRoaXMueSwgdGFyZ2V0LnggLSB0aGlzLngpO1xyXG5cclxuICAgICAgICAgICAgLy8gU3RvcmUgbWFzcyBpbiB2YXIgZm9yIGJldHRlciByZWFkYWJpbGl0eSBpbiBjb2xsaXNpb24gZXF1YXRpb25cclxuICAgICAgICAgICAgY29uc3QgbTEgPSB0aGlzLm1hc3M7XHJcbiAgICAgICAgICAgIGNvbnN0IG0yID0gdGFyZ2V0Lm1hc3M7XHJcblxyXG4gICAgICAgICAgICAvLyBWZWxvY2l0eSBiZWZvcmUgZXF1YXRpb25cclxuICAgICAgICAgICAgY29uc3QgdTEgPSByb3RhdGUodGhpcy52ZWxvY2l0eSwgYW5nbGUpO1xyXG4gICAgICAgICAgICBjb25zdCB1MiA9IHJvdGF0ZSh0YXJnZXQudmVsb2NpdHksIGFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFZlbG9jaXR5IGFmdGVyIDFkIGNvbGxpc2lvbiBlcXVhdGlvblxyXG4gICAgICAgICAgICBjb25zdCB2MSA9IHtcclxuICAgICAgICAgICAgeDogdTEueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUyLnggKiAyICogbTIgLyAobTEgKyBtMiksXHJcbiAgICAgICAgICAgIHk6IHUxLnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgdjIgPSB7XHJcbiAgICAgICAgICAgIHg6IHUyLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1MS54ICogMiAqIG0yIC8gKG0xICsgbTIpLFxyXG4gICAgICAgICAgICB5OiB1Mi55XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBGaW5hbCB2ZWxvY2l0eSBhZnRlciByb3RhdGluZyBheGlzIGJhY2sgdG8gb3JpZ2luYWwgbG9jYXRpb25cclxuICAgICAgICAgICAgY29uc3QgdkZpbmFsMSA9IHJvdGF0ZSh2MSwgLWFuZ2xlKTtcclxuICAgICAgICAgICAgY29uc3QgdkZpbmFsMiA9IHJvdGF0ZSh2MiwgLWFuZ2xlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFN3YXAgcGFydGljbGUgdmVsb2NpdGllcyBmb3IgcmVhbGlzdGljIGJvdW5jZSBlZmZlY3RcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHRoaXMubG9ja2VkRG93biA/IHZGaW5hbDEueCAqIDAuMDUgOiB2RmluYWwxLng7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMubG9ja2VkRG93biA/IHZGaW5hbDEueSAqIDAuMDUgOiB2RmluYWwxLnk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXQudmVsb2NpdHkueCA9IHRhcmdldC5sb2NrZWREb3duID8gdkZpbmFsMi54ICogMC4wNSA6IHZGaW5hbDIueDtcclxuICAgICAgICAgICAgdGFyZ2V0LnZlbG9jaXR5LnkgPSB0YXJnZXQubG9ja2VkRG93biA/IHZGaW5hbDIueCAqIDAuMDUgOiB2RmluYWwyLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRoaXMudXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIEJhc2ljIG1vdmVtZW50XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudmVsb2NpdHkueDtcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgICAgIHRoaXMuaW5mZWN0aW9uRnJhbWUgPSB0aGlzLmlzSW5mZWN0ZWQgPyB0aGlzLmluZmVjdGlvbkZyYW1lICsgMSA6IHRoaXMuaW5mZWN0aW9uRnJhbWU7XHJcbiAgICAgICAgLy8gV2FsbCBDb2xsaXNpb25cclxuICAgICAgICB0aGlzLmNoZWNrV2FsbENvbGxpc2lvbigpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gRGV2ZWxvcCBpbW11bml0eSBvciBkaWVcclxuICAgICAgICBpZiAodGhpcy5pc0luZmVjdGVkICYmIHRoaXMuaW5mZWN0aW9uRnJhbWUgPiBzaW0uaW5mZWN0aW9uRHVyYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvckxpc3QucmVtb3ZlZDtcclxuICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICAgIHRoaXMuaXNJbmZlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pc1JlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgc2ltLmluZmVjdGVkQ291bnQgLT0gMTtcclxuICAgICAgICAgIHNpbS5yZW1vdmVkQ291bnQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBCYWxsIENvbGxpc2lvbiBjaGVja1xyXG4gICAgICAgIHNpbS5jaXJjbGVMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzICE9IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDaXJjbGVDb2xsaXNpb24oZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICBpZiAoKHRoaXMuaXNJbmZlY3RlZCAmJiAhZWxlbWVudC5pc0luZmVjdGVkKSB8fFxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQuaXNJbmZlY3RlZCAmJiAhdGhpcy5pc0luZmVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmVtb3ZlZCAmJiAhZWxlbWVudC5pc1JlbW92ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBzaW0udHJhbnNtaXNzaW9uUmF0aW8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JMaXN0LmluZmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJbmZlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvbkZyYW1lICs9IDE7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNvbG9yID0gY29sb3JMaXN0LmluZmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaXNJbmZlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc0hlYWx0aHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmluZmVjdGlvbkZyYW1lICs9IDE7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBzaW0uaGVhbHRoeUNvdW50IC09IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2ltLmluZmVjdGVkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLnJlc29sdmVDb2xsaXNpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICB9O1xyXG4gIH1cclxuXHJcbiIsImltcG9ydCBDaXJjbGUgZnJvbSAnLi9DaXJjbGUnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtjaGFydHN9IGZyb20gJy4vYXBwLmpzJztcclxuaW1wb3J0IHtjb2xvckxpc3R9IGZyb20gJy4vY29sb3JMaXN0LmpzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW11bGF0aW9uKGNhbnZhcywgaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMuaXNMb2NrZG93biA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1Jlc3RyaWN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMucmVzdHJpY3Rpb25SYXRlID0gMTtcclxuICAgIHRoaXMuaW5mZWN0aW9uRHVyYXRpb24gPSA0ODA7IC8vaW4gTnVtYmVyIG9mIGZyYW1lc1xyXG4gICAgdGhpcy50cmFuc21pc3Npb25SYXRpbyA9IDAuNTA7XHJcbiAgICB0aGlzLmxvY2tkb3duRmFjdG9yID0gMC4wNTtcclxuICAgIHRoaXMub2JleWluZ0xvY2tkb3duID0gMC45O1xyXG4gICAgdGhpcy50b3RhbENvdW50ID0gMjUwO1xyXG4gICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgIHRoaXMucmFkaXVzID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMuc3RhcnQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmR1cmF0aW9uID0gMzAwO1xyXG4gICAgdGhpcy5jaXJjbGVMaXN0ID0gW107XHJcbiAgICB0aGlzLmFuaW1hdGlvbjtcclxuICAgIHRoaXMuaW5WaWV3ID0gZmFsc2U7XHJcbiAgXHJcbiAgICB0aGlzLmhlYWx0aHlDb3VudDtcclxuICAgIHRoaXMuaW5mZWN0ZWRDb3VudDtcclxuICAgIHRoaXMucmVtb3ZlZENvdW50O1xyXG4gIFxyXG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5jYW52YXMud2lkdGgvMTAwO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXBsYXktYnV0dG9uJylbdGhpcy5pZF0ub25jbGljayA9IHRoaXMucmVwbGF5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZXBsYXkke3RoaXMuaWR9YCkub25jbGljayA9IHRoaXMucmVwbGF5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrZG93bkNoZWNrYm94Jykub25jbGljayA9IHRoaXMudG9nZ2xlTG9ja2Rvd247XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RyaWN0aW9uQ2hlY2tib3gnKS5vbmNsaWNrID0gdGhpcy50b2dnbGVSZXN0cmljdGlvbjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNtaXNzaW9uUmF0aW8nKS52YWx1ZSA9IHRoaXMudHJhbnNtaXNzaW9uUmF0aW8gKiAxMDA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZmVjdGlvbkR1cmF0aW9uRW50cnknKS52YWx1ZSA9IHRoaXMuaW5mZWN0aW9uRHVyYXRpb24gLyAxMDAwO1xyXG5cclxuICAgIFxyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5mZWN0ZWRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFsdGh5Q291bnQgPSB0aGlzLnRvdGFsQ291bnQ7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVkQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0luZmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBDaXJjbGUgPSBuZXcgQ2lyY2xlKHRoaXMsIHgsIHksIGR4LCBkeSwgdGhpcy5yYWRpdXMsIGlzSW5mZWN0ZWQpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jaXJjbGVMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5oYXNDb2xsaXNpb24odGhpcy5jaXJjbGVMaXN0W2pdLCB0ZW1wQ2lyY2xlKSkge1xyXG4gICAgICAgICAgICAgIHRlbXBDaXJjbGUueCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgdGVtcENpcmNsZS55ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgaiA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdC5wdXNoKHRlbXBDaXJjbGUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFNldCBzZWVkIG51bWJlciBvZiBpbmZlY3RlZFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS5pc0luZmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNpcmNsZUxpc3RbaV0uaW5mZWN0aW9uU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS5jb2xvciA9IGNvbG9yTGlzdC5pbmZlY3RlZDtcclxuICAgICAgICB0aGlzLmluZmVjdGVkQ291bnQgKz0gMTtcclxuICAgICAgICB0aGlzLmhlYWx0aHlDb3VudCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAzKSB7XHJcbiAgICAgICAgICB0aGlzLmNpcmNsZUxpc3RbaV0ueCAqPSAwLjI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChjaXJjbGUpID0+IHtcclxuICAgICAgICBjaXJjbGUudXBkYXRlKHRoaXMuY2lyY2xlTGlzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTsgLy8gdGhpcy5pbml0XHJcbiAgICB0aGlzLmFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgIC8vIFJlZnJlc2ggY2FudmFzICBcclxuICAgICAgdGhpcy5jLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgLy9VcGRhdGUgY2hhcnQgYW5kIHNpbVxyXG4gICAgICBjaGFydHNbdGhpcy5pZF0udXBkYXRlKCk7XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChjaXJjbGUpID0+IHtcclxuICAgICAgICBjaXJjbGUudXBkYXRlKHRoaXMuY2lyY2xlTGlzdCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9VcGRhdGUgZGF0YVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaGVhbHRoeSR7dGhpcy5pZH1gKS5pbm5lckhUTUwgPSB0aGlzLmhlYWx0aHlDb3VudDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGluZmVjdGVkJHt0aGlzLmlkfWApLmlubmVySFRNTCA9IHRoaXMuaW5mZWN0ZWRDb3VudDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlbW92ZWQke3RoaXMuaWR9YCkuaW5uZXJIVE1MID0gdGhpcy5yZW1vdmVkQ291bnQ7XHJcbiAgXHJcbiAgICAgIC8vQ2hlY2sgZHVyYXRpb24gb2YgYW5pbWF0aW9uXHJcbiAgICAgIGlmIChEYXRlLm5vdygpIC0gdGhpcy5zdGFydCA8IHRoaXMuZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMudG9nZ2xlTG9ja2Rvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ja2Rvd25DaGVja2JveCcpO1xyXG4gICAgICAgIHRoaXMuaXNMb2NrZG93biA9IGNoZWNrQm94LmNoZWNrZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYmV5aW5nTG9ja2Rvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JleWluZ0xvY2tkb3duJykudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmlzTG9ja2Rvd24pIHtcclxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPD0gdGhpcy5vYmV5aW5nTG9ja2Rvd24pIHtcclxuICAgICAgICAgICAgICBlbGVtZW50LnZlbG9jaXR5LnggPSBlbGVtZW50LnZlbG9jaXR5LnggKiB0aGlzLmxvY2tkb3duRmFjdG9yO1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQudmVsb2NpdHkueSA9IGVsZW1lbnQudmVsb2NpdHkueSAqIHRoaXMubG9ja2Rvd25GYWN0b3I7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5sb2NrZWREb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC52ZWxvY2l0eS54ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2VGbG9hdCgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudmVsb2NpdHkueSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQubG9ja2VkRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgdGhpcy50b2dnbGVSZXN0cmljdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmlzUmVzdHJpY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0cmljdGlvbkNoZWNrYm94JykuY2hlY2tlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgZGl2aWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXRyYXZlbC1kaXZpZGVyXCIpO1xyXG4gICAgICAgIGRpdmlkZXIuc3R5bGUuZGlzcGxheSA9IChkaXZpZGVyLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIpID8gXCJibG9ja1wiIDogXCJcIjtcclxuICAgICAgICB0aGlzLmNpcmNsZUxpc3QuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC54IDwgKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAxMCAmJiBlbGVtZW50LnggPiAodGhpcy5jYW52YXMud2lkdGggLyAyKSAtIDEwKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQueCAtPSAyMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLnJlcGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy50cmFuc21pc3Npb25SYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc21pc3Npb25SYXRpbycpLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgdGhpcy5pbmZlY3Rpb25EdXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZlY3Rpb25EdXJhdGlvbkVudHJ5JykudmFsdWUgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gMikge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2tkb3duQ2hlY2tib3gnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHRoaXMuY2FudmFzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBjaGFydHNbdGhpcy5pZF0uYy5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY2hhcnRzW3RoaXMuaWRdLnRpbWUgPSAwO1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICB9IiwiLy8gVmFyaWFibGVzXG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL1NpbXVsYXRpb24nO1xuaW1wb3J0IEFyZWFjaGFydCBmcm9tICcuL0FyZWFjaGFydCc7XG5cbmxldCBzaW1zID0gW107XG5leHBvcnQgbGV0IGNoYXJ0cyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICBzaW1zW2ldID0gbmV3IFNpbXVsYXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNpbXVsYXRpb24ke2l9YCksIGkpO1xuICBjaGFydHNbaV0gPSBuZXcgQXJlYWNoYXJ0KHNpbXNbaV0sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGFydCR7aX1gKSk7XG4gIGNoYXJ0c1tpXS5pbml0KCk7XG59XG5cbnNpbXNbMF0uaW5WaWV3ID0gdHJ1ZTtcbnNpbXNbMF0uaW5pdCgpO1xuc2ltc1swXS5hbmltYXRlKCk7XG5cbnNpbXNbMV0udHJhbnNtaXNzaW9uUmF0aW8gPSAwLjI1O1xuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gIHNpbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCA1MDAgJiYgIWVsZW1lbnQuaW5WaWV3KSB7XG4gICAgICBlbGVtZW50LmluaXQoKTtcbiAgICAgIGVsZW1lbnQuYW5pbWF0ZSgpO1xuICAgICAgZWxlbWVudC5pblZpZXcgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgY29sb3JMaXN0ID0ge1xyXG4gICAgaGVhbHRoeTogJyM2M2MyZGInLFxyXG4gICAgaW5mZWN0ZWQ6ICcjZjY2NjU0JyxcclxuICAgIHJlbW92ZWQ6ICdncmF5JyxcclxuICB9OyIsImV4cG9ydCBmdW5jdGlvbiBoYXNDb2xsaXNpb24oYSwgYikge1xyXG4gICAgaWYgKE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsIDIpICsgTWF0aC5wb3coYS55IC0gYi55LCAyKSkgPD0gYS5yYWRpdXMgKyBiLnJhZGl1cykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRoUmFuZG9tSW5SYW5nZShtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRoUmFuZG9tSW5SYW5nZUZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9