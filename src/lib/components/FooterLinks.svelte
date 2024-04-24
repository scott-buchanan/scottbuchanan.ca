<script>
	const links = [
		{
			id: 'email',
			text: 'Email',
			link: 'mailto:scottbuchanan20@gmail.com',
			target: '_self',
			icon: 'mdi:email'
		},
		{
			id: 'linkedin',
			text: 'Linked In',
			link: 'https://www.linkedin.com/in/scottbuchanan',
			target: '_blank',
			icon: 'fa-brands:linkedin-in'
		},
		{
			id: 'github',
			text: 'Github',
			link: 'https://github.com/scott-buchanan',
			target: '_blank',
			icon: 'fa-brands:github'
		},
		{
			id: 'codepen',
			text: 'CodePen',
			link: 'https://codepen.io/scottbuchanan',
			target: '_blank',
			icon: 'fa-brands:codepen'
		},
		{
			id: 'goodreads',
			text: 'Goodreads',
			link: 'https://www.goodreads.com/scottbuchanan',
			target: '_blank',
			icon: 'fa-brands:goodreads'
		}
	];
</script>

<ul class="mt-8 flex items-center" aria-label="Social media">
	{#each links as link}
		<li class="mr-4 text-xs">
			<a
				class="block hover:text-secondary transition-colors"
				href={link.link}
				target={link.target}
				rel="noreferrer"
			>
				<span class="sr-only">{link.text}</span>
				<iconify-icon icon={link.icon} width="2.5em" height="2.5em" />
			</a>
		</li>
	{/each}
</ul>
