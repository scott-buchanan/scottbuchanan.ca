import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '/tailwind.config.js';
import { sections, siteInfo } from './store';

const { theme } = resolveConfig(tailwindConfig);

export function updateDocumentTitle(sectionId) {
	console.log('hi', sectionId);
	siteInfo.update((existingInfo) => ({
		...existingInfo,
		...{ page: `${sectionId[0].toUpperCase()}${sectionId.slice(1)}` }
	}));
}

export function addSectionToStore(sectionObject) {
	if (window.innerWidth >= Number(theme.screens.lg.replace('px', ''))) {
		const hash = window.location.hash.slice(1) || 'about';
		sections.update((s) => {
			if (s && !s.find((item) => item.id === sectionObject.id)) {
				return [
					...s,
					{
						...sectionObject,
						active: hash === sectionObject.id ? true : false
					}
				];
			}
		});
	}
}
