export default class {
	constructor() {
		this.css = {
			transition: this.prefixed('transition'),
			transform: this.prefixed('transform'),
			animation: this.prefixed('animation')
		};

		this.events = {
			transitionEnd: 'webkitTransitionEnd mozTransitionEnd oTransitionEnd otransitionend MSTransitionEnd transitionend',
			animationEnd: 'webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend MSAnimationEnd animationend',
			animationStart: 'webkitAnimationStart mozAnimationStart oAnimationStart oanimationstart MSAnimationStart animationstart',
			animationIteration: 'webkitAnimationIteration mozAnimationIteration oAnimationIteration oanimationiteration MSAnimationIteration animationiteration'
		};
		return this;
	}
	prefixed(p) {
		let d = (document.body || document.documentElement).style;
		return (d = (p + ' ' + 'Moz webkit Webkit Khtml O ms'.replace(/(\w+)/g, '$1' + (p[0].toUpperCase() + p.slice(1)))).split(' ').filter(function (e) {
			return void 0 !== d[e];
		})).length ? d[0] : !1;
	}
}
