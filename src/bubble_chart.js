import stats from '../data/stats.json';

export const bubble_chart = () => {
  let svg = d3.select('#top_per').append('svg')
    .attr('width', 900)
    .attr('height', 700)
    .attr('style', 'border: thin white solid')
    // .style('background-color', 'white')
  
  let pack = d3.pack().size([900, 700]).padding(3);
  let data = stats.sort((a,b) => b['22'] - a['22']);
  let hierarchy1 = d3.hierarchy({ children: data }).sum(d => d['22']);

  const root = pack(hierarchy1);

  const leaf = svg.selectAll("g")
    .data(root.leaves())
    .join("g")
    .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`)
    // .attr("transform", d => `translate(0,0)`)

  leaf.append("circle")
    .attr("r", d => {
      if (d.data['22'] > 28) {
        return d.data['22'] + 30
      } else if (d.data['22'] > 25) {
        return d.data['22'] + 25
      } else if (d.data['22'] > 20) {
        return d.data['22'] + 20
      } else {
        return d.data['22'] + 20
      }
      })
      // d.data['22'] + 18)
    .attr("fill-opacity", 0.95)
    .attr("fill", d => d.data.color)
  

  leaf.append("text")
    .text(d => d.data['22'])

  // let vis = leaf.selectAll("circle")
  //   .data(nodes, d => d['2'])

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

