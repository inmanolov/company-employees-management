import knex from '../data/db.js';

export const getBulgarianEmployees = async (req, res) => {
    try {
        const employees = await knex('employees')
        .join('teams', 'teams.id', 'employees.team_id')
        .join('companies', 'companies.id', 'teams.company_id')
        .select('employees.username', 'employees.first_name', 'employees.last_name', 'employees.position', 'teams.department', 'teams.description', 'companies.country', 'startDate')
        .where('companies.country', 'Bulgaria' )
        .where( 'employees.startDate', '<', '2019-08-02' )

        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}