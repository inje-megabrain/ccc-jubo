import { injectable, } from 'inversify';
import { Article, } from '../domain/article';

@injectable()
export class ArticleRepository {
	async getRecentArticle(): Promise<Article> {
		return new Article();
	}
}
