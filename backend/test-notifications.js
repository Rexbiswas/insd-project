import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendSMS, sendWelcomeEmail, sendWhatsApp } from './utils/notifications.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.join(__dirname, '.env') });

async function runTest() {
    console.log("--- STARTING NOTIFICATION MOCK TEST ---");
    console.log("Using .env variables from:", path.join(__dirname, '.env'));
    
    const testLead = {
        name: "Rishi Biswas",
        email: "test@example.com",
        phone: "919876543210",
        course: "Fashion Design"
    };

    console.log(`\n[Test] Simulating lead submission for: ${testLead.name}`);

    // 1. Test Email (Note: This will try to send a real email if GOOGLE_APP_PASSWORD is valid)
    console.log("\n[Step 1] Testing Welcome Email...");
    await sendWelcomeEmail(testLead.email, testLead.name, testLead.course);

    // 2. Test SMS Mock
    console.log("\n[Step 2] Testing SMS (Mocked if ID is missing)...");
    await sendSMS(testLead.phone, testLead.name);

    // 3. Test WhatsApp Mock
    console.log("\n[Step 3] Testing WhatsApp (Mocked if ID is missing)...");
    await sendWhatsApp(testLead.phone, testLead.name);

    console.log("\n--- TEST COMPLETE ---");
    process.exit(0);
}

runTest().catch(err => {
    console.error("Test failed:", err);
    process.exit(1);
});
