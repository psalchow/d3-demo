import * as d3 from 'd3';
import './style.css';

const data = [40, 80, 150, 160, 230, 260];
const body = d3.select("body");

const draw = (dataset: number[]) => {
	const divs = body.selectAll('div').data(dataset);

	divs.enter().append("div").style("width", "0px");

	divs.transition().duration(1000).style("width", function(d) { return d + "px"; })
 	.attr("class", "divchart")
    .text((d) => d);
}

draw(data);
