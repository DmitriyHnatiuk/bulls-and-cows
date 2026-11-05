import type { EvaluateType } from '../type/type.js';

export const evaluateGuess = (secret: string, guess: string): EvaluateType => {
	throw new Error('Not implemented', { cause: { secret, guess } });
};
