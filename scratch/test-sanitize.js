import { sanitize } from '../api/utils/sanitize.js';
import { schemas } from '../api/utils/validate.js';

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

console.log("\n=== SANITIZATION TEST RESULTS ===");
let allPassed = true;
for (const check of checks) {
    console.log(`${check.pass ? '✅' : '❌'} ${check.name}`);
    if (!check.pass) allPassed = false;
}

console.log("\n=== TESTING ALLOW-LIST JOI VALIDATION ===");

const validAdmission = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "9876543210",
    city: "New Delhi",
    course: "Interior Designing"
};

const invalidAdmissionName = {
    name: "Jane Smith <script>", // contains invalid characters
    email: "jane.smith@example.com",
    phone: "9876543210"
};

const invalidAdmissionEmail = {
    name: "Jane Smith",
    email: "not-an-email",
    phone: "9876543210"
};

const resValid = schemas.admission.validate(validAdmission);
const resInvalidName = schemas.admission.validate(invalidAdmissionName);
const resInvalidEmail = schemas.admission.validate(invalidAdmissionEmail);

// Paris Tests
const validParis = { name: "Jean Luc", email: "jean@paris.fr", phone: "9876543210" };
const invalidParisName = { name: "Jean Luc <script>", email: "jean@paris.fr", phone: "9876543210" };
const resValidParis = schemas.paris.validate(validParis);
const resInvalidParisName = schemas.paris.validate(invalidParisName);

// Partner Tests
const validPartner = { name: "ABC Group", email: "info@abc.com", phone: "9876543210", city: "Mumbai" };
const invalidPartnerPhone = { name: "ABC Group", email: "info@abc.com", phone: "invalid-phone", city: "Mumbai" };
const resValidPartner = schemas.partner.validate(validPartner);
const resInvalidPartnerPhone = schemas.partner.validate(invalidPartnerPhone);

// Password LP DoS Tests
const validRegister = {
    username: "testuser",
    email: "test@example.com",
    password: "safePassword123",
    firstName: "First",
    lastName: "Last",
    phone: "9876543210"
};
const invalidRegisterPassword = {
    ...validRegister,
    password: "a".repeat(150) // exceeds 128 characters
};

const resValidRegister = schemas.register.validate(validRegister);
const resInvalidRegisterPassword = schemas.register.validate(invalidRegisterPassword);

console.log(`Valid payload validation error: ${resValid.error ? resValid.error.message : 'None (Passed)'}`);
console.log(`Invalid name validation error: ${resInvalidName.error ? resInvalidName.error.message : 'None'}`);
console.log(`Invalid email validation error: ${resInvalidEmail.error ? resInvalidEmail.error.message : 'None'}`);
console.log(`Valid Paris validation error: ${resValidParis.error ? resValidParis.error.message : 'None (Passed)'}`);
console.log(`Invalid Paris Name validation error: ${resInvalidParisName.error ? resInvalidParisName.error.message : 'None'}`);
console.log(`Valid Partner validation error: ${resValidPartner.error ? resValidPartner.error.message : 'None (Passed)'}`);
console.log(`Invalid Partner Phone validation error: ${resInvalidPartnerPhone.error ? resInvalidPartnerPhone.error.message : 'None'}`);
console.log(`Valid Register validation error: ${resValidRegister.error ? resValidRegister.error.message : 'None (Passed)'}`);
console.log(`Invalid Register Password (LP DoS attempt) validation error: ${resInvalidRegisterPassword.error ? resInvalidRegisterPassword.error.message : 'None'}`);

const validationChecks = [
    {
        name: "Allows valid admission data",
        pass: !resValid.error
    },
    {
        name: "Rejects invalid names with special characters (HTML tags)",
        pass: !!resInvalidName.error
    },
    {
        name: "Rejects malformed emails",
        pass: !!resInvalidEmail.error
    },
    {
        name: "Allows valid Paris Project data",
        pass: !resValidParis.error
    },
    {
        name: "Rejects invalid Paris names with special characters",
        pass: !!resInvalidParisName.error
    },
    {
        name: "Allows valid Partner/Franchise data",
        pass: !resValidPartner.error
    },
    {
        name: "Rejects invalid Partner phone numbers",
        pass: !!resInvalidPartnerPhone.error
    },
    {
        name: "Allows valid user registration details",
        pass: !resValidRegister.error
    },
    {
        name: "Blocks registration with long password (LP DoS prevention)",
        pass: !!resInvalidRegisterPassword.error
    }
];

console.log("\n=== VALIDATION TEST RESULTS ===");
for (const check of validationChecks) {
    console.log(`${check.pass ? '✅' : '❌'} ${check.name}`);
    if (!check.pass) allPassed = false;
}

// === ADVANCED CLIPBOARD TESTING ===
console.log("\n=== TESTING CLIPBOARD SECURITY UTILITY ===");

// Mock browser globals for Node.js context
global.window = { location: { origin: "https://insd.edu.in" } };
let lastWrittenClipboardText = "";
global.navigator = {
    clipboard: {
        writeText: async (text) => {
            lastWrittenClipboardText = text;
        }
    }
};

// Dynamically import ES modules clipboard helper
const { safeCopyToClipboard } = await import('../src/utils/clipboard.js');

const clipboardChecks = [];

// Check 1: Allows valid same-origin link
try {
    const text = "https://insd.edu.in/blog?id=65ed3c2e1f4a5b6c7d8e9f01";
    await safeCopyToClipboard(text);
    clipboardChecks.push({
        name: "Allows copying same-origin URL",
        pass: lastWrittenClipboardText === text
    });
} catch (err) {
    clipboardChecks.push({ name: "Allows copying same-origin URL", pass: false });
}

// Check 2: Blocks external phishing link
try {
    await safeCopyToClipboard("https://malicious-phishing-site.com/blog?id=123");
    clipboardChecks.push({ name: "Blocks external phishing origin", pass: false });
} catch (err) {
    clipboardChecks.push({
        name: "Blocks external phishing origin",
        pass: err.message.includes("domain mismatch")
    });
}

// Check 3: Pastejacking defense (strips newlines)
try {
    await safeCopyToClipboard("https://insd.edu.in/blog\n\nmalicious_cmd_here");
    clipboardChecks.push({
        name: "Pastejacking defense (strips newlines and carriage returns)",
        pass: lastWrittenClipboardText === "https://insd.edu.in/blogmalicious_cmd_here"
    });
} catch (err) {
    clipboardChecks.push({ name: "Pastejacking defense (strips newlines and carriage returns)", pass: false });
}

// Check 4: Rejects excessively long clipboard buffers
try {
    await safeCopyToClipboard("a".repeat(2500));
    clipboardChecks.push({ name: "Rejects text exceeding clipboard length limits", pass: false });
} catch (err) {
    clipboardChecks.push({
        name: "Rejects text exceeding clipboard length limits",
        pass: err.message.includes("exceeds safe length")
    });
}

console.log("\n=== CLIPBOARD SECURITY TEST RESULTS ===");
for (const check of clipboardChecks) {
    console.log(`${check.pass ? '✅' : '❌'} ${check.name}`);
    if (!check.pass) allPassed = false;
}

if (allPassed) {
    console.log("\n🎉 ALL SECURITY SANITIZATION, VALIDATION & CLIPBOARD CHECKS PASSED!");
} else {
    console.log("\n🛑 SOME SECURITY CHECKS FAILED!");
    process.exit(1);
}
