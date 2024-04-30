import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '/tailwind.config.js';
import { sections, siteInfo } from './store';

const { theme } = resolveConfig(tailwindConfig);
const observedElements = new Map();
let observer;

export function updateDocumentTitle(sectionId) {
	siteInfo.update((existingInfo) => ({
		...existingInfo,
		...{ page: `${sectionId[0].toUpperCase()}${sectionId.slice(1)}` }
	}));
}

export function addObserver(sectionElement) {
	if (!observer) {
		observer = new IntersectionObserver(observerCallback, {
			threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
		});
	}
	observer.observe(sectionElement);
	observedElements.set(sectionElement, sectionElement);
}

// const observerCallback = (entries) => {
// 	sections.update((s) => {
// 		return s.map((item) => {
// 			if (item.id === entries[0].target.id) {
// 				item.percentVisible = Math.floor(entries[0].intersectionRatio * 100);
// 			}
// 			return item;
// 		});
// 	});
// };

function observerCallback(entries) {
	entries.forEach((entry) => {
		if (observedElements.has(entry.target)) {
			sections.update((s) => {
				return s.map((item) => {
					if (item.id === entries[0].target.id) {
						item.percentVisible = Math.floor(entries[0].intersectionRatio * 100);
					}
					return item;
				});
			});
		}
	});
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

export function removeObserver(sectionElement) {
	if (observer && observedElements.has(sectionElement)) {
		observer.unobserve(sectionElement);
		observedElements.delete(sectionElement);
	}
}
