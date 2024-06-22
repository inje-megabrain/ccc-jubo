import { Container, } from 'inversify';
import { ArticleController, } from '../../app/article/controller/article.controller';
import { ArticleService, } from '../../app/article/service/article.service';
import { IocToken, } from './ioc-token';
import { ArticleRepository, } from '../../app/article/repository/article-repository';

class IocContainer extends Container {
	constructor() {
		super({ defaultScope: 'Singleton', });
		// 서비스 등록
		this.bind<ArticleController>(IocToken.ArticleController).to(ArticleController);
		this.bind<ArticleService>(IocToken.ArticleService).to(ArticleService);
		this.bind<ArticleRepository>(IocToken.ArticleRepository).to(ArticleRepository);
	}
}

const iocContainer = new IocContainer();
export { iocContainer, };
