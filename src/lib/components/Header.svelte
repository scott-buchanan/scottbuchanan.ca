<script>
	import { onMount } from 'svelte';
	import Link from './Link.svelte';
	import FooterLinks from './FooterLinks.svelte';

	const name = 'Scott Buchanan';
	const title = 'Full-stack Web Developer';
	const blurb =
		"I'm passionate about designing cutting-edge, pixel-perfect, visually captivating interfaces while seamlessly integrating user-friendly, intuitive UX.";
	let links = [
		{ text: 'About', value: 'about', active: false },
		{ text: 'Experience', value: 'experience', active: false },
		{ text: 'Projects', value: 'projects', active: false }
	];

	function linkClick(link) {
		links.forEach((item) => (item.active = item.value === link));
		links = [...links];
	}

	function linkScroll() {
		const sections = $$props.sections;
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
		let activeLink;
		if (isElementVisible(sections.about)) {
			activeLink = sections.about.id;
		} else if (isElementVisible(sections.experience)) {
			activeLink = sections.experience.id;
		} else if (isElementVisible(sections.projects)) {
			activeLink = sections.projects.id;
		}
		linkClick(activeLink);
	}

	onMount(() => {
		const hash = window.location.hash.split('#')[1] || 'about';
		linkClick(hash);
		$$props.sections[hash].scrollIntoView();
	});
</script>

<svelte:window on:mousewheel={linkScroll} />

<header class={$$props.class}>
	<div>
		<h1 class="text-primary text-4xl font-bold tracking-tight sm:text-5xl">
			{name}
		</h1>
		<h2 class="mt-3 text-lg font-medium tracking-tight sm:text-xl">{title}</h2>

		<p class="mt-4 max-w-xs leading-normal">{blurb}</p>

		<nav class="nav hidden lg:block" aria-label="In-page jump links">
			<ul class="mt-16 w-max">
				<li>
					{#each links as link}
						<Link
							text={link.text}
							value={link.value}
							active={link.active}
							on:click={() => linkClick(link.value)}
						/>
					{/each}
				</li>
			</ul>
		</nav>
	</div>
	<FooterLinks />
</header>
