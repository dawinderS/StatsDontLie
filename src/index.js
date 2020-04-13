import { bubble_chart, bubble_reb } from "./bubble_chart";
import { outer_circle } from "./outer_circle";
import { stat_bar, bar_rbs, bar_asts } from "./stat_bar";

document.addEventListener("DOMContentLoaded", () => {
  bubble_chart();
  bubble_reb();
  stat_bar();
  outer_circle();
  document.getElementById('btn1').onclick = () => {
    stat_bar();
    document.getElementById('bar_pts').style.display = 'flex';
    document.getElementById('bar_rebs').style.display = 'none';
    document.getElementById('bar_asts').style.display = 'none';
  }
  document.getElementById('btn2').onclick = () => {
    bar_rbs();
    document.getElementById('bar_pts').style.display = 'none';
    document.getElementById('bar_rebs').style.display = 'flex';
    document.getElementById('bar_asts').style.display = 'none';
  }
  document.getElementById('btn3').onclick = () => {
    bar_asts();
    document.getElementById('bar_pts').style.display = 'none';
    document.getElementById('bar_rebs').style.display = 'none';
    document.getElementById('bar_asts').style.display = 'flex';
  }
});