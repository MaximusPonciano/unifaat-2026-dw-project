import postgres from "../../../database/connections/postgres.js";

export const ListControllerAddress = async (req, res) => {    try {
        const result = await postgres.query('SELECT * FROM adresses');
        return res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }

};