import { sanitize } from '../api/utils/sanitize.js';

const longInput = "a".repeat(6000);

// Test cases containing SSTI/HTML/XSS injections
const testPayloads = {
    name: "John Doe",
    email: "john@example.com",
    course: "Fashion Designing ${7*7}", // JS template injection
    subject: "Inquiry {{7*7}} <% system('id') %>", // EJS / Pug / Jinja injection
    message: "<script>alert('XSS')</script><iframe src='javascript:void(0)'>", // HTML / XSS injection
    nested: {
        field1: "Normal text",
        field2: "Attack ${process.mainModule.require('child_process').execSync('whoami')}"
    },
    arrayField: [
        "Normal 1",
        "Attack {{ 1 + 1 }}"
    ],
    password: "MySuperSecretPassword${123}!" + longInput, // Should NOT be sanitized or truncated
    longString: longInput, // Standard string, should be truncated to 5000
    content: longInput // Blog content, should be allowed up to 100,000
};

console.log("=== ORIGINAL PAYLOAD ===");
console.log(`Original longString length: ${testPayloads.longString.length}`);
console.log(`Original content length: ${testPayloads.content.length}`);
console.log(`Original password length: ${testPayloads.password.length}`);

console.log("\n=== SANITIZING... ===");
const sanitized = sanitize(testPayloads);

console.log("\n=== SANITIZED PAYLOAD STATS ===");
console.log(`Sanitized longString length: ${sanitized.longString.length}`);
console.log(`Sanitized content length: ${sanitized.content.length}`);
console.log(`Sanitized password length: ${sanitized.password.length}`);

// Automated validations
const checks = [
    {
        name: "Neutralizes JS template strings (${)",
        pass: !sanitized.course.includes("${") && !sanitized.nested.field2.includes("${")
    },
    {
        name: "Neutralizes braces ({{)",
        pass: !sanitized.subject.includes("{{") && !sanitized.arrayField[1].includes("{{")
    },
    {
        name: "Neutralizes HTML tags (<script>)",
        pass: !sanitized.message.includes("<script>")
    },
    {
        name: "Bypasses password fields entirely (no sanitization or truncation)",
        pass: sanitized.password === "MySuperSecretPassword${123}!" + longInput
    },
    {
        name: "Truncates standard long strings to 5000 chars",
        pass: sanitized.longString.length === 5000
    },
    {
        name: "Allows long blog content (> 5000 chars)",
        pass: sanitized.content.length === 6000
    }
];

console.log("\n=== TEST RESULTS ===");
let allPassed = true;
for (const check of checks) {
    console.log(`${check.pass ? '✅' : '❌'} ${check.name}`);
    if (!check.pass) allPassed = false;
}

if (allPassed) {
    console.log("\n🎉 ALL SECURITY SANITIZATION CHECKS PASSED!");
} else {
    console.log("\n🛑 SOME SECURITY SANITIZATION CHECKS FAILED!");
    process.exit(1);
}
