import { changeBoard } from '../components/board.js';
import { renderGuess } from '../components/guess.js';
import { countPossibleSecrets } from '../core/countPossibleSecrets.js';
import { generateSecret } from '../core/generateSecret.js';
import type { BaseType, LengthType } from '../type/type.js';
import { checkGuess } from './checkGuess.js';
import { enterValidator } from './enterValidator.js';
import { createTimer, formatTime, type TimerAPI } from './timer.js';

const switchInput = (childNodes: NodeListOf<ChildNode>) => {
	[...childNodes].forEach((node) => {
		if (node.nodeName === 'INPUT') {
			const input = node as HTMLInputElement;
			if (input.value !== '2') {
				input.disabled = !input.disabled;
			}
		}
	});
};

const updateMaxCount = () => {
	const lengthValue = document.getElementById('length-value');
	const baseValue = document.getElementById('base-value');
	if (!lengthValue || !baseValue) return;
	const length = Number(lengthValue.textContent) as LengthType;
	const base = Number(baseValue.textContent) as BaseType;
	if (length && base) {
		const maxCount = document.getElementById('max-count') as HTMLParagraphElement;
		maxCount.textContent = `Max possible secrets: ${countPossibleSecrets(length, base)}`;
	}
};

export const onBaseChange = (event: Event) => {
	const lengthContainer = document.getElementById('length-container') as HTMLFieldSetElement;
	const baseValue = document.getElementById('base-value')!;
	const lengthValue = document.getElementById('length-value')!;
	const target = event.target as HTMLInputElement;
	if (target && target.checked && lengthContainer) {
		baseValue.textContent = target.value;
		if (target.value === '2') {
			lengthContainer?.classList.add('disable');
			switchInput(lengthContainer.childNodes);
			if (baseValue.textContent) {
				const radio = lengthContainer.querySelector<HTMLInputElement>('input[value="2"]');
				if (!radio) return;
				radio.checked = true;
				lengthValue.textContent = radio.value;
			}
		} else if (lengthContainer?.classList.contains('disable')) {
			switchInput(lengthContainer.childNodes);
			lengthContainer.classList.remove('disable');
		}
		updateMaxCount();
	}
};

export const onLengthChange = (event: Event) => {
	const lengthValue = document.getElementById('length-value')!;

	const target = event.target as HTMLInputElement;
	if (target && target.checked) {
		lengthValue.textContent = target.value;
		updateMaxCount();
	}
};

const startTimer = () => {
	const timeInput = document.getElementById('time') as HTMLSpanElement;
	const timer = createTimer({
		onTick: (seconds) => {
			timeInput.textContent = formatTime(seconds);
		},
	});
	return { ...timer };
};

export const resetSettings = (timer: TimerAPI) => () => {
	const form = document.getElementById('settings-form') as HTMLElement;
	if (form) form.style.display = 'flex';
	changeBoard();
	const container = document.getElementById('guess-container');
	if (container) container.remove();
	timer.reset();
};

export const onSettingsSubmit = (event: Event) => {
	event.preventDefault();

	const lengthValue = document.getElementById('length-value')!;
	const baseValue = document.getElementById('base-value');

	if (!lengthValue || !lengthValue.textContent || !baseValue || !baseValue.textContent) return;
	const length = Number(lengthValue.textContent) as LengthType;
	const base = Number(baseValue.textContent) as BaseType;

	const secret = generateSecret(length, base);
	const timer = startTimer();
	timer.start();

	renderGuess();
	changeBoard('History');
	const resetButton = document.getElementById('reset');
	const onReset = resetSettings(timer);
	resetButton?.addEventListener('click', onReset);

	const check = document.getElementById('check-button');
	const inputField = document.getElementById('guess-input');

	const onCheck = checkGuess(secret, length, base, timer);

	const onEnterGuess = enterValidator(length, base);

	inputField?.addEventListener('input', onEnterGuess);
	check?.addEventListener('click', onCheck);
};
