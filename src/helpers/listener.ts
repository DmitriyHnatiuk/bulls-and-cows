import { onBaseChange, onLengthChange, onSettingsSubmit } from './settings.js';

export const addListener = () => {
	const baseFieldset = document.getElementById('base-container') as HTMLInputElement;
	const lengthContainer = document.getElementById('length-container') as HTMLFieldSetElement;
	const settingsForm = document.getElementById('settings-form') as HTMLFormElement;

	baseFieldset?.addEventListener('change', onBaseChange);
	lengthContainer?.addEventListener('change', onLengthChange);
	settingsForm?.addEventListener('submit', onSettingsSubmit);
};
