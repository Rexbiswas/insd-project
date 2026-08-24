async function testProduction() {
    try {
        console.log("Testing https://insd.edu.in/api/ping ...");
        const pingRes = await fetch("https://insd.edu.in/api/ping");
        console.log("Ping Status:", pingRes.status);
        console.log("Ping Headers content-type:", pingRes.headers.get("content-type"));
        const pingText = await pingRes.text();
        console.log("Ping Body preview:", pingText.substring(0, 300));
        
        console.log("\nTesting POST https://insd.edu.in/api/step-leads ...");
        const leadRes = await fetch("https://insd.edu.in/api/step-leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Test User",
                phone: "+919876543210",
                email: "test@example.com",
                qualification: "12th Pass",
                industry: "Fashion Design",
                state: "Delhi",
                city: "New Delhi",
                marketingConsent: true
            })
        });
        console.log("Lead Status:", leadRes.status);
        console.log("Lead Headers content-type:", leadRes.headers.get("content-type"));
        const leadText = await leadRes.text();
        console.log("Lead Body preview:", leadText.substring(0, 500));
    } catch (err) {
        console.error("Error connecting to production:", err);
    }
}

testProduction();
