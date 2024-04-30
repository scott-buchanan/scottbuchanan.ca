import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '/tailwind.config.js';
import { sections, siteInfo } from './store';

const { theme } = resolveConfig(tailwindConfig);
let observers = [];

export function updateDocumentTitle(sectionId) {
	siteInfo.update((existingInfo) => ({
		...existingInfo,
		...{ page: `${sectionId[0].toUpperCase()}${sectionId.slice(1)}` }
	}));
}

export function addSectionToStore(sectionObject) {
	if (window.innerWidth >= Number(theme.screens.lg.replace('px', ''))) {
		sections.update((s) => {
			if (s && !s.find((item) => item.id === sectionObject.id)) {
				return [
					...s,
					{
						...sectionObject,
						percentVisible: null
					}
				];
			}
		});
		addObserver(sectionObject.element);
	}
}

const observerCallback = (entries) => {
	sections.update((s) => {
		return s.map((item) => {
			if (item.id === entries[0].target.id) {
				item.percentVisible = Math.floor(entries[0].intersectionRatio * 100);
			}
			return item;
		});
	});
};

export function addObserver(sectionElement) {
	observers.push(
		new IntersectionObserver(observerCallback, {
			threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
		})
	);
	observers.pop().observe(sectionElement);
}
