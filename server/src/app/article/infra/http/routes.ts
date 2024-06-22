import express from 'express';
import { iocContainer, } from '../../../../shared/core/ioc-container';
import { ArticleController, } from '../../controller/article.controller';
import { IocToken, } from '../../../../shared/core/ioc-token';

const articleRouter = express.Router();
const articleController = iocContainer.get<ArticleController>(IocToken.ArticleController);

articleRouter.get('/recent', articleController.getRecentArticle);

export { articleRouter, };
