import { addToBoard } from '../components/board.js';
import { renderWinMessage } from '../components/guess.js';
import { evaluateGuess } from '../core/evaluateGuess.js';
import { isValidGuess } from '../core/isValidGuess.js';
import type { BaseType, LengthType } from '../type/type.js';
import { invalidInputMsg } from './helpers.js';
import { saveRecord } from './leaderboardStorage.js';
import type { TimerAPI } from './timer.js';

export const checkGuess = (secret: string, length: LengthType, base: BaseType, timer: TimerAPI) => {
	const data: { count: number; attempts: Set<string> } = { count: 1, attempts: new Set() };
	return () => {
		const input = document.getElementById('guess-input') as HTMLInputElement;
		if (!input) return;
		const isValid = isValidGuess(input?.value, length, base);
		if (isValid.valid) {
			if (data.attempts.has(input.value)) {
				invalidInputMsg(input, 'The option has already been used');
				return;
			}
			const result = evaluateGuess(secret, input.value);
			if (result.bulls === length) {
				timer.stop();
				renderWinMessage(data.count);
				saveRecord(base, length, data.count, timer.getTime());
				return;
			}
			addToBoard(`${data.count}:  ${input.value} - ${JSON.stringify(result)}`);
			data.count += 1;
			data.attempts.add(input.value);
		} else {
			invalidInputMsg(input, isValid.error || 'Not correct input');
		}
	};
};
