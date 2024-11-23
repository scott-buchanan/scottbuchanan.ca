import sketchspace from '$lib/assets/images/sketchspace.webp';
import traktVue from '$lib/assets/images/trakt-vue.webp';
import mss from '$lib/assets/images/mss.webp';
import ifhp from '$lib/assets/images/ifhp.webp';

export const name = 'Scott Buchanan';
export const title = 'Full-stack Web Developer';
export const blurb =
	"I'm passionate about creating pixel-perfect, visually captivating, accessible interfaces while seamlessly integrating user-friendly, intuitive user experiences.";

export const links = [
	{
		text: 'Email',
		link: 'mailto:scottbuchanan20@gmail.com',
		icon: 'mdi:email'
	},
	{
		text: 'Linked In',
		link: 'https://www.linkedin.com/in/scottbuchanan',
		icon: 'fa-brands:linkedin-in'
	},
	{
		text: 'Github',
		link: 'https://github.com/scott-buchanan',
		icon: 'fa-brands:github'
	},
	{
		text: 'CodePen',
		link: 'https://codepen.io/scottbuchanan',
		icon: 'fa-brands:codepen'
	},
	{
		text: 'Goodreads',
		link: 'https://www.goodreads.com/scottbuchanan',
		icon: 'fa-brands:goodreads'
	}
];

export const skills = [
	{
		key: 'javascript',
		text: 'JavaScript',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		weight: 10,
		language: true
	},
	{ key: 'react', text: 'React', link: 'https://reactjs.org/', weight: 9, language: true },
	{ key: 'vuejs', text: 'Vue.js', link: 'https://vuejs.org/', weight: 9, language: true },
	{ key: 'svelte', text: 'Svelte', link: 'https://svelte.dev/', weight: 9, language: true },
	{ key: 'sveltekit', text: 'SvelteKit', link: 'https://kit.svelte.dev/', weight: 8 },
	{ key: 'tailwind', text: 'Tailwind CSS', link: 'https://tailwindcss.com/', weight: 8 },
	{ key: 'typescript', text: 'TypeScript', link: 'https://www.typescriptlang.org/', weight: 8 },
	{ key: 'sass', text: 'SCSS', link: 'https://sass-lang.com/', weight: 7 },
	{ key: 'css', text: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', weight: 7 },
	{
		key: 'styledcomponents',
		text: 'Styled Components',
		link: 'https://styled-components.com/',
		weight: 7
	},
	{ key: 'bootstrap', text: 'Bootstrap', link: 'https://getbootstrap.com/', weight: 6 },
	{ key: 'jquery', text: 'jQuery', link: 'https://jquery.com/', weight: 6, language: true },
	{ key: 'php', text: 'PHP', link: 'https://www.php.net/', weight: 6, language: true },
	{ key: 'twig', text: 'TWIG', link: 'https://twig.symfony.com/', weight: 6, language: true },
	{ key: 'quasar', text: 'Quasar', link: 'https://quasar.dev/', weight: 6 },
	{ key: 'openvidu', text: 'openVidu', link: 'https://openvidu.io/', weight: 6 },
	{ key: 'storybook', text: 'Storybook', link: 'https://storybook.js.org/', weight: 6 },
	{
		key: 'googlemaps',
		text: "Google Maps API's",
		link: 'https://developers.google.com/maps',
		weight: 5
	},
	{ key: 'npm', text: 'npm', link: 'https://www.npmjs.com/', weight: 5 },
	{ key: 'yarn', text: 'Yarn', link: 'https://yarnpkg.com/', weight: 5 },
	{ key: 'pnpm', text: 'PNPM', link: 'https://pnpm.io/', weight: 5 },
	{ key: 'nodejs', text: 'Node.js', link: 'https://nodejs.org/', weight: 5 },
	{ key: 'python', text: 'Python', link: 'https://www.python.org/', weight: 5 },
	{ key: 'redux', text: 'Redux', link: 'https://redux.js.org/', weight: 5 },
	{ key: 'webpack', text: 'Webpack', link: 'https://webpack.js.org/', weight: 5 },
	{ key: 'vite', text: 'Vite', link: 'https://vitejs.dev/', weight: 5 },
	{ key: 'trakt', text: 'Trakt API', link: 'https://trakt.docs.apiary.io/#', weight: 4 },
	{
		key: 'tmdb',
		text: 'TMDB API',
		link: 'https://developer.themoviedb.org/reference/intro/getting-started',
		weight: 4
	},
	{ key: 'omdb', text: 'OMDb API', link: 'https://www.omdbapi.com/', weight: 4 },
	{ key: 'fanart', text: 'Fanart.tv API', link: 'https://fanart.tv/api-docs/api-v3/', weight: 4 },
	{ key: 'aws', text: 'AWS', link: 'https://aws.amazon.com/', weight: 4 },
	{ key: 'craftcms', text: 'Craft CMS', link: 'https://craftcms.com/', weight: 4 },
	{ key: 'github', text: 'GitHub', link: 'https://github.com/', weight: 4 },
	{ key: 'git', text: 'Git', link: 'https://git-scm.com/', weight: 4 },
	{ key: 'gitlab', text: 'GitLab', link: 'https://about.gitlab.com/', weight: 4 },
	{ key: 'wordpress', text: 'WordPress', link: 'https://wordpress.org/', weight: 4 },
	{ key: 'vscode', text: 'Visual Studio Code', link: 'https://code.visualstudio.com/', weight: 3 },
	{ key: 'linux', text: 'Linux', link: 'https://www.linux.org/', weight: 3 },
	{ key: 'sql', text: 'SQL', link: 'https://www.w3schools.com/sql/', weight: 3 },
	{ key: 'vercel', text: 'Vercel', link: 'https://vercel.com/', weight: 3 },
	{ key: 'xml', text: 'XML', link: 'https://www.w3schools.com/xml/', weight: 3 },
	{
		key: 'googleanalytics',
		text: 'Google Analytics',
		link: 'https://analytics.google.com/',
		weight: 2
	},
	{
		key: 'photoshop',
		text: 'Photoshop',
		link: 'https://www.adobe.com/ca/products/photoshop.html',
		weight: 2
	},
	{ key: 'scrum', text: 'Scrum', link: 'https://www.scrum.org/', weight: 2 },
	{ key: 'jira', text: 'Jira', link: 'https://www.atlassian.com/software/jira', weight: 2 },
	{ key: 'googleads', text: 'Google Ads', link: 'https://ads.google.com/', weight: 1 }
];

export const work = [
	{
		title: 'Senior Web Developer',
		company: 'Medavie Blue Cross',
		website: 'https://medaviebc.ca',
		dates: { from: '2019', to: 'Present' },
		description: [
			'Specializing in JavaScript development using technologies such as Vue.js, Bootstrap, and jQuery for legacy applications. Proficient in PHP, particularly with TWIG templates, and adept at working with CMS systems like Craft CMS. Responsible for overseeing AWS infrastructure, including configuring Linux servers.',
			'Served as the sole developer for IFHP Medavie and presently maintain a senior developer position for the Member Services Site.'
		],
		skills: skills
			.filter((item) =>
				[
					'javascript',
					'vuejs',
					'sass',
					'nodejs',
					'bootstrap',
					'php',
					'twig',
					'git',
					'gitlab',
					'github',
					'aws',
					'linux',
					'scrum',
					'craftcms',
					'npm',
					'yarn',
					'jira',
					'storybook',
					'jquery'
				].includes(item.key)
			)
			.sort((a, b) => b.weight - a.weight)
	},
	{
		title: 'Web Developer',
		company: 'NRC',
		website: 'https://nrc.ca',
		dates: { from: '2015', to: '2019' },
		description:
			'At the National Research Council Canada I worked on a technology showcase platform (Techquity) built on React to showcase various NRC technologies. Before that, our team worked on the Learning and Performance Support System which was built using jQuery and Bootstrap.',
		skills: skills
			.filter((item) =>
				[
					'javascript',
					'react',
					'redux',
					'sass',
					'jquery',
					'nodejs',
					'bootstrap',
					'python',
					'git',
					'github',
					'gitlab',
					'linux',
					'scrum',
					'npm',
					'yarn',
					'jira',
					'storybook'
				].includes(item.key)
			)
			.sort((a, b) => b.weight - a.weight)
	},
	{
		title: 'Web Developer',
		company: 'Airtech Equipment Ltd.',
		website: 'https://clairitech.com/',
		dates: { from: '2013', to: '2014' },
		description: 'Develop web apps, design/redesign websites and everything in between.',
		skills: skills
			.filter((item) =>
				[
					'javascript',
					'jquery',
					'css',
					'bootstrap',
					'php',
					'wordpress',
					'sql',
					'xml',
					'linux',
					'googleanalytics',
					'googleads',
					'photoshop'
				].includes(item.key)
			)
			.sort((a, b) => b.weight - a.weight)
	}
];

export const projects = [
	// {
	// 	title: 'Trakt TV and Movie client',
	// 	website: 'https://github.com/scott-buchanan/trakt-vue-ts',
	// 	description:
	// 		"Built using Vue.js, TypeScript, SCSS, Quasar framework, and multiple API's (Trakt, TMDB, OMDb, Fanart.tv).",
	// 	image: traktVue,
	// 	skills: skills
	// 		.filter((item) =>
	// 			[
	// 				'vuejs',
	// 				'typescript',
	// 				'pnpm',
	// 				'quasar',
	// 				'sass',
	// 				'vite',
	// 				'trakt',
	// 				'tmdb',
	// 				'omdb',
	// 				'fanart'
	// 			].includes(item.key)
	// 		)
	// 		.sort((a, b) => b.weight - a.weight)
	// },
	{
		title: 'Member Services Site',
		website: 'https://members.medaviebc.ca',
		description: 'Built using Vue.js, Bootstrap and SCSS',
		image: mss,
		skills: skills
			.filter((item) => ['vuejs', 'sass', 'bootstrap', 'webpack', 'yarn'].includes(item.key))
			.sort((a, b) => b.weight - a.weight)
	},
	{
		title: 'Sketchspace',
		website: null,
		description: 'Built using React, Styled Components, and openVidu API',
		modal: {
			description: 'SketchSpace was Canada\'s first virtual rehearsal hall, though it is no longer an active project and the website is now offline. Designed as a web app to help theatre creators rehearse, experiment, and collaborate remotely, it was originally developed in 2015 and relaunched during the COVID-19 pandemic. It provided tools for exploring movement, objects, and performance ideas in a digital environment. As the developer of the relaunched version of SketchSpace, I created the platform using React and the OpenVidu API, enabling seamless real-time collaboration. The app was built to inspire creators of all levels to push the boundaries of their craft through innovative digital experimentation.',
		},
		image: sketchspace,
		skills: skills
			.filter((item) =>
				['react', 'styledcomponents', 'openvidu', 'bootstrap', 'sass', 'webpack', 'npm'].includes(
					item.key
				)
			)
			.sort((a, b) => b.weight - a.weight)
	},
	{
		title: 'Interim Federal Health Program',
		website: 'https://ifhp.medaviebc.ca/en/',
		description:
			"Built using Craft CMS (PHP), Twig templates, Bootstrap, and jQuery using Google Maps API's",
		image: ifhp,
		// different sorting here. Want languages on top.
		skills: skills
			.filter((item) =>
				['php', 'twig', 'bootstrap', 'sass', 'googlemaps', 'craftcms', 'jquery'].includes(item.key)
			)
			.sort((a, b) => {
				if (a.language === b.language) {
					return b.weight - a.weight;
				}
				return a.language ? -1 : 1;
			})
	}
];
