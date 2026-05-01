import postgres from '../../../database/connections/postgres.js';

export const UpdateAddressController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, district, city } = req.body;

        if (!name || !district || !city) {
            return res.status(400).json({ error: 'Name, district and city are required' });
        }
        const query = `
            UPDATE adresses 
            SET name = $1, district = $2, city = $3 
            WHERE id = $4 
            RETURNING *
        `;
        
        const result = await postgres.query(query, [name, district, city, id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Address not found' });
        }

        return res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}