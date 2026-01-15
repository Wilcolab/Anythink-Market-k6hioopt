/**
 * Converts a string to kebab-case format.
 * 
 * Kebab case rules:
 * - All letters are lowercase
 * - Words are separated by hyphens (-)
 * - No spaces, underscores, or camelCase boundaries
 * 
 * Examples:
 * toKebabCase("HelloWorld") => "hello-world"
 * toKebabCase("hello_world") => "hello-world"
 * toKebabCase("hello world") => "hello-world"
 * toKebabCase("HELLO_WORLD") => "hello-world"
 * toKebabCase("helloWorldTest") => "hello-world-test"
 * toKebabCase("hello--world") => "hello-world"
 * toKebabCase("_hello_world_") => "hello-world"
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        return '';
    }

    return str
        // Insert hyphen before uppercase letters (for camelCase)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace spaces and underscores with hyphens
        .replace(/[\s_]+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '')
        // Replace multiple consecutive hyphens with single hyphen
        .replace(/-+/g, '-');
}

module.exports = toKebabCase;