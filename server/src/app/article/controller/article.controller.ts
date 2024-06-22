import express from 'express';
import { inject, injectable, } from 'inversify';
import { ArticleService, } from '../service/article.service';
import { IocToken, } from '../../../shared/core/ioc-token';

@injectable()
export class ArticleController {
	constructor(
		@inject(IocToken.ArticleService) private readonly articleService: ArticleService
	) {}

	getRecentArticle = (async (req: express.Request, res: express.Response)=> {
		const article = await this.articleService.getRecentArticle();
		res.json(article);
	});
}
