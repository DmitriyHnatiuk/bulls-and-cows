import { createElement } from '../helpers/createElement.js';

export const renderGuess = () => {
	const form = document.getElementById('settings-form');
	if (form) form.style.display = 'none';
	const settingsContainer = document.getElementById('settings__container');
	const container = createElement({ tag: 'div', className: 'settings__form', id: 'guess-container' });
	const title = createElement({ tag: 'h2', className: 'settings--title', textContent: 'guess' });
	const inputWrapper = createElement({ tag: 'div', id: 'field-container' });
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
		id: 'check-button',
	});
	inputWrapper.append(input, button);

	const newGame = createElement({
		tag: 'button',
		className: 'settings--button',
		textContent: 'New Game',
		id: 'reset',
	});

	container.append(title, inputWrapper, newGame);
	settingsContainer?.appendChild(container);
};

export const renderWinMessage = (attempts: number) => {
	const container = document.getElementById('guess-container');
	container?.querySelector('.settings--title')?.remove();
	const inputField = document.getElementById('field-container') as HTMLDivElement;
	inputField?.replaceChildren();
	const title = createElement({ tag: 'h2', className: 'win-title', textContent: `You are Win!!!` });
	const description = createElement({ tag: 'p', className: 'win-description', textContent: `Score: ${attempts}` });
	inputField.append(title, description);
};
