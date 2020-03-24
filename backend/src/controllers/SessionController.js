// Conexão com Banco de Dados
const connection = require("../database/connection");

module.exports = {
    // Rota de login, ela verifica se a ong realmente existe para validar o login dela
    async create(req, res) {
        const { id } = req.body;

        const ong = await connection('ongs').where('id', id).select('name').first();

        if(!ong) return res.status(400).json({ error: 'No ONG found with this ID' });

        return res.json(ong);
    }
}