<script>
	import { onMount } from 'svelte';
	// assets
	import resume from '$lib/assets/Scott-Buchanan.pdf';
	// data
	import { work } from '../data';
	// components
	import Card from '../components/Card.svelte';
	// utils
	import { addSectionToStore } from '$lib/utils.js';

	const sectionId = 'experience';
	let sectionElement;

	onMount(() => {
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
		class="lg:hidden sticky top-0 z-20 -mx-6 mb-16 w-screen bg-light-background/50 dark:bg-slate-800/50 transition-colors px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
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
				class="inline-flex items-center leading-tight font-semibold group text-slate-800 hover:text-slate-800 focus:text-slate-800 dark:text-slate-200 dark:hover:text-slate-200 dark:focus:text-slate-200 transition-colors"
				aria-label="View Full Résumé"
				href={resume}
				target="blank"
			>
				<span>
					<span
						class="border-b border-transparent pb-px group-hover:border-light-secondary dark:group-hover:border-dark-secondary motion-reduce:transition-none"
					>
						View Full Résumé
					</span>
					<iconify-icon
						icon="material-symbols:arrow-right-alt-rounded"
						width="1.4em"
						height="1.4em"
						class="inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
						aria-hidden="true"
					/>
				</span>
			</a>
		</div>
	</div>
</section>
