import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import _ from 'underscore';

import renderScripts from './utils/renderScripts';

// Set defaults underscore template settings
_.templateSettings = {
	evaluate: /\{\{(.+?)\}\}/g,
	interpolate: /\{\{=(.+?)\}\}/g,
	escape: /\{\{-(.+?)\}\}/g
};

$(() => {
	svg4everybody();
});

// blocks
renderScripts('blocks', []);

