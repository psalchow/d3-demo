import * as d3 from 'd3';
import './style.css';
import {data, LanguageData} from "./data";

const DIAGRAM_HEIGHT = 400; // in px

const root = d3.select("div.chart-container");
root.style("height", DIAGRAM_HEIGHT + 'px');

const getElementForEvent = (event: any): d3.Selection<any, unknown, null, undefined> => d3.select(event.currentTarget);

const enlargeElement = (element: d3.Selection<any, unknown, null, undefined>)  => element.style("margin-left", 0).style("margin-right", 0)
const resetElementSize = (element: d3.Selection<any, unknown, null, undefined>)  => element.style("margin-left", null).style("margin-right", null)

const draw = (data: LanguageData[]) => {
    const scale = (DIAGRAM_HEIGHT - 64) / Math.max(...data.map((e) => e.value));
    const chartEntry = root
        .selectAll('div.divchart')
        .data(data)
        .enter()
        .append("div")
        .attr("class", "chart-entry");

    chartEntry.append("div")
        .style("height", "0px")
        .style("background-color", (data) => data.color)
        .attr("class", "chart")
        .on('mouseenter', (event) => {
            const element = getElementForEvent(event);
            enlargeElement(element)
                .style("background-color", null)
        }
        )
        .on('mouseleave', (event, data) => {
            const element = getElementForEvent(event);
            resetElementSize(element)
                    .style("background-color", data.color);
            }
        )
        .transition()
        .duration(1000)
        .style("height", (d) => (d.value * scale) + "px")
        .text((d) => d.value);

    chartEntry.append("div")
        .attr("class", "chart-caption")
        .text((d) => d.language);
};

draw(data);
