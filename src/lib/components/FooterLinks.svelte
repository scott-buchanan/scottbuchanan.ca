<script>
	import { links } from '$lib/data.js';
</script>

<ul class="mt-8 flex items-center" aria-label="Social media">
	{#each links as item}
		<li class="mr-4 text-xs">
			<a href={item.link} target="_blank" rel="noreferrer">
				<span class="sr-only">{item.text}</span>
				<iconify-icon icon={item.icon} width="2.5em" height="2.5em" />
			</a>
		</li>
	{/each}
</ul>
