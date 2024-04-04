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
			? 'w-10 bg-primary'
			: 'w-6 bg-dark'} transition-all nav-indicator mr-4 h-px group-hover:w-10 group-hover:bg-primary group-focus-visible:w-10 group-focus-visible:bg-primary motion-reduce:transition-none"
	/>
	<span
		class="{$$props.active
			? 'text-primary font-black'
			: 'text-dark'} transition-all nav-text text-xs font-bold uppercase tracking-widest group-hover:text-primary group-focus-visible:text-primary"
	>
		{$$props.text}
	</span>
</a>
