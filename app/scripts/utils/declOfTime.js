import declOfNum from './declOfNum';
import {pickFirstKey, pickFirst} from './pickFirst';

const cases = {
	days: ['день', 'дня', 'дней'],
	hours: ['час', 'часа', 'часов'],
	minutes: ['минута', 'минуты', 'минут'],
	seconds: ['секунда', 'секунды', 'секунд']
};

const declOfTime = obj => {
	return declOfNum(pickFirst(obj), cases[pickFirstKey(obj)]);
};

export default declOfTime;
