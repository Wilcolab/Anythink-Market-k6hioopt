/**
 * String case conversion utilities module
 * 
 * Provides functions to convert strings between different naming conventions.
 * Handles common delimiters including hyphens, underscores, spaces, and camelCase transitions.
 * 
 * @module stringCaseConverters
 * @exports {Object} Object containing toDotCase and toCamelCase functions
 * 
 * @example
 * const { toDotCase, toCamelCase } = require('./refined_prompt');
 * 
 * // Convert to dot.case
 * console.log(toDotCase('helloWorld'));        // 'hello.world'
 * console.log(toDotCase('hello_world'));       // 'hello.world'
 * console.log(toDotCase('hello-world'));       // 'hello.world'
 * 
 * // Convert to camelCase
 * console.log(toCamelCase('hello_world'));     // 'helloWorld'
 * console.log(toCamelCase('hello-world'));     // 'helloWorld'
 * console.log(toCamelCase('hello world'));     // 'helloWorld'
 * 
 * @see {@link toDotCase}
 * @see {@link toCamelCase}
 */

/**
 * Converts a string to dot.case format
 * 
 * Transforms any input string into dot-separated lowercase words.
 * Recognizes and converts:
 * - camelCase transitions (e.g., 'helloWorld' → 'hello.world')
 * - Common delimiters: hyphens (-), underscores (_), spaces ( )
 * - Multiple consecutive delimiters are treated as a single separator
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The string converted to dot.case format (lowercase words separated by dots)
 * @throws {TypeError} If input is not a string, throws TypeError with descriptive message
 * 
 * @example
 * toDotCase('helloWorld')      // returns 'hello.world'
 * toDotCase('hello_world')     // returns 'hello.world'
 * toDotCase('hello-world')     // returns 'hello.world'
 * toDotCase('HelloWorld')      // returns 'hello.world'
 * toDotCase('hello world')     // returns 'hello.world'
 * toDotCase('hello__world')    // returns 'hello.world'
 * toDotCase('')                // returns ''
 * 
 * @example
 * // Error handling
 * toDotCase(123)               // throws TypeError: Expected string, received number
 * toDotCase(null)              // throws TypeError: Expected string, received object
 */

/**
 * Converts a string to camelCase format
 * 
 * Transforms any input string into camelCase with the first word lowercase
 * and subsequent words capitalized. Recognizes and converts:
 * - Common delimiters: hyphens (-), underscores (_), spaces ( )
 * - Multiple consecutive delimiters are treated as a single word boundary
 * - PascalCase is converted to camelCase (first letter lowercased)
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The string converted to camelCase format (words joined without separators, 
 *                   first word lowercase, subsequent words capitalized)
 * @throws {TypeError} If input is not a string, throws TypeError with descriptive message
 * 
 * @example
 * toCamelCase('hello_world')   // returns 'helloWorld'
 * toCamelCase('hello-world')   // returns 'helloWorld'
 * toCamelCase('HelloWorld')    // returns 'helloWorld'
 * toCamelCase('hello world')   // returns 'helloWorld'
 * toCamelCase('HELLO_WORLD')   // returns 'helloWorld'
 * toCamelCase('hello__world')  // returns 'helloWorld'
 * toCamelCase('')              // returns ''
 * 
 * @example
 * // Error handling
 * toCamelCase(123)             // throws TypeError: Expected string, received number
 * toCamelCase(undefined)        // throws TypeError: Expected string, received undefined
 */

  // Split on delimiters and capitalize first letter of each word except the first
  return str
    .replace(/[\s_-]+/g, ' ') // Replace delimiters with space
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');


// Export functions
module.exports = { toDotCase, toCamelCase };

