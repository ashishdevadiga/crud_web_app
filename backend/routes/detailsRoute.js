import express from 'express';
import { createUserDetails, getUserDetails, getUserDetailsByKey } from '../controllers/detailsController.js';

const router = express.Router();

router.route('/').get(getUserDetails);
router.route('/').get(getUserDetails).put(createUserDetails);
router.route('/:alottedTime').get(getUserDetailsByKey);

export default router;