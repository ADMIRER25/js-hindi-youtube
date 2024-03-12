// Immediately Invoked Function Expressions (IIFE)
// Encapsulation:

// IIFE allows for encapsulation of variables and functions within a local scope, preventing them from polluting the global namespace.
// Helps in avoiding variable conflicts and unintended modifications of global variables.
// Avoiding Global Namespace Pollution:

// JavaScript doesn't have block-level scoping (before ES6). Variables declared within blocks like loops or conditionals are accessible globally.
// IIFE creates a private scope, ensuring variables within it do not leak into the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

