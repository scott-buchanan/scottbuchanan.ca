<script>
	import { createEventDispatcher, afterUpdate } from 'svelte';

	const dispatch = createEventDispatcher();
	let animate = false;

	function handleClick(event) {
		dispatch('click', event);
	}

	afterUpdate(() => {
		// enable transition after page load
		if (animate === false) animate = true;
	});
</script>

<a href={`#${$$props.value}`} class="group flex items-center py-3" on:click={handleClick}>
	<span
		class:transition={'all'}
		class="{$$props.active
			? 'w-10 bg-light-secondary dark:bg-dark-secondary'
			: 'w-6 bg-slate-600 dark:bg-slate-100'} group-hover:bg-secondary group-focus-visible:bg-secondary nav-indicator mr-4 h-px group-hover:w-10 group-focus-visible:w-10 motion-reduce:transition-none transition-all"
	/>
	<span
		class="{$$props.active
			? 'text-light-secondary dark:text-dark-secondary font-extrabold'
			: 'dark:text-slate-200 font-medium'} group-hover:text-secondary group-focus-visible:text-secondary transition-all nav-text text-xs uppercase tracking-widest"
	>
		{$$props.value}
	</span>
</a>
