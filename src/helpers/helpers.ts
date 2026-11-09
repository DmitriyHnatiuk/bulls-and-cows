export const ALL_DIGITS = '0123456789abcdefghijklmnopqrstuvwxyz' as const;

export const invalidInputMsg = (input: HTMLInputElement, message: string) => {
	input.setCustomValidity(message);
	input.reportValidity();
};
