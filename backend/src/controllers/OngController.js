// Conexão com Banco de Dados
const connection = require("../database/connection");

const generateUniqueId = require('../utils/generateUniqueId'); 

module.exports = {
    async list(req, res) {
        const ongs = await connection('ongs').select('*');
    
        return res.json(ongs);
    },

    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = generateUniqueId(); // o código para gerar id

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf, 
        });

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        if(ong_id !== id) return res.status(401).json({ error: 'Operation not permitted.' });

        await connection('ongs').where('id', id).delete();

        return res.status(204).send();
    },
}