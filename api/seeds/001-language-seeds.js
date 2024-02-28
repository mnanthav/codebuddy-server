// 001-language-seeds
//--------------------------------------
exports.seed = function(knex) {
  // delete all existing languages entries
  return knex('languages').truncate()
    .then(function () {
      // insert seed entries
      return knex('languages').insert([
        {
          name: 'C++',
          yearCreated: 1983,
          creator: 'Bjarne Stroustrup',
          description:
            `
            General-programming language. 
            An extension of the C language; "C with classes".
            Known for: imperative, object-orientated and general programming features.
            `,
          ide: 'Visual Studio',
          ideWebsite: 'https://visualstudio.microsoft.com/#vs-section',
          recExtensions: 
            `
            
            `,
          commonlyUsed:
            `
            System/sofware development
            Game development
            Drivers
            Client-server applications
            `
        }, {
          name: 'JavaScript',
          yearCreated: 1995,
          creator: 'Brendan Eich',
          description:
            `
            High-level interpreted language; 
            often just-in-time compiled language that conforms to ECMAScript standard.
            Known for: dynamic typing, prototype-based object-orientation, and first-class functions.
            `,
          ide: 'Visual Studio Code',
          ideWebsite: 'https://visualstudio.microsoft.com/#vs-section',
          recExtensions: 
            `
            
            `,
          commonlyUsed:
            `
            Web development
            Server-side computing
            `
        }, {
          name: 'Python',
          yearCreated: 1991,
          creator: 'Guido van Rossum',
          description:
            `
            High-level and general-purpose programming language.
            Known for: readability and support for multiple paradigms.
            `,
          ide: '',
          ideWebsite: '',
          recExtensions: 
            `
            
            `,
          commonlyUsed:
            `
            
            `
        }
      ])
    })
}
