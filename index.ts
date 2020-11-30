import * as d3 from 'd3';
import './style.css';

var data = [40, 80, 150, 160, 230, 260];
var body = d3.select("body");

draw(data);

function draw(dataset){
	var divs = body.selectAll('div').data(data);
	
	divs.enter().append("div").style("width", "0px");
	
	divs.transition().duration(1000).style("width", function(d) { return d + "px"; })
 	.attr("class", "divchart")
    .text(function(d) { return d; });
		
}
