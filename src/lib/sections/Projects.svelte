<script>
	import { onMount } from 'svelte';
	import { projects } from '../data';
	import Card from '../components/Card.svelte';
	import { addSectionToStore } from '$lib/utils.js';

	const sectionId = 'projects';
	let sectionElement;

	onMount(() => {
		console.log('add projects');
		addSectionToStore({
			id: sectionId,
			element: sectionElement
		});
	});
</script>

<section
	bind:this={sectionElement}
	id={sectionId}
	class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
	aria-label={sectionId}
>
	<div
		class="lg:hidden sticky top-0 z-20 -mx-6 mb-8 w-screen bg-light-background/50 dark:bg-slate-800/50 transition-colors px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
	>
		<h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">
			{sectionId}
		</h2>
	</div>
	<div>
		<ul class="group/list">
			{#each projects as project}
				<Card info={project} />
			{/each}
		</ul>
	</div>
</section>
