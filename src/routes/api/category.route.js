import express from 'express';
import categoryController from '../../controllers/category.controller';
import catchErrors from '../../utils/helper';

const router = express.Router();

router.get('/category', catchErrors(categoryController.list));

router.post('/category', catchErrors(categoryController.create));

export default router;
