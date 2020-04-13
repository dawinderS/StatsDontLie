import stats from "../data/stats.json";

export const stat_bar = () => {
  const margin = 110;
  const height = 800;
  const width = 800;

  let svg2 = d3.select("#bar_pts").append("svg")
    .attr("width", 1000)
    // .attr("min-height", height)
    // .attr("style", "border: thin white solid");

  const top25pts = stats.sort((a, b) => b["22"] - a["22"]).slice(0, stats.length / 2 - 10);
  
  const rTopPts = top25pts.reverse();
  const chart = svg2.append('g')
    .attr('transform', `translate(${margin}, 40)`)

  const yScale = d3.scaleBand()
    .range([600, 0])
    .domain(rTopPts.map(s => s['2'].split(' ')[1]))
    .padding(0.4);
    
  let yAxis = chart.append('g')
    .call(d3.axisLeft(yScale));

  const xScale = d3.scaleLinear()
    .range([0, width])
    .domain([16, 36])

  let xAxis = chart.append('g')
    // .attr('transform', `translate(0, 700)`)
    .call(d3.axisTop(xScale).ticks(7))

  const barGroups = chart.selectAll()
    .data(rTopPts)
    .enter()
    .append('g')

  xAxis.selectAll('text')
    .style('font-size', '13px')
  yAxis.selectAll('text')
    .style('font-size', '13px')
    // .style('font-style', 'italic')
  
  barGroups
    .append("rect")
    .attr("class", "bar")
    .style("stroke", d => d.color)
    .style("stroke-width", 2)
    .attr("fill-opacity", 0.30)
    .attr("fill", d => d.color)
    .attr("x", d => xScale(d["22"]))
    .attr("y", d => yScale(d["2"].split(" ")[1]))
    .attr("width", d => 0)
    .attr("height", yScale.bandwidth())
    .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["22"]))
  
    .on("mouseenter", function(s, i) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.85)
        .attr("height", yScale.bandwidth() + 5);

      const x = xScale(rTopPts[i]["22"]);

      const line = chart
        .append("line")
        .attr("id", "limit")
        .attr("x1", x)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", height)
        .attr("stroke", "orange");
    })

    .on("mouseleave", function() {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.25)
        .attr("height", yScale.bandwidth());

      chart.selectAll("#limit").remove();
    })

    .on("click", function(s, i) {
      const nameRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border-top: thin #616161 solid')

      const statRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail2')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border: thin #616161 solid')
      const statRect2 = d3.select("#details")
        .append('rect')
        .attr('class', 'detail3')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border: thin #616161 solid')
      
      nameRect
        .append('text')
        .attr('class', 'player_details')
        .style('font-size', '28px')
        .text(d => rTopPts[i]['2'])
        .style('color', d => rTopPts[i]['color'])
      nameRect
        .append('text')
        .attr('class', 'player_details2')
        .style('font-size', '18px')
        .text(d => 'Team: ' + rTopPts[i]['3'])
        .style('color', d => rTopPts[i]['color'])

      statRect
        .append('text')
        .attr('class', 'player_details3')
        .style('font-size', '18px')
        // .text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS')
        .text(d => 'Pts:  ' + rTopPts[i]['22'] + '   |   ' + 'Reb:  ' + rTopPts[i]['17'] + '   |   ' + 'Ast:  ' + rTopPts[i]['18'] + '   |   ' + 'Stl:  ' + rTopPts[i]['19'] + '   |   ' + 'Blk:  ' + rTopPts[i]['20'] + '   |   ' + 'TOV:  ' + rTopPts[i]['21'] + '   |   ' + 'GP:  ' + rTopPts[i]['4'] + '   |   ' + 'Min:  ' + rTopPts[i]['5'])

      statRect2
        .append('text')
        .attr('class', 'player_details4')
        .style('font-size', '17px')
        // .text(d => rTopPts[i]['4'] + '   ' + rTopPts[i]['5'] + '    ' + rTopPts[i]['6'] + '      ' + rTopPts[i]['7'] + '    ' + rTopPts[i]['8'] + '    ' + rTopPts[i]['9'] + '    ' + rTopPts[i]['10'] + ' ' + rTopPts[i]['11'] + ' ' + rTopPts[i]['12'] + ' ' + rTopPts[i]['13'] + ' ' + rTopPts[i]['14'] + ' ' + rTopPts[i]['15'] + ' ' + rTopPts[i]['16'] + ' ' + rTopPts[i]['17'] + ' ' + rTopPts[i]['18'] + ' ' + rTopPts[i]['19'] + ' ' + rTopPts[i]['20'] + ' ' + rTopPts[i]['21'] + ' ' + rTopPts[i]['22'])
        .text(d => 'Advanced:    Eff_Rank:  ' + rTopPts[i]['1'] + '    |    ' + 'Eff:  ' + rTopPts[i]['23'] + '    |    ' + 'Fg_Pct:  ' + rTopPts[i]['8'] + '    |    ' + 'Fg3_Pct:  ' + rTopPts[i]['11'] + '    |    ' + 'Ft_Pct:  ' + rTopPts[i]['14'])
      
      window.scrollBy(0, 350);
    });

  svg2.selectAll('rect')
    .transition()
    .duration(800)
    .attr("x", d => xScale(d["22"]))
    .attr("width", d => xScale(d["22"]))
    .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["22"]))

  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["22"]) + 24)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 4 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .text(d => d["22"])
    .style('fill', 'white')
  
  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["22"]) / 2)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 5 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .style('fill', 'white')
    .style('font-style', 'italic')
    .style('font-size', '15px')
    .text(d => d["2"]);
    

  // svg2.append('text')
  //   .attr('x', width / 2 + margin)
  //   .attr('y', 50)
  //   .attr('text-anchor', 'middle')
  //   .text('Top 15 Scorers in the League')
  //   .style('font-size', '30px')
  //   .style('fill', 'white')
    
  document.getElementById('btn1').onclick = () => {
    document.getElementById('bar_pts').style.display = 'flex';
    document.getElementById('bar_rebs').style.display = 'none';
    document.getElementById('bar_asts').style.display = 'none';
    document.getElementById('bar_stls').style.display = 'none';
    document.getElementById('bar_blks').style.display = 'none';
  }

  svg2.append('text')
    .attr('x', width + 30)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .text('Points Per Game')
    .style('fill', 'pink')
    .style('font-size', '13px')

  svg2.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'start')
    .text('Source: NBA Stats, 2019-2020')
    .style('fill', 'pink')

  svg2.append()
  // detailsSvg.append()
}

////////////////////////////////////////////////////////////////////////////////
export const bar_rbs = () => {
  const margin = 110;
  const height = 800;
  const width = 800;

  let svg2 = d3.select("#bar_rebs").append("svg")
    .attr("width", 1000)
    // .attr("min-height", height)
    // .attr("style", "border: thin white solid");

  const top25pts = stats.sort((a, b) => b["17"] - a["17"]).slice(0, stats.length / 2 - 10);
  const rTopPts = top25pts.reverse();
  const chart = svg2.append('g')
    .attr('transform', `translate(${margin}, 40)`)

  const yScale = d3.scaleBand()
    .range([600, 0])
    .domain(rTopPts.map(s => s['2'].split(' ')[1]))
    .padding(0.4);
    
  let yAxis = chart.append('g')
    .call(d3.axisLeft(yScale));

  const xScale = d3.scaleLinear()
    .range([0, width])
    .domain([6, 16])

  let xAxis = chart.append('g')
    // .attr('transform', `translate(0, 700)`)
    .call(d3.axisTop(xScale).ticks(7))

  const barGroups = chart.selectAll()
    .data(rTopPts)
    .enter()
    .append('g')

  xAxis.selectAll('text')
    .style('font-size', '13px')
  yAxis.selectAll('text')
    .style('font-size', '13px')
    // .style('font-style', 'italic')
  
  barGroups
    .append("rect")
    .attr("class", "bar")
    .style("stroke", d => d.color)
    .style("stroke-width", 2)
    .attr("fill-opacity", 0.30)
    .attr("fill", d => d.color)
    .attr("x", d => xScale(d["17"]))
    .attr("y", d => yScale(d["2"].split(" ")[1]))
    .attr("width", d => 0)
    .attr("height", yScale.bandwidth())
    .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["17"]))
  
    .on("mouseenter", function(s, i) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.85)
        .attr("height", yScale.bandwidth() + 5);

      const x = xScale(rTopPts[i]["17"]);

      const line = chart
        .append("line")
        .attr("id", "limit")
        .attr("x1", x)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", height)
        .attr("stroke", "orange");
    })

    .on("mouseleave", function() {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.25)
        .attr("height", yScale.bandwidth());

      chart.selectAll("#limit").remove();
    })

    .on("click", function(s, i) {
      const nameRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border-top: thin #616161 solid')

      const statRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail2')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border: thin #616161 solid')
      const statRect2 = d3.select("#details")
        .append('rect')
        .attr('class', 'detail3')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border: thin #616161 solid')
      
      nameRect
        .append('text')
        .attr('class', 'player_details')
        .style('font-size', '28px')
        .text(d => rTopPts[i]['2'])
        .style('color', d => rTopPts[i]['color'])
      nameRect
        .append('text')
        .attr('class', 'player_details2')
        .style('font-size', '18px')
        .text(d => 'Team: ' + rTopPts[i]['3'])
        .style('color', d => rTopPts[i]['color'])

      statRect
        .append('text')
        .attr('class', 'player_details3')
        .style('font-size', '18px')
        // .text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS')
        .text(d => 'Pts:  ' + rTopPts[i]['22'] + '   |   ' + 'Reb:  ' + rTopPts[i]['17'] + '   |   ' + 'Ast:  ' + rTopPts[i]['18'] + '   |   ' + 'Stl:  ' + rTopPts[i]['19'] + '   |   ' + 'Blk:  ' + rTopPts[i]['20'] + '   |   ' + 'TOV:  ' + rTopPts[i]['21'] + '   |   ' + 'GP:  ' + rTopPts[i]['4'] + '   |   ' + 'Min:  ' + rTopPts[i]['5'])

      statRect2
        .append('text')
        .attr('class', 'player_details4')
        .style('font-size', '17px')
        // .text(d => rTopPts[i]['4'] + '   ' + rTopPts[i]['5'] + '    ' + rTopPts[i]['6'] + '      ' + rTopPts[i]['7'] + '    ' + rTopPts[i]['8'] + '    ' + rTopPts[i]['9'] + '    ' + rTopPts[i]['10'] + ' ' + rTopPts[i]['11'] + ' ' + rTopPts[i]['12'] + ' ' + rTopPts[i]['13'] + ' ' + rTopPts[i]['14'] + ' ' + rTopPts[i]['15'] + ' ' + rTopPts[i]['16'] + ' ' + rTopPts[i]['17'] + ' ' + rTopPts[i]['18'] + ' ' + rTopPts[i]['19'] + ' ' + rTopPts[i]['20'] + ' ' + rTopPts[i]['21'] + ' ' + rTopPts[i]['22'])
        .text(d => 'Advanced:    Eff_Rank:  ' + rTopPts[i]['1'] + '    |    ' + 'Eff:  ' + rTopPts[i]['23'] + '    |    ' + 'Fg_Pct:  ' + rTopPts[i]['8'] + '    |    ' + 'Fg3_Pct:  ' + rTopPts[i]['11'] + '    |    ' + 'Ft_Pct:  ' + rTopPts[i]['14'])
      
      window.scrollBy(0, 350);
    });

  document.getElementById('btn2').onclick = () => {
    document.getElementById('bar_pts').style.display = 'none';
    document.getElementById('bar_rebs').style.display = 'flex';
    document.getElementById('bar_asts').style.display = 'none';
    document.getElementById('bar_stls').style.display = 'none';
    document.getElementById('bar_blks').style.display = 'none';
    svg2.selectAll('rect')
      .transition()
      .duration(800)
      .attr("x", d => xScale(d["17"]))
      .attr("width", d => xScale(d["17"]))
      .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["17"]))
  }

  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["17"]) + 24)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 4 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .text(d => d["17"])
    .style('fill', 'white')
  
  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["17"]) / 2)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 5 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .style('fill', 'white')
    .style('font-style', 'italic')
    .style('font-size', '15px')
    .text(d => d["2"]);    

  svg2.append('text')
    .attr('x', width + 10)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .text('Rebounds Per Game')
    .style('fill', 'pink')
    .style('font-size', '13px')

  svg2.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'start')
    .text('Source: NBA Stats, 2019-2020')
    .style('fill', 'pink')

  svg2.append()
  // detailsSvg.append()
  
}

////////////////////////////////////////////////////////////////////////////////
export const bar_asts = () => {
  const margin = 110;
  const height = 800;
  const width = 800;

  let svg2 = d3.select("#bar_asts").append("svg")
    .attr("width", 1000)
  // .attr("min-height", height)
  // .attr("style", "border: thin white solid");console.log(stats) 18
  const top25pts = stats.sort((a, b) => b["18"] - a["18"]).slice(0, stats.length / 2 - 10);
  const rTopPts = top25pts.reverse();
  const chart = svg2.append('g')
    .attr('transform', `translate(${margin}, 40)`)

  const yScale = d3.scaleBand()
    .range([600, 0])
    .domain(rTopPts.map(s => s['2'].split(' ')[1]))
    .padding(0.4);

  let yAxis = chart.append('g')
    .call(d3.axisLeft(yScale));

  const xScale = d3.scaleLinear()
    .range([0, width])
    .domain([4, 11])

  let xAxis = chart.append('g')
    // .attr('transform', `translate(0, 700)`)
    .call(d3.axisTop(xScale).ticks(7))

  const barGroups = chart.selectAll()
    .data(rTopPts)
    .enter()
    .append('g')

  xAxis.selectAll('text')
    .style('font-size', '13px')
  yAxis.selectAll('text')
    .style('font-size', '13px')
  // .style('font-style', 'italic')

  barGroups
    .append("rect")
    .attr("class", "bar")
    .style("stroke", d => d.color)
    .style("stroke-width", 2)
    .attr("fill-opacity", 0.30)
    .attr("fill", d => d.color)
    .attr("x", d => xScale(d["18"]))
    .attr("y", d => yScale(d["2"].split(" ")[1]))
    .attr("width", d => 0)
    .attr("height", yScale.bandwidth())
    .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["18"]))

    .on("mouseenter", function (s, i) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.85)
        .attr("height", yScale.bandwidth() + 5);

      const x = xScale(rTopPts[i]["18"]);

      const line = chart
        .append("line")
        .attr("id", "limit")
        .attr("x1", x)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", height)
        .attr("stroke", "orange");
    })

    .on("mouseleave", function () {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.25)
        .attr("height", yScale.bandwidth());

      chart.selectAll("#limit").remove();
    })

    .on("click", function (s, i) {
      const nameRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail')
        .attr('width', '100%')
        .attr('height', 50)
      // .attr('style', 'border-top: thin #616161 solid')

      const statRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail2')
        .attr('width', '100%')
        .attr('height', 50)
      // .attr('style', 'border: thin #616161 solid')
      const statRect2 = d3.select("#details")
        .append('rect')
        .attr('class', 'detail3')
        .attr('width', '100%')
        .attr('height', 50)
      // .attr('style', 'border: thin #616161 solid')

      nameRect
        .append('text')
        .attr('class', 'player_details')
        .style('font-size', '28px')
        .text(d => rTopPts[i]['2'])
        .style('color', d => rTopPts[i]['color'])
      nameRect
        .append('text')
        .attr('class', 'player_details2')
        .style('font-size', '18px')
        .text(d => 'Team: ' + rTopPts[i]['3'])
        .style('color', d => rTopPts[i]['color'])

      statRect
        .append('text')
        .attr('class', 'player_details3')
        .style('font-size', '18px')
        // .text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS')
        .text(d => 'Pts:  ' + rTopPts[i]['22'] + '   |   ' + 'Reb:  ' + rTopPts[i]['17'] + '   |   ' + 'Ast:  ' + rTopPts[i]['18'] + '   |   ' + 'Stl:  ' + rTopPts[i]['19'] + '   |   ' + 'Blk:  ' + rTopPts[i]['20'] + '   |   ' + 'TOV:  ' + rTopPts[i]['21'] + '   |   ' + 'GP:  ' + rTopPts[i]['4'] + '   |   ' + 'Min:  ' + rTopPts[i]['5'])

      statRect2
        .append('text')
        .attr('class', 'player_details4')
        .style('font-size', '17px')
        // .text(d => rTopPts[i]['4'] + '   ' + rTopPts[i]['5'] + '    ' + rTopPts[i]['6'] + '      ' + rTopPts[i]['7'] + '    ' + rTopPts[i]['8'] + '    ' + rTopPts[i]['9'] + '    ' + rTopPts[i]['10'] + ' ' + rTopPts[i]['11'] + ' ' + rTopPts[i]['12'] + ' ' + rTopPts[i]['13'] + ' ' + rTopPts[i]['14'] + ' ' + rTopPts[i]['15'] + ' ' + rTopPts[i]['16'] + ' ' + rTopPts[i]['17'] + ' ' + rTopPts[i]['18'] + ' ' + rTopPts[i]['19'] + ' ' + rTopPts[i]['20'] + ' ' + rTopPts[i]['21'] + ' ' + rTopPts[i]['22'])
        .text(d => 'Advanced:    Eff_Rank:  ' + rTopPts[i]['1'] + '    |    ' + 'Eff:  ' + rTopPts[i]['23'] + '    |    ' + 'Fg_Pct:  ' + rTopPts[i]['8'] + '    |    ' + 'Fg3_Pct:  ' + rTopPts[i]['11'] + '    |    ' + 'Ft_Pct:  ' + rTopPts[i]['14'])

      window.scrollBy(0, 350);
    });

  document.getElementById('btn3').onclick = () => {
    document.getElementById('bar_pts').style.display = 'none';
    document.getElementById('bar_rebs').style.display = 'none';
    document.getElementById('bar_asts').style.display = 'flex';
    document.getElementById('bar_stls').style.display = 'none';
    document.getElementById('bar_blks').style.display = 'none';
    svg2.selectAll('rect')
      .transition()
      .duration(800)
      .attr("x", d => xScale(d["18"]))
      .attr("width", d => xScale(d["18"]))
      .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["18"]))
  }

  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["18"]) + 24)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 4 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .text(d => d["18"])
    .style('fill', 'white')

  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["18"]) / 2)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 5 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .style('fill', 'white')
    .style('font-style', 'italic')
    .style('font-size', '15px')
    .text(d => d["2"]);

  svg2.append('text')
    .attr('x', width + 25)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .text('Assists Per Game')
    .style('fill', 'pink')
    .style('font-size', '13px')

  svg2.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'start')
    .text('Source: NBA Stats, 2019-2020')
    .style('fill', 'pink')

  svg2.append()

}

////////////////////////////////////////////////////////////////////////////////
export const bar_stls = () => {
  const margin = 110;
  const height = 800;
  const width = 800;

  let svg2 = d3.select("#bar_stls").append("svg")
    .attr("width", 1000)
    // .attr("min-height", height)
    // .attr("style", "border: thin white solid");console.log(stats)
  const top25pts = stats.sort((a, b) => b["19"] - a["19"]).slice(0, stats.length / 2 - 10);
  const rTopPts = top25pts.reverse();
  const chart = svg2.append('g')
    .attr('transform', `translate(${margin}, 40)`)

  const yScale = d3.scaleBand()
    .range([600, 0])
    .domain(rTopPts.map(s => s['2'].split(' ')[1]))
    .padding(0.4);
    
  let yAxis = chart.append('g')
    .call(d3.axisLeft(yScale));

  const xScale = d3.scaleLinear()
    .range([0, width])
    .domain([1, 2.2])

  let xAxis = chart.append('g')
    // .attr('transform', `translate(0, 700)`)
    .call(d3.axisTop(xScale).ticks(7))

  const barGroups = chart.selectAll()
    .data(rTopPts)
    .enter()
    .append('g')

  xAxis.selectAll('text')
    .style('font-size', '13px')
  yAxis.selectAll('text')
    .style('font-size', '13px')
    // .style('font-style', 'italic')
  
  barGroups
    .append("rect")
    .attr("class", "bar")
    .style("stroke", d => d.color)
    .style("stroke-width", 2)
    .attr("fill-opacity", 0.30)
    .attr("fill", d => d.color)
    .attr("x", d => xScale(d["19"]))
    .attr("y", d => yScale(d["2"].split(" ")[1]))
    .attr("width", d => 0)
    .attr("height", yScale.bandwidth())
    .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["19"]))
  
    .on("mouseenter", function(s, i) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.85)
        .attr("height", yScale.bandwidth() + 5);

      const x = xScale(rTopPts[i]["19"]);

      const line = chart
        .append("line")
        .attr("id", "limit")
        .attr("x1", x)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", height)
        .attr("stroke", "orange");
    })

    .on("mouseleave", function() {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.25)
        .attr("height", yScale.bandwidth());

      chart.selectAll("#limit").remove();
    })

    .on("click", function(s, i) {
      const nameRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border-top: thin #616161 solid')

      const statRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail2')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border: thin #616161 solid')
      const statRect2 = d3.select("#details")
        .append('rect')
        .attr('class', 'detail3')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border: thin #616161 solid')
      
      nameRect
        .append('text')
        .attr('class', 'player_details')
        .style('font-size', '28px')
        .text(d => rTopPts[i]['2'])
        .style('color', d => rTopPts[i]['color'])
      nameRect
        .append('text')
        .attr('class', 'player_details2')
        .style('font-size', '18px')
        .text(d => 'Team: ' + rTopPts[i]['3'])
        .style('color', d => rTopPts[i]['color'])

      statRect
        .append('text')
        .attr('class', 'player_details3')
        .style('font-size', '18px')
        // .text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS')
        .text(d => 'Pts:  ' + rTopPts[i]['22'] + '   |   ' + 'Reb:  ' + rTopPts[i]['17'] + '   |   ' + 'Ast:  ' + rTopPts[i]['18'] + '   |   ' + 'Stl:  ' + rTopPts[i]['19'] + '   |   ' + 'Blk:  ' + rTopPts[i]['20'] + '   |   ' + 'TOV:  ' + rTopPts[i]['21'] + '   |   ' + 'GP:  ' + rTopPts[i]['4'] + '   |   ' + 'Min:  ' + rTopPts[i]['5'])

      statRect2
        .append('text')
        .attr('class', 'player_details4')
        .style('font-size', '17px')
        // .text(d => rTopPts[i]['4'] + '   ' + rTopPts[i]['5'] + '    ' + rTopPts[i]['6'] + '      ' + rTopPts[i]['7'] + '    ' + rTopPts[i]['8'] + '    ' + rTopPts[i]['9'] + '    ' + rTopPts[i]['10'] + ' ' + rTopPts[i]['11'] + ' ' + rTopPts[i]['12'] + ' ' + rTopPts[i]['13'] + ' ' + rTopPts[i]['14'] + ' ' + rTopPts[i]['15'] + ' ' + rTopPts[i]['16'] + ' ' + rTopPts[i]['17'] + ' ' + rTopPts[i]['18'] + ' ' + rTopPts[i]['19'] + ' ' + rTopPts[i]['20'] + ' ' + rTopPts[i]['21'] + ' ' + rTopPts[i]['22'])
        .text(d => 'Advanced:    Eff_Rank:  ' + rTopPts[i]['1'] + '    |    ' + 'Eff:  ' + rTopPts[i]['23'] + '    |    ' + 'Fg_Pct:  ' + rTopPts[i]['8'] + '    |    ' + 'Fg3_Pct:  ' + rTopPts[i]['11'] + '    |    ' + 'Ft_Pct:  ' + rTopPts[i]['14'])
      
      window.scrollBy(0, 350);
    });

  document.getElementById('btn4').onclick = () => {
    document.getElementById('bar_pts').style.display = 'none';
    document.getElementById('bar_rebs').style.display = 'none';
    document.getElementById('bar_asts').style.display = 'none';
    document.getElementById('bar_stls').style.display = 'flex';
    document.getElementById('bar_blks').style.display = 'none';
    svg2.selectAll('rect')
      .transition()
      .duration(800)
      .attr("x", d => xScale(d["19"]))
      .attr("width", d => xScale(d["19"]))
      .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["19"]))
  }

  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["19"]) + 24)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 4 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .text(d => d["19"])
    .style('fill', 'white')
  
  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["19"]) / 2)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 5 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .style('fill', 'white')
    .style('font-style', 'italic')
    .style('font-size', '15px')
    .text(d => d["2"]);

  svg2.append('text')
    .attr('x', width + 25)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .text('Assists Per Game')
    .style('fill', 'pink')
    .style('font-size', '13px')

  svg2.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'start')
    .text('Source: NBA Stats, 2019-2020')
    .style('fill', 'pink')

  svg2.append()
  
}

////////////////////////////////////////////////////////////////////////////////
export const bar_blks = () => {
  const margin = 110;
  const height = 800;
  const width = 800;

  let svg2 = d3.select("#bar_blks").append("svg")
    .attr("width", 1000)
    // .attr("min-height", height)
    // .attr("style", "border: thin white solid");console.log(stats)
  const top25pts = stats.sort((a, b) => b["20"] - a["20"]).slice(0, stats.length / 2 - 10);
  const rTopPts = top25pts.reverse();
  const chart = svg2.append('g')
    .attr('transform', `translate(${margin}, 40)`)

  const yScale = d3.scaleBand()
    .range([600, 0])
    .domain(rTopPts.map(s => s['2'].split(' ')[1]))
    .padding(0.4);
    
  let yAxis = chart.append('g')
    .call(d3.axisLeft(yScale));

  const xScale = d3.scaleLinear()
    .range([0, width])
    .domain([0, 3.2])

  let xAxis = chart.append('g')
    // .attr('transform', `translate(0, 700)`)
    .call(d3.axisTop(xScale).ticks(7))

  const barGroups = chart.selectAll()
    .data(rTopPts)
    .enter()
    .append('g')

  xAxis.selectAll('text')
    .style('font-size', '13px')
  yAxis.selectAll('text')
    .style('font-size', '13px')
    // .style('font-style', 'italic')
  
  barGroups
    .append("rect")
    .attr("class", "bar")
    .style("stroke", d => d.color)
    .style("stroke-width", 2)
    .attr("fill-opacity", 0.30)
    .attr("fill", d => d.color)
    .attr("x", d => xScale(d["20"]))
    .attr("y", d => yScale(d["2"].split(" ")[1]))
    .attr("width", d => 0)
    .attr("height", yScale.bandwidth())
    .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["20"]))
  
    .on("mouseenter", function(s, i) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.85)
        .attr("height", yScale.bandwidth() + 5);

      const x = xScale(rTopPts[i]["20"]);

      const line = chart
        .append("line")
        .attr("id", "limit")
        .attr("x1", x)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", height)
        .attr("stroke", "orange");
    })

    .on("mouseleave", function() {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.25)
        .attr("height", yScale.bandwidth());

      chart.selectAll("#limit").remove();
    })

    .on("click", function(s, i) {
      const nameRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border-top: thin #616161 solid')

      const statRect = d3.select("#details")
        .append('rect')
        .attr('class', 'detail2')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border: thin #616161 solid')
      const statRect2 = d3.select("#details")
        .append('rect')
        .attr('class', 'detail3')
        .attr('width', '100%')
        .attr('height', 50)
        // .attr('style', 'border: thin #616161 solid')
      
      nameRect
        .append('text')
        .attr('class', 'player_details')
        .style('font-size', '28px')
        .text(d => rTopPts[i]['2'])
        .style('color', d => rTopPts[i]['color'])
      nameRect
        .append('text')
        .attr('class', 'player_details2')
        .style('font-size', '18px')
        .text(d => 'Team: ' + rTopPts[i]['3'])
        .style('color', d => rTopPts[i]['color'])

      statRect
        .append('text')
        .attr('class', 'player_details3')
        .style('font-size', '18px')
        // .text('GP  MIN  FGM  FGA  FGPCT  FG3M  FG3A  FG3PCT  FTA  FTPCT  OREB  DREB  REB  AST  STL  BLK  TO  PTS')
        .text(d => 'Pts:  ' + rTopPts[i]['22'] + '   |   ' + 'Reb:  ' + rTopPts[i]['17'] + '   |   ' + 'Ast:  ' + rTopPts[i]['18'] + '   |   ' + 'Stl:  ' + rTopPts[i]['19'] + '   |   ' + 'Blk:  ' + rTopPts[i]['20'] + '   |   ' + 'TOV:  ' + rTopPts[i]['21'] + '   |   ' + 'GP:  ' + rTopPts[i]['4'] + '   |   ' + 'Min:  ' + rTopPts[i]['5'])

      statRect2
        .append('text')
        .attr('class', 'player_details4')
        .style('font-size', '17px')
        // .text(d => rTopPts[i]['4'] + '   ' + rTopPts[i]['5'] + '    ' + rTopPts[i]['6'] + '      ' + rTopPts[i]['7'] + '    ' + rTopPts[i]['8'] + '    ' + rTopPts[i]['9'] + '    ' + rTopPts[i]['10'] + ' ' + rTopPts[i]['11'] + ' ' + rTopPts[i]['12'] + ' ' + rTopPts[i]['13'] + ' ' + rTopPts[i]['14'] + ' ' + rTopPts[i]['15'] + ' ' + rTopPts[i]['16'] + ' ' + rTopPts[i]['17'] + ' ' + rTopPts[i]['18'] + ' ' + rTopPts[i]['19'] + ' ' + rTopPts[i]['20'] + ' ' + rTopPts[i]['21'] + ' ' + rTopPts[i]['22'])
        .text(d => 'Advanced:    Eff_Rank:  ' + rTopPts[i]['1'] + '    |    ' + 'Eff:  ' + rTopPts[i]['23'] + '    |    ' + 'Fg_Pct:  ' + rTopPts[i]['8'] + '    |    ' + 'Fg3_Pct:  ' + rTopPts[i]['11'] + '    |    ' + 'Ft_Pct:  ' + rTopPts[i]['14'])
      
      window.scrollBy(0, 350);
    });

  document.getElementById('btn5').onclick = () => {
    document.getElementById('bar_pts').style.display = 'none';
    document.getElementById('bar_rebs').style.display = 'none';
    document.getElementById('bar_asts').style.display = 'none';
    document.getElementById('bar_stls').style.display = 'none';
    document.getElementById('bar_blks').style.display = 'flex';
    svg2.selectAll('rect')
      .transition()
      .duration(800)
      .attr("x", d => xScale(d["20"]))
      .attr("width", d => xScale(d["20"]))
      .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["20"]))
  }

  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["20"]) + 24)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 4 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .text(d => d["20"])
    .style('fill', 'white')
  
  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["20"]) / 2)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 5 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .style('fill', 'white')
    .style('font-style', 'italic')
    .style('font-size', '15px')
    .text(d => d["2"]);

  svg2.append('text')
    .attr('x', width + 25)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .text('Assists Per Game')
    .style('fill', 'pink')
    .style('font-size', '13px')

  svg2.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'start')
    .text('Source: NBA Stats, 2019-2020')
    .style('fill', 'pink')

  svg2.append()
  
}

