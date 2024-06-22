import dayjs from 'dayjs';

interface PraiseCreation {
	title: string;
	subTitle: string;
	startAt: Date;
}

interface PraiseResponse {
	title: string;
	subTitle: string;
	startAt: string;
}

interface Announcement {
	title: string;
	content: string;
}

export class ArticleDetailResponse {
	private title: string;
	private praises: Array<PraiseResponse>;
	private prayerName: string;
	private prayerMessage: string;
	private announcements: Array<Announcement>;
	private startAt: string;

	constructor({ title, praises, prayerName, prayerMessage, announcements, startAt, }: {
			title: string;
			praises: Array<PraiseCreation>;
			prayerName: string;
			prayerMessage: string;
			announcements: Array<Announcement>;
			startAt: Date;
		}) {
		this.title = title;
		this.praises = praises.map((praise): PraiseResponse => ({
			title: praise.title,
			subTitle: praise.subTitle,
			startAt: dayjs(praise.startAt).format('HH:mm'),
		}));
		this.prayerName = prayerName;
		this.prayerMessage = prayerMessage;
		this.announcements = announcements;
		this.startAt = dayjs(startAt).format('YYYY-MM-DD HH:mm');
	}
}
