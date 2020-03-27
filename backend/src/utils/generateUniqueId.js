const crypto = require("crypto"); // Módulo de criptográfia que possui um módulo que vamos usar para criar o id

module.exports = () => {
    return crypto.randomBytes(4).toString('HEX'); // Criando 4 bytes no id e converter para hexadecimal
}