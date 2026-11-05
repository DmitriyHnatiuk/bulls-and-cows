import { ALL_DIGITS } from '../helpers/helpers.js';
import type { BaseType, LengthType } from '../type/type.js';

const pick = (pool: string, index: number): [string, string] => {
	const char = pool[index];
	if (!char) throw new Error('Invalid index');
	const newPool = pool.slice(0, index) + pool.slice(index + 1);
	return [char, newPool];
};

export const generateSecret = (length: LengthType, base: BaseType, random = Math.random): string => {
	const initialPool = ALL_DIGITS.slice(0, base);
	if (length > base) throw new Error('Wrong length');
	const { secret } = Array.from({ length }).reduce(
		({ pool, secret }) => {
			const index = Math.trunc(random() * pool.length);
			const [char, newPool] = pick(pool, index);
			return { pool: newPool, secret: secret + char };
		},
		{ pool: initialPool, secret: '' }
	);
	return secret;
};
