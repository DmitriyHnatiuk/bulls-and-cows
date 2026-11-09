import { createElement } from '../helpers/createElement.js';
import { getAllRecords } from '../helpers/leaderboardStorage.js';

export const addToBoard = (content: string, list?: HTMLUListElement) => {
	const board = list || document.getElementById('board-list');
	const li = createElement({ tag: 'li', className: 'list-item', textContent: content });
	board?.prepend(li);
};

export const renderContentBoard = (title: string = 'Leaderboard') => {
	const container = createElement({ tag: 'div' });
	const _title = createElement({ tag: 'h2', className: 'board--title', textContent: title });
	const list = createElement({ tag: 'ul', className: 'board-list', id: 'board-list' });
	if (title === 'Leaderboard') {
		const scores = getAllRecords();
		scores.forEach((score, index) =>
			addToBoard(
				`${scores.length - index}. ${score.base}B / ${score.length}L = score: ${score.attempts} | time: ${score.timeSec}`,
				list
			)
		);
	}
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
	const list = document.getElementById('board-list');
	if (!info) return;
	if (list) list?.replaceChildren();
	info.children[0]?.remove();
	info.appendChild(renderContentBoard(title));
};
