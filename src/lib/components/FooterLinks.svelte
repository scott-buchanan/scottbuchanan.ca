<script>
	const links = [
		{
			id: 'linkedin',
			text: 'Linked In',
			link: 'https://www.linkedin.com/in/scottbuchanan',
			icon: 'fa-brands:linkedin-in'
		},
		{
			id: 'github',
			text: 'Github',
			link: 'https://github.com/scott-buchanan',
			icon: 'fa-brands:github'
		},
		{
			id: 'codepen',
			text: 'CodePen',
			link: 'https://codepen.io/scottbuchanan',
			icon: 'fa-brands:codepen'
		},
		{
			id: 'goodreads',
			text: 'Goodreads',
			link: 'https://www.goodreads.com/scottbuchanan',
			icon: 'fa-brands:goodreads'
		}
	];
</script>

<ul class="mt-8 flex items-center" aria-label="Social media">
	{#each links as link}
		<li class="mr-2 text-xs">
			<a class="block hover:text-secondary" href={link.link} target="_blank" rel="noreferrer">
				<span class="sr-only">{link.text}</span>
				<iconify-icon icon={link.icon} width="2.5em" height="2.5em" />
			</a>
		</li>
	{/each}
</ul>
