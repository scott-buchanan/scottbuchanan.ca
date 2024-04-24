<script>
	import 'iconify-icon';
	import '@fontsource-variable/inter';
	import '../app.css';
</script>

<svelte:head>
	<script>
		const browserDefault = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) && browserDefault)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.add('light');
		}
	</script>
</svelte:head>

<slot />
