import { countPossibleSecrets } from '../core/countPossibleSecrets.js';

describe('countPossibleSecrets', () => {
	it('calculates P(4, 10) = 5040', () => {
		expect(countPossibleSecrets(4, 10)).toBe(5040);
	});

	it('uses recursive formula P(n,k) = n * P(n-1,k-1)', () => {
		expect(countPossibleSecrets(3, 10)).toBe(720);
		expect(countPossibleSecrets(2, 10)).toBe(90);
		expect(countPossibleSecrets(3, 10)).toBe(8 * countPossibleSecrets(2, 10));
	});

	it('memoizes: returns same value', () => {
		const r1 = countPossibleSecrets(4, 16);
		const r2 = countPossibleSecrets(4, 16);
		expect(r1).toBe(r2);
		expect(r1).toBe(43680);
	});
});
