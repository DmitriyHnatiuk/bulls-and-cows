import { createDigitValidator } from '../core/createDigitValidator.js';
import type { BaseType, LengthType } from '../type/type.js';
import { invalidInputMsg } from './helpers.js';

export const enterValidator = (length: LengthType, base: BaseType) => (event: Event) => {
	const input = event.target as HTMLInputElement;
	input.setCustomValidity('');
	const validator = createDigitValidator(base);
	const char = input.value.at(-1);
	if (input.value.length > length) {
		invalidInputMsg(input, `Max length: ${length}`);
		input.value = input.value.slice(0, length);
		return;
	}
	if (char && !validator(char)) {
		invalidInputMsg(input, `Invalid digit "${char}" for base ${base}`);
		input.value = input.value.slice(0, -1);
		return;
	}
};
