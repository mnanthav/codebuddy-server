/*
, {
        langID: ,
        langName: "",
        ide: ``,
        creationDate: ``,
        creatorName: ``,
        keyFeatures: [
           , {
                keyID: , 
                feature: ``, 
                description: 
                    `
                    `,
            },
        ],
    },
*/
const languages = [
    {
        langID: 1,
        langName: "C++",
        ide: "Visual Studio",
        creationDate: `1983`,
        creatorName: `Bjarne Stroustrup`,
        keyFeatures: [
            {
                keyID: 1, 
                feature: `Compiled Language`, 
                description: 
                    `
                    C++ is a static language. 
                    This means that the code needs to be compiled before execution.
                    `,
            }, {
                keyID: 2, 
                feature: `Object-Oriented`, 
                description: `Supports both procedural and object-oriented programming models`,
            }, {
                keyID: 3, 
                feature: `Performance`, 
                description: 
                    `
                    Has high performance and efficiency.
                    Commonly used in: system programming, game dev, and performance-critical apps
                    `,
            }, {
                keyID: 4, 
                feature: `Memory Management`, 
                description: 
                    `
                    Provides manual memory management, ex. pointers. 
                    `,
            }, {
                keyID: 5, 
                feature: `Syntax`, 
                description: 
                    `
                    Complex compared to other languages.
                    Has a steep learning curve, but offers powerful low-level control. 
                    `,
            },
        ],
    }, {
        langID: 2,
        langName: "JavaScript",
        ide: `Visual Studio`,
        creationDate: `1995`,
        creatorName: `Brendan Eich`,
        keyFeatures: [
            {
                keyID: 1, 
                feature: `Interpreted Language`, 
                description: 
                    `
                    Executed by web browsers or server-side environments like Node.js with no need for compilation.
                    `,
            }, {
                keyID: 2, 
                feature: `Dynamic Typing`, 
                description: 
                    `
                    This allows variables to hold values of any type without explicit declaration. 
                    `,
            }, {
                keyID: 3, 
                feature: `Prototypal Inheritance`, 
                description: 
                    `
                    Objects inherit properties and behaviors directly from other objects.
                    `,
            }, {
                keyID: 4, 
                feature: `Client-Side Scripting`, 
                description: 
                    `
                    Primarily used for front-end web development.
                    Adds interactivity and dynamic content to websites.
                    `,
            }, {
                keyID: 5, 
                feature: `Asynchronous Programming`, 
                description: 
                    `
                    Handles concurrent operations efficiently
                    `,
            },
        ],
    }, {
        langID: 3,
        langName: "Python",
        ide: "Visual Studio Code",
        creationDate: `1991`,
        creatorName: `Guido van Rossum`,
        keyFeatures: [
            {
                keyID: 1, 
                feature: `Interpreted Language`, 
                description: 
                    `
                    Facilitates rapid development and prototyping without the need for compilation.
                    `,
            }, {
                keyID: 2, 
                feature: `High-Level Language`, 
                description: 
                    `
                    Simple and readable syntax.
                    Emphasizes code readability and reduces the cost of program maintenance. 
                    `,
            }, {
                keyID: 3, 
                feature: `Dynamic Typing`, 
                description: 
                    `
                    Allows flexible variable usage without explicit type declarations. 
                    `,
            }, {
                keyID: 4, 
                feature: `Multipurpose`, 
                description: 
                    `
                    A general-purpose language used for a wide range of applications.
                    Includes: web development, data analysis, artificial intelligence, scientific computing, automation, and more. 
                    `,
            }, {
                keyID: 5, 
                feature: `Automatic Memory Management`, 
                description: 
                    `
                    Garbage collection, simplifying memory handling for developers.
                    `,
            },
        ],
    },
];
/*
, {
        syntaxID: ,
        syntaxName: ``,
        langID: ``,
        codeLine: ``,
        description: 
            `
            `,
    }
*/
const syntax = [
    {
        syntaxID: 1,
        syntaxName: `header file library`,
        langID: 1,
        codeLine: `#include <iostream>`,
        description: 
            `
            This header file lets you write code with input and output objects.
            `,
    }, {
        syntaxID: 2,
        syntaxName: `standard library`,
        langID: 1,
        codeLine: `using namespace std;`,
        description: 
            `
            Lets you use names for objects and variables from the standard library.
            `,
    }, {
        syntaxID: 3,
        syntaxName: `main function`,
        langID: 1,
        codeLine: "int main()",
        description: 
            `
            Necessary for a C++ program. 
            The function that the compiler executes first. 
            The executed code is within curly braces.
            `,
    }, {
        syntaxID: 4,
        syntaxName: `output object`,
        langID: `1`,
        codeLine: `cout <<`,
        description: 
            `
            Pronounced see-out.
            This is an object that is used in pair with << to display text.
            `,
    }, {
        syntaxID: 5,
        syntaxName: `end statement`,
        langID: `1`,
        codeLine: `return 0;`,
        description: 
            `
            Is only present in/ends the main function. 
            Will always be the last function of int main(). 
            `,
    } 
];
/*
, {
        dataTypeID: ,
        dataTypeName: "",
        langID: ,
        codeLine: ``,
        size: ``,
        examples: [
            , {
                exID: ,
                example: ``,
            },
        ]
        description: 
            `
            `,
    }

    { exID: 1, ex: ``},
*/
const dataTypes = [
    {
        dataTypeID: 1,
        dataTypeName: "Integer",
        langID: 1,
        codeLine: `int`,
        size: "2 or 4 bytes",
        description: 
            `
            Stores whole numbers (no decimals).
            `,
    }, {
        dataTypeID: 2,
        dataTypeName: "Floating point number",
        langID: 1,
        codeLine: `float`,
        size: "4 bytes",
        examples: [
            { exID: 1, ex: `float floatNum = 2.67;`, }, 
            { exID: 2, ex: `float newFloatNum = 4.1368;`, }, 
        ],
        description: 
            `
            Stores fractional numbers with one or more decimals.
            Sufficient for storing 6-7 decimal digits.
            `,
    }, {
        dataTypeID: 3,
        dataTypeName: "Floating point number",
        langID: 1,
        codeLine: `double`,
        size: `8 bytes`,
        examples: [
            { exID: 1, ex: `double newDoubleNum = 3.12;`},
            { exID: 1, ex: `double doubleNum = 6.321801;`},
        ],
        description: 
            `
            Stores fractional numbers with one or more decimals.
            Sufficient for storing 15 decimal digits.
            `,
    }, {
        dataTypeID: 4,
        dataTypeName: "boolean",
        langID: 1,
        codeLine: `bool`,
        size: `1 byte`,
        examples: [
            { exID: 1, ex: `bool ans = true;`},
            { exID: 1, ex: `bool newAns = 0;`},
        ],
        description: 
            `
            Stores true or false values
            `,
    }, {
        dataTypeID: 5,
        dataTypeName: "Character",
        langID: 1,
        codeLine: `char`,
        size: `1 byte`,
        examples: [
            { exID: 1, ex: `char grade = 'A';`},
            { exID: 1, ex: `char first = '1';`},
        ],
        description: 
            `
            Stores a single character/letter/number, or ASCII values
            `,
    }, {
        dataTypeID: 6,
        dataTypeName: "String",
        langID: 1,
        codeLine: `string`,
        size: ``,
        examples: [
            { exID: 1, ex: `string message = "Hello, World!";`,},
        ],
        description: 
            `
            `,
    }
];
/*
            {
                id: 1,
                type: '',
                code: '',
                description: 
                    `
                    `, 
            }, {
                id: ,
                type: '',
                code: '',
                description: 
                    `
                    `, 
            },
struct: [
            {
                id: 1,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            }, {
                id: 2,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            },
        --------------------------------------
        ],
        flowCtrlStruct: [
            {
                id: 1,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            }, {
                id: 2,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            },
        ],
        functProg: [
            {
                id: 1,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            }, {
                id: 2,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            },
        ],
        objOrientatedProg: [
            {
                id: 1,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            }, {
                id: 2,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            },
        ],
        debugging: [
            {
                id: 1,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            }, {
                id: 2,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            },
        ],
        ideCodeEnvironment: [
            {
                id: 1,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            }, {
                id: 2,
                type: "",
                code: "",
                description: 
                    `
                    `, 
            },
        ],
*/