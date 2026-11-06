import { createDigitValidator } from '../core/createDigitValidator.js';

describe('createDigitValidator', () => {
	it('is return function', () => {
		const isValid = createDigitValidator(10);
		expect(typeof isValid).toBe('function');
	});

	it('base 10: allows 0-9', () => {
		const isValid = createDigitValidator(10);
		expect(isValid('0')).toBe(true);
		expect(isValid('5')).toBe(true);
		expect(isValid('9')).toBe(true);
	});

	it('base 10: rejects a-f', () => {
		const isValid = createDigitValidator(10);
		expect(isValid('a')).toBe(false);
		expect(isValid('f')).toBe(false);
	});

	it('base 16: allows 0-9, a-f', () => {
		const isValid = createDigitValidator(16);
		expect(isValid('0')).toBe(true);
		expect(isValid('9')).toBe(true);
		expect(isValid('a')).toBe(true);
		expect(isValid('f')).toBe(true);
	});

	it('base 16: allows A-F (uppercase)', () => {
		const isValid = createDigitValidator(16);
		expect(isValid('A')).toBe(true);
		expect(isValid('F')).toBe(true);
	});

	it('base 16: rejects g-z', () => {
		const isValid = createDigitValidator(16);
		expect(isValid('g')).toBe(false);
		expect(isValid('z')).toBe(false);
	});

	it('base 2: only 0,1', () => {
		const isValid = createDigitValidator(2);
		expect(isValid('0')).toBe(true);
		expect(isValid('1')).toBe(true);
		expect(isValid('2')).toBe(false);
	});

	it('base 8: 0-7', () => {
		const isValid = createDigitValidator(8);
		expect(isValid('7')).toBe(true);
		expect(isValid('8')).toBe(false);
	});

	it('rejects empty string and multi-char', () => {
		const isValid = createDigitValidator(10);
		expect(isValid('')).toBe(false);
		expect(isValid('12')).toBe(false);
	});
});
