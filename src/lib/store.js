import { writable } from 'svelte/store';
import { name } from './data.js';

export const sections = writable([]);
export const siteInfo = writable({ website: name, page: '' });
export const containerElement = writable(null);
