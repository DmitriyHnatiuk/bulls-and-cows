import type { BaseType, LengthType, ValidationResultType } from '../type/type.js';
import { createDigitValidator } from './createDigitValidator.js';

export const isValidGuess = (guess: string, length: LengthType, base: BaseType): ValidationResultType => {
	if (guess.length !== length) {
		return { valid: false, error: `Length must be ${length}` };
	}
	const isValidDigit = createDigitValidator(base);

	const invalidChar = [...guess].find((char) => !isValidDigit(char));

	if (invalidChar) {
		return { valid: false, error: `Invalid digit "${invalidChar}" for base ${base}` };
	}

	if (new Set(guess.toLowerCase()).size !== length) {
		return { valid: false, error: 'Digits must be unique' };
	}

	return { valid: true };
};
