import { generateSecret } from '../core/generateSecret.js';

describe('generateSecret', () => {
	const random = (num: number) => () => num;
	it('throws if length > base (5 > 2)', () => {
		expect(() => generateSecret(5, 2, random(0))).toThrow('Wrong length');
	});

	it('is return string', () => {
		expect(typeof generateSecret(4, 10, random(0))).toBe('string');
	});

	it('random zeros', () => {
		expect(generateSecret(3, 10, random(0))).toBe('012');
	});

	it('returns sequential digits when random returns 0', () => {
		expect(generateSecret(4, 10, random(0))).toBe('0123');
		expect(generateSecret(6, 16, random(0))).toBe('012345');
	});
});
