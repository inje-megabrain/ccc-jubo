import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');
console.log(dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'));
import './shared/infra/http/app';
