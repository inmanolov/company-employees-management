import express from 'express';

import { getCompanies, updateCompany } from '../controlers/companies.js';

const router = express.Router();

router.get('/', getCompanies);
router.post('/:id', updateCompany);

export default router;
