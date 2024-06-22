import express from 'express';
import { articleRouter, } from '../../../../app/article/infra/http/routes';
import { userRouter, } from '../../../../app/user/infra/http/routes';

const v1Router = express.Router();
v1Router.use('/articles', articleRouter);
v1Router.use('/users', userRouter);

export { v1Router, };
