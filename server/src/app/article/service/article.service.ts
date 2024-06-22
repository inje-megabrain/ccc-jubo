import { inject, injectable, } from 'inversify';
import { ArticleDetailResponse, } from '../dto/article-detail.response';
import { ArticleRepository, } from '../repository/article-repository';
import { IocToken, } from '../../../shared/core/ioc-token';

@injectable()
export class ArticleService {
	constructor(
		@inject(IocToken.ArticleRepository) private readonly articleRepository: ArticleRepository
	) {}

	async getRecentArticle(): Promise<ArticleDetailResponse> {
		// TODO: 비즈니스 로직

		return new ArticleDetailResponse({
			title: '6월 22일 CCC 주보',
			praises: [
				{
					title: '주 이름 찬양',
					subTitle:'Blessed be Your Name',
					startAt: new Date(2024, 1, 1, 10, 0),
				},
				{
					title: '내 진정 사모하는',
					subTitle:'I Have Found a Friend in Jesus',
					startAt: new Date(2024, 1, 1, 11, 30),
				},
				{
					title: '나를 향한 주의 사랑',
					subTitle:'I Could Sing of Your Love Forever',
					startAt: new Date(2024, 1, 1, 12, 0),
				},
				{
					title:'10,000가지 이유',
					subTitle:'10,000 Reasons',
					startAt: new Date(2024, 1, 1, 13, 0),
				},
			],
			prayerName: '신종웅',
			prayerMessage: '마음을 같이하여\n오로지 기도에 힘쓰더라',
			announcements: [
				{
					title: '환영합니다!',
					content: '볼렛교회 청년부 예배에 오신 여러분을 진심으로 환영합니다. 오늘도 함께 예배드리며 하나님의 은혜를 나누는 시간이 되기를 바랍니다.',
				},
				{
					title: '청년부 소그룹 모임',
					content: '매주 금요일 저녁 7시에 청년부 소그룹 모임이 있습니다. 다양한 주제로 말씀을 나누고, 함께 기도하며 교제하는 시간입니다. 참여를 원하시는 분은 예배 후 로비에서 신청해 주세요.',
				},
				{
					title: '봉사 활동',
					content: '다음 주 토요일 오전 10시에 지역 사회 봉사 활동이 있습니다. 함께 참여하여 하나님의 사랑을 전하는 시간이 되기를 바랍니다. 자세한 사항은 담당자 김민수 형제에게 문의해 주세요.',
				},
				{
					title: '청년부 수련회',
					content: '다음 달 15일부터 17일까지 청년부 수련회가 예정되어 있습니다. 이번 수련회는 영적 성장과 친밀한 교제를 위한 특별한 시간이 될 것입니다. 참가 신청은 오늘까지 받습니다.',
				},
				{
					title: '예배 후 다과',
					content: '예배 후 로비에서 다과가 준비되어 있습니다. 새로운 친구들과의 교제를 나누는 시간으로, 모두 함께 참여해 주세요.',
				},
				{
					title: '기도 제목 나눔',
					content: '기도가 필요하신 분들은 예배 후 기도 제목을 나눠 주세요. 함께 기도하며 주님의 은혜를 경험하는 시간이 되기를 바랍니다.',
				},
			],
			startAt: new Date(2024, 5,22, 10),
		});
	}
}
