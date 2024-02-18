import DOMPurify from 'dompurify';

if (window.trustedTypes && window.trustedTypes.createPolicy) { // Feature testing
    window.trustedTypes.createPolicy('default', {
        createHTML: (string) => String(DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true })),
        createScriptURL: (url) => url, // Warning: This is unsafe!
        createScript: (script) => script, // Warning: This is unsafe!
    });
}
