var svg = d3.select("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 60},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%d-%b-%y");

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var area = d3.area()
    .x(function(d) { return x(d.date); })
    .y1(function(d) { return y(d.close); });

var dzz = {
  "date": [
    23,
    24
  ],
  "close": [
    95.35,
    93.24
  ]
}
