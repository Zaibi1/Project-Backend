import express from 'express';
import { userSignUp, userLogin } from '../controller/userController.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { createPost, getAllPosts } from '../controller/post-controller.js';
import { authenticateToken } from '../controller/jwt-controller.js';

import upload from '../utils/upload.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogin);
router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.post('/create', authenticateToken, createPost);
router.post('/posts', authenticateToken, getAllPosts);

export default router;