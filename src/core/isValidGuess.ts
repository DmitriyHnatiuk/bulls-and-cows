import { ALL_DIGITS } from '../helpers/helpers.js';
import type { BaseType, LengthType, ValidationResultType } from '../type/type.js';

const getAlphabet = (base: BaseType): string => ALL_DIGITS.slice(0, base);

export const isValidGuess = (guess: string, length: LengthType, base: BaseType): ValidationResultType => {
	if (guess.length !== length) {
		return { valid: false, error: `Length must be ${length}` };
	}

	const alphabetSet = new Set(getAlphabet(base));
	const invalidChar = [...guess].find((char) => !alphabetSet.has(char));

	if (invalidChar) {
		return { valid: false, error: `Invalid digit "${invalidChar}" for base ${base}` };
	}

	if (new Set(guess).size !== length) {
		return { valid: false, error: 'Digits must be unique' };
	}

	return { valid: true };
};
