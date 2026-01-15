function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber
function camelCaseConverter(str) {
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    
    return str
        .trim()
        .replace(/[^a-zA-Z0-9\s\-_]/g, '')
        .split(/[-_\s]+/)
        .filter(word => word.length > 0)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(camelCaseConverter('Hello World!'));           // helloWorld
console.log(camelCaseConverter('  leading and trailing ')); // leadingAndTrailing
console.log(camelCaseConverter('SPECIAL_char$'));          // specialChar