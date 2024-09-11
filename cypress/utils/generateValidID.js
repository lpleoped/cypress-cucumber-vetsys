function generateValidID() {
    // Genero un array de largo 7, donde cada dígito debe ser entero y generado randomicamente entre 0 y 9 
    const randomDigits = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10));
    const constants = [2, 9, 8, 7, 6, 3, 4];
    let sum = 0;
    // Multiplico cada dígito random por las constantes correspondientes
    for (let i = 0; i < 7; i++) {
        sum += randomDigits[i] * constants[i];
    }
    // Calculo el resto
    const remainder = sum % 10;
    // Calculo el dígito verificador
    const checkDigit = (10 - remainder) % 10;
    // Uno los dígitos con el verificador en un string
    const id = `${randomDigits.join('')}${checkDigit}`;
    return id;
}

module.exports = generateValidID;