import express from 'express';
import { getBulgarianEmployees, getAllEmployeesInTeam, getEmployeesWithSixMonthsInTheCompany } from '../controlers/employees.js';

const router = express.Router();

router.get('/bulgarian', getBulgarianEmployees);
router.get('/teams', getAllEmployeesInTeam)
router.get('/over-six-months', getEmployeesWithSixMonthsInTheCompany);

export default router;