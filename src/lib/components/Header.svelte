<script>
	import { onMount, tick, afterUpdate } from 'svelte';
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

	// reactive declaration for url hash
	$: hash = $page.url.hash.replace('#', '');

	// subscribe to section store
	storeSections.subscribe((value) => {
		sections = value;

		// page load logic
		if (pageLoaded === false && sections.length === 3) {
			pageLoaded = true;
			console.log('clicked', hash);
			linkClick(hash || 'about');
		}
	});

	async function linkClick(link) {
		console.log('clicked TRUE');
		clicked = true;
		active = link;
		console.log(sections.find((section) => section.id === link));
		sections.find((section) => section.id === link).element.scrollIntoView();
	}

	function handleScroll() {
		// page scroll logic because observer callback updates sections store
		// if (pageLoaded === true && sections.length === 3) {
		// clicked = true;
		console.log('SCROOOOLLLL');
		if (!clicked) {
			let mostVisible = sections[0];
			sections.forEach((section) => {
				if (section.percentVisible > mostVisible.percentVisible) {
					mostVisible = section;
				}
			});
			active = mostVisible.id;
		}
		// }
	}

	// fires when scrolling stops
	function handleScrollEnd() {
		console.log('page loaded ', pageLoaded);
		console.log('clicked FALSE');
		clicked = false;
	}
</script>

<svelte:window on:scroll={handleScroll} on:scrollend={handleScrollEnd} />

<header class={$$props.class}>
	<div class="pr-6 sm:pr-0">
		<h1 class="text-primary text-4xl tracking-tight sm:text-5xl">{name}</h1>
		<h2 class="mt-3 text-lg font-medium tracking-tight sm:text-xl">
			{title}
		</h2>

		<p class="mt-4 max-w-xs leading-normal">{blurb}</p>

		<nav class="nav hidden lg:block" aria-label="In-page jump links">
			<ul class="mt-16 w-max">
				<li>
					clicked: {clicked}
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
	</div>
	<FooterLinks />
</header>
