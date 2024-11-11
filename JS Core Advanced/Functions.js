function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}


console.log(generateRandomId(10)); // Пример вывода: 'A1b2C3d4E5'
console.log(generateRandomId(15)); // Пример вывода: 'f6G7h8I9j0K1L2M'
