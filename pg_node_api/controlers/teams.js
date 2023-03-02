import knex from '../data/db.js';

const round = (sum) => {
    return Math.floor(sum);
};

export const getAverageSalaryByTeamsDepartment = async (req, res) => {
    try {
        const teams = await knex('employees')
        .join('teams', 'teams.id', 'employees.team_id')
        .select('teams.id as id', 'teams.name as Team Name', 'teams.department as Department')
        .count('employees.team_id as Employees')
        .avg('employees.salary as Average Salary')
        .groupBy('teams.id')
        .orderBy('teams.id')

        res.status(200).json(teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};