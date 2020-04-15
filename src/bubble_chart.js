import stats from '../data/stats.json';

export const bubble_chart = () => {
  let svg = d3.select('#pts').append('svg')
    .attr('class', 'bubble_svg')
    .attr('width', 1000)
    .attr('height', 640)
    // .attr('style', 'border: thin white solid')
    // .style('background-color', 'white')
  let width = 1000;
  let height = 640;

  let pack = d3.pack().size([1000, 640]).padding(3);
  let data = stats.sort((a,b) => b['22'] - a['22']).slice(0, 30);
  let hierarchy1 = d3.hierarchy({ children: data }).sum(d => d['22']);
  for (let i = 0; i < data.length; i++) {
    data[i].rank = i + 1;
    data[i].radius = data.length - i;
  }

  const root = pack(hierarchy1);

  let tooltip = d3.select("#pts")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "pink")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white")
    .style("position", "absolute");

  let showTooltip = function (d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("Country: " )
      .style("left", (d3.mouse(this)[0] + 130) + "px")
      .style("top", (d3.mouse(this)[1] + 30) + "px")
  }

  let moveTooltip = function (d) {
    tooltip
      .style("left", (d3.mouse(this)[0] + 130) + "px")
      .style("top", (d3.mouse(this)[1] + 30) + "px")
  }

  let hideTooltip = function (d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }

  const leaf = svg.selectAll("g")
    .data(root.leaves())
    .join("g")
    .attr("transform", d => `translate(500,360)`)
    .on('click', function () {
      // svg.selectAll('g')
      // .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')'; })
      svg.selectAll('g')
        .attr('transform', (d,i) => {
          let x = 0;
          let y = 0;
          if (i < 6 ) {
            x = (i%6) * 140 + 140;
            y = 120 * Math.floor(i / 6) + 115;
          } else if (i < 12) {
            x = (i % 6) * 123 + 190;
            y = 115 * Math.floor(i / 6) + 115;
          } else if (i < 18) {
            x = (i % 6) * 115 + 210;
            y = 110 * Math.floor(i / 6) + 115;
          } else if (i < 24) {
            x = (i % 6) * 105 + 240;
            y = 105 * Math.floor(i / 6) + 115;
          } else if (i < 30) {
            x = (i % 6) * 95 + 260;
            y = 100 * Math.floor(i / 6) + 115;
          }

          return "translate(" + [x,y] + ")"
        })
 
      // document.querySelector('.leaves').style.display = 'none'
    })
    .on("mouseover", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseleave", hideTooltip)


  const circles = leaf.append("circle")
    .attr('class', 'stat-circles')
    .attr("r", d => {
      if (d.data['22'] > 29) {
        return d.data['22'] + 25
      } else if (d.data['22'] > 25) {
        return d.data['22'] + 20
      } else if (d.data['22'] > 20) {
        return d.data['22'] + 15
      } else {
        return d.data['22'] + 15
      }
      })
    .attr("fill-opacity", 0.85)
    .attr("fill", d => 'black')
    .attr('stroke', d => d.data.color)
    .attr('stroke-width', d => 4)
    
  leaf.append("text")
  .style('fill', 'white')
  .style('text-anchor', 'middle')
  // .style('font-size', '25px')
  .style('font-size', d => d.r / 1.5)
  .text(d => d.data.rank)
  .attr('dy', '0.25em')

  leaf.append("text")
  .attr('dy', '1.7em')
  .style('fill', 'white')
  .style('text-anchor', 'middle')
  .style('font-size', d => d.r / 3)
  .text(d => d.data['2'].split(' ').slice(1))
  leaf.append("text")
  .attr('dy', '-1.9em')
  .style('fill', 'white')
  .style('text-anchor', 'middle')
  .style('font-size', d => d.r / 3.9)
  .text(d => d.data['2'].split(' ').slice(0,1))

////////////////////////////////////////////////////////////////////////////////
  // const leaf2 = svg.selectAll("h")
  //   .data(root.leaves())
  //   .join("h")
  //   .attr("transform", d => `translate(250,300)`)

  return svg.node();
}

export const bubble_reb = () => {
  
};