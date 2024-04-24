<script>
	import { skills } from '$lib/data.js';

	let skill = skills.find((item) => item.key === $$props.value) || { link: '#', text: 'Error' };
</script>

<a href={skill.link} target="blank" class="font-semibold">
	{skill.text}
</a>
