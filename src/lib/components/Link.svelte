<script>
	import { skills } from '$lib/data.js';

	let skill = skills.find((item) => item.key === $$props.value) || { link: '#', text: 'Error' };
</script>

<a href={skill.link} target="_blank" class="font-medium text-slate-900 dark:text-slate-200">
	{skill.text}
</a>
