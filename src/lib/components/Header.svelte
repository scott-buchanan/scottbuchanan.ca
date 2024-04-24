<script>
	import { onMount } from 'svelte';
	import resolveConfig from 'tailwindcss/resolveConfig';
	import tailwindConfig from '/tailwind.config.js';
	// store
	import { sections as storeSections } from '$lib/store.js';
	// components
	import HeaderLink from './HeaderLink.svelte';
	import FooterLinks from './FooterLinks.svelte';
	// data
	import { name, title, blurb } from '$lib/data.js';

	const { theme } = resolveConfig(tailwindConfig);

	let sections;
	let hash;

	storeSections.subscribe((value) => {
		sections = value;
		if (sections) sections.find((item) => item.active === true)?.element.scrollIntoView();
	});

	function linkClick(link) {
		storeSections.update((s) =>
			s.map((item) => {
				item.active = item.id === link;
				return item;
			})
		);
	}

	function linkScroll() {
		const isElementVisible = (element) => {
			const rect = element.getBoundingClientRect(),
				windowHeight = window.innerHeight;
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= windowHeight &&
				rect.right <= window.innerWidth
			);
		};

		let activeSection = sections.find((item) => {
			if (isElementVisible(item.element)) return item;
		});

		linkClick(activeSection?.id);
	}

	function updateHash() {
		if (window.innerWidth >= Number(theme.screens.lg.replace('px', ''))) {
			console.log(`${window.innerWidth}`, theme.screens.lg);
			hash = window.location.hash.slice(1);
			linkClick(hash || 'about');
		}
	}

	onMount(() => {
		// Update hash when the hash changes
		window.addEventListener('hashchange', updateHash());

		// Initial hash value
		updateHash();

		// Cleanup when the component is destroyed
		return () => {
			window.removeEventListener('hashchange', updateHash);
		};
	});
</script>

<svelte:window on:mousewheel={linkScroll} />

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
					{#each sections as section}
						<HeaderLink
							value={section.id}
							active={section.active}
							on:click={() => linkClick(section.id)}
						/>
					{/each}
				</li>
			</ul>
		</nav>
	</div>
	<FooterLinks />
</header>
