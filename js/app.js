// Variables
import Simulation from './Simulation';
import Areachart from './Areachart';

let sims = [];
export let charts = [];

for (let i = 0; i < 4; i++) {
  sims[i] = new Simulation(document.getElementById(`simulation${i}`), i);
  charts[i] = new Areachart(sims[i], document.getElementById(`chart${i}`));
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
