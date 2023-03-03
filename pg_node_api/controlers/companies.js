import knex from '../data/db.js';

export const getCompanies = async(req, res) => {
    try {
        const companies = await knex('companies')
        .select()
        .orderBy('id')

        res.status(200).json(companies);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateCompany = async(req, res) => {
    try {
        const { id, name, country } = req.body;

        await knex('companies')
            .where('id', id)
            .update({ name: name, country: country });

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const addCompany = async(req, res) => {
    try {
        const { name, country } = req.body;

        await knex('companies')
            .insert({
                name: name,
                country: country,
            })

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteCompany = async(req, res) => {
    try {
        const { id } = req.params
        
        await knex('companies')
            .where('id', id)
            .del()
            
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}