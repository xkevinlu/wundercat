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
    x_init: dx,
    y_init: dy
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

  this.restoreInitVelocity = () => {
    this.velocity.x = this.velocity.x_init;
    this.velocity.y = this.velocity.y_init;
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
    _utils__WEBPACK_IMPORTED_MODULE_1__["resizeCanvasToDisplaySize"](this.canvas);
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
      this.infectionDuration = 360;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvQXJlYWNoYXJ0LmpzIiwid2VicGFjazovLy8uL2pzL0NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9TaW11bGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb2xvckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBeUM7O0FBRTFCO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFTO0FBQ3BDO0FBQ0E7O0FB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QztBQUNGOztBQUVwQztBQUNPOztBQUVQLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsbURBQVUsc0NBQXNDLEVBQUU7QUFDbEU7QUFDQSxrQkFBa0Isa0RBQVMsMENBQTBDLEVBQUU7QUFDdkU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQLDZGO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHtjb2xvckxpc3R9IGZyb20gJy4vY29sb3JMaXN0LmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFyZWFjaGFydChzaW0sIGNoYXJ0KSB7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGNoYXJ0O1xyXG4gICAgdGhpcy5jID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHRoaXMud2lkdGggPSAzMDA7XHJcbiAgXHJcbiAgICB0aGlzLmluaXQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICB9O1xyXG4gICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnRpbWUgPCB0aGlzLmNhbnZhcy53aWR0aCkge1xyXG4gICAgICAgIC8vIFBsb3QgaGVhbHRoeVxyXG4gICAgICAgIHRoaXMuYy5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmMucmVjdCh0aGlzLnRpbWUsIDAsIDEsIHNpbS5oZWFsdGh5Q291bnQgLyBzaW0udG90YWxDb3VudCAqIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jLmZpbGxTdHlsZSA9IGNvbG9yTGlzdC5oZWFsdGh5O1xyXG4gICAgICAgIHRoaXMuYy5maWxsKCk7XHJcbiAgXHJcbiAgICAgICAgLy8gUGxvdCBSZW1vdmVkXHJcbiAgICAgICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuYy5yZWN0KHRoaXMudGltZSwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gKHNpbS5yZW1vdmVkQ291bnQgLyBzaW0udG90YWxDb3VudCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQgLSAoc2ltLmluZmVjdGVkQ291bnQgLyBzaW0udG90YWxDb3VudCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQsIDEsIHRoaXMuY2FudmFzLmhlaWdodCAqIHNpbS5yZW1vdmVkQ291bnQgLyBzaW0udG90YWxDb3VudCk7XHJcbiAgICAgICAgdGhpcy5jLmZpbGxTdHlsZSA9IGNvbG9yTGlzdC5yZW1vdmVkO1xyXG4gICAgICAgIHRoaXMuYy5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgICAgdGhpcy5jLmZpbGwoKTtcclxuICBcclxuICAgICAgICAvLyBQbG90IEluZmVjdGVkXHJcbiAgICAgICAgdGhpcy5jLmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuYy5yZWN0KHRoaXMudGltZSwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gKHNpbS5pbmZlY3RlZENvdW50IC8gc2ltLnRvdGFsQ291bnQpICogdGhpcy5jYW52YXMuaGVpZ2h0LCAxLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYy5maWxsU3R5bGUgPSBjb2xvckxpc3QuaW5mZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5jLmZpbGwoKTtcclxuICAgICAgICB0aGlzLmMuZ2xvYmFsQWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMudGltZSArPSB0aGlzLndpZHRoIC8gc2ltLmR1cmF0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0iLCJpbXBvcnQgeyBjb2xvckxpc3QgfSBmcm9tICcuL2NvbG9yTGlzdC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpcmNsZShjLCB4LCB5LCBkeCwgZHksIHJhZGl1cykge1xuICB0aGlzLmMgPSBjOyAvL0NhbnZhcyBjb250ZXh0XG4gIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xuICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgIHg6IGR4LFxuICAgIHk6IGR5LFxuICAgIHhfaW5pdDogZHgsXG4gICAgeV9pbml0OiBkeVxuICB9O1xuICB0aGlzLmxvY2tlZERvd24gPSBmYWxzZTtcbiAgdGhpcy5pc0luZmVjdGVkID0gZmFsc2U7XG4gIHRoaXMuaW5mZWN0aW9uRnJhbWUgPSAwO1xuICB0aGlzLmlzUmVtb3ZlZCA9IGZhbHNlO1xuXG4gIHRoaXMuY29sb3IgPSB0aGlzLmlzSW5mZWN0ZWQgPyBjb2xvckxpc3QuaW5mZWN0ZWQgOiBjb2xvckxpc3QuaGVhbHRoeTtcbiAgdGhpcy5tYXNzID0gMTtcbiAgdGhpcy5vcGFjaXR5ID0gMTtcblxuICB0aGlzLmRyYXcgPSAoKSA9PiB7XG4gICAgYy5iZWdpblBhdGgoKTtcbiAgICBjLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgYy5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcbiAgICBjLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgYy5maWxsKCk7XG4gIH07XG5cbiAgdGhpcy51cGRhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy54ICs9IHRoaXMubG9ja2VkRG93biA/IHRoaXMudmVsb2NpdHkueCowLjA1IDogdGhpcy52ZWxvY2l0eS54O1xuICAgIHRoaXMueSArPSB0aGlzLmxvY2tlZERvd24gPyB0aGlzLnZlbG9jaXR5LnkqMC4wNSA6IHRoaXMudmVsb2NpdHkueTtcbiAgICB0aGlzLmluZmVjdGlvbkZyYW1lID0gdGhpcy5pc0luZmVjdGVkID8gdGhpcy5pbmZlY3Rpb25GcmFtZSArIDEgOiB0aGlzLmluZmVjdGlvbkZyYW1lO1xuXG4gICAgdGhpcy5kcmF3KCk7XG4gIH07XG5cbiAgdGhpcy5yZXN0b3JlSW5pdFZlbG9jaXR5ID0gKCkgPT4ge1xuICAgIHRoaXMudmVsb2NpdHkueCA9IHRoaXMudmVsb2NpdHkueF9pbml0O1xuICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMudmVsb2NpdHkueV9pbml0O1xuICB9XG59XG4iLCJpbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IGNoYXJ0cyB9IGZyb20gJy4vYXBwLmpzJztcclxuaW1wb3J0IHsgY29sb3JMaXN0IH0gZnJvbSAnLi9jb2xvckxpc3QuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXVsYXRpb24oY2FudmFzLCBpZCkge1xyXG4gIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gIHRoaXMuaWQgPSBpZDtcclxuICB0aGlzLmMgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHRoaXMuY2lyY2xlTGlzdCA9IFtdO1xyXG4gIHRoaXMuZnJhbWVDb3VudCA9IDA7XHJcbiAgdGhpcy5hbmltYXRpb247XHJcbiAgdGhpcy5pblZpZXcgPSBmYWxzZTtcclxuXHJcbiAgdGhpcy5kdXJhdGlvbiA9IDI0MDA7XHJcbiAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgdGhpcy5yYWRpdXMgPSA1O1xyXG4gIHRoaXMudG90YWxDb3VudCA9IDI1MDtcclxuXHJcbiAgdGhpcy5pc0xvY2tkb3duID0gZmFsc2U7XHJcbiAgdGhpcy5sb2NrZG93blJhdGlvID0gMTtcclxuICB0aGlzLmlzUmVzdHJpY3RlZCA9IGZhbHNlO1xyXG4gIHRoaXMucmVzdHJpY3Rpb25SYXRlID0gMTtcclxuXHJcbiAgdGhpcy5pbmZlY3Rpb25EdXJhdGlvbiA9IDQ4MDsgLy9pbiBOdW1iZXIgb2YgZnJhbWVzXHJcbiAgdGhpcy50cmFuc21pc3Npb25SYXRpbyA9IDAuNTtcclxuXHJcbiAgdGhpcy5oZWFsdGh5Q291bnQgPSB0aGlzLnRvdGFsQ291bnQ7XHJcbiAgdGhpcy5pbmZlY3RlZENvdW50ID0gMDtcclxuICB0aGlzLnJlbW92ZWRDb3VudCA9IDA7XHJcblxyXG5cclxuICB0aGlzLmluaXQgPSAoKSA9PiB7XHJcbiAgICB1dGlscy5yZXNpemVDYW52YXNUb0Rpc3BsYXlTaXplKHRoaXMuY2FudmFzKTtcclxuICAgIHRoaXMucmFkaXVzID0gdGhpcy5jYW52YXMud2lkdGggPiA3MDAgPyA4IDogNTtcclxuICAgIHRoaXMuY2lyY2xlTGlzdCA9IFtdXHJcbiAgICB0aGlzLmhlYWx0aHlDb3VudCA9IHRoaXMudG90YWxDb3VudDtcclxuICAgIHRoaXMuaW5mZWN0ZWRDb3VudCA9IDA7XHJcbiAgICB0aGlzLnJlbW92ZWRDb3VudCA9IDA7XHJcbiAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlcGxheS1idXR0b24nKVt0aGlzLmlkXS5vbmNsaWNrID0gdGhpcy5yZXBsYXk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVwbGF5JHt0aGlzLmlkfWApLm9uY2xpY2sgPSB0aGlzLnJlcGxheTtcclxuXHJcbiAgICBpZiAodGhpcy5pZCA9PT0gMSkge1xyXG4gICAgICBjb25zdCBpbnB1dFRSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbWlzc2lvblJhdGlvJyk7XHJcbiAgICAgIHRoaXMudHJhbnNtaXNzaW9uUmF0aW8gPSAwLjI1O1xyXG4gICAgICBpbnB1dFRSLnZhbHVlID0gdGhpcy50cmFuc21pc3Npb25SYXRpbyAqIDEwMDtcclxuICAgICAgaW5wdXRUUi5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnRyYW5zbWlzc2lvblJhdGlvID0gaW5wdXRUUi52YWx1ZSAvIDEwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW5wdXREdXJhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZlY3Rpb25EdXJhdGlvbkVudHJ5Jyk7XHJcbiAgICAgIHRoaXMuaW5mZWN0aW9uRHVyYXRpb24gPSAzNjA7XHJcbiAgICAgIGlucHV0RHVyYXRpb24udmFsdWUgPSB0aGlzLmluZmVjdGlvbkR1cmF0aW9uIC8gNjA7XHJcbiAgICAgIGlucHV0RHVyYXRpb24ub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbmZlY3Rpb25EdXJhdGlvbiA9IGlucHV0RHVyYXRpb24udmFsdWUgKiA2MDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlkID09PSAyKSB7XHJcbiAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2tkb3duQ2hlY2tib3gnKTtcclxuICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRoaXMuaXNMb2NrZG93bjtcclxuICAgICAgY2hlY2tCb3gub25jbGljayA9IHRoaXMudG9nZ2xlTG9ja2Rvd247XHJcblxyXG4gICAgICBjb25zdCBpbnB1dExSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2tkb3duUmF0aW8nKTtcclxuICAgICAgaW5wdXRMUi52YWx1ZSA9IHRoaXMubG9ja2Rvd25SYXRpbyAqIDEwMDtcclxuICAgICAgaW5wdXRMUi5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmxvY2tkb3duUmF0aW8gPSBpbnB1dExSLnZhbHVlIC8gMTAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaWQgPT09IDMpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RyaWN0aW9uQ2hlY2tib3gnKS5vbmNsaWNrID0gdGhpcy50b2dnbGVSZXN0cmljdGlvbjtcclxuICAgICAgdGhpcy5pc1Jlc3RyaWN0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdHJpY3Rpb25DaGVja2JveCcpLmNoZWNrZWQ7XHJcbiAgICB9XHJcbiAgICAvL0luaXRpYWxpemUgY2lyY2xlc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCB4ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKTtcclxuICAgICAgY29uc3QgeSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlKDAgKyB0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5yYWRpdXMpO1xyXG4gICAgICBjb25zdCBkeCA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICBjb25zdCBkeSA9IHV0aWxzLm1hdGhSYW5kb21JblJhbmdlRmxvYXQoLXRoaXMuc3BlZWQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICBjb25zdCB0ZW1wQ2lyY2xlID0gbmV3IENpcmNsZSh0aGlzLmMsIHgsIHksIGR4LCBkeSwgdGhpcy5yYWRpdXMpO1xyXG4gICAgICB0ZW1wQ2lyY2xlLmxvY2tlZERvd24gPSB0aGlzLmlzTG9ja2Rvd247XHJcbiAgICAgIC8vTm8gb3ZlcmxhcCBvbiBzcGF3blxyXG4gICAgICBpZiAoaSAhPT0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jaXJjbGVMaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpZiAodXRpbHMuaGFzQ29sbGlzaW9uKHRoaXMuY2lyY2xlTGlzdFtqXSwgdGVtcENpcmNsZSkpIHtcclxuICAgICAgICAgICAgdGVtcENpcmNsZS54ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMucmFkaXVzKTtcclxuICAgICAgICAgICAgdGVtcENpcmNsZS55ID0gdXRpbHMubWF0aFJhbmRvbUluUmFuZ2UoMCArIHRoaXMucmFkaXVzLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnJhZGl1cyk7XHJcbiAgICAgICAgICAgIGogPSAtMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy9ObyBvdmVybGFwIHdpdGggZGl2aWRlclxyXG4gICAgICBpZiAodGhpcy5pc1Jlc3RyaWN0ZWQpIHtcclxuICAgICAgICB0aGlzLmNpcmNsZUxpc3QuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgIGlmIChhLnggPCAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIDEwICYmIGEueCA+ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpIC0gMTApIHtcclxuICAgICAgICAgICAgYS54IC09IDIwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jaXJjbGVMaXN0LnB1c2godGVtcENpcmNsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IHNlZWQgbnVtYmVyIG9mIGluZmVjdGVkXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICB0aGlzLmNpcmNsZUxpc3RbaV0uaXNJbmZlY3RlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdFtpXS5jb2xvciA9IGNvbG9yTGlzdC5pbmZlY3RlZDtcclxuICAgICAgdGhpcy5pbmZlY3RlZENvdW50ICs9IDE7XHJcbiAgICAgIHRoaXMuaGVhbHRoeUNvdW50IC09IDE7XHJcbiAgICAgIGlmICh0aGlzLmlkID09PSAzKSB7XHJcbiAgICAgICAgdGhpcy5jaXJjbGVMaXN0W2ldLnggKj0gMC4yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGEpID0+IHtcclxuICAgICAgYS51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH07IC8vIHRoaXMuaW5pdFxyXG5cclxuICB0aGlzLmFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY2hhcnRzW3RoaXMuaWRdLnVwZGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEgIT0gYiAmJiB1dGlscy5jaGVja0NpcmNsZUNvbGxpc2lvbihhLCBiKSkge1xyXG5cclxuICAgICAgICAgIHV0aWxzLnJlc29sdmVDb2xsaXNpb24oYSwgYik7XHJcblxyXG4gICAgICAgICAgaWYgKHV0aWxzLmNoZWNrSW5mZWN0ZWRhbmRTdXNjZXB0aWJsZShhLCBiKSkge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHRoaXMudHJhbnNtaXNzaW9uUmF0aW8pIHtcclxuICAgICAgICAgICAgICBhLmNvbG9yID0gY29sb3JMaXN0LmluZmVjdGVkO1xyXG4gICAgICAgICAgICAgIGEuaXNJbmZlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgYS5pc0hlYWx0aHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBhLmluZmVjdGlvbkZyYW1lICs9IDE7XHJcblxyXG4gICAgICAgICAgICAgIGIuY29sb3IgPSBjb2xvckxpc3QuaW5mZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgYi5pc0luZmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBiLmlzSGVhbHRoeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGIuaW5mZWN0aW9uRnJhbWUgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5oZWFsdGh5Q291bnQgLT0gMTtcclxuICAgICAgICAgICAgICB0aGlzLmluZmVjdGVkQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIHV0aWxzLmNoZWNrV2FsbENvbGxpc2lvbihhLCB0aGlzLmNhbnZhcywgdGhpcy5pc1Jlc3RyaWN0ZWQpO1xyXG5cclxuICAgICAgLy8gRGV2ZWxvcCBpbW11bml0eSBvciBkaWVcclxuICAgICAgaWYgKGEuaXNJbmZlY3RlZCAmJiBhLmluZmVjdGlvbkZyYW1lID4gdGhpcy5pbmZlY3Rpb25EdXJhdGlvbikge1xyXG4gICAgICAgIGEuY29sb3IgPSBjb2xvckxpc3QucmVtb3ZlZDtcclxuICAgICAgICBhLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgYS5pc0luZmVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgYS5pc1JlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaW5mZWN0ZWRDb3VudCAtPSAxO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlZENvdW50ICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgYS51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gICAgLy9VcGRhdGUgZGF0YVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGhlYWx0aHkke3RoaXMuaWR9YCkuaW5uZXJIVE1MID0gdGhpcy5oZWFsdGh5Q291bnQ7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaW5mZWN0ZWQke3RoaXMuaWR9YCkuaW5uZXJIVE1MID0gdGhpcy5pbmZlY3RlZENvdW50O1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlbW92ZWQke3RoaXMuaWR9YCkuaW5uZXJIVE1MID0gdGhpcy5yZW1vdmVkQ291bnQ7XHJcblxyXG4gICAgLy9DaGVjayBkdXJhdGlvbiBvZiBhbmltYXRpb24gYW5kIG9ubHkgcGxheSBpZiBpbiB2aWV3XHJcbiAgICBpZiAodGhpcy5mcmFtZUNvdW50IDwgdGhpcy5kdXJhdGlvbiAmJiB0aGlzLmluVmlldykge1xyXG4gICAgICB0aGlzLmZyYW1lQ291bnQgKz0gMTtcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZyYW1lQ291bnQgPj0gdGhpcy5kdXJhdGlvbikge1xyXG4gICAgICB0aGlzLmNhbnZhcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcbiAgfTtcclxuICB0aGlzLnRvZ2dsZUxvY2tkb3duID0gKCkgPT4ge1xyXG4gICAgdGhpcy5pc0xvY2tkb3duID0gIXRoaXMuaXNMb2NrZG93bjtcclxuICAgIGlmICh0aGlzLmlzTG9ja2Rvd24pIHtcclxuICAgICAgdGhpcy5jaXJjbGVMaXN0LmZvckVhY2goKGEpID0+IHtcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8PSB0aGlzLmxvY2tkb3duUmF0aW8pIHtcclxuICAgICAgICAgIGEubG9ja2VkRG93biA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgaWYgKGEubG9ja2VkRG93bikge1xyXG4gICAgICAgICAgYS5sb2NrZWREb3duID0gZmFsc2U7XHJcbiAgICAgICAgICBhLnJlc3RvcmVJbml0VmVsb2NpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgICB0aGlzLnRvZ2dsZVJlc3RyaWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzUmVzdHJpY3RlZCA9ICF0aGlzLmlzUmVzdHJpY3RlZDtcclxuICAgICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2ltLXRyYXZlbC1kaXZpZGVyXCIpO1xyXG4gICAgICBkaXZpZGVyLnN0eWxlLmRpc3BsYXkgPSAoZGl2aWRlci5zdHlsZS5kaXNwbGF5ID09PSBcIlwiKSA/IFwiYmxvY2tcIiA6IFwiXCI7XHJcbiAgICAgIHRoaXMuY2lyY2xlTGlzdC5mb3JFYWNoKGEgPT4ge1xyXG4gICAgICAgIGlmIChhLnggPCAodGhpcy5jYW52YXMud2lkdGggLyAyKSArIDEwICYmIGEueCA+ICh0aGlzLmNhbnZhcy53aWR0aCAvIDIpIC0gMTApIHtcclxuICAgICAgICAgIGEueCAtPSAyMDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgdGhpcy5yZXBsYXkgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2FudmFzLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgY2hhcnRzW3RoaXMuaWRdLmMuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICBjaGFydHNbdGhpcy5pZF0udGltZSA9IDA7XHJcblxyXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCBTaW11bGF0aW9uIGZyb20gJy4vU2ltdWxhdGlvbic7XG5pbXBvcnQgQXJlYWNoYXJ0IGZyb20gJy4vQXJlYWNoYXJ0JztcblxubGV0IHNpbXMgPSBbXTtcbmV4cG9ydCBsZXQgY2hhcnRzID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gIHNpbXNbaV0gPSBuZXcgU2ltdWxhdGlvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2ltdWxhdGlvbiR7aX1gKSwgaSk7XG4gIHNpbXNbaV0uaW5pdCgpO1xuICBjaGFydHNbaV0gPSBuZXcgQXJlYWNoYXJ0KHNpbXNbaV0sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGFydCR7aX1gKSk7XG4gIGNoYXJ0c1tpXS5pbml0KCk7XG59XG5cbnNpbXNbMF0uaW5WaWV3ID0gdHJ1ZTtcbnNpbXNbMF0uYW5pbWF0ZSgpO1xuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gIHNpbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcbiAgICAgICAgZWxlbWVudC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gNTAgJiZcbiAgICAgICAgIWVsZW1lbnQuaW5WaWV3KSB7XG4gICAgICBlbGVtZW50LmluVmlldyA9IHRydWU7XG4gICAgICBlbGVtZW50LmFuaW1hdGUoKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgKCBlbGVtZW50LmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gPCA1MCB8fFxuICAgICAgZWxlbWVudC5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tID4gd2luZG93LmlubmVySGVpZ2h0KSAmJlxuICAgICAgZWxlbWVudC5pblZpZXdcbiAgICAgICkge1xuICAgICAgZWxlbWVudC5pblZpZXcgPSBmYWxzZTtcbiAgICAgIGNvbnNvbGUubG9nKFwicGF1c2UgXCIgKyBlbGVtZW50LmluVmlldyk7XG4gICAgICBcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGNvbG9yTGlzdCA9IHtcclxuICAgIGhlYWx0aHk6ICcjNjNjMmRiJyxcclxuICAgIGluZmVjdGVkOiAnI2Y2NjY1NCcsXHJcbiAgICByZW1vdmVkOiAnZ3JheScsXHJcbiAgfTsiLCJleHBvcnQgZnVuY3Rpb24gaGFzQ29sbGlzaW9uKGEsIGIpIHtcclxuICAgIGlmIChNYXRoLnNxcnQoTWF0aC5wb3coYS54IC0gYi54LCAyKSArIE1hdGgucG93KGEueSAtIGIueSwgMikpIDw9IGEucmFkaXVzICsgYi5yYWRpdXMpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0aFJhbmRvbUluUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgfVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0aFJhbmRvbUluUmFuZ2VGbG9hdChtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDaXJjbGVDb2xsaXNpb24oYSwgYikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsIDIpICsgTWF0aC5wb3coYS55IC0gYi55LCAyKSkgPD0gYS5yYWRpdXMgKyBiLnJhZGl1czsgXHJcbiAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVDb2xsaXNpb24oYSxiKSB7XHJcbiAgICBjb25zdCB4VmVsb2NpdHlEaWZmID0gYS52ZWxvY2l0eS54IC0gYi52ZWxvY2l0eS54O1xyXG4gICAgY29uc3QgeVZlbG9jaXR5RGlmZiA9IGEudmVsb2NpdHkueSAtIGIudmVsb2NpdHkueTtcclxuXHJcbiAgICBjb25zdCB4RGlzdCA9IGIueCAtIGEueDtcclxuICAgIGNvbnN0IHlEaXN0ID0gYi55IC0gYS55O1xyXG5cclxuICAgIC8vIFByZXZlbnQgYWNjaWRlbnRhbCBvdmVybGFwIG9mIHBhcnRpY2xlc1xyXG4gICAgaWYgKHhWZWxvY2l0eURpZmYgKiB4RGlzdCArIHlWZWxvY2l0eURpZmYgKiB5RGlzdCA+PSAwKSB7XHJcbiAgICAgICAgLy8gR3JhYiBhbmdsZSBiZXR3ZWVuIHRoZSB0d28gY29sbGlkaW5nIHBhcnRpY2xlc1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gLU1hdGguYXRhbjIoYi55IC0gYS55LCBiLnggLSBhLngpO1xyXG5cclxuICAgICAgICAvLyBTdG9yZSBtYXNzIGluIHZhciBmb3IgYmV0dGVyIHJlYWRhYmlsaXR5IGluIGNvbGxpc2lvbiBlcXVhdGlvblxyXG4gICAgICAgIGNvbnN0IG0xID0gYS5tYXNzO1xyXG4gICAgICAgIGNvbnN0IG0yID0gYi5tYXNzO1xyXG5cclxuICAgICAgICAvLyBWZWxvY2l0eSBiZWZvcmUgZXF1YXRpb25cclxuICAgICAgICBjb25zdCB1MSA9IHJvdGF0ZShhLnZlbG9jaXR5LCBhbmdsZSk7XHJcbiAgICAgICAgY29uc3QgdTIgPSByb3RhdGUoYi52ZWxvY2l0eSwgYW5nbGUpO1xyXG5cclxuICAgICAgICAvLyBWZWxvY2l0eSBhZnRlciAxZCBjb2xsaXNpb24gZXF1YXRpb25cclxuICAgICAgICBjb25zdCB2MSA9IHtcclxuICAgICAgICB4OiB1MS54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTIueCAqIDIgKiBtMiAvIChtMSArIG0yKSxcclxuICAgICAgICB5OiB1MS55XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB2MiA9IHtcclxuICAgICAgICB4OiB1Mi54ICogKG0xIC0gbTIpIC8gKG0xICsgbTIpICsgdTEueCAqIDIgKiBtMiAvIChtMSArIG0yKSxcclxuICAgICAgICB5OiB1Mi55XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gRmluYWwgdmVsb2NpdHkgYWZ0ZXIgcm90YXRpbmcgYXhpcyBiYWNrIHRvIG9yaWdpbmFsIGxvY2F0aW9uXHJcbiAgICAgICAgY29uc3QgdkZpbmFsMSA9IHJvdGF0ZSh2MSwgLWFuZ2xlKTtcclxuICAgICAgICBjb25zdCB2RmluYWwyID0gcm90YXRlKHYyLCAtYW5nbGUpO1xyXG5cclxuICAgICAgICAvLyBTd2FwIHBhcnRpY2xlIHZlbG9jaXRpZXMgZm9yIHJlYWxpc3RpYyBib3VuY2UgZWZmZWN0XHJcblxyXG4gICAgICAgIGEudmVsb2NpdHkueCA9IGEubG9ja2VkRG93biA/IHZGaW5hbDEueCAqIDAuMDUgOiB2RmluYWwxLng7XHJcbiAgICAgICAgYS52ZWxvY2l0eS55ID0gYS5sb2NrZWREb3duID8gdkZpbmFsMS55ICogMC4wNSA6IHZGaW5hbDEueTtcclxuXHJcbiAgICAgICAgYi52ZWxvY2l0eS54ID0gYi5sb2NrZWREb3duID8gdkZpbmFsMi54ICogMC4wNSA6IHZGaW5hbDIueDtcclxuICAgICAgICBiLnZlbG9jaXR5LnkgPSBiLmxvY2tlZERvd24gPyB2RmluYWwyLnggKiAwLjA1IDogdkZpbmFsMi55O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGUodmVsb2NpdHksIGFuZ2xlKSB7XHJcbiAgY29uc3Qgcm90YXRlZFZlbG9jaXRpZXMgPSB7XHJcbiAgICB4OiB2ZWxvY2l0eS54ICogTWF0aC5jb3MoYW5nbGUpIC0gdmVsb2NpdHkueSAqIE1hdGguc2luKGFuZ2xlKSxcclxuICAgIHk6IHZlbG9jaXR5LnggKiBNYXRoLnNpbihhbmdsZSkgKyB2ZWxvY2l0eS55ICogTWF0aC5jb3MoYW5nbGUpLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiByb3RhdGVkVmVsb2NpdGllcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrV2FsbENvbGxpc2lvbihhLCBjYW52YXMsIGlzUmVzdHJpY3RlZCkge1xyXG4gIGlmICgoYS54ICsgYS5yYWRpdXMpID4gY2FudmFzLndpZHRoIHx8IChhLnggLSBhLnJhZGl1cykgPCAwKSB7XHJcbiAgICBhLnZlbG9jaXR5LnggPSAtYS52ZWxvY2l0eS54O1xyXG4gIH1cclxuICBpZiAoKGEueSArIGEucmFkaXVzKSA+IGNhbnZhcy5oZWlnaHQgfHwgKGEueSAtIGEucmFkaXVzKSA8IDApIHtcclxuICAgIGEudmVsb2NpdHkueSA9IC1hLnZlbG9jaXR5Lnk7XHJcbiAgfVxyXG4gIGlmIChpc1Jlc3RyaWN0ZWQpIHtcclxuICAgIGlmIChhLnggPCBjYW52YXMud2lkdGggLyAyICYmIChhLnggKyBhLnJhZGl1cykgPiAoY2FudmFzLndpZHRoIC8gMiApIC0gMikge1xyXG4gICAgICBhLnZlbG9jaXR5LnggPSAtYS52ZWxvY2l0eS54O1xyXG4gICAgfVxyXG4gICAgaWYgKGEueCA+IGNhbnZhcy53aWR0aCAvIDIgJiYgKGEueCAtIGEucmFkaXVzKSA8IChjYW52YXMud2lkdGggLyAyKSArIDIpIHtcclxuICAgICAgYS52ZWxvY2l0eS54ID0gLWEudmVsb2NpdHkueDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0luZmVjdGVkYW5kU3VzY2VwdGlibGUoYSxiKSB7XHJcbiAgY29uc3Qgb25lSW5mZWN0ZWQgPSBhLmlzSW5mZWN0ZWQgJiYgIWIuaXNJbmZlY3RlZDtcclxuICBjb25zdCBvdGhlckluZmVjdGVkID0gIWEuaXNJbmZlY3RlZCAmJiBiLmlzSW5mZWN0ZWQ7XHJcbiAgY29uc3QgbmVpdGhlclJlbW92ZWQgPSAhYS5pc1JlbW92ZWQgJiYgIWIuaXNSZW1vdmVkO1xyXG4gIHJldHVybiAoKG9uZUluZmVjdGVkIHx8IG90aGVySW5mZWN0ZWQpICYmIG5laXRoZXJSZW1vdmVkKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzaXplQ2FudmFzVG9EaXNwbGF5U2l6ZShjYW52YXMpIHtcclxuICBjb25zdCB3aWR0aCA9IGNhbnZhcy5jbGllbnRXaWR0aDtcclxuICBjb25zdCBoZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuICBpZiAoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==