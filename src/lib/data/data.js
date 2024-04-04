import sketchspace from '$lib/assets/images/sketchspace.webp';

const skills = [
	{ text: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
	{ text: 'Vue.js', link: 'https://vuejs.org/' },
	{ text: 'SCSS', link: 'https://sass-lang.com/documentation/syntax' },
	{ text: 'Node.js', link: 'https://nodejs.org/en/' },
	{ text: 'Bootstrap', link: 'https://getbootstrap.com/' },
	{ text: 'PHP', link: 'https://www.php.net/' },
	{ text: 'Twig', link: 'https://twig.symfony.com/' },
	{ text: 'Craft CMS', link: 'https://craftcms.com/' },
	{ text: 'Git', link: 'https://git-scm.com/' },
	{ text: 'Gitlab', link: 'https://about.gitlab.com/' },
	{ text: 'Github', link: 'https://github.com/' },
	{ text: 'AWS', link: 'https://aws.amazon.com/' },
	{ text: 'Linux', link: 'https://www.linux.org/' },
	{ text: 'jQuery', link: 'https://jquery.com/' },
	{ text: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
	{ text: 'WordPress', link: 'https://wordpress.org/' },
	{ text: 'SQL', link: 'https://www.w3schools.com/sql/' },
	{ text: 'XML', link: 'https://www.w3schools.com/xml/' },
	{ text: 'Google Analytics', link: 'https://analytics.google.com/' },
	{ text: 'Google Adwords', link: 'https://ads.google.com/' },
	{ text: 'React', link: 'https://reactjs.org/' },
	{ text: 'Redux', link: 'https://redux.js.org/' },
	{ text: 'JSX', link: 'https://reactjs.org/docs/introducing-jsx.html' },
	{ text: 'Python', link: 'https://www.python.org/' }
];

export const work = [
	{
		title: 'Senior Web Developer',
		company: 'Medavie Blue Cross',
		companySite: 'https://medaviebc.ca',
		dates: { from: '2019', to: 'Present' },
		description:
			'Focused on JavaScript development using technologies such as Vue.js, React, jQuery (legacy apps). Also working in PHP (TWIG templates), and CMS systems (Craft CMS). In charge of managing AWS infrastructure (Linux servers etc). Solo developer on IFHP Medavie. Currently working on the new Member Services website as the senior developer.',
		links: [
			{ title: 'Member Services Website', src: 'https://members.medavie.bluecross.ca' },
			{ title: 'IFHP Website', src: 'https://whatever.com' }
		],
		skills: skills.filter((item) =>
			[
				'JavaScript',
				'Vue.js',
				'SCSS',
				'Node.js',
				'Bootstrap',
				'PHP',
				'Twig',
				'Craft CMS',
				'Git',
				'Gitlab',
				'Github',
				'AWS',
				'Linux'
			].includes(item.text)
		)
	},
	{
		title: 'Web Developer',
		company: 'National Research Council Canada',
		companySite: 'https://nrc.ca',
		dates: { from: '2015', to: '2019' },
		description:
			'Worked on a technology showcase platform (Techquity) built on React to showcase various NRC technologies. Before that, our team worked on the Learning and Performance Support System which was built using jQuery and Bootstrap.',
		links: [],
		skills: skills.filter((item) =>
			[
				'JavaScript',
				'React',
				'Redux',
				'SCSS',
				'JSX',
				'jQuery',
				'Node.js',
				'Bootstrap',
				'Python',
				'Git',
				'Github',
				'Gitlab',
				'Linux'
			].includes(item.text)
		)
	},
	{
		title: 'Web Developer',
		company: 'Airtech Equipment Ltd.',
		companySite: 'https://clairitech.com/',
		dates: { from: '2013', to: '2014' },
		description: 'Develop web apps, design/redesign websites and everything in between.',
		skills: skills.filter((item) =>
			[
				'JavaScript',
				'jQuery',
				'CSS',
				'Bootstrap',
				'WordPress',
				'SQL',
				'XML',
				'Linux',
				'Google Analytics',
				'Google Adwords'
			].includes(item.text)
		)
	}
];

export const projects = [
	{
		title: 'ScottBuchanan.ca',
		description: 'Built using SvelteKit v2 using Tailwind CSS',
		image: sketchspace
	}
];

'JavaScript',
	'Vue.js',
	'SCSS',
	'Node.js',
	'Bootstrap',
	'PHP',
	'Twig',
	'Craft CMS',
	'Git',
	'Gitlab',
	'Github',
	'AWS',
	'Linux',
	'JavaScript',
	'jQuery',
	'CSS',
	'Bootstrap',
	'WordPress',
	'SQL',
	'XML',
	'Linux',
	'Google Analytics',
	'Google Adwords',
	'JavaScript',
	'React',
	'Redux',
	'SCSS',
	'JSX',
	'jQuery',
	'Node.js',
	'Bootstrap',
	'Python',
	'Git',
	'Github',
	'Gitlab',
	'Linux',
	'JavaScript',
	'Vue.js',
	'SCSS',
	'Node.js',
	'Bootstrap',
	'PHP',
	'Twig',
	'Craft CMS',
	'Git',
	'Gitlab',
	'Github',
	'AWS',
	'Linux';
