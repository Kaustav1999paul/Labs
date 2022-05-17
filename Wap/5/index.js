
const data = [
    { name: 'A', score: 80 },
    { name: 'B', score: 76 },
    { name: 'C', score: 20 },
    { name: 'D', score: 82 },
    { name: 'E', score: 90 },
    { name: 'F', score: 75 },
    { name: 'G', score: 18 },
    { name: 'H', score: 71 },
    { name: 'I', score: 29 },
    { name: 'J', score: 68 },
    { name: 'K', score: 96 },
    { name: 'L', score: 23 },

  ];

  const width = 1000;
  const height = 500;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };

  const svg = d3.select('#d3-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);

  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.3)

  const y = d3.scaleLinear()
    .domain([0, 120])
    .range([height - margin.bottom, margin.top])

  svg.append("g")
    .attr("fill", 'orange')
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", (d, i) => x(i))
    .attr("y", d => y(d.score))
    .attr('title', (d) => d.score)
    .attr("class", "rect")
    .attr("height", d => y(0) - y(d.score))
    .attr("width", x.bandwidth());

  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`).call(d3.axisLeft(y).ticks(null, data.format)).attr("font-size", '20px')
  }

  function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => data[i].name))
      .attr("font-size", '20px')
  }

  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();







//.sort((a, b) => d3.ascending(a.score, b.score))
