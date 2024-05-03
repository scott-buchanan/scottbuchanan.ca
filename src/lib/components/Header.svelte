<script>
	import { pushState } from '$app/navigation';
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	// store
	import { sections as storeSections } from '$lib/store.js';
	// components
	import HeaderLink from './HeaderLink.svelte';
	import FooterLinks from './FooterLinks.svelte';
	// data
	import { name, title, blurb } from '$lib/data.js';

	let pageLoaded = false;
	let clicked = false;
	let ticking = false;
	let sections;
	let active;
	let isScrolling;
	let scrollingTimeout;

	// reactive declarations
	$: hash = $page.url.hash.replace('#', '');
	// support for vertical layout monitors
	$: allVisible = sections.every((item) => item.percentVisible === 100);

	// subscribe to section store
	storeSections.subscribe((value) => {
		sections = value;
	});

	function linkClick(link) {
		clicked = true;
		active = link;
		pushState(`#${link}`);
		sections.find((section) => section.id === link).element.scrollIntoView();
	}

	// handle the window event scroll
	function handleScroll() {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				let mostVisible;

				clearTimeout(scrollingTimeout);
				isScrolling = true;
				ticking = false;

				// page scroll logic because observer callback updates sections store
				if (!clicked) {
					mostVisible = sections[0];
					sections.forEach((section) => {
						if (section.percentVisible > mostVisible.percentVisible) {
							mostVisible = section;
						}
					});
					active = mostVisible.id;
				}

				scrollingTimeout = setTimeout(() => {
					isScrolling = false;
					clicked = false;
					// change the url hash
					if (!allVisible && mostVisible) pushState(`#${mostVisible.id}`);
				}, 100);
			});
			ticking = true;
		}
	}

	afterUpdate(() => {
		// page load logic
		if (pageLoaded === false && sections.length === 3) {
			pageLoaded = true;
			linkClick(hash || 'about');
		}
	});
</script>

<svelte:window on:scroll={handleScroll} />

<header
	class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
>
	<div class="pr-6 sm:pr-0">
		<a href="/"><h1 class="text-primary text-4xl tracking-tight sm:text-5xl">{name}</h1></a>
		<h2 class="mt-3 text-lg font-medium tracking-tight sm:text-xl">
			{title}
		</h2>

		<p class="mt-4 max-w-xs leading-normal">{blurb}</p>

		<!-- without this we get an animation of active menu item on page load -->
		{#if pageLoaded && !allVisible}
			<nav class="nav hidden lg:block" aria-label="In-page jump links">
				<ul class="mt-16 w-max">
					<li>
						{#each sections as section}
							<HeaderLink
								value={section.id}
								active={section.id === active}
								on:click={linkClick(section.id)}
							/>
						{/each}
					</li>
				</ul>
			</nav>
		{/if}
	</div>
	<FooterLinks />
</header>
