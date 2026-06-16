/**
 * Highly secure utility to write text to the system clipboard.
 * Defends against Pastejacking (auto-executing code), Phishing redirects, and Buffer DoS.
 */
export const safeCopyToClipboard = async (text) => {
    // 1. Enforce strict type validation
    if (typeof text !== 'string') {
        throw new TypeError('Clipboard input must be a string');
    }
    
    // 2. Reject excessively long text to prevent clipboard buffer overflow DoS
    if (text.length > 2048) {
        throw new Error('Clipboard input exceeds safe length limit');
    }

    // 3. Strip all control characters, newlines, carriage returns, and null bytes (Pastejacking defense)
    // This ensures that even if pasted into a terminal, the text cannot automatically execute.
    const cleanText = text.replace(/[\r\n\x00-\x1F\x7F-\x9F]/g, '');

    // 4. Validate URL security (if copying a link)
    if (cleanText.startsWith('http://') || cleanText.startsWith('https://')) {
        let parsed;
        try {
            parsed = new URL(cleanText);
        } catch (err) {
            throw new Error('Clipboard copy rejected: invalid URL format');
        }
        // Defend against open-redirect phishing by validating origin matches the site's domain
        if (parsed.origin !== window.location.origin) {
            throw new Error('Clipboard copy rejected: domain mismatch (anti-phishing)');
        }
    }

    // 5. Securely write to clipboard using standard API
    await navigator.clipboard.writeText(cleanText);
};
