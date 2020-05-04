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
      } 
      if (this.frameCount > this.duration) {
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
    if (element.canvas.getBoundingClientRect().top < window.innerHeight &&
        element.canvas.getBoundingClientRect().bottom > 50 &&
        !element.inView) {
      element.inView = true;
      element.animate();
    } else if (
      ( element.canvas.getBoundingClientRect().bottom < 50 ||
      element.canvas.getBoundingClientRect().bottom > window.innerHeight) &&
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQXJlYWNoYXJ0LmpzIiwid2VicGFjazovLy8uL2pzL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9TaW11bGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb2xvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBeUM7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFTO0FBQ3BDO0FBQ0E7O0FB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UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsOENBQU07QUFDZCxRQUFRLDhDQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDbktBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0Y7O0FBRXBDO0FBQ087O0FBRVAsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixtREFBVSxzQ0FBc0MsRUFBRTtBQUNsRTtBQUNBLGtCQUFrQixrREFBUywwQ0FBMEMsRUFBRTtBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7Y29sb3JMaXN0fSBmcm9tICcuL2NvbG9yTGlzdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmVhY2hhcnQoc2ltLCBjaGFydCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjaGFydDtcclxuICAgIHRoaXMuYyA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLndpZHRoID0gMzAwO1xyXG4gIFxyXG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50aW1lIDwgdGhpcy5jYW52YXMud2lkdGgpIHtcclxuICAgICAgICAvLyBQbG90IGhlYWx0aHlcclxuICAgICAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jLnJlY3QodGhpcy50aW1lLCAwLCAxLCBzaW0uaGVhbHRoeUNvdW50IC8gc2ltLnRvdGFsQ291bnQgKiB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSBjb2xvckxpc3QuaGVhbHRoeTtcclxuICAgICAgICB0aGlzLmMuZmlsbCgpO1xyXG4gIFxyXG4gICAgICAgIC8vIFBsb3QgUmVtb3ZlZFxyXG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmMucmVjdCh0aGlzLnRpbWUsIHRoaXMuY2FudmFzLmhlaWdodCAtIChzaW0ucmVtb3ZlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpICogdGhpcy5jYW52YXMuaGVpZ2h0IC0gKHNpbS5pbmZlY3RlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpICogdGhpcy5jYW52YXMuaGVpZ2h0LCAxLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiBzaW0ucmVtb3ZlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpO1xyXG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSBjb2xvckxpc3QucmVtb3ZlZDtcclxuICAgICAgICB0aGlzLmMuZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuYy5maWxsKCk7XHJcbiAgXHJcbiAgICAgICAgLy8gUGxvdCBJbmZlY3RlZFxyXG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmMucmVjdCh0aGlzLnRpbWUsIHRoaXMuY2FudmFzLmhlaWdodCAtIChzaW0uaW5mZWN0ZWRDb3VudCAvIHNpbS50b3RhbENvdW50KSAqIHRoaXMuY2FudmFzLmhlaWdodCwgMSwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmMuZmlsbFN0eWxlID0gY29sb3JMaXN0LmluZmVjdGVkO1xyXG4gICAgICAgIHRoaXMuYy5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jLmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgICB0aGlzLnRpbWUgKz0gdGhpcy53aWR0aCAvIHNpbS5kdXJhdGlvbjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9IiwiaW1wb3J0IHtjb2xvckxpc3R9IGZyb20gJy4vY29sb3JMaXN0LmpzJztcclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZSh2ZWxvY2l0eSwgYW5nbGUpIHtcclxuICAgIGNvbnN0IHJvdGF0ZWRWZWxvY2l0aWVzID0ge1xyXG4gICAgICB4OiB2ZWxvY2l0eS54ICogTWF0aC5jb3MoYW5nbGUpIC0gdmVsb2NpdHkueSAqIE1hdGguc2luKGFuZ2xlKSxcclxuICAgICAgeTogdmVsb2NpdHkueCAqIE1hdGguc2luKGFuZ2xlKSArIHZlbG9jaXR5LnkgKiBNYXRoLmNvcyhhbmdsZSksXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIHJvdGF0ZWRWZWxvY2l0aWVzO1xyXG4gIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjbGUoc2ltLCB4LCB5LCBkeCwgZHksIHJhZGl1cywgaXNJbmZlY3RlZCkge1xyXG4gICAgdGhpcy5zaW0gPSBzaW07XHJcbiAgICB0aGlzLnJhZGl1cyA9IHNpbS5yYWRpdXM7XHJcbiAgICB0aGlzLnggPSB4O1xyXG4gICAgdGhpcy55ID0geTtcclxuICAgIHRoaXMudmVsb2NpdHkgPSB7XHJcbiAgICAgIHg6IGR4LFxyXG4gICAgICB5OiBkeSxcclxuICAgIH07XHJcbiAgICB0aGlzLmlzSW5mZWN0ZWQgPSBpc0luZmVjdGVkO1xyXG4gICAgdGhpcy5pc0hlYWx0aHkgPSAhaXNJbmZlY3RlZDtcclxuICAgIHRoaXMuY29sb3IgPSB0aGlzLmlzSW5mZWN0ZWQgPyBjb2xvckxpc3QuaW5mZWN0ZWQgOiBjb2xvckxpc3QuaGVhbHRoeTtcclxuICAgIHRoaXMuaW5mZWN0aW9uRnJhbWUgPSAwO1xyXG4gICAgdGhpcy5pc1JlbW92ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMubWFzcyA9IDE7XHJcbiAgICB0aGlzLm9wYWNpdHkgPSAxO1xyXG4gICAgdGhpcy5sb2NrZWREb3duID0gZmFsc2U7XHJcbiAgXHJcbiAgXHJcbiAgICB0aGlzLmRyYXcgPSAoKSA9PiB7XHJcbiAgICAgIHNpbS5jLmJlZ2luUGF0aCgpO1xyXG4gICAgICBzaW0uYy5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICBzaW0uYy5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcclxuICAgICAgc2ltLmMuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgc2ltLmMuZmlsbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmNoZWNrV2FsbENvbGxpc2lvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAoKHRoaXMueCArIHRoaXMucmFkaXVzKSA+IHRoaXMuc2ltLmNhbnZhcy53aWR0aCB8fCAodGhpcy54IC0gdGhpcy5yYWRpdXMpIDwgMCkge1xyXG4gICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnkgKyB0aGlzLnJhZGl1cykgPiB0aGlzLnNpbS5jYW52YXMuaGVpZ2h0IHx8ICh0aGlzLnkgLSB0aGlzLnJhZGl1cykgPCAwKSB7XHJcbiAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaW0uaXNSZXN0cmljdGVkKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5zaW0uY2FudmFzLndpZHRoIC8gMiAmJiAodGhpcy54ICsgdGhpcy5yYWRpdXMpID4gKHRoaXMuc2ltLmNhbnZhcy53aWR0aCAvIDIgKSAtIDIpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnggPiB0aGlzLnNpbS5jYW52YXMud2lkdGggLyAyICYmICh0aGlzLnggLSB0aGlzLnJhZGl1cykgPCAodGhpcy5zaW0uY2FudmFzLndpZHRoIC8gMikgKyAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IC10aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG5cclxuICAgIHRoaXMuY2hlY2tDaXJjbGVDb2xsaXNpb24gPSAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgaWYgKE1hdGguc3FydChNYXRoLnBvdyh0aGlzLnggLSB0YXJnZXQueCwgMikgKyBNYXRoLnBvdyh0aGlzLnkgLSB0YXJnZXQueSwgMikpIDw9IHRoaXMucmFkaXVzICsgdGFyZ2V0LnJhZGl1cykge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSxcclxuICAgIHRoaXMucmVzb2x2ZUNvbGxpc2lvbiA9ICh0YXJnZXQpID0+IHtcclxuICAgICAgICBjb25zdCB4VmVsb2NpdHlEaWZmID0gdGhpcy52ZWxvY2l0eS54IC0gdGFyZ2V0LnZlbG9jaXR5Lng7XHJcbiAgICAgICAgY29uc3QgeVZlbG9jaXR5RGlmZiA9IHRoaXMudmVsb2NpdHkueSAtIHRhcmdldC52ZWxvY2l0eS55O1xyXG5cclxuICAgICAgICBjb25zdCB4RGlzdCA9IHRhcmdldC54IC0gdGhpcy54O1xyXG4gICAgICAgIGNvbnN0IHlEaXN0ID0gdGFyZ2V0LnkgLSB0aGlzLnk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBhcnRpY2xlc1xyXG4gICAgICAgIGlmICh4VmVsb2NpdHlEaWZmICogeERpc3QgKyB5VmVsb2NpdHlEaWZmICogeURpc3QgPj0gMCkge1xyXG4gICAgICAgICAgICAvLyBHcmFiIGFuZ2xlIGJldHdlZW4gdGhlIHR3byBjb2xsaWRpbmcgcGFydGljbGVzXHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIodGFyZ2V0LnkgLSB0aGlzLnksIHRhcmdldC54IC0gdGhpcy54KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFN0b3JlIG1hc3MgaW4gdmFyIGZvciBiZXR0ZXIgcmVhZGFiaWxpdHkgaW4gY29sbGlzaW9uIGVxdWF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IG0xID0gdGhpcy5tYXNzO1xyXG4gICAgICAgICAgICBjb25zdCBtMiA9IHRhcmdldC5tYXNzO1xyXG5cclxuICAgICAgICAgICAgLy8gVmVsb2NpdHkgYmVmb3JlIGVxdWF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHUxID0gcm90YXRlKHRoaXMudmVsb2NpdHksIGFuZ2xlKTtcclxuICAgICAgICAgICAgY29uc3QgdTIgPSByb3RhdGUodGFyZ2V0LnZlbG9jaXR5LCBhbmdsZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBWZWxvY2l0eSBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cclxuICAgICAgICAgICAgY29uc3QgdjEgPSB7XHJcbiAgICAgICAgICAgIHg6IHUxLnggKiAobTEgLSBtMikgLyAobTEgKyBtMikgKyB1Mi54ICogMiAqIG0yIC8gKG0xICsgbTIpLFxyXG4gICAgICAgICAgICB5OiB1MS55XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHYyID0ge1xyXG4gICAgICAgICAgICB4OiB1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSxcclxuICAgICAgICAgICAgeTogdTIueVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gRmluYWwgdmVsb2NpdHkgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IHZGaW5hbDEgPSByb3RhdGUodjEsIC1hbmdsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZGaW5hbDIgPSByb3RhdGUodjIsIC1hbmdsZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBTd2FwIHBhcnRpY2xlIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSB0aGlzLmxvY2tlZERvd24gPyB2RmluYWwxLnggKiAwLjA1IDogdkZpbmFsMS54O1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLmxvY2tlZERvd24gPyB2RmluYWwxLnkgKiAwLjA1IDogdkZpbmFsMS55O1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0LnZlbG9jaXR5LnggPSB0YXJnZXQubG9ja2VkRG93biA/IHZGaW5hbDIueCAqIDAuMDUgOiB2RmluYWwyLng7XHJcbiAgICAgICAgICAgIHRhcmdldC52ZWxvY2l0eS55ID0gdGFyZ2V0LmxvY2tlZERvd24gPyB2RmluYWwyLnggKiAwLjA1IDogdkZpbmFsMi55O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aGlzLnVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBCYXNpYyBtb3ZlbWVudFxyXG4gICAgICAgIHRoaXMueCArPSB0aGlzLnZlbG9jaXR5Lng7XHJcbiAgICAgICAgdGhpcy55ICs9IHRoaXMudmVsb2NpdHkueTtcclxuICAgICAgICB0aGlzLmluZmVjdGlvbkZyYW1lID0gdGhpcy5pc0luZmVjdGVkID8gdGhpcy5pbmZlY3Rpb25GcmFtZSArIDEgOiB0aGlzLmluZmVjdGlvbkZyYW1lO1xyXG4gICAgICAgIC8vIFdhbGwgQ29sbGlzaW9uXHJcbiAgICAgICAgdGhpcy5jaGVja1dhbGxDb2xsaXNpb24oKTtcclxuICAgIFxyXG4gICAgICAgIC8vIERldmVsb3AgaW1tdW5pdHkgb3IgZGllXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbmZlY3RlZCAmJiB0aGlzLmluZmVjdGlvbkZyYW1lID4gc2ltLmluZmVjdGlvbkR1cmF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JMaXN0LnJlbW92ZWQ7XHJcbiAgICAgICAgICB0aGlzLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgICB0aGlzLmlzSW5mZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuaXNSZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICAgIHNpbS5pbmZlY3RlZENvdW50IC09IDE7XHJcbiAgICAgICAgICBzaW0ucmVtb3ZlZENvdW50ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gQmFsbCBDb2xsaXNpb24gY2hlY2tcclxuICAgICAgICBzaW0uY2lyY2xlTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcyAhPSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQ2lyY2xlQ29sbGlzaW9uKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCh0aGlzLmlzSW5mZWN0ZWQgJiYgIWVsZW1lbnQuaXNJbmZlY3RlZCkgfHxcclxuICAgICAgICAgICAgICAgIChlbGVtZW50LmlzSW5mZWN0ZWQgJiYgIXRoaXMuaXNJbmZlY3RlZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1JlbW92ZWQgJiYgIWVsZW1lbnQuaXNSZW1vdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgc2ltLnRyYW5zbWlzc2lvblJhdGlvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yTGlzdC5pbmZlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzSW5mZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNIZWFsdGh5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZlY3Rpb25GcmFtZSArPSAxO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb2xvciA9IGNvbG9yTGlzdC5pbmZlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlzSW5mZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaXNIZWFsdGh5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbmZlY3Rpb25GcmFtZSArPSAxO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2ltLmhlYWx0aHlDb3VudCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbS5pbmZlY3RlZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ29sbGlzaW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4iLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7Y2hhcnRzfSBmcm9tICcuL2FwcC5qcyc7XHJcbmltcG9ydCB7Y29sb3JMaXN0fSBmcm9tICcuL2NvbG9yTGlzdC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltdWxhdGlvbihjYW52YXMsIGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmlzTG9ja2Rvd24gPSBmYWxzZTtcclxuICAgIHRoaXMuaXNSZXN0cmljdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlc3RyaWN0aW9uUmF0ZSA9IDE7XHJcbiAgICB0aGlzLmluZmVjdGlvbkR1cmF0aW9uID0gNDgwOyAvL2luIE51bWJlciBvZiBmcmFtZXNcclxuICAgIHRoaXMudHJhbnNtaXNzaW9uUmF0aW8gPSAwLjUwO1xyXG4gICAgdGhpcy5sb2NrZG93bkZhY3RvciA9IDAuMDU7XHJcbiAgICB0aGlzLm9iZXlpbmdMb2NrZG93biA9IDAuOTtcclxuICAgIHRoaXMudG90YWxDb3VudCA9IDI1MDtcclxuICAgIHRoaXMuc3BlZWQgPSAxO1xyXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICB0aGlzLnJhZGl1cyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYyA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xyXG4gICAgdGhpcy5kdXJhdGlvbiA9IDI0MDA7XHJcbiAgICB0aGlzLmNpcmNsZUxpc3QgPSBbXTtcclxuICAgIHRoaXMuYW5pbWF0aW9uO1xyXG4gICAgdGhpcy5pblZpZXcgPSBmYWxzZTtcclxuICBcclxuICAgIHRoaXMuaGVhbHRoeUNvdW50O1xyXG4gICAgdGhpcy5pbmZlY3RlZENvdW50O1xyXG4gICAgdGhpcy5yZW1vdmVkQ291bnQ7XHJcbiAgXHJcbiAgICB0aGlzLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKCk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLmNhbnZhcy53aWR0aC8xMDA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlcGxheS1idXR0b24nKVt0aGlzLmlkXS5vbmNsaWNrID0gdGhpcy5yZXBsYXk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlcGxheSR7dGhpcy5pZH1gKS5vbmNsaWNrID0gdGhpcy5yZXBsYXk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2tkb3duQ2hlY2tib3gnKS5vbmNsaWNrID0gdGhpcy50b2dnbGVMb2NrZG93bjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdHJpY3Rpb25DaGVja2JveCcpLm9uY2xpY2sgPSB0aGlzLnRvZ2dsZVJlc3RyaWN0aW9uO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc21pc3Npb25SYXRpbycpLnZhbHVlID0gdGhpcy50cmFuc21pc3Npb25SYXRpbyAqIDEwMDtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mZWN0aW9uRHVyYXRpb25FbnRyeScpLnZhbHVlID0gdGhpcy5pbmZlY3Rpb25EdXJhdGlvbiAvIDEwMDA7XHJcblxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5pbmZlY3RlZENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmhlYWx0aHlDb3VudCA9IHRoaXMudG90YWxDb3VudDtcclxuICAgICAgICB0aGlzLnJlbW92ZWRDb3VudCA9IDA7XHJcbiAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSB1dGlscy5tYXRoUmFuZG9tSW5SYW5nZSgwICsgdGhpcy5yYWRpdXMsIHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5yYWRpdXMpO1xyXG4gICAgICAgICAgICBjb25zdCB5ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2VGbG9hdCgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2VGbG9hdCgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzSW5mZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc3QgdGVtcENpcmNsZSA9IG5ldyBDaXJjbGUodGhpcywgeCwgeSwgZHgsIGR5LCB0aGlzLnJhZGl1cywgaXNJbmZlY3RlZCk7XHJcbiAgICBcclxuICAgICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmNpcmNsZUxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmhhc0NvbGxpc2lvbih0aGlzLmNpcmNsZUxpc3Rbal0sIHRlbXBDaXJjbGUpKSB7XHJcbiAgICAgICAgICAgICAgdGVtcENpcmNsZS54ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKTtcclxuICAgICAgICAgICAgICB0ZW1wQ2lyY2xlLnkgPSB1dGlscy5tYXRoUmFuZG9tSW5SYW5nZSgwICsgdGhpcy5yYWRpdXMsIHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMucmFkaXVzKTtcclxuICAgICAgICAgICAgICBqID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0LnB1c2godGVtcENpcmNsZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gU2V0IHNlZWQgbnVtYmVyIG9mIGluZmVjdGVkXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0W2ldLmlzSW5mZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS5pbmZlY3Rpb25TdGFydCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0W2ldLmNvbG9yID0gY29sb3JMaXN0LmluZmVjdGVkO1xyXG4gICAgICAgIHRoaXMuaW5mZWN0ZWRDb3VudCArPSAxO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoeUNvdW50IC09IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09IDMpIHtcclxuICAgICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS54ICo9IDAuMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGNpcmNsZSkgPT4ge1xyXG4gICAgICAgIGNpcmNsZS51cGRhdGUodGhpcy5jaXJjbGVMaXN0KTtcclxuICAgICAgfSk7XHJcbiAgICB9OyAvLyB0aGlzLmluaXRcclxuICAgIHRoaXMuYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgLy8gUmVmcmVzaCBjYW52YXMgIFxyXG4gICAgICB0aGlzLmMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICB0aGlzLmZyYW1lQ291bnQgKz0gMTtcclxuICAgICAgLy9VcGRhdGUgY2hhcnQgYW5kIHNpbVxyXG4gICAgICBjaGFydHNbdGhpcy5pZF0udXBkYXRlKCk7XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChjaXJjbGUpID0+IHtcclxuICAgICAgICBjaXJjbGUudXBkYXRlKHRoaXMuY2lyY2xlTGlzdCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy9VcGRhdGUgZGF0YVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaGVhbHRoeSR7dGhpcy5pZH1gKS5pbm5lckhUTUwgPSB0aGlzLmhlYWx0aHlDb3VudDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGluZmVjdGVkJHt0aGlzLmlkfWApLmlubmVySFRNTCA9IHRoaXMuaW5mZWN0ZWRDb3VudDtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlbW92ZWQke3RoaXMuaWR9YCkuaW5uZXJIVE1MID0gdGhpcy5yZW1vdmVkQ291bnQ7XHJcbiAgXHJcbiAgICAgIC8vQ2hlY2sgZHVyYXRpb24gb2YgYW5pbWF0aW9uIGFuZCBvbmx5IHBsYXkgaWYgaW4gdmlld1xyXG4gICAgICBpZiAodGhpcy5mcmFtZUNvdW50IDwgdGhpcy5kdXJhdGlvbiAmJiB0aGlzLmluVmlldykge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSk7XHJcbiAgICAgIH0gXHJcbiAgICAgIGlmICh0aGlzLmZyYW1lQ291bnQgPiB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMucHJldmlvdXNFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy50b2dnbGVMb2NrZG93biA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrZG93bkNoZWNrYm94Jyk7XHJcbiAgICAgICAgdGhpcy5pc0xvY2tkb3duID0gY2hlY2tCb3guY2hlY2tlZCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLm9iZXlpbmdMb2NrZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmV5aW5nTG9ja2Rvd24nKS52YWx1ZSAvIDEwMDtcclxuICAgICAgICB0aGlzLmNpcmNsZUxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuaXNMb2NrZG93bikge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8PSB0aGlzLm9iZXlpbmdMb2NrZG93bikge1xyXG4gICAgICAgICAgICAgIGVsZW1lbnQudmVsb2NpdHkueCA9IGVsZW1lbnQudmVsb2NpdHkueCAqIHRoaXMubG9ja2Rvd25GYWN0b3I7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC52ZWxvY2l0eS55ID0gZWxlbWVudC52ZWxvY2l0eS55ICogdGhpcy5sb2NrZG93bkZhY3RvcjtcclxuICAgICAgICAgICAgICBlbGVtZW50LmxvY2tlZERvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LnZlbG9jaXR5LnggPSB1dGlscy5tYXRoUmFuZG9tSW5SYW5nZUZsb2F0KC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgZWxlbWVudC52ZWxvY2l0eS55ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2VGbG9hdCgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudC5sb2NrZWREb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICB0aGlzLnRvZ2dsZVJlc3RyaWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNSZXN0cmljdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RyaWN0aW9uQ2hlY2tib3gnKS5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBkaXZpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaW0tdHJhdmVsLWRpdmlkZXJcIik7XHJcbiAgICAgICAgZGl2aWRlci5zdHlsZS5kaXNwbGF5ID0gKGRpdmlkZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJcIikgPyBcImJsb2NrXCIgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgIGlmIChlbGVtZW50LnggPCAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIDEwICYmIGVsZW1lbnQueCA+ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpIC0gMTApIHtcclxuICAgICAgICAgICAgZWxlbWVudC54IC09IDIwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRoaXMucmVwbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnRyYW5zbWlzc2lvblJhdGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbWlzc2lvblJhdGlvJykudmFsdWUgLyAxMDA7XHJcbiAgICAgICAgICB0aGlzLmluZmVjdGlvbkR1cmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZmVjdGlvbkR1cmF0aW9uRW50cnknKS52YWx1ZSAqIDEwMDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGlmICh0aGlzLmlkID09PSAyKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ja2Rvd25DaGVja2JveCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGhpcy5jYW52YXMucHJldmlvdXNFbGVtZW50U2libGluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGNoYXJ0c1t0aGlzLmlkXS5jLmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBjaGFydHNbdGhpcy5pZF0udGltZSA9IDA7XHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplID0gKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmNhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2FudmFzLmNsaWVudEhlaWdodDtcclxuICAgICAgICBcclxuICAgICAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgdGhpcy5jYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gIH0iLCJpbXBvcnQgU2ltdWxhdGlvbiBmcm9tICcuL1NpbXVsYXRpb24nO1xuaW1wb3J0IEFyZWFjaGFydCBmcm9tICcuL0FyZWFjaGFydCc7XG5cbmxldCBzaW1zID0gW107XG5leHBvcnQgbGV0IGNoYXJ0cyA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICBzaW1zW2ldID0gbmV3IFNpbXVsYXRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNpbXVsYXRpb24ke2l9YCksIGkpO1xuICBzaW1zW2ldLmluaXQoKTtcbiAgY2hhcnRzW2ldID0gbmV3IEFyZWFjaGFydChzaW1zW2ldLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hhcnQke2l9YCkpO1xuICBjaGFydHNbaV0uaW5pdCgpO1xufVxuXG5zaW1zWzBdLmluVmlldyA9IHRydWU7XG5zaW1zWzBdLmluaXQoKTtcbnNpbXNbMF0uYW5pbWF0ZSgpO1xuXG5zaW1zWzFdLnRyYW5zbWlzc2lvblJhdGlvID0gMC4yNTtcblxud2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICBzaW1zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgd2luZG93LmlubmVySGVpZ2h0ICYmXG4gICAgICAgIGVsZW1lbnQuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IDUwICYmXG4gICAgICAgICFlbGVtZW50LmluVmlldykge1xuICAgICAgZWxlbWVudC5pblZpZXcgPSB0cnVlO1xuICAgICAgZWxlbWVudC5hbmltYXRlKCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICggZWxlbWVudC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIDwgNTAgfHxcbiAgICAgIGVsZW1lbnQuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSA+IHdpbmRvdy5pbm5lckhlaWdodCkgJiZcbiAgICAgIGVsZW1lbnQuaW5WaWV3XG4gICAgICApIHtcbiAgICAgIGVsZW1lbnQuaW5WaWV3ID0gZmFsc2U7XG4gICAgICBjb25zb2xlLmxvZyhcInBhdXNlIFwiICsgZWxlbWVudC5pblZpZXcpO1xuICAgICAgXG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCBjb2xvckxpc3QgPSB7XHJcbiAgICBoZWFsdGh5OiAnIzYzYzJkYicsXHJcbiAgICBpbmZlY3RlZDogJyNmNjY2NTQnLFxyXG4gICAgcmVtb3ZlZDogJ2dyYXknLFxyXG4gIH07IiwiZXhwb3J0IGZ1bmN0aW9uIGhhc0NvbGxpc2lvbihhLCBiKSB7XHJcbiAgICBpZiAoTWF0aC5zcXJ0KE1hdGgucG93KGEueCAtIGIueCwgMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksIDIpKSA8PSBhLnJhZGl1cyArIGIucmFkaXVzKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGhSYW5kb21JblJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xyXG4gIH1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGhSYW5kb21JblJhbmdlRmxvYXQobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=