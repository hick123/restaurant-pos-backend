import express from 'express';
import itemController from '../../controllers/item.controller';
import catchErrors from '../../utils/helper';
import { upload } from '../../utils/upload';
const multer = require('multer');

const router = express.Router();

router.get('/item', catchErrors(itemController.list));
router.get('/item/:id', catchErrors(itemController.getById));
router.post('/item', upload.single('file'), catchErrors(itemController.create));
router.delete('/item/:id', catchErrors(itemController.delete));

export default router;
