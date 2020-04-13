import { bubble_chart, bubble_reb } from "./bubble_chart";
import { outer_circle } from "./outer_circle";
import { stat_bar, bar_rbs, bar_asts, bar_stls, bar_blks } from "./stat_bar";

document.addEventListener("DOMContentLoaded", () => {
  bubble_chart();
  bubble_reb();
  stat_bar();
  outer_circle();
  bar_rbs();
  bar_asts();
  bar_stls();
  bar_blks();
});