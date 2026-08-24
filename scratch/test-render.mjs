import React from 'react';
import { renderToString } from 'react-dom/server';

async function test() {
    try {
        console.log("Testing IndustryPotential import...");
        const IndustryPotential = (await import('../src/views/IndustryPotential.jsx')).default;
        console.log("Testing ClientLayoutWrapper import...");
        const ClientLayoutWrapper = (await import('../src/components/ClientLayoutWrapper.jsx')).default;
        
        console.log("Rendering IndustryPotential in ClientLayoutWrapper...");
        const html = renderToString(
            React.createElement(ClientLayoutWrapper, null, React.createElement(IndustryPotential, null))
        );
        console.log("Rendered successfully! Length:", html.length);
    } catch (err) {
        console.error("Caught error during render:", err);
    }
}

test();
