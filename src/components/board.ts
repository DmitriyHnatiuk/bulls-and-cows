import { createElement } from '../helpers/createElement.js';

export const addToBoard = (content: string) => {
	const board = document.getElementById('board-list');
	const li = createElement({ tag: 'li', className: 'list-item', textContent: content });
	board?.prepend(li);
};

export const renderContentBoard = (title: string = 'Leaderboard') => {
	const container = createElement({ tag: 'div' });
	const _title = createElement({ tag: 'h2', className: 'board--title', textContent: title });
	const list = createElement({ tag: 'ul', className: 'board-list', id: 'board-list' });
	container.append(_title, list);
	return container;
};

export const renderBoard = (): HTMLDivElement => {
	const container = createElement({ tag: 'div', className: 'board-info', id: 'board-info' });
	const content = renderContentBoard();
	container.append(content);
	return container;
};

export const changeBoard = (title?: string) => {
	const info = document.getElementById('board-info');
	if (!info) return;
	info.children[0]?.remove();
	info.appendChild(renderContentBoard(title));
};
