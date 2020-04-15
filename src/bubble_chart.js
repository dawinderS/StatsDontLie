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
  let data = stats.sort((a,b) => b['23'] - a['23']).slice(0, 30);
  console.log(data)
  let hierarchy1 = d3.hierarchy({ children: data }).sum(d => d['23']);
  for (let i = 0; i < data.length; i++) {
    data[i].rank = i + 1;
    data[i].radius = data.length - i;
  }

  const root = pack(hierarchy1);

  let tooltip = d3.selectAll("#pts")
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
            y = 120 * Math.floor(i / 6) + 100;
          } else if (i < 12) {
            x = (i % 6) * 123 + 190;
            y = 115 * Math.floor(i / 6) + 105;
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
 
        // document.querySelector('.deets').style.display = 'none'
      })
    // .on("mouseover", showTooltip)
    // .on("mousemove", moveTooltip)
    // .on("mouseleave", hideTooltip)


  const circles = leaf.append("circle")
    .attr('class', 'stat-circles')
    .attr("r", d => {
      if (d.data['23'] > 31) {
        return d.data['23'] + 33
      } else if (d.data['23'] > 28) {
        return d.data['23'] + 30
      } else if (d.data['23'] > 27) {
        return d.data['23'] + 27
      } else if (d.data['23'] > 26) {
        return d.data['23'] + 24
      } else if (d.data['23'] > 25) {
        return d.data['23'] + 21
      } else if (d.data['23'] > 24) {
        return d.data['23'] + 18
      } else if (d.data['23'] > 23) {
        return d.data['23'] + 16
      } else if (d.data['23'] > 22) {
        return d.data['23'] + 13
      } else if (d.data['23'] > 21) {
        return d.data['23'] + 10
      }
      })
    .attr("fill-opacity", 0.85)
    .attr("fill", d => 'black')
    .attr('stroke', d => d.data.color)
    .attr('stroke-width', d => 4)
    .on("click", function (s, i) {
      // document.querySelector('#deets').style.display = 'flex';
      const nameRect = d3.select("#deets")
        .append('rect')
        .attr('class', 'detail')
        .attr('width', '100%')
        .attr('height', 50)
      // .attr('style', 'border-top: thin #616161 solid')

      const statRect = d3.select("#deets")
        .append('rect')
        .attr('class', 'detail2')
        .attr('width', '100%')
        .attr('height', 50)
      // .attr('style', 'border: thin #616161 solid')
      const statRect2 = d3.select("#deets")
        .append('rect')
        .attr('class', 'detail3')
        .attr('width', '100%')
        .attr('height', 50)
      // .attr('style', 'border: thin #616161 solid')

      nameRect
        .append('text')
        .attr('class', 'player_details')
        .style('font-size', '28px')
        .text(d => data[i]['2'])
        .style('color', d => data[i]['color'])
      nameRect
        .append('text')
        .attr('class', 'player_details2')
        .style('font-size', '18px')
        .text(d => 'Team: ' + data[i]['3'])
        .style('color', d => data[i]['color'])

      statRect
        .append('text')
        .attr('class', 'player_details3')
        .style('font-size', '18px')
        // .text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS')
        .text(d => 'Pts:  ' + data[i]['22'] + '   |   ' + 'Reb:  ' + data[i]['17'] + '   |   ' + 'Ast:  ' + data[i]['18'] + '   |   ' + 'Stl:  ' + data[i]['19'] + '   |   ' + 'Blk:  ' + data[i]['20'] + '   |   ' + 'TOV:  ' + data[i]['21'] + '   |   ' + 'GP:  ' + data[i]['4'] + '   |   ' + 'Min:  ' + data[i]['5'])

      statRect2
        .append('text')
        .attr('class', 'player_details4')
        .style('font-size', '17px')
        // .text(d => data[i]['4'] + '   ' + data[i]['5'] + '    ' + data[i]['6'] + '      ' + data[i]['7'] + '    ' + data[i]['8'] + '    ' + data[i]['9'] + '    ' + data[i]['10'] + ' ' + data[i]['11'] + ' ' + data[i]['12'] + ' ' + data[i]['13'] + ' ' + data[i]['14'] + ' ' + data[i]['15'] + ' ' + data[i]['16'] + ' ' + data[i]['17'] + ' ' + data[i]['18'] + ' ' + data[i]['19'] + ' ' + data[i]['20'] + ' ' + data[i]['21'] + ' ' + data[i]['22'])
        .text(d => 'Advanced:    Eff_Rank:  ' + data[i]['1'] + '    |    ' + 'Eff:  ' + data[i]['23'] + '    |    ' + 'Fg_Pct:  ' + data[i]['8'] + '    |    ' + 'Fg3_Pct:  ' + data[i]['11'] + '    |    ' + 'Ft_Pct:  ' + data[i]['14'])

      window.scrollBy(0, 150);
    });
    
    
    
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
  .style('font-size', d => d.r / 3.25)
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