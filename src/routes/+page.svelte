<script>
	import resolveConfig from 'tailwindcss/resolveConfig';
	import tailwindConfig from '../../tailwind.config.js';

	// components
	import Header from '../lib/components/Header.svelte';
	import Job from '../lib/components/Job.svelte';
	// data
	import { work, projects } from '../lib/data/data';
	// static assets
	import resume from '$lib/assets/Scott-Buchanan.pdf';
	import { onMount } from 'svelte';

	// Define variables for the URLs of each technology
	const fullConfig = resolveConfig(tailwindConfig);
	const jsUrl = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
	const vueUrl = 'https://vuejs.org/';
	const reactUrl = 'https://reactjs.org/';
	const sveleUrl = 'https://svelte.dev/';
	const cssUrl = 'https://developer.mozilla.org/en-US/docs/Web/CSS';
	const scssUrl = 'https://sass-lang.com/';
	const currentYear = new Date().getFullYear();
	const experienceYears = currentYear - 2008;
	const sections = {
		about: null,
		experience: null,
		projects: null
	};
	let radialPointer;

	// mouse pointer gradient
	function changePointerLocation(e) {
		const x = e.pageX;
		const y = e.pageY;
		if (
			!(
				'ontouchstart' in window ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0
			) &&
			`${window.innerWidth}` >= fullConfig.theme.screens.lg
		) {
			radialPointer.style = `background: radial-gradient(600px at ${x}px ${y}px, ${fullConfig.theme.colors.primary}, transparent 80%); opacity: 0.1`;
		} else {
			radialPointer.style = '';
		}
	}

	// onMount(() => {
	// });
</script>

<svelte:window on:mousemove={changePointerLocation} on:mousewheel={changePointerLocation} />

<div class="flex leading-relaxed antialiased font-thin text-dark">
	<!-- pointer hover thing? -->
	<div
		bind:this={radialPointer}
		role="none"
		class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
		style="background: radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%);"
	/>

	<!-- skip to main content -->
	<a
		href="#content"
		class="absolute text-center left-[50%] top-5 block -translate-y-40 -translate-x-[50%] rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest focus-visible:translate-y-0"
		>Skip to Content</a
	>

	<div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
		<div class="lg:flex lg:justify-between lg:gap-4">
			<Header
				{sections}
				class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
			/>
			<main id="content" class="pt-24 lg:w-1/2 lg:py-24">
				<section
					bind:this={sections.about}
					id="about"
					class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
					aria-label="About me"
				>
					<div
						class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
					>
						<h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">About</h2>
					</div>

					<p class="pb-3">
						With over {experienceYears} years of experience,
						<a
							href={jsUrl}
							target="blank"
							class="font-semibold hover:text-primary focus:text-primary">JavaScript</a
						>
						has been my playground for a while now. Whether coding in vanilla JS, creating efficient,
						reusable components in
						<a
							href={vueUrl}
							target="blank"
							class="font-semibold hover:text-primary focus:text-primary">Vue.js</a
						>,
						<a
							href={sveleUrl}
							target="blank"
							class="font-semibold hover:text-primary focus:text-primary">Svelte</a
						>, and
						<a
							href={reactUrl}
							target="blank"
							class="font-semibold hover:text-primary focus:text-primary">React</a
						> using the latest JavaScript features and functions, or staying up to date with the latest
						innovations, I'm constantly honing my skills and learning new things.
					</p>

					<p class="pb-3">
						Alongside my love for unraveling complex logic puzzles in JS, I have an equal passion
						for perfecting pixel-perfect designs. <a
							href={cssUrl}
							target="blank"
							class="font-semibold hover:text-primary focus:text-primary">CSS</a
						>
						and
						<a
							href={scssUrl}
							target="blank"
							class="font-semibold hover:text-primary focus:text-primary">SCSS</a
						>
						captivate me with their ability to transform concepts into visually stunning realities. There's
						a unique satisfaction in sculpting interfaces and seeing ideas come to life with every line
						of code.
					</p>

					<p class="pb-3">
						When I'm not coding, I'm either running around after members of my growing family,
						cooking up a storm in the kitchen, or if it's summertime you can find me at the
						campground.
					</p>
				</section>
				<section
					bind:this={sections.experience}
					id="experience"
					class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
					aria-label="Work experience"
				>
					<div
						class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/50 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
					>
						<h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">Experience</h2>
					</div>
					<div>
						<ol class="group/list">
							{#each work as job}
								<Job {job} />
							{/each}
						</ol>
						<div class="mt-12">
							<a
								class="inline-flex items-center leading-tight font-semibold group"
								aria-label="View Full Résumé"
								href={resume}
								target="blank"
								><span
									><span
										class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
										>View Full
									</span><span class="whitespace-nowrap"
										><span
											class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
											>Résumé</span
										>
										<iconify-icon
											icon="material-symbols:arrow-right-alt-rounded"
											width="1.4em"
											height="1.4em"
											class="inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
											aria-hidden="true"
										/>
									</span></span
								></a
							>
						</div>
					</div>
				</section>
				<section
					bind:this={sections.projects}
					id="projects"
					class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
					aria-label="Selected projects"
				>
					<div
						class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
					>
						<h2 class="text-sm font-bold uppercase tracking-widest lg:sr-only">Projects</h2>
					</div>
					<div>
						<ul class="group/list">
							<li class="mb-12">
								<div
									class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
								>
									<div
										class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
									/>
									<div class="z-10 sm:order-2 sm:col-span-6">
										<h3>
											<a
												class="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
												href="https://www.newline.co/courses/build-a-spotify-connected-app"
												target="_blank"
												rel="noreferrer"
												aria-label="Build a Spotify Connected App"
												><span
													class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
												/><span
													>Build a Spotify Connected
													<span class="inline-block"
														>App<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
															aria-hidden="true"
															><path
																fill-rule="evenodd"
																d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																clip-rule="evenodd"
															/></svg
														></span
													></span
												></a
											>
										</h3>
										<p class="mt-2 text-sm leading-normal">
											Video course that teaches how to build a web app with the Spotify Web API.
											Topics covered include the principles of REST APIs, user auth flows, Node,
											Express, React, Styled Components, and more.
										</p>
									</div>
									<img
										alt=""
										loading="lazy"
										width="200"
										height="48"
										decoding="async"
										data-nimg="1"
										class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
										style="color:transparent"
										srcset="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x"
										src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75"
									/>
								</div>
							</li>
							<li class="mb-12">
								<div
									class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
								>
									<div
										class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
									/>
									<div class="z-10 sm:order-2 sm:col-span-6">
										<h3>
											<a
												class="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
												href="https://spotify-profile.herokuapp.com/"
												target="_blank"
												rel="noreferrer"
												aria-label="Spotify Profile"
												><span
													class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
												/><span
													>Spotify
													<span class="inline-block"
														>Profile<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
															aria-hidden="true"
															><path
																fill-rule="evenodd"
																d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																clip-rule="evenodd"
															/></svg
														></span
													></span
												></a
											>
										</h3>
										<p class="mt-2 text-sm leading-normal">
											Web app for visualizing personalized Spotify data. View your top artists, top
											tracks, recently played tracks, and detailed audio information about each
											track. Create and save new playlists of recommended tracks based on your
											existing playlists and more.
										</p>
										<a
											class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
											href="https://github.com/bchiang7/spotify-profile"
											target="_blank"
											rel="noreferrer"
											aria-label="568 stars on GitHub"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												class="mr-1 h-3 w-3"
												aria-hidden="true"
												><path
													fill-rule="evenodd"
													d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
													clip-rule="evenodd"
												/></svg
											><span>568</span></a
										>
										<ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
											<li class="mr-1.5 mt-2">
												<div
													class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
												>
													React
												</div>
											</li>
											<li class="mr-1.5 mt-2">
												<div
													class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
												>
													Express
												</div>
											</li>
											<li class="mr-1.5 mt-2">
												<div
													class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
												>
													Spotify API
												</div>
											</li>
											<li class="mr-1.5 mt-2">
												<div
													class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
												>
													Heroku
												</div>
											</li>
										</ul>
									</div>
									<img
										alt=""
										loading="lazy"
										width="200"
										height="48"
										decoding="async"
										data-nimg="1"
										class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
										style="color:transparent"
										srcset="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75 2x"
										src="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75"
									/>
								</div>
							</li>
							<li class="mb-12">
								<div
									class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
								>
									<div
										class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
									/>
									<div class="z-10 sm:order-2 sm:col-span-6">
										<h3>
											<a
												class="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
												href="https://halcyon-theme.netlify.app/"
												target="_blank"
												rel="noreferrer"
												aria-label="Halcyon Theme"
												><span
													class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
												/><span
													>Halcyon
													<span class="inline-block"
														>Theme<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
															aria-hidden="true"
															><path
																fill-rule="evenodd"
																d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																clip-rule="evenodd"
															/></svg
														></span
													></span
												></a
											>
										</h3>
										<p class="mt-2 text-sm leading-normal">
											Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.
										</p>
										<a
											class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
											href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
											target="_blank"
											rel="noreferrer"
											aria-label="Over 100,000 installs on Visual Studio Code Marketplace"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												class="mr-1 h-4 w-4"
												aria-hidden="true"
												><path
													d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"
												/><path
													d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
												/></svg
											><span>100k+ Installs</span></a
										>
									</div>
									<img
										alt=""
										loading="lazy"
										width="200"
										height="48"
										decoding="async"
										data-nimg="1"
										class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
										style="color:transparent"
										srcset="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75 2x"
										src="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75"
									/>
								</div>
							</li>
							<li class="mb-12">
								<div
									class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
								>
									<div
										class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
									/>
									<div class="z-10 sm:order-2 sm:col-span-6">
										<h3>
											<a
												class="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
												href="https://v4.brittanychiang.com/"
												target="_blank"
												rel="noreferrer"
												aria-label="brittanychiang.com (v4)"
												><span
													class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
												/><span
													>brittanychiang.com
													<span class="inline-block"
														>(v4)<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 0 20 20"
															fill="currentColor"
															class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
															aria-hidden="true"
															><path
																fill-rule="evenodd"
																d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																clip-rule="evenodd"
															/></svg
														></span
													></span
												></a
											>
										</h3>
										<p class="mt-2 text-sm leading-normal">
											An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks
										</p>
										<a
											class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
											href="https://github.com/bchiang7/v4"
											target="_blank"
											rel="noreferrer"
											aria-label="6578 stars on GitHub"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												class="mr-1 h-3 w-3"
												aria-hidden="true"
												><path
													fill-rule="evenodd"
													d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
													clip-rule="evenodd"
												/></svg
											><span>6,578</span></a
										>
										<ul class="mt-2 flex flex-wrap" aria-label="Technologies used:">
											<li class="mr-1.5 mt-2">
												<div
													class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
												>
													Gatsby
												</div>
											</li>
											<li class="mr-1.5 mt-2">
												<div
													class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
												>
													Styled Components
												</div>
											</li>
											<li class="mr-1.5 mt-2">
												<div
													class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
												>
													Netlify
												</div>
											</li>
										</ul>
									</div>
									<img
										alt=""
										loading="lazy"
										width="200"
										height="48"
										decoding="async"
										data-nimg="1"
										class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
										style="color:transparent"
										srcset="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x"
										src="/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75"
									/>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
					<p>© {currentYear} Scott Buchanan</p>
				</footer>
			</main>
		</div>
	</div>
</div>
