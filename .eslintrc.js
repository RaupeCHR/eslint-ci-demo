module.exports = { 
    "env": { 
        "node": true, // Definiert Umgebungsvariablen für Node.js 
        "es2021": true // Legt fest, dass der Code ECMAScript 2021 entsprechen soll 
    }, 
    "extends": "eslint:recommended", // Verwendet die empfohlenen ESLint-Regeln 
    "parserOptions": { 
        "ecmaVersion": 12 // Erlaubt die Verwendung von ECMAScript 2021 Features 
    }, 
    "rules": { 
        "indent": ["error", 4], // Erzwingt eine Einrückung von 4 Leerzeichen 
        "linebreak-style": ["error", "unix"], // Erzwingt Unix-Zeilenumbrüche (LF) 
        "quotes": ["error", "double"], // Verwendet doppelte Anführungszeichen für Strings 
        "semi": ["error", "always"], // Verlangt Semikolons am Ende der Anweisungen 
        "space-before-blocks": ["error", "always"], // Erzwingt ein Leerzeichen vor Klammern 
        "keyword-spacing": ["error", { "before": true, "after": true }], // Stellt sicher, dass Schlüsselwörter wie if, else, fo"space-infix-ops": "error", // Verlangt Leerzeichen um Operatoren 
        "space-before-function-paren": ["error", "always"], // Erzwingt Leerzeichen vor den Klammern von Funktionsdefinitionen "space-in-parens": ["error", "never"], // Keine Leerzeichen innerhalb von Klammern 
        "object-curly-spacing": ["error", "always"], // Erzwingt Leerzeichen innerhalb von geschweiften Klammern 
        "array-bracket-spacing": ["error", "never"] // Keine Leerzeichen innerhalb von eckigen Klammern 
    } 
}; 
    