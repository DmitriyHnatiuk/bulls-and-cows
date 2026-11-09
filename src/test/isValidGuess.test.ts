import { isValidGuess } from '../core/isValidGuess.js';

describe('isValidGuess', () => {
	const length = 4;
	const base = 10;

	it('returns valid for correct guess', () => {
		expect(isValidGuess('1234', length, base)).toEqual({ valid: true });
	});

	it('works for hex', () => {
		expect(isValidGuess('a1b2', 4, 16)).toEqual({ valid: true });
	});

	it('works for bin', () => {
		expect(isValidGuess('01', 2, 2)).toEqual({ valid: true });
	});

	it('fails if too short', () => {
		expect(isValidGuess('123', length, base)).toEqual({
			valid: false,
			error: 'Length must be 4',
		});
	});

	it('fails if too long', () => {
		expect(isValidGuess('12345', length, base)).toEqual({
			valid: false,
			error: 'Length must be 4',
		});
	});

	it('fails on invalid char for base 16 (g)', () => {
		expect(isValidGuess('12g4', 4, 16)).toEqual({
			valid: false,
			error: 'Invalid digit "g" for base 16',
		});
	});
	it('fails on all same digits', () => {
		expect(isValidGuess('1111', length, base)).toEqual({
			valid: false,
			error: 'Digits must be unique',
		});
	});
});
