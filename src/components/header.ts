import { createElement } from '../helpers/createElement.js';

export const renderHeader = (): HTMLElement => {
	return createElement({ tag: 'h1', className: 'title', textContent: 'Bools and Cows' });
};
