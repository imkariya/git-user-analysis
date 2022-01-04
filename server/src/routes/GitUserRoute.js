import express from 'express';
import validate from '../middlewares/validation/Validate';
import fetchValidationRules from '../middlewares/validation/GitUserControllerValidator';
import { userDetail, repoLists } from '../controllers/GitUserController';

const router = express.Router();

router.get('/user-detail/:user', fetchValidationRules(), validate, userDetail);
router.get('/repo-list/:user', fetchValidationRules(), validate, repoLists);

export default router;
