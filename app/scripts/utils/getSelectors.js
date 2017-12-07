import {curry, mapObjIndexed, merge, pipe} from 'ramda';

const mergeSelectors =
	curry((base, separator, name) => `${base}${separator}${name}`);

const getSelectors = obj => ({
	...obj,
	dom: pipe(
		mapObjIndexed(mergeSelectors(`.js-${obj.block}`, '-')),
		merge({$el: `.js-${obj.block}`})
	)(obj.dom),
	classes: mapObjIndexed(mergeSelectors(obj.block, '_'), obj.classes)
});

export default getSelectors;
