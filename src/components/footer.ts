import { createElement } from '../helpers/createElement.js';

export const renderFooter = (): HTMLElement => {
	const container = createElement({ tag: 'div', className: 'footer' });

	const settings = createElement({ tag: 'div', className: 'settings' });

	const length = createElement({ tag: 'p', className: 'length', textContent: 'Length:' });
	const lengthValue = createElement({ tag: 'span', className: 'length-value', id: 'length-value', textContent: ' ' });
	const base = createElement({ tag: 'p', className: 'base', textContent: 'Base:' });
	const baseValue = createElement({ tag: 'span', className: 'base-value', id: 'base-value' });
	length.append(lengthValue, 'digits');
	base.appendChild(baseValue);

	settings.append(length, base);

	const time = createElement({ tag: 'span', className: 'time', id: 'time' });
	const timeTitle = createElement({ tag: 'p', className: 'time-title', textContent: 'Time:' });
	timeTitle.appendChild(time);

	container.append(settings, timeTitle);
	return container;
};
