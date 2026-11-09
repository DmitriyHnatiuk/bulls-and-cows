import { createElement } from '../helpers/createElement.js';

export const renderBoard = (title: string = 'Leaderboard'): HTMLDivElement => {
	const container = createElement({ tag: 'div', className: 'board_container' });
	const _title = createElement({ tag: 'h2', className: 'board--title', textContent: title });
	const list = createElement({ tag: 'ul', className: 'board-list', id: 'board-list' });
	container.append(_title, list);
	return container;
};
