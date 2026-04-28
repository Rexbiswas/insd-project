import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useAdmissionModal } from '../context/AdmissionModalContext';
import { ArrowRight } from 'lucide-react';

const fullData = [
    { year: '2020', jobs: 35, demand: 100 },
    { year: '2025', jobs: 155, demand: 165 },
    { year: '2030', jobs: 240, demand: 240 }
];

const GrowthChart = () => {
    const svgRef = useRef();
    const containerRef = useRef();
    const [activeYear, setActiveYear] = useState('ALL'); // '2020', '2025', '2030', or 'ALL'
    const { openAdmissionModal } = useAdmissionModal();

    useEffect(() => {
        if (!svgRef.current || !containerRef.current) return;

        const data = activeYear === 'ALL'
            ? fullData
            : fullData.filter(d => d.year === activeYear);

        // Configuration
        const isDesktop = window.innerWidth > 1024;
        const margin = {
            top: 60,
            right: isDesktop && activeYear === 'ALL' ? 300 : 40,
            bottom: 60,
            left: 60
        };
        const width = containerRef.current.clientWidth - margin.left - margin.right;
        const height = 450 - margin.top - margin.bottom;

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
            .on('mouseover', function (event, d) {
                d3.select(this).transition().duration(200).attr('opacity', 0.8).attr('transform', 'scale(1.02)').attr('transform-origin', `${x1(d.key) + x1.bandwidth() / 2} ${y(d.value)}`);
            })
            .on('mouseout', function () {
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

        // Annotations (Pointers) - Only on Desktop "ALL" view
        if (isDesktop && activeYear === 'ALL') {
            const annotations = [
                {
                    id: 1,
                    year: '2030',
                    val: 240,
                    text: "Design is no longer a <span class='text-primary font-black uppercase tracking-tight'>\"hobby\"</span>; it is a serious career opportunity.",
                    boxY: 80
                },
                {
                    id: 2,
                    year: '2025',
                    val: 165,
                    text: "The <span class='text-primary font-black uppercase tracking-tight'>\"Orange Economy\"</span> (Creative Sector) is projected to need 20 lakh professionals by 2033.",
                    boxY: 180
                },
                {
                    id: 3,
                    year: '2020',
                    val: 100,
                    text: "India needs more <span class='text-primary font-black uppercase tracking-tight'>professional Designer</span>.",
                    boxY: 280
                }
            ];

            const annotationGroup = g.append('g').attr('class', 'annotations');

            // Add Purple Frame around chart area
            g.append('rect')
                .attr('x', -5)
                .attr('y', -5)
                .attr('width', width + 10)
                .attr('height', height + 10)
                .attr('fill', 'none')
                .attr('stroke', '#8B5CF6') // Purple
                .attr('stroke-width', 2)
                .attr('opacity', 0.8)
                .attr('rx', 8);

            annotations.forEach((ann, i) => {
                const targetX = width + 5; // Edge of the purple frame
                const targetY = y(ann.val);
                const boxX = width + 110;
                const boxY = ann.boxY;

                // Connection Line
                annotationGroup.append('path')
                    .attr('d', `M ${targetX},${targetY} L ${targetX + 40},${targetY} L ${targetX + 60},${boxY} L ${boxX},${boxY}`)
                    .attr('fill', 'none')
                    .attr('stroke', '#475569')
                    .attr('stroke-width', 1.5)
                    .style('opacity', 0)
                    .transition()
                    .duration(1000)
                    .delay(1200 + i * 200)
                    .style('opacity', 0.4);

                // Target Dot on frame edge
                annotationGroup.append('circle')
                    .attr('cx', targetX)
                    .attr('cy', targetY)
                    .attr('r', 4)
                    .attr('fill', '#475569')
                    .style('opacity', 0)
                    .transition()
                    .duration(500)
                    .delay(1200 + i * 200)
                    .style('opacity', 1);

                // Note Box (Flag style)
                const boxWidth = 280;
                const boxHeight = 70;
                
                const box = annotationGroup.append('g')
                    .attr('transform', `translate(${boxX}, ${boxY - boxHeight / 2})`)
                    .style('opacity', 0);

                // Shadow rect
                box.append('rect')
                    .attr('width', boxWidth)
                    .attr('height', boxHeight)
                    .attr('fill', 'rgba(0,0,0,0.06)')
                    .attr('filter', 'blur(6px)')
                    .attr('transform', 'translate(4, 6)')
                    .attr('rx', 8);

                // Main rect
                box.append('rect')
                    .attr('width', boxWidth)
                    .attr('height', boxHeight)
                    .attr('fill', 'white')
                    .attr('stroke', '#f1f5f9')
                    .attr('stroke-width', 1)
                    .attr('rx', 8);

                // Side Accent
                box.append('rect')
                    .attr('width', 3)
                    .attr('height', boxHeight - 30)
                    .attr('y', 15)
                    .attr('rx', 1.5)
                    .attr('fill', '#8B5CF6');

                box.append('foreignObject')
                    .attr('x', 15)
                    .attr('y', 0)
                    .attr('width', boxWidth - 30)
                    .attr('height', boxHeight)
                    .append('xhtml:div')
                    .style('height', '100%')
                    .style('padding', '12px 5px')
                    .style('font-size', '10px')
                    .style('font-weight', '700')
                    .style('color', '#334155')
                    .style('line-height', '1.4')
                    .style('font-family', 'Inter, sans-serif')
                    .style('word-wrap', 'break-word')
                    .style('overflow', 'hidden')
                    .html(ann.text);

                box.transition()
                    .duration(1000)
                    .delay(1400 + i * 200)
                    .style('opacity', 1);
            });
        }

        // Legend - Moved to avoid overlap
        const legend = svg.append('g').attr('transform', `translate(${margin.left + 5}, 15)`);
        const legendItems = [
            { label: 'Creative Industry Jobs (Millions)', color: colors.jobs },
            { label: 'Design Education Demand (Index)', color: colors.demand }
        ];

        legendItems.forEach((item, i) => {
            const leg = legend.append('g').attr('transform', `translate(${i * 220}, 0)`);
            leg.append('rect').attr('width', 12).attr('height', 12).attr('fill', item.color).attr('rx', 3);
            leg.append('text')
                .attr('x', 18)
                .attr('y', 10)
                .attr('font-size', '10px')
                .attr('font-weight', '800')
                .attr('fill', '#64748b')
                .attr('letter-spacing', '0.02em')
                .text(item.label.toUpperCase());
        });

    }, [activeYear]);

    return (
        <div ref={containerRef} className="w-full bg-white p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-2">
                <div className="space-y-1">
                    <h2 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-gray-900 leading-none">
                        Demand for <span className="text-primary italic">Skill Doubling</span>
                    </h2>
                    <p className="text-sm text-gray-500 font-bold tracking-tight">
                        India is moving toward skill based education
                    </p>
                </div>

                <div className="flex bg-gray-50 p-1 rounded-2xl border border-gray-100 shadow-inner">
                    {['2020', '2025', '2030', 'ALL'].map((yr) => (
                        <button
                            key={yr}
                            onClick={() => setActiveYear(yr)}
                            className={`px-4 md:px-6 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all duration-500 ${activeYear === yr
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

            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="space-y-1 text-center sm:text-left">
                    <p className="text-sm md:text-base font-black uppercase tracking-tighter text-gray-900">
                        Join the <span className="text-primary italic">Creative Economy</span>
                    </p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Limited seats available for 2026 batch
                    </p>
                </div>

                <button
                    onClick={() => openAdmissionModal()}
                    className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl font-black uppercase tracking-widest text-[9px] shadow-lg hover:bg-primary transition-all duration-500 flex items-center justify-center gap-2 group"
                >
                    Apply Now
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default GrowthChart;


