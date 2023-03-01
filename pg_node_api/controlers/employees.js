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
};

export const getAllEmployeesInTeam = async (req, res) => {
    try {
        const employeesInTeam = await knex('employees')
        .join('teams', 'teams.id', 'employees.team_id')
        .select('teams.id', 'teams.name', 'employees.username', 'employees.first_name', 'employees.last_name')
        .orderBy('teams.id')

        res.status(200).json(employeesInTeam);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getEmployeesWithSixMonthsInTheCompany = async (req, res) => {
    try {
        const employees = await knex('employees')
        .join('teams', 'teams.id', 'employees.team_id')
        .join('companies', 'companies.id', 'teams.company_id')
        .select('startDate as Start Date', 'first_name as First Name', 'last_name as Last Name', 'employees.position as Position', 'companies.name as Company', 'teams.department as Department')
        .where('employees.startDate', '>', '2022-01-01')

        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}