import * as d3 from 'd3';
import './style.css';

const data = [40, 80, 150, 160, 230, 260];
const body = d3.select("body");

const draw = () => {
	body
		.selectAll('div')
		.data(data)
		.enter()
		.append("div")
			.style("width", "0px")
			.attr("class", "divchart")
			.transition()
			.duration(1000)
			.style("width", (d) => d + "px")
			.text((d, i, a) => {
				console.log(d, i, a);
				return d;
			});
}

draw();
