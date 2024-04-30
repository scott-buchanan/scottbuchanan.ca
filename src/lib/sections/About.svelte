<script>
	import { onMount, onDestroy } from 'svelte';
	import { addSectionToStore, removeObserver } from '$lib/utils.js';
	// components
	import Link from '../components/Link.svelte';

	const currentYear = new Date().getFullYear();
	const experienceYears = currentYear - 2008;
	const sectionId = 'about';

	let sectionElement;

	onMount(() => {
		console.log('add about');
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
		class="lg:hidden sticky top-0 z-20 -mx-6 mb-8 w-screen bg-light-background/50 dark:bg-slate-800/50 transition-colors px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
	>
		<h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">
			{sectionId}
		</h2>
	</div>

	<p class="pb-3">
		I am a full-stack web developer with over {experienceYears} years experience who has a passion for
		front-end web development.
	</p>
	<p class="pb-3">
		Whether coding in vanilla <Link value="javascript" />, creating efficient, reusable components
		in
		<Link value="vuejs" />,
		<Link value="svelte" />, or
		<Link value="react" /> using the latest JavaScript features and functions, or staying up to date
		with the latest innovations, I'm constantly honing my skills and learning new things.
	</p>

	<p class="pb-3">
		I have an equal passion for implementing pixel-perfect designs. I love <Link value="css" /> and I
		love the challenge of transforming designs into reality on screen. There's a unique satisfaction
		in sculpting interfaces and seeing ideas come to life with every line of code.
	</p>

	<p class="pb-3">
		When I'm not coding, I enjoy spending time with my family, taking leisurely strolls outdoors
		with our dogs, and playing the occasional video game.
	</p>
</section>
