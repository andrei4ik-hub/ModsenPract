function testScope() {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";
    
    console.log(varVariable);  // Внутри функции доступна
    console.log(letVariable);  // Внутри функции доступна
    console.log(constVariable); // Внутри функции доступна
}

testScope();

console.log(varVariable);  // Снаружи функции недоступна
console.log(letVariable);  // Снаружи функции недоступна
console.log(constVariable); // Снаружи функции недоступна
