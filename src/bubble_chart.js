import stats from '../data/stats.json';
// export const bubble_chart = () => {
//   let margin = { left: 100, right: 100, top: 20, bottom: 150 }

//   let width = 50;
//   let height = 100;
  
//   let flag = true;

//   let bubble_chart = d3.select('#top_per')
//     .append('svg')
//     .attr('height', height + margin.top + margin.bottom)
//     .attr('width', width + margin.left + margin.right)
//     .style('background-color', 'white')
//     .text('bino')
//     .text('bino')
//     .style('color', 'black')
//     // .style('padding', '100px')


// }
export const bubble_chart = () => {
  let svg = d3.select('#top_per').append('svg')
    .attr('width', '95%')
    .attr('height', 500)
    .attr('style', 'border: thin red solid')
    .style('background-color', 'white')
  
  // let circle = svg.append('circle').attr('r', 100)
  
  let pack = d3.pack().size([400 - 5,400 - 5]).padding(3);
  let data = stats.sort((a,b) => b['22'] - a['22'])
  let hierarchy1 = d3.hierarchy({ children: data }).sum(d => d['22']);

  const root = pack(hierarchy1);

  const leaf = svg.selectAll("g")
    .data(root.leaves())
    .join("g")
    .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

  leaf.append("circle")
    .attr("r", d => d.r)
    .attr("fill-opacity", 0.7)
    // .attr("fill", 'navy');

  // leaf.append("clipPath")
  //   .append("use")
  //   .attr("xlink:href", d => d.leafUid.href);

  // leaf.append("text")
  //   .attr("clip-path", d => d.clipUid)
  //   .selectAll("tspan")
  //   .data(d => d.data.name.split(/(?=[A-Z][a-z])|\s+/g))
  //   .join("tspan")
  //   .attr("x", 0)
  //   .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
  //   .text(d => d);

  // leaf.append("title")
  //   .text(d => `${d.data.title === undefined ? "" : `${d.data.title}`}${format(d.value)}`);

  return svg.node();
}

