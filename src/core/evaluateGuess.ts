import type { EvaluateType } from '../type/type.js';

type AccType = {
	bulls: number;
	secretRest: string[];
	guessRest: string[];
};

export const evaluateGuess = (secret: string, guess: string): EvaluateType => {
	const _secret = secret.toLowerCase();
	const _guess = guess.toLowerCase();

	const { bulls, secretRest, guessRest } = [..._secret].reduce<AccType>(
		(acc, sChar, i) => {
			const gChar = _guess[i];
			if (!gChar) return acc;
			if (sChar === gChar) {
				return { ...acc, bulls: acc.bulls + 1 };
			}
			return {
				...acc,
				secretRest: [...acc.secretRest, sChar],
				guessRest: [...acc.guessRest, gChar],
			};
		},
		{ bulls: 0, secretRest: [], guessRest: [] }
	);

	const secretSet = new Set(secretRest);
	const cows = guessRest.filter((g) => secretSet.has(g)).length;

	return { bulls, cows };
};
