import { evaluateGuess } from '../core/evaluateGuess.js';

describe('evaluateGuess', () => {
	it('all cows', () => {
		expect(evaluateGuess('1234', '4321')).toEqual({ bulls: 0, cows: 4 });
	});

	it('all bulls', () => {
		expect(evaluateGuess('1234', '1234')).toEqual({ bulls: 4, cows: 0 });
	});

	it('guess duplicate matches secret once', () => {
		expect(evaluateGuess('1234', '1222')).toEqual({ bulls: 2, cows: 0 });
	});

	it('works with hex digits', () => {
		expect(evaluateGuess('a1b2', 'a2b1')).toEqual({ bulls: 2, cows: 2 });
	});

	it('works with length 2', () => {
		expect(evaluateGuess('12', '21')).toEqual({ bulls: 0, cows: 2 });
	});
});
