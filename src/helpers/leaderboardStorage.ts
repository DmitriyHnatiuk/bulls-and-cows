import type { BaseType, LengthType } from '../type/type.js';

export interface RecordEntry {
	attempts: number;
	timeSec: number;
}

const MAX = 10;
const PREFIX = 'bulls_cows:';

const key = (base: BaseType, length: LengthType) => `${PREFIX}${base}:${length}`;

export const getRecords = (base: BaseType, length: LengthType): RecordEntry[] => {
	const raw = localStorage.getItem(key(base, length));
	if (!raw || raw === 'undefined') return [];
	try {
		return JSON.parse(raw) as RecordEntry[];
	} catch {
		return [];
	}
};

const setRecords = (base: BaseType, length: LengthType, data: RecordEntry[]): void => {
	if (!data?.length) {
		localStorage.removeItem(key(base, length));
		return;
	}
	localStorage.setItem(key(base, length), JSON.stringify(data));
};

export const saveRecord = (base: BaseType, length: LengthType, attempts: number, timeSec: number): boolean => {
	const current = getRecords(base, length);

	const newEntry: RecordEntry = {
		attempts,
		timeSec,
	};

	const updated: RecordEntry[] = [...current, newEntry]
		.sort((a, b) => a.attempts - b.attempts || a.timeSec - b.timeSec)
		.slice(0, MAX);

	setRecords(base, length, updated);

	return updated.some((e) => e.attempts === attempts && e.timeSec === timeSec);
};

export const clearRecords = (base: BaseType, length: LengthType): void => {
	localStorage.removeItem(key(base, length));
};
