import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const chartData = [
    {
        year: 2020,
        metrics: [
            { label: 'Creative Industry Jobs', value: 35, color: '#DB3436' },
            { label: 'Design Education Demand', value: 100, color: '#F97316' },
            { label: 'Skilled Designers Supply', value: 100, color: '#22C55E' }
        ]
    },
    {
        year: 2025,
        metrics: [
            { label: 'Creative Industry Jobs', value: 165, color: '#DB3436' },
            { label: 'Design Education Demand', value: 175, color: '#F97316' },
            { label: 'Skilled Designers Supply', value: 120, color: '#22C55E' }
        ]
    },
    {
        year: 2030,
        metrics: [
            { label: 'Creative Industry Jobs', value: 240, color: '#DB3436' },
            { label: 'Design Education Demand', value: 245, color: '#F97316' },
            { label: 'Skilled Designers Supply', value: 140, color: '#22C55E' }
        ]
    }
];

const GrowthChart = () => {
    const svgRef = useRef();
    const containerRef = useRef();
    const [activeYear, setActiveYear] = useState(2025);

    useEffect(() => {
        if (!svgRef.current || !containerRef.current) return;

        const currentData = chartData.find(d => d.year === activeYear).metrics;
        const width = containerRef.current.clientWidth || 600;
        const height = 350;
        const margin = { top: 20, right: 30, bottom: 40, left: 0 };

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        svg.selectAll('*').remove();

        // Add defs FIRST so filter works
        const defs = svg.append('defs');
        defs.append('filter')
            .attr('id', 'glow')
            .append('feGaussianBlur')
            .attr('stdDeviation', '4')
            .attr('result', 'coloredBlur');

        const x = d3.scaleLinear()
            .domain([0, 260])
            .range([margin.left, width - margin.right]);

        const y = d3.scaleBand()
            .domain(currentData.map(d => d.label))
            .range([margin.top, height - margin.bottom])
            .padding(0.4);

        // Grid lines
        svg.append('g')
            .attr('class', 'grid')
            .attr('transform', `translate(0, ${height - margin.bottom})`)
            .call(d3.axisBottom(x).ticks(5).tickSize(-height + margin.top + margin.bottom).tickFormat(''))
            .call(g => g.select('.domain').remove())
            .call(g => g.selectAll('.tick line').attr('stroke', 'rgba(255,255,255,0.05)'));

        // Bars
        const barGroups = svg.selectAll('.bar-group')
            .data(currentData)
            .enter()
            .append('g')
            .attr('class', 'bar-group');

        // Background Track
        barGroups.append('rect')
            .attr('x', margin.left)
            .attr('y', d => y(d.label))
            .attr('width', width - margin.right)
            .attr('height', y.bandwidth())
            .attr('rx', 12)
            .attr('fill', 'rgba(255,255,255,0.03)');

        // Active Bar
        barGroups.append('rect')
            .attr('x', margin.left)
            .attr('y', d => y(d.label))
            .attr('width', 0)
            .attr('height', y.bandwidth())
            .attr('rx', 12)
            .attr('fill', d => d.color)
            .attr('filter', 'url(#glow)')
            .transition()
            .duration(1000)
            .ease(d3.easeExpOut || d3.easeCubic)
            .attr('width', d => Math.max(0, x(d.value)));

        // Labels
        barGroups.append('text')
            .attr('x', margin.left)
            .attr('y', d => y(d.label) - 15)
            .attr('fill', 'rgba(255,255,255,0.6)')
            .attr('font-size', '11px')
            .attr('font-weight', '900')
            .attr('class', 'uppercase tracking-[0.3em] italic')
            .text(d => d.label);

        // Values
        barGroups.append('text')
            .attr('x', width - margin.right)
            .attr('y', d => y(d.label) - 15)
            .attr('fill', 'white')
            .attr('font-size', '14px')
            .attr('font-weight', '900')
            .attr('text-anchor', 'end')
            .text(d => d.value);



    }, [activeYear]);

    return (
        <div ref={containerRef} className="bg-[#050505] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl space-y-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-all duration-700 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <h4 className="text-2xl font-black uppercase tracking-tighter text-white">Growth Indicators</h4>
                <div className="flex bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-xl">
                    {[2020, 2025, 2030].map((yr) => (
                        <button
                            key={yr}
                            onClick={() => setActiveYear(yr)}
                            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeYear === yr
                                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                                : 'text-white/40 hover:text-white'
                                }`}
                        >
                            {yr}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative">
                <svg ref={svgRef} className="w-full"></svg>
            </div>

            <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.4em] text-center pt-6 border-t border-white/5">
                Data Source: Creative Economy Projection 2033
            </p>
        </div>
    );
};

export default GrowthChart;
