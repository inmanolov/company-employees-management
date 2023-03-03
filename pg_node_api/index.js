import express from 'express';
import dotenv from 'dotenv';
import knex from './data/db.js';
import cors from 'cors';
import employeesRoutes from './routes/employees.js';
import teamsRoutes from './routes/teams.js';
import companiesRoutes from './routes/companies.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5010;

app.use('/employees', employeesRoutes);
app.use('/teams', teamsRoutes);
app.use('/companies', companiesRoutes);

app.get('/teams', (req, res) => {
    knex.select().from('teams').then((teams) => {
        res.send(teams);
    })
});

// app.get('/bulgarian-teams', async (req, res) => {
//     try {
//         const employees = await knex('employees')
//             .join('teams', 'teams.id', 'employees.team_id')
//             .join('companies', 'companies.id', 'teams.company_id')
//             .select('employees.username', 'employees.first_name', 'employees.last_name', 'employees.position', 'teams.department', 'teams.description', 'companies.country')
//             .where('companies.country', 'Bulgaria' )

//         res.status(200).json(employees);
//     } catch (error) { 
//         res.status(404).json({ message: error.message });
//     }
// })

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})
