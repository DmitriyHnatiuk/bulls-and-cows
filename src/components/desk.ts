import { createElement } from '../helpers/createElement.js';
import { renderBoard } from './board.js';
import { renderFooter } from './footer.js';
import { renderHeader } from './header.js';
import { renderSettings } from './settings.js';

const LENGTH_DATA = [{ value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 }];

const BASE_DATA = [
	{ title: 'bin', value: 2 },
	{ title: 'oct', value: 8 },
	{ title: 'dec', value: 10 },
	{ title: 'hex', value: 16 },
];

export const renderDesk = () => {
	const container = createElement({ tag: 'div', className: 'board__container' });
	const title = renderHeader();
	const settings = renderSettings(LENGTH_DATA, BASE_DATA);
	const score = renderBoard();
	const footer = renderFooter();

	container.append(title, settings, score, footer);
	document.body.append(container);
};
