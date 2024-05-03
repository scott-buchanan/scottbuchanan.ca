<script>
	import { onMount } from 'svelte';

	let isDarkmode = true;
	let icon;

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

		applyViewMode();
		icon = isDarkmode
			? 'line-md:moon-filled-alt-to-sunny-filled-loop-transition'
			: 'line-md:sunny-filled-loop-to-moon-filled-transition';
	}

	onMount(() => {
		applyViewMode();
		icon = isDarkmode ? 'line-md:sunny-filled-loop' : 'line-md:moon-filled';
	});
</script>

{#if icon}
	<button
		on:click={toggleTheme}
		class="fixed top-3 right-1 sm:top-4 sm:right-4 z-30 opacity-50 dark:opacity-100 hover:opacity-100 hover:text-slate-500 dark:hover:text-yellow-400 transition-all duration-500"
		aria-label={`Switch to ${isDarkmode ? 'light' : 'dark'} mode`}
	>
		<iconify-icon {icon} width="2em" height="2em" />
	</button>
{/if}
