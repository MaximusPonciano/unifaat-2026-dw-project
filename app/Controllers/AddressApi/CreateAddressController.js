import postgres from "../../../database/connections/postgres.js";

export const CreaterAddressController = async (req, res) => {
    try{
        const { name, district, city} = req.body;
        const errors = [];

        if(!name){
            errors.push("Rua obrigatório!");
        }
        if(!district){
            errors.push("Bairro obrigatório!");
        }
        if(!city){
            errors.push("Cidade obrigatório!")
        }
        if (errors.length > 0) {
            return res.status(400).json({ errors }); // Para a execução e avisa o usuário
        }
        const result = await postgres.query('INSERT INTO adresses (name, district, city) VALUES ($1, $2, $3) RETURNING *', [name, district, city]);
        return res.status(201).json(result.rows[0]);
    }catch(error){
        console.error(error);
        if (error.code === '23505') { // unique violation
            return res.status(409).json({ error: error.detail });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};
