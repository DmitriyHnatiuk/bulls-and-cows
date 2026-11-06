import { ALL_DIGITS } from '../helpers/helpers.js';
import type { BaseType } from '../type/type.js';

export const createDigitValidator = (base: BaseType): ((char: string) => boolean) => {
	const allowed = new Set(ALL_DIGITS.slice(0, base).toLowerCase().split(''));

	return (char: string): boolean => {
		if (char.length !== 1) return false;
		return allowed.has(char.toLowerCase());
	};
};
