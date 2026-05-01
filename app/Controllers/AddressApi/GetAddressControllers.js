import postgres from "../../../database/connections/postgres.js";

export const GetAddressController = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await postgres.query('SELECT * FROM adresses WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Adresses not found' });
        }
        return res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }

};