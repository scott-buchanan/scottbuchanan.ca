<script>
	import { onMount } from 'svelte';

	let isDarkmode = false;
	let buttonClickCount = 0;

	$: icon = () => {
		if (buttonClickCount === 0) {
			return isDarkmode ? 'line-md:sunny-filled-loop' : 'line-md:moon-filled';
		}
		return isDarkmode
			? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition'
			: 'line-md:sunny-filled-loop-to-moon-filled-transition';
	};

	function applyViewMode() {
		const browserDefaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const docClasses = document.documentElement.classList;

		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) && browserDefaultDark)
		) {
			docClasses.add('dark');
			isDarkmode = true;
		} else {
			docClasses.remove('dark');
			isDarkmode = false;
		}

		if (!localStorage.getItem('theme')) {
			localStorage.setItem('theme', browserDefaultDark ? 'dark' : 'light');
		}
	}

	function toggleTheme() {
		localStorage.setItem('theme', localStorage.getItem('theme') === 'light' ? 'dark' : 'light');

		buttonClickCount = 1;
		applyViewMode();
	}

	onMount(() => {
		applyViewMode();
	});
</script>

<button
	on:click={toggleTheme}
	class="fixed top-3 right-1 sm:top-4 sm:right-4 z-30"
	aria-label={isDarkmode ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#key isDarkmode}
		<iconify-icon icon={icon()} width="2em" height="2em" />
	{/key}
</button>
