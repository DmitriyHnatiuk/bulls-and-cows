import { createElement } from '../helpers/createElement.js';

type RenderFieldsetType = {
	legend: string;
	name: string;
	inputs: InputTypes;
};

type InputTypes = Array<{ title?: string; value: number }>;

const renderFieldset = ({ legend, name, inputs }: RenderFieldsetType): HTMLFieldSetElement => {
	const fieldset = createElement({ tag: 'fieldset', id: `${name}-container` });
	const legendSecret = createElement({ tag: 'legend', className: 'settings--title', textContent: legend });
	const radioButtons = inputs.map(({ value, title }) => {
		const input = createElement({
			tag: 'input',
			type: 'radio',
			id: `${name}-${value}`,
			name,
			value: String(value),
			className: 'settings--input',
		});
		const label = createElement({
			tag: 'label',
			htmlFor: `${name}-${value}`,
			textContent: title ? `${title}(${value})` : String(value),
			className: 'settings--label',
		});
		return [input, label];
	});

	fieldset.append(legendSecret, ...radioButtons.flat());
	return fieldset;
};

export const renderSettings = (lengthData: InputTypes, baseData: InputTypes): HTMLDivElement => {
	const container = createElement({ tag: 'div', id: 'settings__container' });
	const settingsForm = createElement({ tag: 'form', className: 'settings__form', action: '#', id: 'settings-form' });
	const secret = renderFieldset({ legend: 'secret number length', name: 'length', inputs: lengthData });
	const base = renderFieldset({ legend: 'number base', name: 'base', inputs: baseData });
	const count = createElement({ tag: 'p', id: 'max-count', className: 'settings--count', textContent: ' ' });
	const startButton = createElement({
		tag: 'button',
		type: 'submit',
		className: 'settings--button',
		textContent: 'Start game',
	});

	settingsForm.append(secret, base, count, startButton);
	container.appendChild(settingsForm);
	return container;
};
