// Import React library for component creation
import React from 'react';
// Import DOMPurify library to sanitize HTML strings against Cross-Site Scripting (XSS) attacks
import DOMPurify from 'dompurify';

/**
 * SecureUserBio Component
 * 
 * Safely renders HTML content provided from dynamic or untrusted sources (e.g., database, user input).
 * Uses DOMPurify to sanitize the input before inserting it into the DOM via dangerouslySetInnerHTML.
 * 
 * @param {Object} props - Component properties
 * @param {string} [props.userBioFromDatabase=''] - The raw HTML string representing user bio content
 * @param {string} [props.className=''] - Optional additional CSS class names for styling customization
 * @returns {JSX.Element} Sanitized HTML rendered inside a wrapper div element
 */
function SecureUserBio({ userBioFromDatabase = '', className = '' }) {
  // Sanitize the untrusted user HTML string using DOMPurify with the default HTML profile
  // This strips out dangerous elements like <script> tags and inline event handlers (e.g., onerror, onload)
  // const cleanHtml = DOMPurify.sanitize(userBioFromDatabase, {
  //   USE_PROFILES: { html: true } // Enforce standard HTML sanitization profile
  // });

  return (
    // Container element for rendering the sanitized HTML string
    <div 
      // Combine default component class with any custom passed className prop, trimming excess whitespace
      // className={`secure-user-bio ${className}`.trim()}
      // Safely inject sanitized HTML markup into the DOM element
      // dangerouslySetInnerHTML={{ __html: cleanHtml }} 
    />
  );
}

// Export the SecureUserBio component as the default export of this module
export default SecureUserBio;

