<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let isDarkmode = null;
	let buttonClickCount = 0;

	// $: icon = isDarkmode ? 'pixelarticons:sun' : 'pixelarticons:moon';
	$: icon = () => {
		if (buttonClickCount === 0) {
			return isDarkmode ? 'line-md:sunny-filled-loop' : 'line-md:moon-filled';
		}
		return isDarkmode
			? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition'
			: 'line-md:sunny-filled-loop-to-moon-filled-transition';
	};

	function toggleTheme() {
		switchTheme();
		buttonClickCount++;
	}

	function switchTheme() {
		localStorage.theme = localStorage.theme === 'light' ? 'dark' : 'light';
		isDarkmode = localStorage.theme === 'dark';
		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	onMount(() => {
		isDarkmode = localStorage.theme === 'dark';
	});

	// class="absolute lg:fixed top-4 right-4"
</script>

<button
	on:click={() => toggleTheme()}
	class="fixed top-3 right-1 sm:top-4 sm:right-4 z-30"
	aria-label={isDarkmode ? 'Switch to light mode' : 'Switch to dark mode'}
>
	<div class="relative w-8 h-8 p-0 m-0">
		{#key buttonClickCount}
			<iconify-icon
				icon={icon()}
				width="2em"
				height="2em"
				class:hidden={isDarkmode === null}
				class="absolute right-0 will-change-scroll"
			/>
		{/key}
	</div>
</button>
