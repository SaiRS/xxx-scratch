import * as d3 from 'd3';

async function lineChars() {
  let width = 640;
  let height = 480;

  let margin = { top: 20, right: 30, bottom: 30, left: 40 };

  let data = await d3.csv('http://127.0.0.1:8080/aapl.csv');

  let result = data.map(({ date, close }) => {
    return { date, value: close };
    // {
    //   y: '$ Close',
    // }
  });

  console.log(result);

  // const yAxis = function _yAxis(
  //   g: d3.Selection<SVGSVGElement, undefined, null, undefined>,
  // ) {
  //   return g
  //     .attr('transform', `translate(${margin.left},0)`)
  //     .call(d3.axisLeft());
  // };

  // const xAxis = function _xAxis(g: Selection) {};

  // d3.create('svg')
  //   .attr('width', width)
  //   .attr('height', height);
}

lineChars();
