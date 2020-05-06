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


function Circle(c, x, y, dx, dy, radius) {
  this.c = c; //Canvas context
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.velocity = {
    x: dx,
    y: dy,
  };
  this.lockedDown = false;
  this.isInfected = false;
  this.infectionFrame = 0;
  this.isRemoved = false;

  this.color = this.isInfected ? _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].infected : _colorList_js__WEBPACK_IMPORTED_MODULE_0__["colorList"].healthy;
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

  this.modifyVelocity = (modifier) => {
    this.velocity.x *= modifier;
    this.velocity.y *= modifier;
  }
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
  this.canvas = canvas;
  this.id = id;
  this.c = this.canvas.getContext('2d');
  this.circleList = [];
  this.frameCount = 0;
  this.animation;
  this.inView = false;

  this.duration = 2400;
  this.speed = 1;
  this.radius = this.canvas.width / 30;
  this.totalCount = 250;

  this.isLockdown = false;
  this.lockdownRatio = 1;
  this.isRestricted = false;
  this.restrictionRate = 1;

  this.infectionDuration = 480; //in Number of frames
  this.transmissionRatio = (this.id === 2) ? 0.25 : 0.5;

  this.healthyCount = this.totalCount;
  this.infectedCount = 0;
  this.removedCount = 0;


  this.init = () => {
    this.circleList = []
    this.healthyCount = this.totalCount;
    this.infectedCount = 0;
    this.removedCount = 0;
    this.frameCount = 0;
    _utils__WEBPACK_IMPORTED_MODULE_1__["resizeCanvasToDisplaySize"](this.canvas);
    document.querySelectorAll('.replay-button')[this.id].onclick = this.replay;
    document.getElementById(`replay${this.id}`).onclick = this.replay;
    document.getElementById('restrictionCheckbox').onclick = this.toggleRestriction;

    if (this.id === 1) {
      const inputTR = document.getElementById('transmissionRatio');
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
      this.isRestricted = document.getElementById('restrictionCheckbox').checked;
    }
    //Initialize circles
    for (let i = 0; i < this.totalCount; i++) {
      const x = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRange"](0 + this.radius, this.canvas.width - this.radius);
      const y = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRange"](0 + this.radius, this.canvas.height - this.radius);
      const dx = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRangeFloat"](-this.speed, this.speed);
      const dy = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRangeFloat"](-this.speed, this.speed);
      const tempCircle = new _Circle__WEBPACK_IMPORTED_MODULE_0__["default"](this.c, x, y, dx, dy, this.radius);
      tempCircle.lockedDown = this.isLockdown;
      //No overlap on spawn
      if (i !== 0) {
        for (let j = 0; j < this.circleList.length; j++) {
          if (_utils__WEBPACK_IMPORTED_MODULE_1__["hasCollision"](this.circleList[j], tempCircle)) {
            tempCircle.x = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRange"](0 + this.radius, this.canvas.width - this.radius);
            tempCircle.y = _utils__WEBPACK_IMPORTED_MODULE_1__["mathRandomInRange"](0 + this.radius, this.canvas.height - this.radius);
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
      this.circleList[i].color = _colorList_js__WEBPACK_IMPORTED_MODULE_3__["colorList"].infected;
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
    _app_js__WEBPACK_IMPORTED_MODULE_2__["charts"][this.id].update();

    this.circleList.forEach((a) => {
      this.circleList.forEach((b) => {
        if (a != b && _utils__WEBPACK_IMPORTED_MODULE_1__["checkCircleCollision"](a, b)) {

          _utils__WEBPACK_IMPORTED_MODULE_1__["resolveCollision"](a, b);

          if (_utils__WEBPACK_IMPORTED_MODULE_1__["checkInfectedandSusceptible"](a, b)) {
            if (Math.random() < this.transmissionRatio) {
              a.color = _colorList_js__WEBPACK_IMPORTED_MODULE_3__["colorList"].infected;
              a.isInfected = true;
              a.isHealthy = false;
              a.infectionFrame += 1;

              b.color = _colorList_js__WEBPACK_IMPORTED_MODULE_3__["colorList"].infected;
              b.isInfected = true;
              b.isHealthy = false;
              b.infectionFrame += 1;

              this.healthyCount -= 1;
              this.infectedCount += 1;
            }

          }
        }
      })
      _utils__WEBPACK_IMPORTED_MODULE_1__["checkWallCollision"](a, this.canvas, this.isRestricted);

      // Develop immunity or die
      if (a.isInfected && a.infectionFrame > this.infectionDuration) {
        a.color = _colorList_js__WEBPACK_IMPORTED_MODULE_3__["colorList"].removed;
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
      _app_js__WEBPACK_IMPORTED_MODULE_2__["charts"][this.id].c.clearRect(0, 0, this.canvas.width, this.canvas.height);
      _app_js__WEBPACK_IMPORTED_MODULE_2__["charts"][this.id].time = 0;

      window.cancelAnimationFrame(this.animation);

      this.init();
      this.animate();
    };
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
sims[0].animate();

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
/*! exports provided: hasCollision, mathRandomInRange, mathRandomInRangeFloat, checkCircleCollision, resolveCollision, checkWallCollision, checkInfectedandSusceptible, resizeCanvasToDisplaySize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCollision", function() { return hasCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathRandomInRange", function() { return mathRandomInRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathRandomInRangeFloat", function() { return mathRandomInRangeFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCircleCollision", function() { return checkCircleCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveCollision", function() { return resolveCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWallCollision", function() { return checkWallCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInfectedandSusceptible", function() { return checkInfectedandSusceptible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resizeCanvasToDisplaySize", function() { return resizeCanvasToDisplaySize; });
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

function checkCircleCollision(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) <= a.radius + b.radius; 
  }

function resolveCollision(a,b) {
    const xVelocityDiff = a.velocity.x - b.velocity.x;
    const yVelocityDiff = a.velocity.y - b.velocity.y;

    const xDist = b.x - a.x;
    const yDist = b.y - a.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        // Grab angle between the two colliding particles
        const angle = -Math.atan2(b.y - a.y, b.x - a.x);

        // Store mass in var for better readability in collision equation
        const m1 = a.mass;
        const m2 = b.mass;

        // Velocity before equation
        const u1 = rotate(a.velocity, angle);
        const u2 = rotate(b.velocity, angle);

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

        a.velocity.x = a.lockedDown ? vFinal1.x * 0.05 : vFinal1.x;
        a.velocity.y = a.lockedDown ? vFinal1.y * 0.05 : vFinal1.y;

        b.velocity.x = b.lockedDown ? vFinal2.x * 0.05 : vFinal2.x;
        b.velocity.y = b.lockedDown ? vFinal2.x * 0.05 : vFinal2.y;
    }
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
  };

  return rotatedVelocities;
}

function checkWallCollision(a, canvas, isRestricted) {
  if ((a.x + a.radius) > canvas.width || (a.x - a.radius) < 0) {
    a.velocity.x = -a.velocity.x;
  }
  if ((a.y + a.radius) > canvas.height || (a.y - a.radius) < 0) {
    a.velocity.y = -a.velocity.y;
  }
  if (isRestricted) {
    if (a.x < canvas.width / 2 && (a.x + a.radius) > (canvas.width / 2 ) - 2) {
      a.velocity.x = -a.velocity.x;
    }
    if (a.x > canvas.width / 2 && (a.x - a.radius) < (canvas.width / 2) + 2) {
      a.velocity.x = -a.velocity.x;
    }
  }
}

function checkInfectedandSusceptible(a,b) {
  const oneInfected = a.isInfected && !b.isInfected;
  const otherInfected = !a.isInfected && b.isInfected;
  const neitherRemoved = !a.isRemoved && !b.isRemoved;
  return ((oneInfected || otherInfected) && neitherRemoved)
}

function resizeCanvasToDisplaySize(canvas) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQXJlYWNoYXJ0LmpzIiwid2VicGFjazovLy8uL2pzL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9TaW11bGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb2xvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBeUM7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFTO0FBQ3BDO0FBQ0E7O0FB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LE9BQU87QUFDdEIsZ0JBQWdCLG1EQUFVLHNDQUFzQyxFQUFFO0FBQ2xFO0FBQ0Esa0JBQWtCLGtEQUFTLDBDQUEwQyxFQUFFO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUCw2RjtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7Y29sb3JMaXN0fSBmcm9tICcuL2NvbG9yTGlzdC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcmVhY2hhcnQoc2ltLCBjaGFydCkge1xyXG4gICAgdGhpcy5jYW52YXMgPSBjaGFydDtcclxuICAgIHRoaXMuYyA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB0aGlzLndpZHRoID0gMzAwO1xyXG4gIFxyXG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgfTtcclxuICAgIHRoaXMudXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50aW1lIDwgdGhpcy5jYW52YXMud2lkdGgpIHtcclxuICAgICAgICAvLyBQbG90IGhlYWx0aHlcclxuICAgICAgICB0aGlzLmMuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jLnJlY3QodGhpcy50aW1lLCAwLCAxLCBzaW0uaGVhbHRoeUNvdW50IC8gc2ltLnRvdGFsQ291bnQgKiB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSBjb2xvckxpc3QuaGVhbHRoeTtcclxuICAgICAgICB0aGlzLmMuZmlsbCgpO1xyXG4gIFxyXG4gICAgICAgIC8vIFBsb3QgUmVtb3ZlZFxyXG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmMucmVjdCh0aGlzLnRpbWUsIHRoaXMuY2FudmFzLmhlaWdodCAtIChzaW0ucmVtb3ZlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpICogdGhpcy5jYW52YXMuaGVpZ2h0IC0gKHNpbS5pbmZlY3RlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpICogdGhpcy5jYW52YXMuaGVpZ2h0LCAxLCB0aGlzLmNhbnZhcy5oZWlnaHQgKiBzaW0ucmVtb3ZlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpO1xyXG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSBjb2xvckxpc3QucmVtb3ZlZDtcclxuICAgICAgICB0aGlzLmMuZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuYy5maWxsKCk7XHJcbiAgXHJcbiAgICAgICAgLy8gUGxvdCBJbmZlY3RlZFxyXG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmMucmVjdCh0aGlzLnRpbWUsIHRoaXMuY2FudmFzLmhlaWdodCAtIChzaW0uaW5mZWN0ZWRDb3VudCAvIHNpbS50b3RhbENvdW50KSAqIHRoaXMuY2FudmFzLmhlaWdodCwgMSwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmMuZmlsbFN0eWxlID0gY29sb3JMaXN0LmluZmVjdGVkO1xyXG4gICAgICAgIHRoaXMuYy5maWxsKCk7XHJcbiAgICAgICAgdGhpcy5jLmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgICB0aGlzLnRpbWUgKz0gdGhpcy53aWR0aCAvIHNpbS5kdXJhdGlvbjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9IiwiaW1wb3J0IHsgY29sb3JMaXN0IH0gZnJvbSAnLi9jb2xvckxpc3QuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaXJjbGUoYywgeCwgeSwgZHgsIGR5LCByYWRpdXMpIHtcbiAgdGhpcy5jID0gYzsgLy9DYW52YXMgY29udGV4dFxuICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgdGhpcy54ID0geDtcbiAgdGhpcy55ID0geTtcbiAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICB4OiBkeCxcbiAgICB5OiBkeSxcbiAgfTtcbiAgdGhpcy5sb2NrZWREb3duID0gZmFsc2U7XG4gIHRoaXMuaXNJbmZlY3RlZCA9IGZhbHNlO1xuICB0aGlzLmluZmVjdGlvbkZyYW1lID0gMDtcbiAgdGhpcy5pc1JlbW92ZWQgPSBmYWxzZTtcblxuICB0aGlzLmNvbG9yID0gdGhpcy5pc0luZmVjdGVkID8gY29sb3JMaXN0LmluZmVjdGVkIDogY29sb3JMaXN0LmhlYWx0aHk7XG4gIHRoaXMubWFzcyA9IDE7XG4gIHRoaXMub3BhY2l0eSA9IDE7XG5cbiAgdGhpcy5kcmF3ID0gKCkgPT4ge1xuICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgYy5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgIGMuZ2xvYmFsQWxwaGEgPSB0aGlzLm9wYWNpdHk7XG4gICAgYy5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGMuZmlsbCgpO1xuICB9O1xuXG4gIHRoaXMudXBkYXRlID0gKCkgPT4ge1xuICAgIHRoaXMueCArPSB0aGlzLmxvY2tlZERvd24gPyB0aGlzLnZlbG9jaXR5LngqMC4wNSA6IHRoaXMudmVsb2NpdHkueDtcbiAgICB0aGlzLnkgKz0gdGhpcy5sb2NrZWREb3duID8gdGhpcy52ZWxvY2l0eS55KjAuMDUgOiB0aGlzLnZlbG9jaXR5Lnk7XG4gICAgdGhpcy5pbmZlY3Rpb25GcmFtZSA9IHRoaXMuaXNJbmZlY3RlZCA/IHRoaXMuaW5mZWN0aW9uRnJhbWUgKyAxIDogdGhpcy5pbmZlY3Rpb25GcmFtZTtcblxuICAgIHRoaXMuZHJhdygpO1xuICB9O1xuXG4gIHRoaXMubW9kaWZ5VmVsb2NpdHkgPSAobW9kaWZpZXIpID0+IHtcbiAgICB0aGlzLnZlbG9jaXR5LnggKj0gbW9kaWZpZXI7XG4gICAgdGhpcy52ZWxvY2l0eS55ICo9IG1vZGlmaWVyO1xuICB9XG59XG4iLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IGNoYXJ0cyB9IGZyb20gJy4vYXBwLmpzJztcclxuaW1wb3J0IHsgY29sb3JMaXN0IH0gZnJvbSAnLi9jb2xvckxpc3QuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXVsYXRpb24oY2FudmFzLCBpZCkge1xyXG4gIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gIHRoaXMuaWQgPSBpZDtcclxuICB0aGlzLmMgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHRoaXMuY2lyY2xlTGlzdCA9IFtdO1xyXG4gIHRoaXMuZnJhbWVDb3VudCA9IDA7XHJcbiAgdGhpcy5hbmltYXRpb247XHJcbiAgdGhpcy5pblZpZXcgPSBmYWxzZTtcclxuXHJcbiAgdGhpcy5kdXJhdGlvbiA9IDI0MDA7XHJcbiAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgdGhpcy5yYWRpdXMgPSB0aGlzLmNhbnZhcy53aWR0aCAvIDMwO1xyXG4gIHRoaXMudG90YWxDb3VudCA9IDI1MDtcclxuXHJcbiAgdGhpcy5pc0xvY2tkb3duID0gZmFsc2U7XHJcbiAgdGhpcy5sb2NrZG93blJhdGlvID0gMTtcclxuICB0aGlzLmlzUmVzdHJpY3RlZCA9IGZhbHNlO1xyXG4gIHRoaXMucmVzdHJpY3Rpb25SYXRlID0gMTtcclxuXHJcbiAgdGhpcy5pbmZlY3Rpb25EdXJhdGlvbiA9IDQ4MDsgLy9pbiBOdW1iZXIgb2YgZnJhbWVzXHJcbiAgdGhpcy50cmFuc21pc3Npb25SYXRpbyA9ICh0aGlzLmlkID09PSAyKSA/IDAuMjUgOiAwLjU7XHJcblxyXG4gIHRoaXMuaGVhbHRoeUNvdW50ID0gdGhpcy50b3RhbENvdW50O1xyXG4gIHRoaXMuaW5mZWN0ZWRDb3VudCA9IDA7XHJcbiAgdGhpcy5yZW1vdmVkQ291bnQgPSAwO1xyXG5cclxuXHJcbiAgdGhpcy5pbml0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jaXJjbGVMaXN0ID0gW11cclxuICAgIHRoaXMuaGVhbHRoeUNvdW50ID0gdGhpcy50b3RhbENvdW50O1xyXG4gICAgdGhpcy5pbmZlY3RlZENvdW50ID0gMDtcclxuICAgIHRoaXMucmVtb3ZlZENvdW50ID0gMDtcclxuICAgIHRoaXMuZnJhbWVDb3VudCA9IDA7XHJcbiAgICB1dGlscy5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKHRoaXMuY2FudmFzKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXBsYXktYnV0dG9uJylbdGhpcy5pZF0ub25jbGljayA9IHRoaXMucmVwbGF5O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlcGxheSR7dGhpcy5pZH1gKS5vbmNsaWNrID0gdGhpcy5yZXBsYXk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdHJpY3Rpb25DaGVja2JveCcpLm9uY2xpY2sgPSB0aGlzLnRvZ2dsZVJlc3RyaWN0aW9uO1xyXG5cclxuICAgIGlmICh0aGlzLmlkID09PSAxKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0VFIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhbnNtaXNzaW9uUmF0aW8nKTtcclxuICAgICAgaW5wdXRUUi52YWx1ZSA9IHRoaXMudHJhbnNtaXNzaW9uUmF0aW8gKiAxMDA7XHJcbiAgICAgIGlucHV0VFIub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy50cmFuc21pc3Npb25SYXRpbyA9IGlucHV0VFIudmFsdWUgLyAxMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGlucHV0RHVyYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mZWN0aW9uRHVyYXRpb25FbnRyeScpO1xyXG4gICAgICBpbnB1dER1cmF0aW9uLnZhbHVlID0gdGhpcy5pbmZlY3Rpb25EdXJhdGlvbiAvIDYwO1xyXG4gICAgICBpbnB1dER1cmF0aW9uLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5mZWN0aW9uRHVyYXRpb24gPSBpbnB1dER1cmF0aW9uLnZhbHVlICogNjA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pZCA9PT0gMikge1xyXG4gICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrZG93bkNoZWNrYm94Jyk7XHJcbiAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0aGlzLmlzTG9ja2Rvd247XHJcbiAgICAgIGNoZWNrQm94Lm9uY2xpY2sgPSB0aGlzLnRvZ2dsZUxvY2tkb3duO1xyXG5cclxuICAgICAgY29uc3QgaW5wdXRMUiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrZG93blJhdGlvJyk7XHJcbiAgICAgIGlucHV0TFIudmFsdWUgPSB0aGlzLmxvY2tkb3duUmF0aW8gKiAxMDA7XHJcbiAgICAgIGlucHV0TFIub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2NrZG93blJhdGlvID0gaW5wdXRMUi52YWx1ZSAvIDEwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlkID09PSAzKSB7XHJcbiAgICAgIHRoaXMuaXNSZXN0cmljdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RyaWN0aW9uQ2hlY2tib3gnKS5jaGVja2VkO1xyXG4gICAgfVxyXG4gICAgLy9Jbml0aWFsaXplIGNpcmNsZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbENvdW50OyBpKyspIHtcclxuICAgICAgY29uc3QgeCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgIGNvbnN0IHkgPSB1dGlscy5tYXRoUmFuZG9tSW5SYW5nZSgwICsgdGhpcy5yYWRpdXMsIHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMucmFkaXVzKTtcclxuICAgICAgY29uc3QgZHggPSB1dGlscy5tYXRoUmFuZG9tSW5SYW5nZUZsb2F0KC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKTtcclxuICAgICAgY29uc3QgZHkgPSB1dGlscy5tYXRoUmFuZG9tSW5SYW5nZUZsb2F0KC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKTtcclxuICAgICAgY29uc3QgdGVtcENpcmNsZSA9IG5ldyBDaXJjbGUodGhpcy5jLCB4LCB5LCBkeCwgZHksIHRoaXMucmFkaXVzKTtcclxuICAgICAgdGVtcENpcmNsZS5sb2NrZWREb3duID0gdGhpcy5pc0xvY2tkb3duO1xyXG4gICAgICAvL05vIG92ZXJsYXAgb24gc3Bhd25cclxuICAgICAgaWYgKGkgIT09IDApIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2lyY2xlTGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgaWYgKHV0aWxzLmhhc0NvbGxpc2lvbih0aGlzLmNpcmNsZUxpc3Rbal0sIHRlbXBDaXJjbGUpKSB7XHJcbiAgICAgICAgICAgIHRlbXBDaXJjbGUueCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMud2lkdGggLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgIHRlbXBDaXJjbGUueSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpO1xyXG4gICAgICAgICAgICBqID0gLTE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vTm8gb3ZlcmxhcCB3aXRoIGRpdmlkZXJcclxuICAgICAgaWYgKHRoaXMuaXNSZXN0cmljdGVkKSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goYSA9PiB7XHJcbiAgICAgICAgICBpZiAoYS54IDwgKHRoaXMuY2FudmFzLndpZHRoIC8gMikgKyAxMCAmJiBhLnggPiAodGhpcy5jYW52YXMud2lkdGggLyAyKSAtIDEwKSB7XHJcbiAgICAgICAgICAgIGEueCAtPSAyMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5wdXNoKHRlbXBDaXJjbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBzZWVkIG51bWJlciBvZiBpbmZlY3RlZFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgdGhpcy5jaXJjbGVMaXN0W2ldLmlzSW5mZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNpcmNsZUxpc3RbaV0uY29sb3IgPSBjb2xvckxpc3QuaW5mZWN0ZWQ7XHJcbiAgICAgIHRoaXMuaW5mZWN0ZWRDb3VudCArPSAxO1xyXG4gICAgICB0aGlzLmhlYWx0aHlDb3VudCAtPSAxO1xyXG4gICAgICBpZiAodGhpcy5pZCA9PT0gMykge1xyXG4gICAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS54ICo9IDAuMjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgIGEudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfTsgLy8gdGhpcy5pbml0XHJcblxyXG4gIHRoaXMuYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgIHRoaXMuYy5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICBjaGFydHNbdGhpcy5pZF0udXBkYXRlKCk7XHJcblxyXG4gICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGEpID0+IHtcclxuICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGIpID0+IHtcclxuICAgICAgICBpZiAoYSAhPSBiICYmIHV0aWxzLmNoZWNrQ2lyY2xlQ29sbGlzaW9uKGEsIGIpKSB7XHJcblxyXG4gICAgICAgICAgdXRpbHMucmVzb2x2ZUNvbGxpc2lvbihhLCBiKTtcclxuXHJcbiAgICAgICAgICBpZiAodXRpbHMuY2hlY2tJbmZlY3RlZGFuZFN1c2NlcHRpYmxlKGEsIGIpKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDwgdGhpcy50cmFuc21pc3Npb25SYXRpbykge1xyXG4gICAgICAgICAgICAgIGEuY29sb3IgPSBjb2xvckxpc3QuaW5mZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgYS5pc0luZmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBhLmlzSGVhbHRoeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGEuaW5mZWN0aW9uRnJhbWUgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgYi5jb2xvciA9IGNvbG9yTGlzdC5pbmZlY3RlZDtcclxuICAgICAgICAgICAgICBiLmlzSW5mZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGIuaXNIZWFsdGh5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgYi5pbmZlY3Rpb25GcmFtZSArPSAxO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzLmhlYWx0aHlDb3VudCAtPSAxO1xyXG4gICAgICAgICAgICAgIHRoaXMuaW5mZWN0ZWRDb3VudCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgdXRpbHMuY2hlY2tXYWxsQ29sbGlzaW9uKGEsIHRoaXMuY2FudmFzLCB0aGlzLmlzUmVzdHJpY3RlZCk7XHJcblxyXG4gICAgICAvLyBEZXZlbG9wIGltbXVuaXR5IG9yIGRpZVxyXG4gICAgICBpZiAoYS5pc0luZmVjdGVkICYmIGEuaW5mZWN0aW9uRnJhbWUgPiB0aGlzLmluZmVjdGlvbkR1cmF0aW9uKSB7XHJcbiAgICAgICAgYS5jb2xvciA9IGNvbG9yTGlzdC5yZW1vdmVkO1xyXG4gICAgICAgIGEub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICBhLmlzSW5mZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBhLmlzUmVtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbmZlY3RlZENvdW50IC09IDE7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVkQ291bnQgKz0gMTtcclxuICAgICAgfVxyXG4gICAgICBhLnVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICAvL1VwZGF0ZSBkYXRhXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaGVhbHRoeSR7dGhpcy5pZH1gKS5pbm5lckhUTUwgPSB0aGlzLmhlYWx0aHlDb3VudDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbmZlY3RlZCR7dGhpcy5pZH1gKS5pbm5lckhUTUwgPSB0aGlzLmluZmVjdGVkQ291bnQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVtb3ZlZCR7dGhpcy5pZH1gKS5pbm5lckhUTUwgPSB0aGlzLnJlbW92ZWRDb3VudDtcclxuXHJcbiAgICAvL0NoZWNrIGR1cmF0aW9uIG9mIGFuaW1hdGlvbiBhbmQgb25seSBwbGF5IGlmIGluIHZpZXdcclxuICAgIGlmICh0aGlzLmZyYW1lQ291bnQgPCB0aGlzLmR1cmF0aW9uICYmIHRoaXMuaW5WaWV3KSB7XHJcbiAgICAgIHRoaXMuZnJhbWVDb3VudCArPSAxO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZnJhbWVDb3VudCA+PSB0aGlzLmR1cmF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2FudmFzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH1cclxuICB9O1xyXG4gIHRoaXMudG9nZ2xlTG9ja2Rvd24gPSAoKSA9PiB7XHJcbiAgICB0aGlzLmlzTG9ja2Rvd24gPSAhdGhpcy5pc0xvY2tkb3duO1xyXG4gICAgaWYgKHRoaXMuaXNMb2NrZG93bikge1xyXG4gICAgICB0aGlzLmNpcmNsZUxpc3QuZm9yRWFjaCgoYSkgPT4ge1xyXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpIDw9IHRoaXMubG9ja2Rvd25SYXRpbykge1xyXG4gICAgICAgICAgYS5sb2NrZWREb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGEpID0+IHtcclxuICAgICAgICBpZiAoYS5sb2NrZWREb3duKSB7XHJcbiAgICAgICAgICBhLmxvY2tlZERvd24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgICB0aGlzLnRvZ2dsZVJlc3RyaWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzUmVzdHJpY3RlZCA9ICF0aGlzLmlzUmVzdHJpY3RlZDtcclxuICAgICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXRyYXZlbC1kaXZpZGVyXCIpO1xyXG4gICAgICBkaXZpZGVyLnN0eWxlLmRpc3BsYXkgPSAoZGl2aWRlci5zdHlsZS5kaXNwbGF5ID09PSBcIlwiKSA/IFwiYmxvY2tcIiA6IFwiXCI7XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgIGlmIChhLnggPCAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIDEwICYmIGEueCA+ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpIC0gMTApIHtcclxuICAgICAgICAgIGEueCAtPSAyMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgdGhpcy5yZXBsYXkgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2FudmFzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgY2hhcnRzW3RoaXMuaWRdLmMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICBjaGFydHNbdGhpcy5pZF0udGltZSA9IDA7XHJcblxyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vU2ltdWxhdGlvbic7XG5pbXBvcnQgQXJlYWNoYXJ0IGZyb20gJy4vQXJlYWNoYXJ0JztcblxubGV0IHNpbXMgPSBbXTtcbmV4cG9ydCBsZXQgY2hhcnRzID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gIHNpbXNbaV0gPSBuZXcgU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2ltdWxhdGlvbiR7aX1gKSwgaSk7XG4gIHNpbXNbaV0uaW5pdCgpO1xuICBjaGFydHNbaV0gPSBuZXcgQXJlYWNoYXJ0KHNpbXNbaV0sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGFydCR7aX1gKSk7XG4gIGNoYXJ0c1tpXS5pbml0KCk7XG59XG5cbnNpbXNbMF0uaW5WaWV3ID0gdHJ1ZTtcbnNpbXNbMF0uYW5pbWF0ZSgpO1xuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gIHNpbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcbiAgICAgICAgZWxlbWVudC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gNTAgJiZcbiAgICAgICAgIWVsZW1lbnQuaW5WaWV3KSB7XG4gICAgICBlbGVtZW50LmluVmlldyA9IHRydWU7XG4gICAgICBlbGVtZW50LmFuaW1hdGUoKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKCBlbGVtZW50LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCA1MCB8fFxuICAgICAgZWxlbWVudC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gd2luZG93LmlubmVySGVpZ2h0KSAmJlxuICAgICAgZWxlbWVudC5pblZpZXdcbiAgICAgICkge1xuICAgICAgZWxlbWVudC5pblZpZXcgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwicGF1c2UgXCIgKyBlbGVtZW50LmluVmlldyk7XG4gICAgICBcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGNvbG9yTGlzdCA9IHtcclxuICAgIGhlYWx0aHk6ICcjNjNjMmRiJyxcclxuICAgIGluZmVjdGVkOiAnI2Y2NjY1NCcsXHJcbiAgICByZW1vdmVkOiAnZ3JheScsXHJcbiAgfTsiLCJleHBvcnQgZnVuY3Rpb24gaGFzQ29sbGlzaW9uKGEsIGIpIHtcclxuICAgIGlmIChNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LCAyKSArIE1hdGgucG93KGEueSAtIGIueSwgMikpIDw9IGEucmFkaXVzICsgYi5yYWRpdXMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0aFJhbmRvbUluUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0aFJhbmRvbUluUmFuZ2VGbG9hdChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDaXJjbGVDb2xsaXNpb24oYSwgYikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsIDIpICsgTWF0aC5wb3coYS55IC0gYi55LCAyKSkgPD0gYS5yYWRpdXMgKyBiLnJhZGl1czsgXHJcbiAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDb2xsaXNpb24oYSxiKSB7XHJcbiAgICBjb25zdCB4VmVsb2NpdHlEaWZmID0gYS52ZWxvY2l0eS54IC0gYi52ZWxvY2l0eS54O1xyXG4gICAgY29uc3QgeVZlbG9jaXR5RGlmZiA9IGEudmVsb2NpdHkueSAtIGIudmVsb2NpdHkueTtcclxuXHJcbiAgICBjb25zdCB4RGlzdCA9IGIueCAtIGEueDtcclxuICAgIGNvbnN0IHlEaXN0ID0gYi55IC0gYS55O1xyXG5cclxuICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBhcnRpY2xlc1xyXG4gICAgaWYgKHhWZWxvY2l0eURpZmYgKiB4RGlzdCArIHlWZWxvY2l0eURpZmYgKiB5RGlzdCA+PSAwKSB7XHJcbiAgICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBhcnRpY2xlc1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIoYi55IC0gYS55LCBiLnggLSBhLngpO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxyXG4gICAgICAgIGNvbnN0IG0xID0gYS5tYXNzO1xyXG4gICAgICAgIGNvbnN0IG0yID0gYi5tYXNzO1xyXG5cclxuICAgICAgICAvLyBWZWxvY2l0eSBiZWZvcmUgZXF1YXRpb25cclxuICAgICAgICBjb25zdCB1MSA9IHJvdGF0ZShhLnZlbG9jaXR5LCBhbmdsZSk7XHJcbiAgICAgICAgY29uc3QgdTIgPSByb3RhdGUoYi52ZWxvY2l0eSwgYW5nbGUpO1xyXG5cclxuICAgICAgICAvLyBWZWxvY2l0eSBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cclxuICAgICAgICBjb25zdCB2MSA9IHtcclxuICAgICAgICB4OiB1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSxcclxuICAgICAgICB5OiB1MS55XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB2MiA9IHtcclxuICAgICAgICB4OiB1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSxcclxuICAgICAgICB5OiB1Mi55XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRmluYWwgdmVsb2NpdHkgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXHJcbiAgICAgICAgY29uc3QgdkZpbmFsMSA9IHJvdGF0ZSh2MSwgLWFuZ2xlKTtcclxuICAgICAgICBjb25zdCB2RmluYWwyID0gcm90YXRlKHYyLCAtYW5nbGUpO1xyXG5cclxuICAgICAgICAvLyBTd2FwIHBhcnRpY2xlIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XHJcblxyXG4gICAgICAgIGEudmVsb2NpdHkueCA9IGEubG9ja2VkRG93biA/IHZGaW5hbDEueCAqIDAuMDUgOiB2RmluYWwxLng7XHJcbiAgICAgICAgYS52ZWxvY2l0eS55ID0gYS5sb2NrZWREb3duID8gdkZpbmFsMS55ICogMC4wNSA6IHZGaW5hbDEueTtcclxuXHJcbiAgICAgICAgYi52ZWxvY2l0eS54ID0gYi5sb2NrZWREb3duID8gdkZpbmFsMi54ICogMC4wNSA6IHZGaW5hbDIueDtcclxuICAgICAgICBiLnZlbG9jaXR5LnkgPSBiLmxvY2tlZERvd24gPyB2RmluYWwyLnggKiAwLjA1IDogdkZpbmFsMi55O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGUodmVsb2NpdHksIGFuZ2xlKSB7XHJcbiAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XHJcbiAgICB4OiB2ZWxvY2l0eS54ICogTWF0aC5jb3MoYW5nbGUpIC0gdmVsb2NpdHkueSAqIE1hdGguc2luKGFuZ2xlKSxcclxuICAgIHk6IHZlbG9jaXR5LnggKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eS55ICogTWF0aC5jb3MoYW5nbGUpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrV2FsbENvbGxpc2lvbihhLCBjYW52YXMsIGlzUmVzdHJpY3RlZCkge1xyXG4gIGlmICgoYS54ICsgYS5yYWRpdXMpID4gY2FudmFzLndpZHRoIHx8IChhLnggLSBhLnJhZGl1cykgPCAwKSB7XHJcbiAgICBhLnZlbG9jaXR5LnggPSAtYS52ZWxvY2l0eS54O1xyXG4gIH1cclxuICBpZiAoKGEueSArIGEucmFkaXVzKSA+IGNhbnZhcy5oZWlnaHQgfHwgKGEueSAtIGEucmFkaXVzKSA8IDApIHtcclxuICAgIGEudmVsb2NpdHkueSA9IC1hLnZlbG9jaXR5Lnk7XHJcbiAgfVxyXG4gIGlmIChpc1Jlc3RyaWN0ZWQpIHtcclxuICAgIGlmIChhLnggPCBjYW52YXMud2lkdGggLyAyICYmIChhLnggKyBhLnJhZGl1cykgPiAoY2FudmFzLndpZHRoIC8gMiApIC0gMikge1xyXG4gICAgICBhLnZlbG9jaXR5LnggPSAtYS52ZWxvY2l0eS54O1xyXG4gICAgfVxyXG4gICAgaWYgKGEueCA+IGNhbnZhcy53aWR0aCAvIDIgJiYgKGEueCAtIGEucmFkaXVzKSA8IChjYW52YXMud2lkdGggLyAyKSArIDIpIHtcclxuICAgICAgYS52ZWxvY2l0eS54ID0gLWEudmVsb2NpdHkueDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luZmVjdGVkYW5kU3VzY2VwdGlibGUoYSxiKSB7XHJcbiAgY29uc3Qgb25lSW5mZWN0ZWQgPSBhLmlzSW5mZWN0ZWQgJiYgIWIuaXNJbmZlY3RlZDtcclxuICBjb25zdCBvdGhlckluZmVjdGVkID0gIWEuaXNJbmZlY3RlZCAmJiBiLmlzSW5mZWN0ZWQ7XHJcbiAgY29uc3QgbmVpdGhlclJlbW92ZWQgPSAhYS5pc1JlbW92ZWQgJiYgIWIuaXNSZW1vdmVkO1xyXG4gIHJldHVybiAoKG9uZUluZmVjdGVkIHx8IG90aGVySW5mZWN0ZWQpICYmIG5laXRoZXJSZW1vdmVkKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShjYW52YXMpIHtcclxuICBjb25zdCB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICBjb25zdCBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==