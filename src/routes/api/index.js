import express from 'express';
import itemRouter from './item.route';
import categoryRouter from './category.route';

const router = express.Router();
const prefix = '/api/v1';

router.use(prefix, itemRouter);
router.use(prefix, categoryRouter);

export default router;
