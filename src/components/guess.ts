import { createElement } from '../helpers/createElement.js';

export const renderGuess = () => {
	const form = document.getElementById('settings-form');
	if (form) form.style.display = 'none';
	const settingsContainer = document.getElementById('settings__container');
	const container = createElement({ tag: 'div', className: 'settings__form' });
	const title = createElement({ tag: 'h2', className: 'settings--title', textContent: 'guess' });
	const inputWrapper = createElement({ tag: 'div' });
	const input = createElement({
		tag: 'input',
		type: 'text',
		name: 'guess',
		className: 'guess--input',
		id: 'guess-input',
	});
	const button = createElement({
		tag: 'button',
		className: 'settings--button',
		textContent: 'Check',
		id: 'guess-button',
	});
	inputWrapper.append(input, button);

	const newGame = createElement({
		tag: 'button',
		className: 'settings--button',
		textContent: 'New Game',
		id: 'new-game',
	});

	container.append(title, inputWrapper, newGame);
	settingsContainer?.appendChild(container);
};
