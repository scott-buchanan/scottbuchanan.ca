<script>
	import { onDestroy, onMount } from 'svelte';
	// store
	import { containerElement as storeContainerElement } from '$lib/store.js';
	// assets
	import resume from '$lib/assets/Scott-Buchanan.pdf';
	// data
	import { work } from '../data';
	// components
	import Card from '../components/Card.svelte';
	// utils
	import { addSectionToStore, removeObserver } from '$lib/utils.js';

	const sectionId = 'experience';
	const resumeText = 'View Full Résumé (PDF)';
	let sectionElement;

	onMount(() => {
		console.log('add experience');
		addSectionToStore({
			id: sectionId,
			element: sectionElement
		});
	});

	onDestroy(() => {
		removeObserver(sectionElement);
	});
</script>

<section
	bind:this={sectionElement}
	id={sectionId}
	class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
	aria-label={sectionId}
>
	<div
		class="lg:hidden sticky top-0 z-20 -mx-6 mb-16 w-screen bg-light-background/50 dark:bg-slate-900/50 transition-colors px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
	>
		<h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">
			{sectionId}
		</h2>
	</div>
	<div>
		<ol class="group/list">
			{#each work as job}
				<Card info={job} />
			{/each}
		</ol>
		<div class="mt-12">
			<a
				class="group leading-tight font-semibold text-slate-900 dark:text-slate-200 transition-colors focus-visible:text-light-secondary dark:focus-visible:text-dark-secondary"
				aria-label=""
				href={resume}
				target="_blank"
			>
				{resumeText}
				<iconify-icon
					icon="material-symbols:arrow-right-alt-rounded"
					width="1.4em"
					height="1.4em"
					class="inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
					aria-hidden="true"
				/>
			</a>
		</div>
	</div>
</section>
