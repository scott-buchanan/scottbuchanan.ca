<script>
	import resolveConfig from 'tailwindcss/resolveConfig';
	import tailwindConfig from '../../tailwind.config.js';
	// store
	import { sections as storeSections, siteInfo as storeSiteInfo } from '$lib/store.js';
	// sections
	import About from '../lib/sections/About.svelte';
	import Projects from '../lib/sections/Projects.svelte';
	import Experience from '../lib/sections/Experience.svelte';
	// components
	import Header from '../lib/components/Header.svelte';
	import LightDarkToggle from '../lib/components/LightDarkToggle.svelte';
	import Link from '../lib/components/Link.svelte';
	// utils
	import { updateDocumentTitle } from '$lib/utils.js';

	const { theme } = resolveConfig(tailwindConfig);

	let sections;
	let radialPointer;
	let siteInfo;
	// let activeIndicator;

	storeSiteInfo.subscribe((value) => {
		siteInfo = value;
	});

	storeSections.subscribe((value) => {
		sections = value;
		const activeId = value.find((item) => item.active === true)?.id;
		if (activeId) updateDocumentTitle(activeId);
		// active indicator. Unsure if I like this, tabling for now
		// const activeSection = sections?.find((item) => item.active === true)?.element;
		// if (activeSection && activeIndicator) {
		// 	const scrollTop = window?.scrollY || document?.documentElement.scrollTop;
		// 	activeIndicator.style = `top: ${activeSection.getBoundingClientRect().top + scrollTop}px; height: ${activeSection.offsetHeight}px`;
		// 	activeIndicator.classList.remove('md:hidden');
		// }
	});

	// mouse pointer gradient
	function changePointerLocation(e) {
		if (localStorage.getItem('theme') === 'dark') {
			const { pageX, pageY } = e;
			if (
				!(
					'ontouchstart' in window ||
					navigator.maxTouchPoints > 0 ||
					navigator.msMaxTouchPoints > 0
				) &&
				`${window.innerWidth}` >= theme.screens.lg
			) {
				radialPointer.style = `background: radial-gradient(600px at ${pageX}px ${pageY}px, ${theme.colors.primary}, transparent 80%);`;
			} else {
				radialPointer.style = '';
			}
		}
	}
</script>

<svelte:head>
	<title>{siteInfo.website} - {siteInfo.page}</title>
</svelte:head>

<svelte:window on:mousemove={changePointerLocation} on:mousewheel={changePointerLocation} />

<div class="flex leading-relaxed text-slate-600 dark:text-slate-400 antialiased">
	<!-- skip to main content -->
	<a
		href="#about"
		class="text-light-secondary dark:text-dark-secondary border-solid border border-light-secondary dark:border-dark-secondary absolute text-center left-[50%] top-5 block -translate-y-40 -translate-x-[50%] rounded-full bg-white/10 px-3 py-1 text-xs font-medium leading-5 text-secondary border-secondary focus-visible:translate-y-0"
	>
		Skip to Content
	</a>

	<!-- pointer hover thing? -->
	<div
		bind:this={radialPointer}
		role="none"
		class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute opacity-10"
	/>

	<div
		class="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"
	>
		<LightDarkToggle />

		<div class="lg:flex lg:justify-between lg:gap-4">
			<Header
				class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
			/>
			<main id="content" class="relative pt-24 lg:w-1/2 lg:py-24">
				<!-- tabling this for now. section active indicator -->
				<!-- <div
					bind:this={activeIndicator}
					class="hidden lg:inline-block absolute h-full w-full bg-secondaryy opacity-30 transition-all"
				>
					<div class="relative h-full w-full">
						<div class="flex flex-col justify-center h-full w-full -ml-24">
							<iconify-icon icon="ri:arrow-right-wide-fill" width="5em" height="5em" />
						</div>
					</div>
				</div> -->

				<About />

				<Experience />

				<Projects />

				<footer class="text-xs max-w-md pb-16 sm:pb-0">
					<p>
						Built using <Link value="sveltekit" /> and styled with <Link value="tailwind" />, coded
						in
						<Link value="vscode" />, and deployed using <Link value="vercel" />.
					</p>
				</footer>
			</main>
		</div>
	</div>
</div>
