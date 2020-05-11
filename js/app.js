import Simulation from './Simulation';
import Areachart from './Areachart';
import Chart from 'chart.js';
import { resizeCanvasToDisplaySize } from './utils';
import noUiSlider from './nouislider.js';

let sims = [];
export let charts = [];

for (let i = 0; i < 4; i++) {
  if (document.getElementById(`simulation${i}`)) {
  sims[i] = new Simulation(document.getElementById(`simulation${i}`), i);
  sims[i].init();
  }
  if (document.getElementById(`chart${i}`)) {
  charts[i] = new Areachart(sims[i], document.getElementById(`chart${i}`));
  charts[i].init();
  }
}

//Start for solo components, turn off in full page to avoid autostart
sims.forEach((element) => {
  if (element.canvas.getBoundingClientRect().top < window.innerHeight &&
    element.canvas.getBoundingClientRect().bottom > 50 &&
    !element.inView) {
    element.inView = true;
    element.animate();
    }})


//Init sim 0
if (sims[0]) { 
const sliderInfectionChance0 = document.getElementById("slider-infection-chance-0");
noUiSlider.create(sliderInfectionChance0, {
  start: sims[0].transmissionRatio * 100,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  }
});
sliderInfectionChance0.noUiSlider.on('update', function (values, handle) {
  document.getElementById('transmissionRatio-0').innerHTML = `${values[handle]}`;
  sims[0].transmissionRatio = values[handle] / 100;
});

const sliderInfectionDuration0 = document.getElementById("slider-infection-duration-0");
noUiSlider.create(sliderInfectionDuration0, {
  start: sims[0].infectionDuration / 60,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 12
  }
});

sliderInfectionDuration0.noUiSlider.on('update', function (values, handle) {
  document.getElementById('infectionDuration-0').innerHTML = `${values[handle]}`;
  sims[0].infectionDuration = values[handle] * 60;
});
}

//Init sim 1

if (document.getElementById("slider-infection-chance")) {
sims[1].transmissionRatio = 0.25;
const sliderInfectionChance = document.getElementById("slider-infection-chance");
noUiSlider.create(sliderInfectionChance, {
  start: sims[1].transmissionRatio * 100,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  }
});
sliderInfectionChance.noUiSlider.on('update', function (values, handle) {
  document.getElementById('transmissionRatio').innerHTML = `${values[handle]}`;
  sims[1].transmissionRatio = values[handle] / 100;
});

const sliderInfectionDuration = document.getElementById("slider-infection-duration");
noUiSlider.create(sliderInfectionDuration, {
  start: sims[1].infectionDuration / 60,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 12
  }
});

sliderInfectionDuration.noUiSlider.on('update', function (values, handle) {
  document.getElementById('infectionDuration').innerHTML = `${values[handle]}`;
  sims[1].infectionDuration = values[handle] * 60;
});
}

//Init sim 2
if (document.getElementById('lockdownCheckbox')) {
const checkBox = document.getElementById('lockdownCheckbox');
checkBox.checked = sims[2].isLockdown;
checkBox.onclick = sims[2].toggleLockdown;

const sliderCoop = document.getElementById("slider-cooperation");
noUiSlider.create(sliderCoop, {
  start: 100,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  }
});
sliderCoop.noUiSlider.on('update', function (values, handle) {
  document.getElementById('lockdownRatio').innerHTML = `${values[handle]}%`;
  sims[2].lockdownRatio = values[handle] / 100;
  sims[2].toggleLockdown();
  sims[2].toggleLockdown();
});

}

// Init sim 3
if (document.getElementById('restrictionCheckbox')) {
document.getElementById('restrictionCheckbox').onclick = sims[3].toggleRestriction;
sims[3].isRestricted = document.getElementById('restrictionCheckbox').checked;

//Maintain aspect ratio of sim renderings
window.onresize = () => {
  sims.forEach(sim => {
    resizeCanvasToDisplaySize(sim.canvas);
  })
};
}
//Start sim when scrolled to
window.onscroll = () => {
  sims.forEach((element) => {
    if (element.canvas.getBoundingClientRect().top < window.innerHeight &&
      element.canvas.getBoundingClientRect().bottom > 50 &&
      !element.inView) {
      element.inView = true;
      element.animate();
    } else if (
      (element.canvas.getBoundingClientRect().bottom < 50 ||
        element.canvas.getBoundingClientRect().bottom > window.innerHeight) &&
      element.inView
    ) {
      element.inView = false;
      console.log("pause " + element.inView);

    }
  });
}

//Nav dropdown on mobile
if (document.getElementById("navToggle")) {
document.getElementById("navToggle").onclick = function navToggle() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
}
//Init chart.js chart
if (document.getElementById('myChart')) {
var chart1 = document.getElementById('myChart');
var myChart = new Chart(chart1, {
  type: 'line',
  data: {
    labels: ["2/10", "2/17", "2/24", "3/2", "3/9", "3/16", "3/23", "3/30", "4/6", "4/13", "4/20", "4/27", "5/4"],
    datasets: [{
      data: [13, 25, 43, 104, 748, 4507, 43476, 163575, 366208, 580849, 780445, 988141, 1180523],
      backgroundColor: 'rgba(9, 58, 62, 0.5)',
      borderColor: 'rgba(9, 58, 62, 1)',
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Total US Coronavirus cases (2/10-5/4)",
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        labelString: "Total average cases",
        ticks: {
          beginAtZero: true,
          callback: function (value, index, values) {
            return value.toLocaleString();
          }
        },
        gridLines: {
          display: true
        },
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
      }]
    }
  }
});
}