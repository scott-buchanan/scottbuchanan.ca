<script>
	import { fade, fly } from 'svelte/transition';

	export let info;

	let shortList = true;
	let skillsList = info.skills.slice(0, 3);
	let animate = false;
	let animateClass = 'animate-none';

	function toggleList() {
		shortList = !shortList;
		skillsList = shortList ? info.skills.slice(0, 3) : info.skills;
		animateClass = shortList ? 'animate-arrow-in' : 'animate-arrow-out';
		// set animate to true to enable animation on button click and set the appropriate animation class
		animate = true;
	}
</script>

<li class="mb-12">
	<div
		class="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
	>
		<div
			class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-900/5 dark:lg:group-hover:bg-white/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
		/>

		{#if info.image}
			<img
				alt={`Small screenshot of ${info.title}`}
				loading="lazy"
				width="200"
				height="48"
				decoding="async"
				class="rounded border-2 border-slate-900/10 dark:border-slate-200/10 transition group-hover:border-slate-900/30 dark:group-hover:border-slate-200/30 order-3 sm:order-1 sm:col-span-2 sm:translate-y-1 mt-5 sm:mt-0"
				style="color:transparent"
				src={info.image}
			/>
		{:else}
			<header
				class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide sm:col-span-2 transition-colors"
				aria-label={`${info.dates.from} to ${info.dates.to}`}
			>
				{info.dates.from} — {info.dates.to}
			</header>
		{/if}

		<div class="z-10 sm:col-span-6 sm:order-2">
			<div class="group/card-link">
				<a
					href={info.website}
					target="_blank"
					rel="noreferrer"
					aria-label={info.title}
					class="group/card-a"
				>
					<h3
						class="text-slate-900 dark:text-slate-200 group-focus-visible/card-a:transition-none group-focus-visible/card-a:text-light-secondary dark:group-focus-visible/card-a:text-dark-secondary transition-colors group-hover/card-link:text-light-secondary dark:group-hover/card-link:text-dark-secondary font-medium leading-tight"
					>
						<span
							class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
						/>

						{info.title}

						<!-- keeps the dot on first line if text wraps -->
						{#if info.company}
							<span> · </span>
						{/if}

						<span class="inline-block">
							{#if info.company}
								{info.company}
							{/if}
							<iconify-icon
								icon="eva:diagonal-arrow-right-up-fill"
								width="1.2em"
								height="1.2em"
								class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/card-link:-translate-y-1 group-hover/card-link:translate-x-1 group-focus-visible/card-link:-translate-y-1 group-focus-visible/card-link:translate-x-1 motion-reduce:transition-none translate-y-px"
								aria-hidden="true"
							/>
						</span>
					</h3>
				</a>
				{#if Array.isArray(info.description)}
					{#each info.description as paragraph}
						<p class="mt-2 text-sm leading-normal">
							{paragraph}
						</p>
					{/each}
				{:else}
					<p class="mt-2 text-sm leading-normal">
						{info.description}
					</p>
				{/if}
			</div>
			<ul class="mt-2 list-none inline-flex flex-wrap" aria-label="Technologies used">
				{#each skillsList as skill, index}
					<li
						class="mr-1.5 mt-1"
						in:fly={index > 2
							? { delay: (index - 2) * 50, duration: 500, x: -10 }
							: { duration: 0 }}
						out:fade={{ duration: 100 }}
					>
						<div
							class={'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-light-secondary dark:text-dark-secondary transition-colors bg-light-secondary/15 dark:bg-dark-secondary/15'}
						>
							{skill.text}
						</div>
					</li>
				{/each}
				{#if info.skills.length > 3}
					<li class="mt-1">
						<button
							on:click={() => toggleList()}
							aria-label={shortList ? 'Expand list' : 'Contract list'}
						>
							<iconify-icon
								icon="ri:arrow-down-wide-line"
								width="2em"
								height="2em"
								class={[
									'px-1 py-1 text-xs text-light-secondary dark:text-dark-secondary motion-reduce:transition-none transition-all',
									shortList
										? 'rotate-0 hover:translate-y-1 focus:translate-y-1'
										: `rotate-180 hover:-translate-y-1 focus:-translate-y-1`,
									animateClass
								].join(' ')}
								style={`--duration: ${skillsList.length * 50 + 300}ms`}
								aria-hidden="true"
							/>
						</button>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</li>
