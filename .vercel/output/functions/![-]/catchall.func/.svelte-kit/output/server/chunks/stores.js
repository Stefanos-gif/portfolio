import { w as writable } from "./index.js";
const settings = writable({
  playing: true,
  repelDistance: 100,
  particleCount: 7e3,
  noiseScale: 0.01,
  strokeWeight: 2
});
export {
  settings as s
};
