<script>
	const links = [
		{
			id: 'linkedin',
			text: 'Linked In',
			link: 'https://www.linkedin.com/in/scottbuchanan',
			icon: 'ri:linkedin-fill'
		},
		{
			id: 'github',
			text: 'Github',
			link: 'https://github.com/scott-buchanan',
			icon: 'ri:github-fill'
		}
		// {
		// 	id: 'facebook',
		// 	text: 'Facebook',
		// 	link: 'https://www.facebook.com/scottrbuchanan85/',
		// 	icon: 'ri:facebook-fill'
		// },
		// {
		// 	id: 'x',
		// 	text: 'X',
		// 	link: 'https://x.com/scottbuchanan',
		// 	icon: 'ri:twitter-x-fill'
		// }
	];
</script>

<ul class="mt-8 flex items-center" aria-label="Social media">
	{#each links as link}
		<li class="mr-2 text-xs">
			<a class="block hover:text-slate-200" href={link.link} target="_blank" rel="noreferrer">
				<span class="sr-only">{link.text}</span>
				<iconify-icon icon={link.icon} width="2.5em" height="2.5em" />
			</a>
		</li>
	{/each}
</ul>
