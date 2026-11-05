import type { BaseType, LengthType } from '../type/type.js';

export const generateSecret = (length: LengthType, base: BaseType, random = Math.random): string => {
	throw new Error('Not implemented', { cause: { length, base, random } });
};
