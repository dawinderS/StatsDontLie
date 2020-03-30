import stats from "../data/stats.json";

export const stat_bar = () => {
  const margin = 110;
  const height = 800;
  const width = 700;

  let svg2 = d3.select("#stat_bar").append("svg")
    .attr("width", "100%")
    .attr("height", height)
    .attr("style", "border: thin white solid");

  const top25pts = stats.sort((a, b) => b["22"] - a["22"]).slice(0, stats.length / 2 - 10);
  
  const rTopPts = top25pts.reverse();
  const chart = svg2.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

  const yScale = d3.scaleBand()
    .range([600, 0])
    .domain(rTopPts.map(s => s['2'].split(' ')[1]))
    .padding(0.4);
    
  chart.append('g')
    .call(d3.axisLeft(yScale));

  const xScale = d3.scaleLinear()
    .range([0, width])
    .domain([16, 36])

  chart.append('g')
    // .attr('transform', `translate(0, 700)`)
    .call(d3.axisTop(xScale).ticks(7))

  const barGroups = chart.selectAll()
    .data(rTopPts)
    .enter()
    .append('g')

    console.log(rTopPts)

  barGroups
    .append("rect")
    .attr("class", "bar")
    .style("stroke", d => d.color)
    .style("stroke-width", 2)
    .attr("fill-opacity", 0.25)
    .attr("fill", d => d.color)
    .attr("x", d => xScale(d["22"]))
    .attr("y", d => yScale(d["2"].split(" ")[1]))
    .attr("width", d => xScale(d["22"]))
    .attr("height", yScale.bandwidth())
    .attr("x", (actual, i, rTopPts) => yScale(rTopPts[i]["22"]))
    .on("mouseenter", function(s, i) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("fill-opacity", 0.85)
        .attr("height", yScale.bandwidth() + 5);

      const x = xScale(rTopPts[i]["22"]);

      line = chart
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
      
    });

  barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["22"]) + 24)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 4 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .text(d => d["22"]);
  
    barGroups
    .append("text")
    .attr("class", "value")
    .attr("x", d => xScale(d["22"]) / 2)
    .attr("y", d => yScale(d["2"].split(" ")[1]) + 5 + yScale.bandwidth() / 2)
    .attr("text-anchor", "middle")
    .text(d => d["2"]);

  svg2.append('text')
    .attr('x', width / 2 + margin)
    .attr('y', 50)
    .attr('text-anchor', 'middle')
    .text('Top 15 Scorers in the League')

  svg2.append('text')
    .attr('x', width)
    .attr('y', 75)
    .attr('text-anchor', 'start')
    .text('Points Per Game')

  svg2.append('text')
    .attr('class', 'source')
    .attr('x', width - margin / 2)
    .attr('y', height - margin + 20)
    .attr('text-anchor', 'start')
    .text('Source: NBA Stats, 2019-2020')

  svg2.append()
  
}
