import stats from '../data/stats.json';

export const bubble_chart = () => {
  let svg = d3.select('#top_per').append('svg')
    .attr('class', 'bubble_svg')
    .attr('width', 1000)
    .attr('height', 640)
    // .attr('style', 'border: thin white solid')
    // .style('background-color', 'white')
  
  let pack = d3.pack().size([1000, 600]).padding(3);
  let data = stats.sort((a,b) => b['22'] - a['22']).slice(0, 30);
  let hierarchy1 = d3.hierarchy({ children: data }).sum(d => d['22']);

  const root = pack(hierarchy1);

  const leaf = svg.selectAll("g")
    .data(root.leaves())
    .join("g")
    .attr("transform", d => `translate(500,360)`)
    .on('click', function() {
      svg.selectAll('g')
        .attr('transform', d => `translate(${d.x},${d.y})`)
    })
    // .attr("transform", d => `translate(0,0)`)

  const circles = leaf.append("circle")
    .attr('class', 'stat-circles')
    .attr("r", d => {
      if (d.data['22'] > 28) {
        return d.data['22'] + 25
      } else if (d.data['22'] > 25) {
        return d.data['22'] + 20
      } else if (d.data['22'] > 20) {
        return d.data['22'] + 15
      } else {
        return d.data['22'] + 15
      }
      })
      // d.data['22'] + 18)
    .attr("fill-opacity", 0.70)
    .attr("fill", d => 'black')
    .attr('stroke', d => d.data.color)
    .attr('stroke-width', d => 4)
  

  leaf.append("text")
  .style('fill', 'white')
  .style('text-anchor', 'middle')
  // .style('font-size', '25px')
  .style('font-size', d => d.r / 1.5)
  .text(d => d.data['22'])

  leaf.append("text")
  .attr('dy', '1.5em')
  .style('fill', 'white')
  .style('text-anchor', 'middle')
  .style('font-size', d => d.r / 3)
  .text(d => d.data['2'].split(' ').slice(1))

  return svg.node();
}

