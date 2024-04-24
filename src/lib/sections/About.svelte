<script>
	import { onMount } from 'svelte';
	import { addSectionToStore } from '$lib/utils.js';
	import Link from '../components/Link.svelte';

	const currentYear = new Date().getFullYear();
	const experienceYears = currentYear - 2008;
	const sectionId = 'about';
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
		class="lg:hidden sticky top-0 z-20 -mx-6 mb-8 w-screen bg-light-background/50 dark:bg-slate-800/50 transition-colors px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
	>
		<h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">
			{sectionId}
		</h2>
	</div>

	<p class="pb-3">
		With over {experienceYears} years of experience,
		<Link value="javascript" />
		has been my playground for a while now. Whether coding in vanilla JS, creating efficient, reusable
		components in
		<Link value="vuejs" />,
		<Link value="svelte" />, and
		<Link value="react" /> using the latest JavaScript features and functions, or staying up to date
		with the latest innovations, I'm constantly honing my skills and learning new things.
	</p>

	<p class="pb-3">
		Alongside my love for unraveling complex logic puzzles in JS, I have an equal passion for
		perfecting pixel-perfect designs. <Link value="css" /> captivate me with their ability to transform
		concepts into visually stunning realities. There's a unique satisfaction in sculpting interfaces
		and seeing ideas come to life with every line of code.
	</p>

	<p class="pb-3">
		When I'm not coding, I'm either running around after members of my growing family, cooking up a
		storm in the kitchen, or if it's summertime you can find me at the campground.
	</p>
</section>
