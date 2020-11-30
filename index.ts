import * as d3 from 'd3';
import './style.css';

const data = [40, 80, 150, 160, 230, 260];
const root = d3.select("div.chart-container");

const draw = () => {
	root
		.selectAll('div.divchart')
		.data(data)
		.enter()
		.append("div")
			.style("height", "0px")
			.attr("class", "divchart")
			.transition()
			.duration(1000)
			.style("height", (d) => d + "px")
			.text((d, i, a) => d);
}

draw();
