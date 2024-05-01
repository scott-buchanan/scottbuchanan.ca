<script>
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	// store
	import { sections as storeSections } from '$lib/store.js';
	// components
	import HeaderLink from './HeaderLink.svelte';
	import FooterLinks from './FooterLinks.svelte';
	// data
	import { name, title, blurb } from '$lib/data.js';

	let sections;
	let pageLoaded = false;
	let clicked = false;
	let active;
	let isScrolling;
	let scrollingTimeout;
	let ticking = false;

	// reactive declaration for url hash
	$: hash = $page.url.hash.replace('#', '');

	// subscribe to section store
	storeSections.subscribe((value) => {
		sections = value;
	});

	function linkClick(link) {
		clicked = true;
		active = link;
		sections.find((section) => section.id === link).element.scrollIntoView();
	}

	function scrollEnd() {
		// this check is needed because scrollend is fired when the link is clicked, before scroll
		if (isScrolling) clicked = false;
	}

	// handle the window event scroll
	function handleScroll() {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				ticking = false;
				isScrolling = true;
				clearTimeout(scrollingTimeout);

				// page scroll logic because observer callback updates sections store
				if (!clicked) {
					let mostVisible = sections[0];
					sections.forEach((section) => {
						if (section.percentVisible > mostVisible.percentVisible) {
							mostVisible = section;
						}
					});
					active = mostVisible.id;
					// unsure if there is a reactive way to do this
					window.location.hash = mostVisible.id;
				}

				scrollingTimeout = setTimeout(() => {
					// have to add this because Safari doesn't support scrollend event. Hope to remove at a later date
					scrollEnd();
					isScrolling = false;
				}, 100);
			});
			ticking = false;
		}
	}

	// handle the window event scrollend
	function handleScrollEnd() {
		if (pageLoaded) {
			scrollEnd();
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

<svelte:window on:scroll={handleScroll} on:scrollend={handleScrollEnd} />

<header class={$$props.class}>
	<div class="pr-6 sm:pr-0">
		<h1 class="text-primary text-4xl tracking-tight sm:text-5xl">{name}</h1>
		<h2 class="mt-3 text-lg font-medium tracking-tight sm:text-xl">
			{title}
		</h2>

		<p class="mt-4 max-w-xs leading-normal">{blurb}</p>

		<!-- without this we get an animation of active menu item on page load -->
		{#if pageLoaded}
			<nav class="nav hidden lg:block" aria-label="In-page jump links">
				<ul class="mt-16 w-max">
					<li>
						{#each sections as section}
							<HeaderLink
								value={section.id}
								active={section.id === active}
								on:click={() => linkClick(section.id)}
							/>
						{/each}
					</li>
				</ul>
			</nav>
		{/if}
	</div>
	<FooterLinks />
</header>
