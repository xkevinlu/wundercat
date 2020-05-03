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
    this.infectionStart = this.isInfected ? Date.now() : undefined;
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
        // Wall Collision
        this.checkWallCollision();
    
        // Develop immunity or die
        if (this.isInfected && (Date.now() - this.infectionStart) > sim.infectionDuration) {
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
                    this.infectionStart = Date.now();
    
                    element.color = _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].infected;
                    element.isInfected = true;
                    element.isHealthy = false;
                    element.infectionStart = Date.now();
    
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
    this.infectionDuration = 5000;
    this.transmissionRatio = 0.50;
    this.lockdownFactor = 0.05;
    this.obeyingLockdown = 0.9;
    this.totalCount = 250;
    this.speed = 1;
    this.canvas = canvas;
    this.radius = undefined;
    this.c = this.canvas.getContext('2d');
    this.start = undefined;
    this.duration = 40000;
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
    if (element.canvas.getBoundingClientRect().top < 400 && !element.inView) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQXJlYWNoYXJ0LmpzIiwid2VicGFjazovLy8uL2pzL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9TaW11bGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb2xvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBeUM7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFTO0FBQ3BDO0FBQ0E7O0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsOENBQU07QUFDZCxRQUFRLDhDQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDc0M7QUFDRjs7QUFFcEM7QUFDTzs7QUFFUCxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLG1EQUFVLHNDQUFzQyxFQUFFO0FBQ2xFLGtCQUFrQixrREFBUywwQ0FBMEMsRUFBRTtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHtjb2xvckxpc3R9IGZyb20gJy4vY29sb3JMaXN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZWFjaGFydChzaW0sIGNoYXJ0KSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNoYXJ0O1xyXG4gICAgdGhpcy5jID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMud2lkdGggPSAzMDA7XHJcbiAgXHJcbiAgICB0aGlzLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRpbWUgPCB0aGlzLmNhbnZhcy53aWR0aCkge1xyXG4gICAgICAgIC8vIFBsb3QgaGVhbHRoeVxyXG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmMucmVjdCh0aGlzLnRpbWUsIDAsIDEsIHNpbS5oZWFsdGh5Q291bnQgLyBzaW0udG90YWxDb3VudCAqIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jLmZpbGxTdHlsZSA9IGNvbG9yTGlzdC5oZWFsdGh5O1xyXG4gICAgICAgIHRoaXMuYy5maWxsKCk7XHJcbiAgXHJcbiAgICAgICAgLy8gUGxvdCBSZW1vdmVkXHJcbiAgICAgICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuYy5yZWN0KHRoaXMudGltZSwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gKHNpbS5yZW1vdmVkQ291bnQgLyBzaW0udG90YWxDb3VudCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAoc2ltLmluZmVjdGVkQ291bnQgLyBzaW0udG90YWxDb3VudCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQsIDEsIHRoaXMuY2FudmFzLmhlaWdodCAqIHNpbS5yZW1vdmVkQ291bnQgLyBzaW0udG90YWxDb3VudCk7XHJcbiAgICAgICAgdGhpcy5jLmZpbGxTdHlsZSA9IGNvbG9yTGlzdC5yZW1vdmVkO1xyXG4gICAgICAgIHRoaXMuYy5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy5jLmZpbGwoKTtcclxuICBcclxuICAgICAgICAvLyBQbG90IEluZmVjdGVkXHJcbiAgICAgICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuYy5yZWN0KHRoaXMudGltZSwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gKHNpbS5pbmZlY3RlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpICogdGhpcy5jYW52YXMuaGVpZ2h0LCAxLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSBjb2xvckxpc3QuaW5mZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5jLmZpbGwoKTtcclxuICAgICAgICB0aGlzLmMuZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMudGltZSArPSB0aGlzLndpZHRoIC8gNjAgLyAoc2ltLmR1cmF0aW9uIC8gMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSIsImltcG9ydCB7Y29sb3JMaXN0fSBmcm9tICcuL2NvbG9yTGlzdC5qcyc7XHJcblxyXG5mdW5jdGlvbiByb3RhdGUodmVsb2NpdHksIGFuZ2xlKSB7XHJcbiAgICBjb25zdCByb3RhdGVkVmVsb2NpdGllcyA9IHtcclxuICAgICAgeDogdmVsb2NpdHkueCAqIE1hdGguY29zKGFuZ2xlKSAtIHZlbG9jaXR5LnkgKiBNYXRoLnNpbihhbmdsZSksXHJcbiAgICAgIHk6IHZlbG9jaXR5LnggKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eS55ICogTWF0aC5jb3MoYW5nbGUpLFxyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2lyY2xlKHNpbSwgeCwgeSwgZHgsIGR5LCByYWRpdXMsIGlzSW5mZWN0ZWQpIHtcclxuICAgIHRoaXMuc2ltID0gc2ltO1xyXG4gICAgdGhpcy5yYWRpdXMgPSBzaW0ucmFkaXVzO1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnZlbG9jaXR5ID0ge1xyXG4gICAgICB4OiBkeCxcclxuICAgICAgeTogZHksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5pc0luZmVjdGVkID0gaXNJbmZlY3RlZDtcclxuICAgIHRoaXMuaXNIZWFsdGh5ID0gIWlzSW5mZWN0ZWQ7XHJcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5pc0luZmVjdGVkID8gY29sb3JMaXN0LmluZmVjdGVkIDogY29sb3JMaXN0LmhlYWx0aHk7XHJcbiAgICB0aGlzLmluZmVjdGlvblN0YXJ0ID0gdGhpcy5pc0luZmVjdGVkID8gRGF0ZS5ub3coKSA6IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuaXNSZW1vdmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLm1hc3MgPSAxO1xyXG4gICAgdGhpcy5vcGFjaXR5ID0gMTtcclxuICAgIHRoaXMubG9ja2VkRG93biA9IGZhbHNlO1xyXG4gIFxyXG4gIFxyXG4gICAgdGhpcy5kcmF3ID0gKCkgPT4ge1xyXG4gICAgICBzaW0uYy5iZWdpblBhdGgoKTtcclxuICAgICAgc2ltLmMuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcclxuICAgICAgc2ltLmMuZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgIHNpbS5jLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgIHNpbS5jLmZpbGwoKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5jaGVja1dhbGxDb2xsaXNpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnggKyB0aGlzLnJhZGl1cykgPiB0aGlzLnNpbS5jYW52YXMud2lkdGggfHwgKHRoaXMueCAtIHRoaXMucmFkaXVzKSA8IDApIHtcclxuICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodGhpcy55ICsgdGhpcy5yYWRpdXMpID4gdGhpcy5zaW0uY2FudmFzLmhlaWdodCB8fCAodGhpcy55IC0gdGhpcy5yYWRpdXMpIDwgMCkge1xyXG4gICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMudmVsb2NpdHkueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2ltLmlzUmVzdHJpY3RlZCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMueCA8IHRoaXMuc2ltLmNhbnZhcy53aWR0aCAvIDIgJiYgKHRoaXMueCArIHRoaXMucmFkaXVzKSA+ICh0aGlzLnNpbS5jYW52YXMud2lkdGggLyAyICkgLSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5zaW0uY2FudmFzLndpZHRoIC8gMiAmJiAodGhpcy54IC0gdGhpcy5yYWRpdXMpIDwgKHRoaXMuc2ltLmNhbnZhcy53aWR0aCAvIDIpICsgMikge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuXHJcbiAgICB0aGlzLmNoZWNrQ2lyY2xlQ29sbGlzaW9uID0gKHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGlmIChNYXRoLnNxcnQoTWF0aC5wb3codGhpcy54IC0gdGFyZ2V0LngsIDIpICsgTWF0aC5wb3codGhpcy55IC0gdGFyZ2V0LnksIDIpKSA8PSB0aGlzLnJhZGl1cyArIHRhcmdldC5yYWRpdXMpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICB0aGlzLnJlc29sdmVDb2xsaXNpb24gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeFZlbG9jaXR5RGlmZiA9IHRoaXMudmVsb2NpdHkueCAtIHRhcmdldC52ZWxvY2l0eS54O1xyXG4gICAgICAgIGNvbnN0IHlWZWxvY2l0eURpZmYgPSB0aGlzLnZlbG9jaXR5LnkgLSB0YXJnZXQudmVsb2NpdHkueTtcclxuXHJcbiAgICAgICAgY29uc3QgeERpc3QgPSB0YXJnZXQueCAtIHRoaXMueDtcclxuICAgICAgICBjb25zdCB5RGlzdCA9IHRhcmdldC55IC0gdGhpcy55O1xyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgb3ZlcmxhcCBvZiBwYXJ0aWNsZXNcclxuICAgICAgICBpZiAoeFZlbG9jaXR5RGlmZiAqIHhEaXN0ICsgeVZlbG9jaXR5RGlmZiAqIHlEaXN0ID49IDApIHtcclxuICAgICAgICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBhcnRpY2xlc1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IC1NYXRoLmF0YW4yKHRhcmdldC55IC0gdGhpcy55LCB0YXJnZXQueCAtIHRoaXMueCk7XHJcblxyXG4gICAgICAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxyXG4gICAgICAgICAgICBjb25zdCBtMSA9IHRoaXMubWFzcztcclxuICAgICAgICAgICAgY29uc3QgbTIgPSB0YXJnZXQubWFzcztcclxuXHJcbiAgICAgICAgICAgIC8vIFZlbG9jaXR5IGJlZm9yZSBlcXVhdGlvblxyXG4gICAgICAgICAgICBjb25zdCB1MSA9IHJvdGF0ZSh0aGlzLnZlbG9jaXR5LCBhbmdsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHUyID0gcm90YXRlKHRhcmdldC52ZWxvY2l0eSwgYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gVmVsb2NpdHkgYWZ0ZXIgMWQgY29sbGlzaW9uIGVxdWF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHYxID0ge1xyXG4gICAgICAgICAgICB4OiB1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSxcclxuICAgICAgICAgICAgeTogdTEueVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCB2MiA9IHtcclxuICAgICAgICAgICAgeDogdTIueCAqIChtMSAtIG0yKSAvIChtMSArIG0yKSArIHUxLnggKiAyICogbTIgLyAobTEgKyBtMiksXHJcbiAgICAgICAgICAgIHk6IHUyLnlcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEZpbmFsIHZlbG9jaXR5IGFmdGVyIHJvdGF0aW5nIGF4aXMgYmFjayB0byBvcmlnaW5hbCBsb2NhdGlvblxyXG4gICAgICAgICAgICBjb25zdCB2RmluYWwxID0gcm90YXRlKHYxLCAtYW5nbGUpO1xyXG4gICAgICAgICAgICBjb25zdCB2RmluYWwyID0gcm90YXRlKHYyLCAtYW5nbGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gU3dhcCBwYXJ0aWNsZSB2ZWxvY2l0aWVzIGZvciByZWFsaXN0aWMgYm91bmNlIGVmZmVjdFxyXG5cclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5sb2NrZWREb3duID8gdkZpbmFsMS54ICogMC4wNSA6IHZGaW5hbDEueDtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gdGhpcy5sb2NrZWREb3duID8gdkZpbmFsMS55ICogMC4wNSA6IHZGaW5hbDEueTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldC52ZWxvY2l0eS54ID0gdGFyZ2V0LmxvY2tlZERvd24gPyB2RmluYWwyLnggKiAwLjA1IDogdkZpbmFsMi54O1xyXG4gICAgICAgICAgICB0YXJnZXQudmVsb2NpdHkueSA9IHRhcmdldC5sb2NrZWREb3duID8gdkZpbmFsMi54ICogMC4wNSA6IHZGaW5hbDIueTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gQmFzaWMgbW92ZW1lbnRcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eS54O1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5Lnk7XHJcbiAgICAgICAgLy8gV2FsbCBDb2xsaXNpb25cclxuICAgICAgICB0aGlzLmNoZWNrV2FsbENvbGxpc2lvbigpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gRGV2ZWxvcCBpbW11bml0eSBvciBkaWVcclxuICAgICAgICBpZiAodGhpcy5pc0luZmVjdGVkICYmIChEYXRlLm5vdygpIC0gdGhpcy5pbmZlY3Rpb25TdGFydCkgPiBzaW0uaW5mZWN0aW9uRHVyYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvckxpc3QucmVtb3ZlZDtcclxuICAgICAgICAgIHRoaXMub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICAgIHRoaXMuaXNJbmZlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5pc1JlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgc2ltLmluZmVjdGVkQ291bnQgLT0gMTtcclxuICAgICAgICAgIHNpbS5yZW1vdmVkQ291bnQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBCYWxsIENvbGxpc2lvbiBjaGVja1xyXG4gICAgICAgIHNpbS5jaXJjbGVMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzICE9IGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tDaXJjbGVDb2xsaXNpb24oZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICBpZiAoKHRoaXMuaXNJbmZlY3RlZCAmJiAhZWxlbWVudC5pc0luZmVjdGVkKSB8fFxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQuaXNJbmZlY3RlZCAmJiAhdGhpcy5pc0luZmVjdGVkKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmVtb3ZlZCAmJiAhZWxlbWVudC5pc1JlbW92ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCBzaW0udHJhbnNtaXNzaW9uUmF0aW8pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JMaXN0LmluZmVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJbmZlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0hlYWx0aHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZmVjdGlvblN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29sb3IgPSBjb2xvckxpc3QuaW5mZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pc0luZmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlzSGVhbHRoeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5mZWN0aW9uU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2ltLmhlYWx0aHlDb3VudCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbS5pbmZlY3RlZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ29sbGlzaW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4iLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7Y2hhcnRzfSBmcm9tICcuL2FwcC5qcyc7XHJcbmltcG9ydCB7Y29sb3JMaXN0fSBmcm9tICcuL2NvbG9yTGlzdC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltdWxhdGlvbihjYW52YXMsIGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmlzTG9ja2Rvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNSZXN0cmljdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlc3RyaWN0aW9uUmF0ZSA9IDE7XHJcbiAgICB0aGlzLmluZmVjdGlvbkR1cmF0aW9uID0gNTAwMDtcclxuICAgIHRoaXMudHJhbnNtaXNzaW9uUmF0aW8gPSAwLjUwO1xyXG4gICAgdGhpcy5sb2NrZG93bkZhY3RvciA9IDAuMDU7XHJcbiAgICB0aGlzLm9iZXlpbmdMb2NrZG93biA9IDAuOTtcclxuICAgIHRoaXMudG90YWxDb3VudCA9IDI1MDtcclxuICAgIHRoaXMuc3BlZWQgPSAxO1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYyA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLnN0YXJ0ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IDQwMDAwO1xyXG4gICAgdGhpcy5jaXJjbGVMaXN0ID0gW107XHJcbiAgICB0aGlzLmFuaW1hdGlvbjtcclxuICAgIHRoaXMuaW5WaWV3ID0gZmFsc2U7XHJcbiAgXHJcbiAgICB0aGlzLmhlYWx0aHlDb3VudDtcclxuICAgIHRoaXMuaW5mZWN0ZWRDb3VudDtcclxuICAgIHRoaXMucmVtb3ZlZENvdW50O1xyXG4gIFxyXG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSgpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5jYW52YXMud2lkdGgvMTAwO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXBsYXktYnV0dG9uJylbdGhpcy5pZF0ub25jbGljayA9IHRoaXMucmVwbGF5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZXBsYXkke3RoaXMuaWR9YCkub25jbGljayA9IHRoaXMucmVwbGF5O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrZG93bkNoZWNrYm94Jykub25jbGljayA9IHRoaXMudG9nZ2xlTG9ja2Rvd247XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RyaWN0aW9uQ2hlY2tib3gnKS5vbmNsaWNrID0gdGhpcy50b2dnbGVSZXN0cmljdGlvbjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNtaXNzaW9uUmF0aW8nKS52YWx1ZSA9IHRoaXMudHJhbnNtaXNzaW9uUmF0aW8gKiAxMDA7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZmVjdGlvbkR1cmF0aW9uRW50cnknKS52YWx1ZSA9IHRoaXMuaW5mZWN0aW9uRHVyYXRpb24gLyAxMDAwO1xyXG5cclxuICAgIFxyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5mZWN0ZWRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFsdGh5Q291bnQgPSB0aGlzLnRvdGFsQ291bnQ7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVkQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpO1xyXG4gICAgICAgICAgICBjb25zdCBkeCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBkeSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0luZmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBDaXJjbGUgPSBuZXcgQ2lyY2xlKHRoaXMsIHgsIHksIGR4LCBkeSwgdGhpcy5yYWRpdXMsIGlzSW5mZWN0ZWQpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jaXJjbGVMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5oYXNDb2xsaXNpb24odGhpcy5jaXJjbGVMaXN0W2pdLCB0ZW1wQ2lyY2xlKSkge1xyXG4gICAgICAgICAgICAgIHRlbXBDaXJjbGUueCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgdGVtcENpcmNsZS55ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgICAgaiA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdC5wdXNoKHRlbXBDaXJjbGUpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFNldCBzZWVkIG51bWJlciBvZiBpbmZlY3RlZFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS5pc0luZmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNpcmNsZUxpc3RbaV0uaW5mZWN0aW9uU3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS5jb2xvciA9IGNvbG9yTGlzdC5pbmZlY3RlZDtcclxuICAgICAgICB0aGlzLmluZmVjdGVkQ291bnQgKz0gMTtcclxuICAgICAgICB0aGlzLmhlYWx0aHlDb3VudCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAzKSB7XHJcbiAgICAgICAgICB0aGlzLmNpcmNsZUxpc3RbaV0ueCAqPSAwLjI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChjaXJjbGUpID0+IHtcclxuICAgICAgICBjaXJjbGUudXBkYXRlKHRoaXMuY2lyY2xlTGlzdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTsgLy8gdGhpcy5pbml0XHJcbiAgICB0aGlzLmFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgIC8vIFJlZnJlc2ggY2FudmFzICBcclxuICAgICAgdGhpcy5jLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgLy9VcGRhdGUgY2hhcnQgYW5kIHNpbVxyXG4gICAgICBjaGFydHNbdGhpcy5pZF0udXBkYXRlKCk7XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChjaXJjbGUpID0+IHtcclxuICAgICAgICBjaXJjbGUudXBkYXRlKHRoaXMuY2lyY2xlTGlzdCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9VcGRhdGUgZGF0YVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaGVhbHRoeSR7dGhpcy5pZH1gKS5pbm5lckhUTUwgPSB0aGlzLmhlYWx0aHlDb3VudDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGluZmVjdGVkJHt0aGlzLmlkfWApLmlubmVySFRNTCA9IHRoaXMuaW5mZWN0ZWRDb3VudDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlbW92ZWQke3RoaXMuaWR9YCkuaW5uZXJIVE1MID0gdGhpcy5yZW1vdmVkQ291bnQ7XHJcbiAgXHJcbiAgICAgIC8vQ2hlY2sgZHVyYXRpb24gb2YgYW5pbWF0aW9uXHJcbiAgICAgIGlmIChEYXRlLm5vdygpIC0gdGhpcy5zdGFydCA8IHRoaXMuZHVyYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMudG9nZ2xlTG9ja2Rvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ja2Rvd25DaGVja2JveCcpO1xyXG4gICAgICAgIHRoaXMuaXNMb2NrZG93biA9IGNoZWNrQm94LmNoZWNrZWQgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vYmV5aW5nTG9ja2Rvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JleWluZ0xvY2tkb3duJykudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmlzTG9ja2Rvd24pIHtcclxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPD0gdGhpcy5vYmV5aW5nTG9ja2Rvd24pIHtcclxuICAgICAgICAgICAgICBlbGVtZW50LnZlbG9jaXR5LnggPSBlbGVtZW50LnZlbG9jaXR5LnggKiB0aGlzLmxvY2tkb3duRmFjdG9yO1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQudmVsb2NpdHkueSA9IGVsZW1lbnQudmVsb2NpdHkueSAqIHRoaXMubG9ja2Rvd25GYWN0b3I7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5sb2NrZWREb3duID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC52ZWxvY2l0eS54ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2VGbG9hdCgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIGVsZW1lbnQudmVsb2NpdHkueSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICB0aGlzLmNpcmNsZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQubG9ja2VkRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgdGhpcy50b2dnbGVSZXN0cmljdGlvbiA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmlzUmVzdHJpY3RlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0cmljdGlvbkNoZWNrYm94JykuY2hlY2tlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgZGl2aWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXRyYXZlbC1kaXZpZGVyXCIpO1xyXG4gICAgICAgIGRpdmlkZXIuc3R5bGUuZGlzcGxheSA9IChkaXZpZGVyLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIpID8gXCJibG9ja1wiIDogXCJcIjtcclxuICAgICAgICB0aGlzLmNpcmNsZUxpc3QuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZWxlbWVudC54IDwgKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAxMCAmJiBlbGVtZW50LnggPiAodGhpcy5jYW52YXMud2lkdGggLyAyKSAtIDEwKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQueCAtPSAyMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLnJlcGxheSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy50cmFuc21pc3Npb25SYXRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc21pc3Npb25SYXRpbycpLnZhbHVlIC8gMTAwO1xyXG4gICAgICAgICAgdGhpcy5pbmZlY3Rpb25EdXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZlY3Rpb25EdXJhdGlvbkVudHJ5JykudmFsdWUgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBpZiAodGhpcy5pZCA9PT0gMikge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2tkb3duQ2hlY2tib3gnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHRoaXMuY2FudmFzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBjaGFydHNbdGhpcy5pZF0uYy5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgY2hhcnRzW3RoaXMuaWRdLnRpbWUgPSAwO1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZSA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggIT09IHdpZHRoIHx8IHRoaXMuY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICB9IiwiLy8gVmFyaWFibGVzXG5pbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL1NpbXVsYXRpb24nO1xuaW1wb3J0IEFyZWFjaGFydCBmcm9tICcuL0FyZWFjaGFydCc7XG5cbmxldCBzaW1zID0gW107XG5leHBvcnQgbGV0IGNoYXJ0cyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICBzaW1zW2ldID0gbmV3IFNpbXVsYXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNpbXVsYXRpb24ke2l9YCksIGkpO1xuICBjaGFydHNbaV0gPSBuZXcgQXJlYWNoYXJ0KHNpbXNbaV0sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGFydCR7aX1gKSk7XG4gIGNoYXJ0c1tpXS5pbml0KCk7XG59XG5cbnNpbXNbMF0uaW5WaWV3ID0gdHJ1ZTtcbnNpbXNbMF0uaW5pdCgpO1xuc2ltc1swXS5hbmltYXRlKCk7XG5cbnNpbXNbMV0udHJhbnNtaXNzaW9uUmF0aW8gPSAwLjI1O1xuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gIHNpbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCA0MDAgJiYgIWVsZW1lbnQuaW5WaWV3KSB7XG4gICAgICBlbGVtZW50LmluaXQoKTtcbiAgICAgIGVsZW1lbnQuYW5pbWF0ZSgpO1xuICAgICAgZWxlbWVudC5pblZpZXcgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgY29uc3QgY29sb3JMaXN0ID0ge1xyXG4gICAgaGVhbHRoeTogJyM2M2MyZGInLFxyXG4gICAgaW5mZWN0ZWQ6ICcjZjY2NjU0JyxcclxuICAgIHJlbW92ZWQ6ICdncmF5JyxcclxuICB9OyIsImV4cG9ydCBmdW5jdGlvbiBoYXNDb2xsaXNpb24oYSwgYikge1xyXG4gICAgaWYgKE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsIDIpICsgTWF0aC5wb3coYS55IC0gYi55LCAyKSkgPD0gYS5yYWRpdXMgKyBiLnJhZGl1cykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRoUmFuZG9tSW5SYW5nZShtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRoUmFuZG9tSW5SYW5nZUZsb2F0KG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9