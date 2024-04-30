<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function handleClick(event) {
		dispatch('click', event);
	}
</script>

<a href={`#${$$props.value}`} class="group flex items-center py-3" on:click={handleClick}>
	<span
		class="{$$props.active
			? 'w-10 bg-light-secondary dark:bg-dark-secondary'
			: 'w-6 bg-slate-600 dark:bg-slate-300'} nav-indicator mr-4 h-px group-hover:w-10 group-focus-visible:w-10 motion-reduce:transition-none transition-all"
	/>
	<span
		class="{$$props.active
			? 'text-light-secondary dark:text-dark-secondary font-bold'
			: 'text-slate-600 dark:text-slate-300 font-medium'} transition-colors nav-text text-xs uppercase tracking-widest"
	>
		{$$props.value}
	</span>
</a>
