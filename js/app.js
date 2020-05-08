import Simulation from './Simulation';
import Areachart from './Areachart';
import Chart from 'chart.js';

let sims = [];
export let charts = [];

for (let i = 0; i < 4; i++) {
  sims[i] = new Simulation(document.getElementById(`simulation${i}`), i);
  sims[i].init();
  charts[i] = new Areachart(sims[i], document.getElementById(`chart${i}`));
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

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2/10","2/17","2/24","3/2","3/9","3/16","3/23","3/30","4/6","4/13","4/20","4/27","5/4"],
        datasets: [{
            data: [13,25,43,104,748,4507,43476,163575,366208,580849,780445,988141,1180523],
            backgroundColor: 'rgba(9, 58, 62, 0.5)',
            borderColor: 'rgba(9, 58, 62, 1)',
            borderWidth: 1
        }]
    },
    options: {
      title: {
        display:true,
        text: "Total US Coronavirus cases (last 12 weeks)",
      },
      legend: {
        display: false
     },
        scales: {
            yAxes: [{
                labelString: "Total average cases",
                ticks: {
                    beginAtZero: true,
                },
                gridLines: {
                  display:true
                },
            }],
            xAxes: [{
              gridLines: {
                display:false
              },
            }]
        }
    }
});

document.getElementById("navToggle").onclick = function navToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}