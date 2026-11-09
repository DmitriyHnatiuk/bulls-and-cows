export const formatTime = (totalSec: number) => {
	const m = String(Math.trunc(totalSec / 60)).padStart(2, '0');
	const s = String(totalSec % 60).padStart(2, '0');
	return `${m}:${s}`;
};

// timer.ts

type TimerCallbacks = {
	onTick?: (seconds: number) => void;
	onStart?: () => void;
	onStop?: () => void;
	onReset?: () => void;
};

export type TimerAPI = {
	start: () => void;
	stop: () => void;
	reset: () => void;
	getTime: () => number;
	isRunning: () => boolean;
};

export const createTimer = (callbacks: TimerCallbacks = {}): TimerAPI => {
	let intervalId: ReturnType<typeof setInterval> | null = null;
	let seconds = 0;
	let running = false;

	const tick = () => {
		seconds += 1;
		callbacks.onTick?.(seconds);
	};

	const clear = () => {
		if (intervalId !== null) {
			clearInterval(intervalId);
			intervalId = null;
		}
	};

	const start = () => {
		if (running) return;
		running = true;
		callbacks.onStart?.();
		tick();
		intervalId = setInterval(tick, 1000);
	};

	const stop = () => {
		if (!running) return;
		running = false;
		clear();
		callbacks.onStop?.();
	};

	const reset = () => {
		stop();
		seconds = 0;
		callbacks.onReset?.();
		callbacks.onTick?.(0);
	};

	return {
		start,
		stop,
		reset,
		getTime: () => seconds,
		isRunning: () => running,
	};
};
