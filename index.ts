import * as d3 from 'd3';
import './style.css';
import {LanguageData, data} from "./data";

const DIAGRAM_HEIGHT = 400; // in px

const root = d3.select("div.chart-container");
root.style("height", DIAGRAM_HEIGHT + 'px');

const draw = (data: LanguageData[]) => {
	const scale = DIAGRAM_HEIGHT / Math.max(...data.map((e) => e.value));
	root
		.selectAll('div.divchart')
		.data(data)
		.enter()
		.append("div")
			.style("height", "0px")
			.attr("class", "divchart")
			.transition()
			.duration(1000)
			.style("height", (d) => (d.value * scale) + "px")
			.text((d, i, a) => d.value);
}

draw(data);
