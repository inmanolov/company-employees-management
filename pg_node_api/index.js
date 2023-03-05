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

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})
