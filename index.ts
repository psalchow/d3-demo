import {select} from 'd3';
import './style.css';

const data = [40, 80, 150, 160, 230, 260];
const body = select("body");

const draw = () => {
	const divs = body.selectAll('div').data(data);

	divs.enter().append("div").style("width", "0px").attr("class", "divchart");

	divs
		//.transition()
		//.duration(1000)
		.style("width", (d) => d + "px")
		.text((d) => d);
}

draw();
