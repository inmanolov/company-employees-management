import express from 'express';
import { getBulgarianEmployees } from '../controlers/employees.js';

const router = express.Router();

router.get('/bulgarian', getBulgarianEmployees);

export default router;