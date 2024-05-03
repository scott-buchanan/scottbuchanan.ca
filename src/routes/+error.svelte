<script>
	import { page } from '$app/stores';
	import { name } from '$lib/data.js';
</script>

<svelte:head>
	<title>{name} - {$page.status}</title>
</svelte:head>

<div class="flex items-center justify-center h-full text-slate-600 dark:text-slate-300/80">
	<div class="items-center justify-center border border-slate-300/50 rounded p-10 text-center">
		<h1 class="text-8xl">{$page.status}</h1>
		<p class="mt-4">Oops, there's nothing here.</p>
		<a
			href="/"
			class="group mt-4 flex items-center justify-center hover:text-light-secondary focus:text-light-secondary dark:hover:text-dark-secondary dark:focus:text-dark-secondary transition-colors"
		>
			<iconify-icon
				icon="mdi:arrow-back"
				class="group-hover:-translate-x-1 transition-transform"
				width="2em"
				height="2em"
				aria-hidden="true"
			/>
			Take me back
		</a>
	</div>
</div>
