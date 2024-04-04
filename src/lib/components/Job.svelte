<script>
	import 'iconify-icon';

	export let job;
</script>

<li class="mb-12">
	<div
		class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
	>
		<div
			class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
		/>
		<header
			class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2"
			aria-label={`${job.dates.from} to ${job.dates.to}`}
		>
			{job.dates.from} — {job.dates.to}
		</header>
		<div class="z-10 sm:col-span-6">
			<h3 class="font-medium leading-snug">
				<div>
					<a
						class="hover:text-secondary items-baseline font-medium leading-tight group/link text-base"
						href={job.companySite}
						target="_blank"
						rel="noreferrer"
						aria-label={job.title}
					>
						<span
							class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
						/>
						<span
							>{job.title} ·
							<span class="inline-block"
								>{job.company}<iconify-icon
									icon="eva:diagonal-arrow-right-up-fill"
									width="1.2em"
									height="1.2em"
									class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
									aria-hidden="true"
								/>
							</span>
						</span>
					</a>
				</div>
			</h3>
			<p class="mt-2 text-sm leading-normal">
				{job.description}
			</p>
			<ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
				{#each job.skills as skill}
					<li class="mr-1.5 mt-2">
						<a
							href={skill.link}
							target="blank"
							class="flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium leading-5 text-secondary border-secondary border-solid border"
						>
							{skill.text}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</li>
