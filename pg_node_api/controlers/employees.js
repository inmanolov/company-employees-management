import knex from '../data/db.js';

export const getBulgarianEmployees = async (req, res) => {
    try {
        const employees = await knex('employees')
        .join('teams', 'teams.id', 'employees.team_id')
        .join('companies', 'companies.id', 'teams.company_id')
        .select('employees.username', 'employees.first_name', 'employees.last_name', 'employees.position', 'teams.department', 'teams.description', 'companies.country', 'startDate')
        .where('companies.country', 'Bulgaria' )
        .where( 'employees.startDate', '<', '2013-08-02' )
        .orderBy('employees.id', 'desc')

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
        .select('employees.id as employeeId' ,'startDate as Start Date', 'first_name as First Name', 'last_name as Last Name', 'employees.position as Position', 'companies.name as Company', 'teams.department as Department')
        .where('employees.startDate', '<', '2022-09-01')
        .orderBy('employees.id', 'desc')

        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getAllEmployees = async(req, res) => {
    try {
        const employees = await knex('employees')
        .join('teams', 'teams.id', 'employees.team_id')
        .join('companies', 'companies.id', 'teams.company_id')
        .select('employees.id as employeeId', 'employees.team_id', 'employees.first_name', 'employees.last_name', 'employees.username', 'employees.email', 'employees.position', 'employees.salary', 'employees.startDate', 'employees.endDate', 'teams.id', 'teams.department', 'companies.name')
        .orderBy('employees.id', 'desc')

        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const deleteEmployee = async(req, res) => {
    try {
        const { id } = req.params;

        await knex('employees')
            .where('id', id)
            .del()
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { id, email, endDate, first_name, last_name, position, salary, startDate, team_id, username } = req.body;

        await knex('employees')
            .where('id', id)
            .update({ email: email, endDate: endDate, first_name: first_name, last_name: last_name, position: position, salary: salary, startDate: startDate, team_id: team_id, username: username })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createEmployee = async(req, res) => {
    try {
        const { id, email, endDate, first_name, last_name, position, salary, startDate, team_id, username } = req.body;

        await knex('employees')
            .insert({
                email: email, 
                endDate: '', 
                first_name: first_name, 
                last_name: last_name, 
                position: position, 
                salary: salary, 
                startDate: startDate, 
                team_id: team_id, 
                username: username
            })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}