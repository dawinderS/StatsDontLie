import { bubble_chart } from "./bubble_chart";
import stats from '../data/stats.json'

document.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  console.log(stats[0]);
  bubble_chart();
});