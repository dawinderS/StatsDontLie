import { bubble_chart } from "./bubble_chart";
import stats from '../data/stats.json'
import { outer_circle } from "./outer_circle";

document.addEventListener("DOMContentLoaded", () => {
  bubble_chart();
  outer_circle();
});