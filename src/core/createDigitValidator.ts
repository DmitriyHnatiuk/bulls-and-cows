import type { BaseType } from '../type/type.js';

export const createDigitValidator = (base: BaseType): ((char: string) => boolean) => {
	throw new Error('Not implemented', { cause: { base } });
};
