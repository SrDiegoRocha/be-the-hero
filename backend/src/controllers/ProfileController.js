// Conexão com Banco de Dados
const connection = require("../database/connection");

module.exports = {
    // Listar dados específicos de uma única ong
    async list(req, res) {
        const ong_id = req.headers.authorization;

        const incidents = await connection('incidents').where('ong_id', ong_id).select('*');

        return res.json(incidents);
    },
}