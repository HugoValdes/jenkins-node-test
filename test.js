// test.js
const assert = require('assert');

function suma(a, b) { return a + b; }
function multiplica(a, b) { return a * b; }

// Prueba 1
assert.strictEqual(suma(2, 3), 5, 'Suma incorrecta');

// Prueba 2
assert.strictEqual(multiplica(4, 5), 20, 'Multiplicación incorrecta');

console.log('Todos los tests pasaron ✅');