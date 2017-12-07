import $ from 'jquery';

const fn = (dir, blocks = []) => {
	blocks.forEach(block => {
		$(() => new (require(`../../${dir}/${block}/${block}`).default)().render()); // eslint-disable-line
	});
};

export default fn;
