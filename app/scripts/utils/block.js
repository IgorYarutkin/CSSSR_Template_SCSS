import $ from 'jquery';
import getDomObj from './getDomObj';
import getSelectors from './getSelectors';

export default class {
	constructor(obj, options) {

		obj.el = `.js-${obj.block}`;

		const defaults = getSelectors(obj);

		options = (options instanceof $) ? {el: options} : options;
		this.options = $.extend(true, {}, defaults, options);
		this.$el = (this.options.el instanceof $) ? this.options.el : $(this.options.el);
		this.elems = [];

		return this;
	}

	get() {
		const {dom} = this.options;
		this.elems = getDomObj(dom, this.$el);
		return this;
	}

	render() {
		if (this.$el.length) {
			this
				.get()
				.init();
		}
		return this;
	}
}
