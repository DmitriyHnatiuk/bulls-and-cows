import type { BaseType, LengthType, ValidationResultType } from '../type/type.js';

export const isValidGuess = (guess: string, length: LengthType, base: BaseType): ValidationResultType => {
	throw new Error('Not implemented', { cause: { guess, length, base } });
};
