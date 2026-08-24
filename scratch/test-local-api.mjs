async function checkServer() {
    const ports = [3000, 5001, 5173];
    for (const port of ports) {
        try {
            console.log(`Checking http://localhost:${port}/api/ping ...`);
            const res = await fetch(`http://localhost:${port}/api/ping`);
            console.log(`Port ${port} responded with status:`, res.status);
            const text = await res.text();
            console.log(`Port ${port} response:`, text);
        } catch (err) {
            console.log(`Port ${port} not reachable:`, err.message);
        }
    }
}

checkServer();
