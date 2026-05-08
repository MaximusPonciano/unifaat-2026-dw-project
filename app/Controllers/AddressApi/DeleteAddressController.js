import postgres from '../../../database/connections/postgres.js';

export const DeleteAddressController= async (req, res) => {
    try {
        const { id } = req.params;
        const result = await postgres.query('DELETE FROM adresses WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(201).json({ message: 'foi caaralho' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
