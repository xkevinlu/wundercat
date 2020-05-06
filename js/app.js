import Simulation from './Simulation';
import Areachart from './Areachart';

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
