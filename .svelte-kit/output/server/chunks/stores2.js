import { w as writable } from "./index.js";
const settings = writable({
  playing: true,
  repelDistance: 100,
  particleCount: 7e3,
  noiseScale: 0.01,
  strokeWeight: 2
});
const sketchKey = writable(Date.now());
export {
  sketchKey as a,
  settings as s
};
