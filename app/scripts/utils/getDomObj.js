import $ from 'jquery';
import {
	mapObjIndexed, map, pipe,
	flip, always, call
} from 'ramda';

const find = el => {
	const $el = $(el);
	return (selector, key) =>
		key === '$el' ? $el : $el.find(selector);
};

// root - base jq node
// dom - object with selectors
const getDomObj = (dom, root, fn) => map(pipe(
	find,
	flip(mapObjIndexed)(dom),
	fn ? fn : pipe(always, call)
))([...root]);

export default getDomObj;
