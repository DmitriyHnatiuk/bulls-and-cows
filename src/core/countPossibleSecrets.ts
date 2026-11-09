import type { BaseType, LengthType } from '../type/type.js';

const cache = new Map<string, number>();

const calc = (length: number, base: number): number => {
	const key = `${length}:${base}`;
	if (cache.has(key)) return cache.get(key)!;

	if (length === 0) return 1;

	if (length === base) return factorial(base);

	const result = base * calc(length - 1, base - 1);
	cache.set(key, result);
	return result;
};

const factorial = (number: number, acc = 1): number => (number <= 1 ? acc : factorial(number - 1, acc * number));

export const countPossibleSecrets = (length: LengthType, base: BaseType): number => {
	if (length > base) throw new Error('Length cannot exceed base');
	if (base < 2) throw new Error('Base must be at least 2');
	return calc(length, base);
};
