import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const fullData = [
    { year: '2020', jobs: 35, demand: 100 },
    { year: '2025', jobs: 155, demand: 165 },
    { year: '2030', jobs: 240, demand: 240 }
];

const GrowthChart = () => {
    const svgRef = useRef();
    const containerRef = useRef();
    const [activeYear, setActiveYear] = useState('ALL'); // '2020', '2025', '2030', or 'ALL'

    useEffect(() => {
        if (!svgRef.current || !containerRef.current) return;

        const data = activeYear === 'ALL' 
            ? fullData 
            : fullData.filter(d => d.year === activeYear);

        // Configuration
        const margin = { top: 60, right: 30, bottom: 60, left: 60 };
        const width = containerRef.current.clientWidth - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Clear existing content
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const g = svg
            .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const x0 = d3.scaleBand()
            .domain(data.map(d => d.year))
            .rangeRound([0, width])
            .paddingInner(activeYear === 'ALL' ? 0.2 : 0.4);

        const x1 = d3.scaleBand()
            .domain(['jobs', 'demand'])
            .rangeRound([0, x0.bandwidth()])
            .padding(0.05);

        const y = d3.scaleLinear()
            .domain([0, 250])
            .nice()
            .rangeRound([height, 0]);

        const colors = {
            jobs: '#2563EB', // Blue
            demand: '#EA580C' // Orange
        };

        // Add Gradients
        const defs = svg.append('defs');
        const blueGradient = defs.append('linearGradient').attr('id', 'blue-gradient').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
        blueGradient.append('stop').attr('offset', '0%').attr('stop-color', colors.jobs);
        blueGradient.append('stop').attr('offset', '100%').attr('stop-color', '#1E40AF');

        const orangeGradient = defs.append('linearGradient').attr('id', 'orange-gradient').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
        orangeGradient.append('stop').attr('offset', '0%').attr('stop-color', colors.demand);
        orangeGradient.append('stop').attr('offset', '100%').attr('stop-color', '#9A3412');

        // Grid lines
        g.append('g').attr('class', 'grid').attr('opacity', 0.1).call(d3.axisLeft(y).ticks(5).tickSize(-width).tickFormat(''));

        // X Axis
        g.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x0)).attr('font-size', '12px').attr('font-weight', '600').style('color', '#666');

        // Y Axis
        g.append('g').call(d3.axisLeft(y).ticks(5)).attr('font-size', '12px').style('color', '#666');

        // Labels
        g.append('text').attr('transform', 'rotate(-90)').attr('y', -margin.left + 20).attr('x', -height / 2).attr('text-anchor', 'middle').attr('font-size', '12px').attr('font-weight', '600').attr('fill', '#666').text('Growth Indicators');
        g.append('text').attr('y', height + margin.bottom - 20).attr('x', width / 2).attr('text-anchor', 'middle').attr('font-size', '12px').attr('font-weight', '600').attr('fill', '#666').text('Year');

        // Groups
        const yearGroups = g.selectAll('.year-group')
            .data(data)
            .enter().append('g')
            .attr('transform', d => `translate(${x0(d.year)},0)`);

        const barData = (d) => [{ key: 'jobs', value: d.jobs }, { key: 'demand', value: d.demand }];

        // Bars
        const bars = yearGroups.selectAll('rect')
            .data(d => barData(d))
            .enter().append('rect')
            .attr('x', d => x1(d.key))
            .attr('y', height)
            .attr('width', x1.bandwidth())
            .attr('height', 0)
            .attr('fill', d => d.key === 'jobs' ? 'url(#blue-gradient)' : 'url(#orange-gradient)')
            .attr('rx', 6)
            .style('cursor', 'pointer')
            .on('mouseover', function(event, d) {
                d3.select(this).transition().duration(200).attr('opacity', 0.8).attr('transform', 'scale(1.02)').attr('transform-origin', `${x1(d.key) + x1.bandwidth()/2} ${y(d.value)}`);
            })
            .on('mouseout', function() {
                d3.select(this).transition().duration(200).attr('opacity', 1).attr('transform', 'scale(1)');
            });

        bars.transition()
            .duration(1000)
            .ease(d3.easeElasticOut.amplitude(1).period(0.3))
            .delay((d, i) => i * 150)
            .attr('y', d => y(d.value))
            .attr('height', d => height - y(d.value));

        // Labels on top
        yearGroups.selectAll('.label')
            .data(d => barData(d))
            .enter().append('text')
            .attr('class', 'label')
            .attr('x', d => x1(d.key) + x1.bandwidth() / 2)
            .attr('y', d => y(d.value) - 5)
            .attr('text-anchor', 'middle')
            .attr('font-size', '10px')
            .attr('font-weight', '800')
            .attr('fill', '#333')
            .text(d => d.value)
            .style('opacity', 0)
            .transition()
            .duration(800)
            .delay((d, i) => 800 + i * 100)
            .style('opacity', 1);

        // Legend
        const legend = svg.append('g').attr('transform', `translate(${margin.left + 20}, 50)`);
        const legendItems = [{ label: 'Creative Industry Jobs (Millions)', color: colors.jobs }, { label: 'Design Education Demand (Index)', color: colors.demand }];
        legendItems.forEach((item, i) => {
            const leg = legend.append('g').attr('transform', `translate(0, ${i * 20})`);
            leg.append('rect').attr('width', 15).attr('height', 15).attr('fill', item.color).attr('rx', 2);
            leg.append('text').attr('x', 20).attr('y', 12).attr('font-size', '11px').attr('font-weight', '600').attr('fill', '#666').text(item.label);
        });

    }, [activeYear]);

    return (
        <div ref={containerRef} className="w-full bg-white p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-2">
                <div className="space-y-1">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-900">
                        Growth Indicators
                    </h2>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        India's Creative & Skill Economy
                    </p>
                </div>
                
                <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100 shadow-inner">
                    {['2020', '2025', '2030', 'ALL'].map((yr) => (
                        <button
                            key={yr}
                            onClick={() => setActiveYear(yr)}
                            className={`px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${
                                activeYear === yr
                                ? 'bg-white text-blue-600 shadow-md scale-105'
                                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {yr === 'ALL' ? 'Overview' : yr}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative overflow-visible">
                <svg ref={svgRef} className="w-full h-auto" style={{ minHeight: '400px' }}></svg>
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Live Projection Data
                </span>
                <span>© 2025 INSD Global</span>
            </div>
        </div>
    );
};

export default GrowthChart;


